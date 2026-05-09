import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { TypingEffect } from "@/components/TypingEffect";
import { useState, useEffect, useRef } from "react";

import { askPortfolio } from "@/ai/askPortfolio";

import {
  sprinkleEmojis,
  categoryEmoji,
} from "@/ai/formatter";

import {
  aboutMe,
  aiProjects,
} from "@/data/portfolioData";

/* ---------------------------------------------------
   DEVICON MAP
--------------------------------------------------- */

function techToDeviconClass(raw: string) {
  const t = raw.trim().toLowerCase();

  const map: Record<string, string> = {
    html: "devicon-html5-plain",
    html5: "devicon-html5-plain",

    css: "devicon-css3-plain",
    css3: "devicon-css3-plain",

    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",

    typescript: "devicon-typescript-plain",

    react: "devicon-react-original",

    tailwind: "devicon-tailwindcss-plain",
    "tailwind css": "devicon-tailwindcss-plain",

    python: "devicon-python-plain",

    numpy: "devicon-numpy-original",

    pytorch: "devicon-pytorch-original",

    c: "devicon-c-plain",

    "c++": "devicon-cplusplus-plain",

    java: "devicon-java-plain",

    mysql: "devicon-mysql-plain",

    git: "devicon-git-plain",

    github: "devicon-github-original",

    vite: "devicon-vitejs-plain",

    vercel: "devicon-vercel-original",

    flutter: "devicon-flutter-plain",

    fastapi: "devicon-fastapi-plain",

    postgresql: "devicon-postgresql-plain",
  };

  return map[t] || "";
}

/* ---------------------------------------------------
   TYPES
--------------------------------------------------- */

type Project = {
  title: string;
  description: string;
  tech: string[];
}

type Msg = {
  role: "user" | "assistant";
  content: string;
  category?: string;
  followUp?: string;
  suggestions?: string[];
  projectCard?: {
    title: string;
    description: string;
    tech: string[];
  };
};

/* ---------------------------------------------------
   UI HELPERS
--------------------------------------------------- */

function Pill({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-3
        py-1
        rounded-full
        text-sm
        bg-indigo-600
        text-white
        hover:bg-indigo-500
        hover:scale-105
        transition-all
      "
    >
      {children}
    </button>
  );
}

function SectionCard({
  title,
  emoji,
  children,
}: {
  title: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white/70 dark:bg-zinc-900/60 shadow-sm p-4">
      <div className="mb-3 font-semibold flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <span>{title}</span>
      </div>

      {children}
    </div>
  );
}

function TechPill({
  name,
}: {
  name: string;
}) {
  const cls = techToDeviconClass(name);

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200 text-sm">
      {cls ? (
        <i className={`${cls} colored text-base`} />
      ) : (
        <span>🔹</span>
      )}

      <span>{name}</span>
    </span>
  );
}

/* ---------------------------------------------------
   COMPONENT
--------------------------------------------------- */

export default function ChatMe() {
  const navigate = useNavigate();

  const location = useLocation() as {
    state?: {
      query?: string;
    };
  };

  const [showContent, setShowContent] =
    useState(false);

  const [projectIndex, setProjectIndex] =
    useState(0);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [inputValue, setInputValue] =
    useState("");

  const [messages, setMessages] = useState<
    Msg[]
  >([]);

  const [loading, setLoading] =
    useState(false);

  const [typingIndex, setTypingIndex] =
    useState<number | null>(null);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  const fallbackMessage =
    "Sorry 😅 I don’t know about that yet.";

  const visitorProfile =
    JSON.parse(
      localStorage.getItem(
        "visitor-profile"
      ) || "null"
    );

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "☀️ Good morning"
      : hour < 18
        ? "🌤️ Good afternoon"
        : "🌙 Good evening";

  const introText = (() => {
    if (!visitorProfile) {
      return `👋 Welcome to Mohammad.AI 🚀`;
    }

    const {
      name,
      gender,
      profession,
      interactionMode,
    } = visitorProfile;

    // FEMALE + FRIEND
    if (
      gender === "female" &&
      interactionMode === "friend"
    ) {
      return `${greeting}, ${name} 🌸

Mohammad.AI hopes you're having a beautiful day ✨

Ask anything about coding, dreams, AI, projects, or journey 🚀`;
    }

    // MALE + FRIEND
    if (
      gender === "male" &&
      interactionMode === "friend"
    ) {
      return `${greeting}, ${name} 🤝

Ready for another awesome conversation today? 🚀`;
    }

    // RECRUITER / HR
    if (
      profession === "recruiter" ||
      profession === "hr"
    ) {
      return `💼 ${greeting}, ${name}

Welcome to Mohammad.AI portfolio experience ✨

Feel free to explore projects, skills, and AI work.`;
    }

    // TEACHER
    if (
      profession === "teacher"
    ) {
      return `🌟 ${greeting}, ${name}

Mohammad.AI is ready to assist you professionally today.`;
    }

    // DEVELOPER
    if (
      profession === "developer"
    ) {
      return `👨‍💻 ${greeting}, ${name}

Developer-to-developer conversation mode activated ⚡`;
    }

    // DEFAULT
    return `${greeting}, ${name} 👋

Welcome to Mohammad.AI 🚀`;
  })();



  /* ---------------------------------------------------
     AUTO SCROLL
  --------------------------------------------------- */

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, typingIndex]);

  /* ---------------------------------------------------
     TYPING EFFECT
  --------------------------------------------------- */

  function typeIntoMessage(
    idx: number,
    full: string,
    speed = 16
  ) {
    setTypingIndex(idx);

    const txt = sprinkleEmojis(full || "");

    let i = 0;

    const step = () => {
      i += 1;

      setMessages((prev) => {
        const arr = [...prev];

        const current = arr[idx];

        if (!current) return prev;

        arr[idx] = {
          ...current,
          content: txt.slice(0, i) + (
            i < txt.length
              ? "▋"
              : ""
          ),
        };

        return arr;
      });

      if (i < txt.length) {
        window.setTimeout(step, speed);
      } else {
        setTypingIndex(null);
      }
    };

    step();
  }

  /* ---------------------------------------------------
     SEND MESSAGE
  --------------------------------------------------- */

  const send = (forced?: string) => {

    const text = (
      forced ?? inputValue
    ).trim();

    if (!text || loading) return;

    setInputValue("");

    /* USER MESSAGE */
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);

    /* START LOADING */
    setLoading(true);

    setTimeout(() => {

      try {

        const result =
          askPortfolio(text);

        console.log("AI RESULT:", result);

        const assistantMessage = {
          role: "assistant" as const,
          content: "",
          category:
            result?.category || "other",

          followUp:
            result?.followUp || "",

          suggestions:
            result?.suggestions || [],
        };

        setMessages((prev) => {

          const updated = [
            ...prev,
            assistantMessage,
          ];

          const assistantIndex =
            updated.length - 1;

          setTimeout(() => {

            typeIntoMessage(
              assistantIndex,
              result?.answer ||
              "😄 No response generated.",
              14
            );

          }, 100);

          return updated;
        });

      } catch (err) {

        console.error(
          "CHAT ERROR:",
          err
        );

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "❌ AI crashed while generating response.",
          },
        ]);

      } finally {

        setLoading(false);

      }

    }, 1200);
  };

  /* ---------------------------------------------------
     AUTO SEND FROM HOME
  --------------------------------------------------- */

  useEffect(() => {
    const q = location.state?.query;

    if (q) {
      setShowContent(true);

      setTimeout(() => send(q), 60);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------------------------------------------------
     RENDER AI RESPONSE
  --------------------------------------------------- */

  function renderAssistant(
    msg: Msg,
    i: number
  ) {
    const emoji = categoryEmoji(
      msg.category
    );

    const text = msg.content;

    /* skills */
    if (msg.category === "skills") {
      const skills = text
        .split(/[;,•|]/)
        .map((s) => s.trim())
        .filter(Boolean);

      return (
        <SectionCard
          key={i}
          title="Skills"
          emoji={emoji}
        >
          <div className="flex flex-wrap gap-2">
            {skills.map((s, idx) => (
              <TechPill
                key={idx}
                name={s}
              />
            ))}
          </div>
        </SectionCard>
      );
    }

    /* education */
    if (msg.category === "education") {
      const lines = text
        .split("\n")
        .filter(Boolean);

      return (
        <SectionCard
          key={i}
          title="Education"
          emoji={emoji}
        >
          <div className="relative pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            <ul className="space-y-3">
              {(lines.length
                ? lines
                : [text]
              ).map((l, idx) => (
                <li
                  key={idx}
                  className="relative"
                >
                  <span className="absolute -left-[9px] mt-1 h-2 w-2 rounded-full bg-indigo-500" />

                  <span className="ml-2">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>
      );
    }

    /* projects */
    if (
      msg.category === "projects" &&
      msg.projectCard
    ) {
      const p = msg.projectCard;

      return (
        <SectionCard
          key={i}
          title={p.title}
          emoji="🚀"
        >
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map(
                (t, idx) => (
                  <TechPill
                    key={idx}
                    name={t}
                  />
                )
              )}
            </div>

            <div className="border-t border-border pt-3" />

            {msg.followUp && (
              <div className="text-sm text-indigo-500 font-medium pt-2">
                {msg.followUp}
              </div>
            )}
          </div>
        </SectionCard>
      );
    }

    /* contact */
    if (msg.category === "contact") {
      const withLinks = text.replace(
        /(https?:\/\/[^\s]+|github\.com\/[^\s]+)/gi,
        (m) =>
          `< a class="underline" href = "${m.startsWith("http")
            ? m
            : "https://" + m
          } " target="_blank" rel="noreferrer">${m}</a>`
      );

      return (
        <SectionCard
          key={i}
          title="Contact"
          emoji={emoji}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: withLinks,
            }}
          />
        </SectionCard>
      );
    }

    /* fallback */
    if (
      text.includes("don’t know") ||
      text.includes("don't know") ||
      text.includes("mujhe")
    ) {
      return (
        <SectionCard
          key={i}
          title="I don’t know this one"
          emoji="🤝"
        >
          <p>{fallbackMessage}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Pill onClick={() => send("about")}>
              About
            </Pill>

            <Pill onClick={() => send("family")}>
              Family
            </Pill>

            <Pill onClick={() => send("education")}>
              Education
            </Pill>

            <Pill onClick={() => send("skills")}>
              Skills
            </Pill>

            <Pill onClick={() => send("projects")}>
              Projects
            </Pill>

            <Pill onClick={() => send("contact")}>
              Contact
            </Pill>
          </div>
        </SectionCard>
      );
    }

    /* default bubble */
    return (
      <div
        key={i}
        className="text-left space-y-2"
      >
        <div
          className="
    inline-block
    max-w-[90%]
    px-5
    py-4
    rounded-[22px]
    bg-white
    dark:bg-zinc-900
    border
    border-border
    shadow-sm
    text-sm
    md:text-base
    leading-relaxed
  "
        >
          {text}
        </div>



        {msg.followUp && (
          <div className="ml-2 text-sm text-indigo-500 font-medium">
            {msg.followUp}
          </div>
        )}



        {msg.suggestions &&
          msg.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {msg.suggestions.map(
                (suggestion, idx) => (
                  <Pill
                    key={idx}
                    onClick={() =>
                      send(suggestion)
                    }
                  >
                    {suggestion}
                  </Pill>
                )
              )}
            </div>
          )}
      </div>
    );
  }

  const isEmpty =
    messages.length === 0 &&
    !loading &&
    typingIndex === null;

  /* ---------------------------------------------------
     UI
  --------------------------------------------------- */

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() =>
              navigate("/")
            }
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-lg font-semibold">
            About Me
          </h1>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

            <span className="text-sm text-muted-foreground">
              AI Active
            </span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8 space-y-6">

        {/* INTRO CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
    relative
    overflow-hidden
    rounded-[36px]
    border
    border-border
    bg-white/70
    dark:bg-zinc-900/70
    backdrop-blur-2xl
    p-8
    shadow-2xl
  "
        >
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-medium">
              🤖 Mohammad.AI Assistant
            </div>

            {/* Heading */}
            <div className="space-y-3">

              <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight whitespace-pre-line">
                {introText}
              </h1>

            </div>

            {/* Quick Buttons */}
            <div className="flex flex-wrap gap-3">

              <Pill onClick={() => send("about")}>
                👨‍💻 About
              </Pill>

              <Pill onClick={() => send("projects")}>
                🚀 Projects
              </Pill>

              <Pill onClick={() => send("skills")}>
                🧠 Skills
              </Pill>

              <Pill onClick={() => send("dream")}>
                🌍 Dreams
              </Pill>

              <Pill onClick={() => send("family")}>
                👨‍👩‍👦 Family
              </Pill>

              <Pill onClick={() => send("contact")}>
                📩 Contact
              </Pill>

            </div>

          </div>
        </motion.div>
        {/* CHAT */}
        {!isEmpty && (
          <div
            ref={scrollRef}
            className="
      bg-white/70
      dark:bg-zinc-900/70
      backdrop-blur-xl
      border
      border-border
      rounded-[32px]
      p-6
      shadow-2xl
      overflow-y-auto
      transition-all
      scrollbar-thin
      scrollbar-thumb-zinc-400
      dark:scrollbar-thumb-zinc-700
      scrollbar-track-transparent
      max-h-[65vh]
      min-h-[420px]
    "
          >

            {messages.map((m, i) =>
              m.role === "user" ? (
                <div
                  key={i}
                  className="mb-3 text-right"
                >
                  <div
                    className="
              inline-block
              max-w-[85%]
              px-5
              py-3
              rounded-[22px]
              bg-gradient-to-r
              from-indigo-600
              to-blue-600
              text-white
              shadow-lg
              text-sm
              md:text-base
              font-medium
            "
                  >
                    {m.content}
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className="mb-3"
                >
                  {renderAssistant(m, i)}
                </div>
              )
            )}

            {/* AI SHIMMER LOADING */}
            {loading && (
              <div className="mb-4">
                <div
                  className="
            inline-block
            w-full
            max-w-[92%]
            rounded-[28px]
            border
            border-border
            bg-white
            dark:bg-zinc-900
            p-5
            shadow-sm
          "
                >

                  {/* Thinking Text */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-indigo-500">
                      ✨ Mohammad.AI is thinking...
                    </p>
                  </div>

                  {/* Shimmer Lines */}
                  <div className="space-y-3">

                    <div className="ai-shimmer h-4 w-[92%] rounded-full" />

                    <div className="ai-shimmer h-4 w-[75%] rounded-full" />

                    <div className="ai-shimmer h-4 w-[58%] rounded-full" />

                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* INPUT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="sticky bottom-2"
        >
          <div
            className="
    bg-white/80
    dark:bg-zinc-900/80
    backdrop-blur-2xl
    border
    border-border
    rounded-[28px]
    p-4
    shadow-2xl
    focus-within:outline-none
    focus-within:ring-0
    focus-within:border-border
  "
          >
            <div className="flex items-center gap-3">

              <input
                type="text"
                value={inputValue}
                onChange={(e) =>
                  setInputValue(
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask Mohammad.AI..."
                className="
    flex-1
    bg-transparent
    border-none
    outline-none
    focus:outline-none
    focus:ring-0
    focus:border-none
    focus-visible:outline-none
    focus-visible:ring-0
    text-foreground
    placeholder:text-muted-foreground
    text-sm
    md:text-base
    px-2
"
              />

              <button
                onClick={() => send()}
                disabled={
                  !inputValue.trim() ||
                  loading
                }
                className="
            p-3
            bg-gradient-to-r
            from-indigo-600
            to-blue-600
            text-white
            rounded-full
            hover:scale-110
            transition-all
            shadow-lg
          "
              >
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}