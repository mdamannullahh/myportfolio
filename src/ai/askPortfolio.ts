import { knowledge, QAPair } from "@/data/aiKnowledge";
import { VisitorProfile } from "@/types/user";

import {
    detectLanguage,
    localizeFallback,
    localizeFollowUp,
} from "@/ai/language";

import {
    personalizeReply,
    sprinkleEmojis,
    styleLanguageReply,
} from "@/ai/formatter";

import {
    applyPersonality,
} from "@/ai/personality";

import {
    saveMemory,
    getMemory,
} from "@/ai/memory";

import {
    detectIntent,
} from "@/ai/intents";

import {
    getVariation,
} from "@/ai/variations";

/* ---------------------------------------------------
   NORMALIZE
--------------------------------------------------- */

function normalize(text: string) {
    return text
        .toLowerCase()
        .replace(
            /[^a-z0-9\s\u0900-\u097F\u0B80-\u0BFF]/g,
            " "
        )
        .replace(/\s+/g, " ")
        .trim();
}

/* ---------------------------------------------------
   TOKENIZER
--------------------------------------------------- */

function tokens(text: string) {
    const stopWords = [
        "what",
        "is",
        "are",
        "you",
        "your",
        "tell",
        "me",
        "about",
        "the",
        "a",
        "an",
        "do",
        "does",
        "did",
        "where",
        "when",
        "who",
        "how",
        "can",
        "i",
        "please",
        "bro",
        "bhai",
    ];

    const baseTokens =
        normalize(text)
            .split(/\s+/)
            .filter(Boolean)
            .filter(
                (word) =>
                    !stopWords.includes(word)
            );

    const expanded =
        [...baseTokens];

    for (const token of baseTokens) {
        for (const [
            key,
            values,
        ] of Object.entries(
            semanticMap
        )) {
            if (
                token === key ||
                values.includes(token)
            ) {
                expanded.push(key);
                expanded.push(
                    ...values
                );
            }
        }
    }

    return [
        ...new Set(expanded),
    ];
}

/* ---------------------------------------------------
   TYPO TOLERANCE
--------------------------------------------------- */

function similarity(a: string, b: string) {

    a = a.toLowerCase().trim();
    b = b.toLowerCase().trim();

    // EXACT MATCH
    if (a === b) return 1;

    // WORD MATCH
    if (
        a.includes(b) ||
        b.includes(a)
    ) {
        return 0.9;
    }

    // TYPO TOLERANCE
    let same = 0;

    const minLength =
        Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++) {

        if (a[i] === b[i]) {
            same++;
        }

    }

    return same / Math.max(a.length, b.length);
}

/* ---------------------------------------------------
   SCORING ENGINE
--------------------------------------------------- */

function score(
    userQ: string,
    item: QAPair
) {
    const userTokens = tokens(userQ);

    let total = 0;

    /* TAG MATCHING */
    if (item.tags) {
        for (const tag of item.tags) {
            for (const token of userTokens) {
                const sim = similarity(
                    token,
                    tag.toLowerCase()
                );

                if (sim > 0.95) {
                    total += 30;
                } else if (sim > 0.85) {
                    total += 15;
                } else if (sim > 0.7) {
                    total += 7;
                }
            }
        }
    }

    /* QUESTION MATCHING */
    const questionTokens = tokens(item.q);

    for (const token of userTokens) {

        for (const qToken of questionTokens) {

            const sim = similarity(
                token,
                qToken
            );

            // EXACT WORD
            if (token === qToken) {

                total += 15;

            }

            // VERY CLOSE TYPO
            else if (
                sim >= 0.9 &&
                token.length > 3 &&
                qToken.length > 3
            ) {

                total += 6;

            }

        }

    }


    return total;
}

/* ---------------------------------------------------
   GET VISITOR PROFILE
--------------------------------------------------- */

function getVisitorProfile() {
    try {
        const raw =
            localStorage.getItem(
                "visitor-profile"
            );

        if (!raw) return null;

        return JSON.parse(
            raw
        ) as VisitorProfile;
    } catch {
        return null;
    }
}

/* ---------------------------------------------------
   MEMORY CONTEXT
--------------------------------------------------- */

let lastCategory = "";
const relatedSuggestions: Record<
    string,
    string[]
> = {
    projects: [
        "Tech Stack",
        "Future Vision",
        "More Projects",
        "Features",
    ],

    career: [
        "Coding Journey",
        "Dream Company",
        "Future Goals",
        "Biggest Achievement",
    ],

    personal: [
        "Family",
        "Motivation",
        "Personality",
        "Daily Life",
    ],

    about: [
        "Where are you from",
        "Languages",
        "Education",
        "Coding Journey",
    ],

    skills: [
        "Favorite Technology",
        "Frontend",
        "Backend",
        "Databases",
    ],

    relationship: [
        "Love",
        "Personality",
        "Emotional Side",
        "Future Partner",
        "Wife",
        "Crush",
    ],

    education: [
        "College",
        "School",
        "Academic",
        "AI & ML",
        "Coding Journey",
        "Future Plans",
    ],

    fun: [
        "Favorite Food",
        "Favorite Movie",
        "Hobbies",
        "Lifestyle",
    ],
};

const semanticMap: Record<
    string,
    string[]
> = {
    coding: [
        "programming",
        "developer",
        "software",
        "web development",
        "tech",
    ],

    project: [
        "application",
        "app",
        "platform",
        "system",
        "startup",
    ],

    family: [
        "parents",
        "father",
        "mother",
        "siblings",
        "home",
    ],

    dream: [
        "goal",
        "vision",
        "future",
        "ambition",
    ],

    education: [
        "college",
        "study",
        "degree",
        "engineering",
    ],

    ai: [
        "artificial intelligence",
        "machine learning",
        "ml",
        "automation",
    ],

    relationship: [
        "love",
        "partner",
        "girlfriend",
        "emotion",
    ],
};
let lastTopic = "";

/* ---------------------------------------------------
   MAIN AI ENGINE
--------------------------------------------------- */

export function askPortfolio(q: string) {
    const text = normalize(q);

    const language =
        detectLanguage(q);

    const visitor =
        getVisitorProfile();

    const memory = getMemory();


    const intent = detectIntent(q);

    saveMemory({
        lastQuestion: q,
    });

    /* EMPTY INPUT */

    if (!text) {
        return {
            answer:
                language ===
                    "hinglish"
                    ? "😄 Kuch toh pucho bro..."
                    : language ===
                        "hindi"
                        ? "😄 कुछ तो पूछिए..."
                        : language ===
                            "tamil"
                            ? "😄 ஏதாவது கேளுங்கள்..."
                            : "😄 Ask me something...",

            category: "other",

            followUp: "",
        };
    }

    /* ---------------------------------------------------
       FOLLOW-UP DETECTION
    --------------------------------------------------- */

    const followWords = [
        "more",
        "tell more",
        "aur",
        "continue",
        "next",
        "then",
        "what else",
        "show me",
        "explain more",
        "details",
        "detail",
        "another",
    ];

    const isFollowUp =
        followWords.some((w) =>
            text.includes(w)
        );

    const continuationWords = [
        "it",
        "that",
        "this",
        "more",
        "continue",
        "next",
        "then",
    ];

    const isContinuation =
        continuationWords.some((w) =>
            text === w
        );

    let contextualQuery = text;

    if (
        isContinuation &&
        memory?.lastTopic
    ) {
        contextualQuery =
            memory.lastTopic +
            " " +
            text;
    }

    const followUpTopic =
        isFollowUp
            ? lastTopic
            : "";

    /* ---------------------------------------------------
       FIND BEST MATCH
    --------------------------------------------------- */

    let best: QAPair | null =
        null;

    let bestScore = 0;

    for (const item of knowledge) {
        const currentScore = score(
            contextualQuery,
            item
        );

        /* -----------------------------------
   INTENT BOOST
----------------------------------- */

        let boostedScore =
            currentScore;

        if (
            item.category === intent &&
            currentScore >= 10
        ) {
            boostedScore += 3;
        }

        // SMART FOLLOW-UP MEMORY

        if (
            isFollowUp &&
            followUpTopic
        ) {
            if (
                item.tags?.includes(
                    followUpTopic
                )
            ) {
                boostedScore += 15;
            }

            if (
                item.category ===
                lastCategory
            ) {
                boostedScore += 5;
            }
        }

        if (
            boostedScore > bestScore
        ) {
            best = item;
            bestScore =
                boostedScore;
        }
    }

    /* ---------------------------------------------------
       MATCH FOUND
    --------------------------------------------------- */

    if (
        best &&
        bestScore >= 5
    ) {
        lastCategory =
            best.category || "";
        lastTopic =
            best.tags?.[0] || "";

        saveMemory({
            lastTopic:
                best.tags?.[0] || "",
        });

        saveMemory({
            lastCategory:
                best.category || "",
        });

        saveMemory({
            lastAnswer:
                best.a || "",
        });

        const rawAnswer =
            best.a ??
            (best as any).answer ??
            "";

        let finalAnswer =
            typeof rawAnswer === "string"
                ? rawAnswer
                : JSON.stringify(rawAnswer);

        if (
            best.category === "projects"
        ) {
            saveMemory({
                lastProject: "MotiMate",
            });
        }

        /* personalization */
        finalAnswer =
            personalizeReply(
                finalAnswer,
                visitor
            ) || finalAnswer;

        /* personality engine */
        finalAnswer =
            applyPersonality(
                finalAnswer,
                visitor
            ) || finalAnswer;

        /* language styling */
        finalAnswer =
            styleLanguageReply(
                finalAnswer,
                language
            ) || finalAnswer;

        /* emojis */
        finalAnswer =
            sprinkleEmojis(
                finalAnswer
            ) || finalAnswer;

        finalAnswer =
            sprinkleEmojis(finalAnswer);

        /* dynamic variation */

        const variation =
            getVariation(
                best.category
            ) || "";

        if (
            typeof variation ===
            "string" &&
            variation.trim()
        ) {
            finalAnswer +=
                "\n\n" + variation;
        }

        return {
            answer: finalAnswer,

            category:
                best.category ||
                "other",

            followUp:
                localizeFollowUp(
                    best.followUp || "",
                    language
                ),

            suggestions: (
                [
                    ...(best.suggestions || []),

                    ...(relatedSuggestions[
                        best.category || ""
                    ] || []),
                ]
            )
                .filter(Boolean)
                .filter(
                    (v, i, arr) =>
                        arr.indexOf(v) === i
                )
                .slice(0, 5),
        };
    }

    /* ---------------------------------------------------
       FALLBACK
    --------------------------------------------------- */

    return {
        answer:
            localizeFallback(
                language
            ),

        category: "other",

        followUp:
            localizeFollowUp(
                "Would you like to contact Mohammad directly instead?",
                language
            ),

        suggestions: [
            "Projects",
            "Coding Journey",
            "Dreams",
            "Family",
        ],
    };
}