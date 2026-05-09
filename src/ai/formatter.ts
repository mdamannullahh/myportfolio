export function categoryEmoji(cat?: string) {
    switch ((cat || "").toLowerCase()) {
        case "skills":
            return "🧠";

        case "education":
            return "🎓";

        case "projects":
            return "🚀";

        case "contact":
            return "✉️";

        case "family":
            return "👨‍👩‍👦";

        case "about":
            return "👋";

        case "relationship":
            return "💖";

        case "career":
            return "💼";

        case "fun":
            return "😄";

        default:
            return "💡";
    }
}

/* ---------------------------------------------------
   SMART EMOJI ENGINE
--------------------------------------------------- */

export function sprinkleEmojis(text?: string) {
    if (!text) return "";

    return text

        // TECH
        .replace(/\bhtml\b/gi, "HTML 🧩")
        .replace(/\bcss\b/gi, "CSS 🎨")
        .replace(/\bjavascript\b/gi, "JavaScript ⚡")
        .replace(/\breact\b/gi, "React ⚛️")
        .replace(/\btypescript\b/gi, "TypeScript 🔷")
        .replace(/\btailwind\b/gi, "Tailwind 🌬️")
        .replace(/\bpython\b/gi, "Python 🐍")
        .replace(/\bnumpy\b/gi, "NumPy 🔢")
        .replace(/\bpytorch\b/gi, "PyTorch 🔥")
        .replace(/\bmysql\b/gi, "MySQL 🐬")
        .replace(/\bjava\b/gi, "Java ☕")
        .replace(/\bc\+\+\b/gi, "C++ 🧩")
        .replace(/\bc\b/gi, "C 🧩")
        .replace(/\bflutter\b/gi, "Flutter 📱")
        .replace(/\bfastapi\b/gi, "FastAPI ⚡")
        .replace(/\bpostgresql\b/gi, "PostgreSQL 🗄️")
        .replace(/\bAI\b/g, "AI 🤖")

        // RELATIONSHIP
        .replace(/\bgirlfriend\b/gi, "girlfriend 💖")
        .replace(/\blove\b/gi, "love ❤️")
        .replace(/\bcrush\b/gi, "crush 👀")
        .replace(/\bsingle\b/gi, "single 😄")

        // CAREER
        .replace(/\bdeveloper\b/gi, "developer 👨‍💻")
        .replace(/\bengineer\b/gi, "engineer 🛠️")
        .replace(/\bstartup\b/gi, "startup 🚀")
        .replace(/\bcompany\b/gi, "company 🏢")

        // EDUCATION
        .replace(/\bcollege\b/gi, "college 🎓")
        .replace(/\bstudent\b/gi, "student 📚")

        // FUN
        .replace(/\bdream\b/gi, "dream ✨")
        .replace(/\bfuture\b/gi, "future 🚀");
}

/* ---------------------------------------------------
   PERSONALITY FORMATTER
--------------------------------------------------- */

export function personalizeReply(
    text: string,
    visitor: any
) {
    if (!visitor) return text;

    let finalText = text;

    const useName =
        Math.random() > 0.65;

    const name =
        visitor.name || "Friend";

    const gender =
        visitor.gender || "";

    const mode =
        visitor.interactionMode || "";

    const profession =
        visitor.profession || "";

    /* ---------------------------------------------------
       PROFESSIONAL MODE
    --------------------------------------------------- */

    if (
        mode === "professional" ||
        profession === "recruiter" ||
        profession === "teacher"
    ) {
        finalText =
            `${useName
                ? `Hello ${name},`
                : `Hello,`
            }\n\n` +
            finalText;

        if (Math.random() > 0.5) {
            finalText +=
                "\n\nThank you for visiting Mohammad.AI.";
        }
    }

    /* ---------------------------------------------------
       DEVELOPER MODE
    --------------------------------------------------- */

    else if (
        profession === "developer"
    ) {
        const intros = [
            useName
                ? `Hey ${name} 👨‍💻`
                : `Hey developer 👨‍💻`,

            "Developer mode activated ⚡",

            "Respect from one developer to another 🤝",
        ];

        finalText =
            intros[
            Math.floor(
                Math.random() *
                intros.length
            )
            ] +
            "\n\n" +
            finalText;
    }

    /* ---------------------------------------------------
       MALE FRIEND MODE
    --------------------------------------------------- */

    else if (
        gender === "male" &&
        mode === "friend"
    ) {
        const intros = [
            useName
                ? `Aree ${name} bro 😄`
                : `Aree bro 😄`,

            "Bhaiii 😎",

            "What’s up brother 🚀",

            "Yo bro 👀",
        ];

        finalText =
            intros[
            Math.floor(
                Math.random() *
                intros.length
            )
            ] +
            "\n\n" +
            finalText;

        if (Math.random() > 0.5) {
            finalText +=
                "\n\nKeep growing brother 🚀";
        }
    }

    /* ---------------------------------------------------
       FEMALE FRIEND MODE
    --------------------------------------------------- */

    else if (
        gender === "female" &&
        mode === "friend"
    ) {

        const intros = [

            useName
                ? `Hey ${name} 🌸`
                : `Hey 🌸`,

            "Nice question ✨",

            "Glad you're exploring Mohammad.AI 🚀",
        ];

        finalText =
            intros[
            Math.floor(
                Math.random() *
                intros.length
            )
            ] +
            "\n\n" +
            finalText;

    }

    /* ---------------------------------------------------
       CASUAL VISITOR
    --------------------------------------------------- */

    else {
        const intros = [
            useName
                ? `Hey ${name} 👋`
                : `Hey 👋`,

            "Welcome ✨",

            "Nice to see you here 🚀",

            "Glad you're exploring Mohammad.AI 😄",
        ];

        finalText =
            intros[
            Math.floor(
                Math.random() *
                intros.length
            )
            ] +
            "\n\n" +
            finalText;
    }

    /* ---------------------------------------------------
       EMOTIONAL SUPPORT
    --------------------------------------------------- */

    if (
        text.toLowerCase().includes("sad") ||
        text.toLowerCase().includes("alone") ||
        text.toLowerCase().includes("depressed")
    ) {
        finalText +=
            "\n\n💙 Remember — difficult moments never stay forever.";
    }

    /* ---------------------------------------------------
       MOTIVATION
    --------------------------------------------------- */

    if (
        text.toLowerCase().includes("dream") ||
        text.toLowerCase().includes("goal") ||
        text.toLowerCase().includes("success")
    ) {
        finalText +=
            "\n\n🚀 Mohammad strongly believes consistency can change life.";
    }

    return finalText;
}

/* ---------------------------------------------------
   LANGUAGE STYLER
--------------------------------------------------- */
export function styleLanguageReply(
    text: string,
    language: string
) {

    if (language === "hinglish") {

        const converted = text

            .replace(/\bmy name is\b/gi,
                "mera naam")

            .replace(/\bi am\b/gi,
                "main hoon")

            .replace(/\bi'm\b/gi,
                "main hoon")

            .replace(/\bi love\b/gi,
                "mujhe bahut pasand hai")

            .replace(/\bi enjoy\b/gi,
                "mujhe accha lagta hai")

            .replace(/\bcurrently\b/gi,
                "abhi")

            .replace(/\bstudying\b/gi,
                "padh raha hoon")

            .replace(/\bworking on\b/gi,
                "kaam kar raha hoon");

        return `😄 ${converted}`;
    }

    return text;
}
/* ---------------------------------------------------
   PROJECT PARSER
--------------------------------------------------- */

export function parseProjects(block: string) {
    return block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const techMatch = line.match(/\[tech:\s*([^\]]+)\]/i);

            const linkMatch = line.match(/\(link:\s*([^)]+)\)/i);

            const clean = line
                .replace(/\[tech:[^\]]+\]/i, "")
                .replace(/\(link:[^)]+\)/i, "")
                .trim();

            return {
                title: clean.split(" — ")[0]?.trim() || clean,

                desc:
                    clean.split(" — ")[1]?.trim() || "",

                tech: techMatch
                    ? techMatch[1]
                        .split(/[,|]/)
                        .map((s) => s.trim())
                        .filter(Boolean)
                    : [],

                link: linkMatch
                    ? linkMatch[1].trim()
                    : "",
            };
        });
}