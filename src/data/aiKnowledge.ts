// FILE: src/data/aiKnowledge.ts

export type QAPair = {
    q: string;
    a: string;

    // engaging next question
    followUp?: string;
    suggestions?: string[];

    // matching keywords
    tags?: string[];

    // optional category
    category?:
    | "about"
    | "skills"
    | "projects"
    | "education"
    | "relationship"
    | "contact"
    | "career"
    | "fun"
    | "personal";

    // tone control
    tone?: "friendly" | "professional" | "funny" | "flirty" | "inspirational" | "emotional" | "serious";

    // optional reply style
    emoji?: string;
};

export const fallbackMessage =
    "I may not have the exact answer for that 👀 But you can still explore Mohammad’s projects, coding journey, AI startup vision, family story, dreams, or skills 🚀";

export const fallbackFollowUp =
    "Try asking about MotiMate, coding journey, dreams, projects, family, or AI vision ✨";

export const knowledge: QAPair[] = [

    /* ---------------------------------------------------
     BASIC INTRO
  --------------------------------------------------- */

    {
        q: "What is your full name?",
        a: "My full name is Mohammad Amannullah 👋",
        followUp:
            "Would you like to know where Mohammad is from? 🌍",
        tags: [
            "name",
            "fullname",
            "full name",
            "who are you",
            "mohammad",
            "amannullah",
            "about",
        ],
        category: "about",
        tone: "friendly",
        emoji: "👋",
    },

    {
        q: "What is your nickname?",
        a: "Most friends call me 'Amann' 😄",
        followUp:
            "Would you like to know about his childhood journey? 🚀",
        tags: [
            "nickname",
            "amann",
            "friends call",
            "short name",
        ],
        category: "about",
        tone: "friendly",
        emoji: "😄",
    },

    {
        q: "Where are you from?",
        a: "Mohammad was born in Garoul village, Darbhanga, Bihar 🇮🇳 and grew up in Ranchi, Jharkhand. Currently he is studying in Salem, Tamil Nadu 🌴",
        followUp:
            "Would you like to know about Mohammad’s education journey? 🎓",
        tags: [
            "from",
            "location",
            "hometown",
            "bihar",
            "jharkhand",
            "salem",
            "tamil nadu",
            "darbhanga",
            "ranchi",
        ],
        category: "about",
        tone: "friendly",
        emoji: "🌍",
    },

    {
        q: "Which languages do you speak?",
        a: "Mohammad can speak Hindi, English, Urdu, Maithili, and a little Tamil too 😄",
        followUp:
            "Would you like to know how he manages studying in Tamil Nadu? 🌴",
        tags: [
            "language",
            "speak",
            "hindi",
            "english",
            "urdu",
            "maithili",
            "tamil",
        ],
        category: "about",
        tone: "friendly",
        emoji: "🗣️",
    },

    {
        q: "Are you married?",
        a: "No 😄 Mohammad is currently single and fully focused on building his future, AI projects, and startup dreams 🚀",
        followUp:
            "Would you like to know Mohammad’s dream company vision? 👀",
        tags: [
            "married",
            "single",
            "relationship",
            "wife",
            "girlfriend",
        ],
        category: "relationship",
        tone: "funny",
        emoji: "💖",
    },

    /* ---------------------------------------------------
       FAMILY
    --------------------------------------------------- */

    {
        q: "Tell me about your family",
        a: "Mohammad comes from a humble and hardworking family ❤️ His father works extremely hard every day selling slippers by bicycle to support the family and education of his children. Mohammad deeply respects his parents and considers his father his biggest motivation in life.",
        followUp:
            "Would you like to know what motivates Mohammad daily? 🚀",

        suggestions: [
            "Father's Occupation",
            "Biggest Motivation",
            "Siblings",
            "Future Dreams",
        ],

        tags: [
            "family",
            "father",
            "mother",
            "parents",
            "home",
            "siblings",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "❤️",
    },

    {
        q: "What does your father do?",
        a: "Mohammad’s father sells slippers by riding a bicycle through different colonies every day 🚲 His hard work is the biggest motivation behind Mohammad’s success journey.",
        followUp:
            "Would you like to know why Mohammad works so hard daily? 💪",
        tags: [
            "father",
            "dad",
            "father work",
            "profession",
            "family",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "🚲",
    },

    {
        q: "How many siblings do you have?",
        a: "Mohammad has four siblings in total 👨‍👩‍👧‍👦 He is the eldest among them and has two younger sisters and one younger brother.",
        followUp:
            "Would you like to know more about Mohammad’s responsibilities? ✨",
        tags: [
            "siblings",
            "brother",
            "sister",
            "family members",
        ],
        category: "personal",
        tone: "friendly",
        emoji: "👨‍👩‍👧‍👦",
    },

    /* ---------------------------------------------------
       EDUCATION
    --------------------------------------------------- */

    {
        q: "Which college do you study in?",
        a: "Mohammad is currently pursuing B.E CSE with specialization in AI & ML at AVS Engineering College, Salem 🎓",
        followUp:
            "Would you like to know why he chose AI & ML? 🤖",
        tags: [
            "college",
            "education",
            "avs",
            "engineering",
            "ai ml",
            "degree",
        ],
        category: "education",
        tone: "professional",
        emoji: "🎓",
    },

    {
        q: "What are your 10th and 12th marks?",
        a: "Mohammad scored 75% in CBSE Class 10 and completed Class 12 from JAC Board with PCM stream 📚",
        followUp:
            "Would you like to know how his coding journey started? 🚀",
        tags: [
            "10th",
            "12th",
            "marks",
            "percentage",
            "board",
            "education",
        ],
        category: "education",
        tone: "friendly",
        emoji: "📚",
    },

    {
        q: "Why did you choose AI & ML?",
        a: "Mohammad chose AI & ML because he believes the future is moving toward Artificial Intelligence 🤖 He dreams of building AI-powered applications and real-world automation systems.",
        followUp:
            "Would you like to know about Mohammad’s AI startup vision? 🚀",
        tags: [
            "ai ml",
            "artificial intelligence",
            "why ai",
            "future",
            "machine learning",
        ],
        category: "education",
        tone: "inspirational",
        emoji: "🤖",
    },

    /* ---------------------------------------------------
       CODING JOURNEY
    --------------------------------------------------- */

    {
        q: "Tell me about your coding journey",
        a: "Mohammad started coding in 7th standard after learning about web development 📱 At that time he only had a phone and no laptop. One of his biggest beginner struggles was adding an image to a website — it took him almost 14 days because of a wrong image path 😄 But he never gave up, and today he is building full AI-powered applications like MotiMate 🚀",
        followUp:
            "Would you like to know what motivates Mohammad to continue coding daily? 💻",

        suggestions: [
            "First Programming Language",
            "Biggest Achievement",
            "Coding Motivation",
            "Favorite Technologies",
        ],

        tags: [
            "coding",
            "journey",
            "developer",
            "programming",
            "beginner",
            "web development",
        ],
        category: "career",
        tone: "inspirational",
        emoji: "💻",
    },

    {
        q: "What is your biggest achievement?",
        a: "Mohammad considers building MotiMate 🚀 his biggest achievement so far because a student who once struggled for 14 days just to add an image to a website is now building AI-powered applications.",
        followUp:
            "Would you like to know more about MotiMate? 🤖",
        tags: [
            "achievement",
            "success",
            "motimate",
            "project",
            "biggest achievement",
        ],
        category: "career",
        tone: "inspirational",
        emoji: "🏆",
    },

    {
        q: "What motivates you daily?",
        a: "Mohammad’s biggest motivation is his father ❤️ Watching his father wake up early every morning and work extremely hard for the family gives Mohammad the strength to keep pushing forward every single day.",
        followUp:
            "Would you like to know Mohammad’s biggest dream? 🌍",
        tags: [
            "motivation",
            "father",
            "hard work",
            "daily motivation",
            "inspiration",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "❤️",
    },






    /* ---------------------------------------------------
       PROJECTS & STARTUP
    --------------------------------------------------- */

    {
        q: "What is MotiMate?",
        a: "MotiMate 🤖 is Mohammad’s AI-powered learning and productivity platform designed especially for students. It combines AI, smart learning, productivity systems, and future-focused education tools into one ecosystem 🚀",
        followUp:
            "Would you like to know which technologies are used in MotiMate? ⚡",

        suggestions: [
            "Tech Stack",
            "Future Vision",
            "Features",
            "Development Journey",
        ],

        tags: [
            "motimate",
            "project",
            "startup",
            "ai app",
            "application",
            "platform",
        ],
        category: "projects",
        tone: "professional",
        emoji: "🤖",
    },

    {
        q: "Which technologies are used in MotiMate?",
        a: "MotiMate uses React ⚛️, Flutter 📱, Python 🐍, FastAPI ⚡, PostgreSQL 🗄️ and AI integrations 🤖",
        followUp:
            "Would you like to know Mohammad’s dream tech stack? 🔥",
        tags: [
            "tech stack",
            "motimate tech",
            "react",
            "flutter",
            "fastapi",
            "postgresql",
            "python",
        ],
        category: "projects",
        tone: "professional",
        emoji: "⚡",
    },

    {
        q: "What kind of company do you want to build?",
        a: "Mohammad wants to build an AI-based startup company under the name Moti Group 🚀 Initially focused on students and education, but later expanding into multiple sectors using safe and intelligent AI systems.",
        followUp:
            "Would you like to know Mohammad’s future vision for Moti Group? 🌍",

        suggestions: [
            "Moti Group Vision",
            "Future Goals",
            "AI Startup",
            "Why AI",
        ],

        tags: [
            "startup",
            "company",
            "moti group",
            "business",
            "founder",
            "vision",
        ],
        category: "career",
        tone: "inspirational",
        emoji: "🚀",
    },

    {
        q: "Where do you see yourself in the future?",
        a: "Mohammad sees himself becoming the founder and chairman of Moti Group 🌍🚀 while building impactful AI products that genuinely help people.",
        followUp:
            "Would you like to know why Mohammad wants success so badly? ❤️",
        tags: [
            "future",
            "goal",
            "dream",
            "chairman",
            "founder",
            "success",
        ],
        category: "career",
        tone: "inspirational",
        emoji: "🌍",
    },

    {
        q: "Why do you want success?",
        a: "Mohammad wants success because his parents have sacrificed a lot for him ❤️ He wants to give them happiness, comfort, and a better life through his hard work and achievements.",
        followUp:
            "Would you like to know Mohammad’s emotional side too? ✨",
        tags: [
            "success",
            "dream",
            "parents",
            "motivation",
            "goal",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "❤️",
    },

    /* ---------------------------------------------------
       RELATIONSHIP & EMOTIONS
    --------------------------------------------------- */

    {
        q: "Do you believe in love?",
        a: "Yes ❤️ Mohammad believes real love exists. He once traveled almost 570 kilometers just to meet someone special for only 10 minutes. That experience made him emotionally mature and deeply understanding toward relationships.",
        followUp:
            "Would you like to know what kind of partner Mohammad admires? 👀",
        tags: [
            "love",
            "relationship",
            "true love",
            "emotion",
            "girlfriend",
        ],
        category: "relationship",
        tone: "emotional",
        emoji: "❤️",
    },

    {
        q: "What kind of partner do you admire?",
        a: "Mohammad admires someone loving, caring, loyal, emotionally mature, supportive, and soft-hearted ✨",
        followUp:
            "Would you like to know what matters most to Mohammad in relationships? 💖",
        tags: [
            "partner",
            "ideal type",
            "love",
            "relationship",
            "girl",
        ],
        category: "relationship",
        tone: "flirty",
        emoji: "✨",
    },

    {
        q: "What matters most in relationships?",
        a: "For Mohammad, love, loyalty, respect, understanding, and mutual ambition all matter equally ❤️",
        followUp:
            "Would you like to know what type of people Mohammad avoids? 👀",
        tags: [
            "relationship",
            "loyalty",
            "respect",
            "love",
            "understanding",
        ],
        category: "relationship",
        tone: "emotional",
        emoji: "💖",
    },

    {
        q: "What type of people do you avoid?",
        a: "Mohammad avoids people who only use others for personal benefit or take advantage of emotions and kindness.",
        followUp:
            "Would you like to know more about Mohammad’s personality? ✨",
        tags: [
            "people",
            "fake people",
            "personality",
            "trust",
            "relationship",
        ],
        category: "personal",
        tone: "serious",
        emoji: "⚡",
    },

    /* ---------------------------------------------------
       PERSONALITY
    --------------------------------------------------- */

    {
        q: "What type of person are you emotionally?",
        a: "Mohammad is emotionally sensitive, caring, ambitious, and deeply attached to his family ❤️",
        followUp:
            "Would you like to know Mohammad’s biggest strength and weakness? 👀",
        tags: [
            "emotion",
            "personality",
            "nature",
            "sensitive",
            "caring",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "❤️",
    },

    {
        q: "What is your biggest strength?",
        a: "Mohammad’s biggest strength is his father 💪 His father’s hard work gives him motivation to never give up.",
        followUp:
            "Would you like to know Mohammad’s biggest weakness too? ✨",
        tags: [
            "strength",
            "motivation",
            "father",
            "mindset",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "💪",
    },

    {
        q: "What is your biggest weakness?",
        a: "Mohammad’s biggest weakness is seeing his father grow older while he still feels he hasn’t achieved enough success yet.",
        followUp:
            "Would you like to know what makes Mohammad happiest? 😄",
        tags: [
            "weakness",
            "emotion",
            "father",
            "sad",
        ],
        category: "personal",
        tone: "emotional",
        emoji: "💔",
    },

    {
        q: "What makes you happiest?",
        a: "Coding with tea ☕, listening to songs 🎵, chilling with friends 😄 and building AI projects 🚀 makes Mohammad happiest.",
        followUp:
            "Would you like to know what makes Mohammad sad sometimes? 🌙",
        tags: [
            "happy",
            "hobbies",
            "coding",
            "tea",
            "songs",
            "friends",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "😄",
    },






    /* ---------------------------------------------------
       TECH PERSONALITY
    --------------------------------------------------- */

    {
        q: "What are your strongest technologies?",
        a: "Mohammad is strongest in Python 🐍, Flutter 📱, React ⚛️, HTML 🧩, CSS 🎨 and JavaScript ⚡",
        followUp:
            "Would you like to know Mohammad’s favorite frontend and backend technologies? 👀",
        tags: [
            "skills",
            "strongest tech",
            "technology",
            "programming",
            "stack",
        ],
        category: "skills",
        tone: "professional",
        emoji: "🧠",
    },

    {
        q: "What is your favorite frontend technology?",
        a: "For web development Mohammad loves React ⚛️ and for app development he enjoys Flutter 📱 because building beautiful UI feels creative and satisfying.",
        followUp:
            "Would you like to know Mohammad’s favorite backend technology too? ⚡",
        tags: [
            "frontend",
            "react",
            "flutter",
            "ui",
            "favorite frontend",
        ],
        category: "skills",
        tone: "friendly",
        emoji: "⚛️",
    },

    {
        q: "What is your favorite backend technology?",
        a: "Mohammad enjoys backend development using Python 🐍 because he loves building logic, systems, and intelligent AI workflows.",
        followUp:
            "Would you like to know why Mohammad enjoys backend development so much? 🤖",
        tags: [
            "backend",
            "python",
            "logic",
            "server",
            "backend tech",
        ],
        category: "skills",
        tone: "professional",
        emoji: "🐍",
    },

    {
        q: "Which database do you like most?",
        a: "PostgreSQL 🗄️ is Mohammad’s favorite database because of its reliability, scalability, and structured architecture.",
        followUp:
            "Would you like to know Mohammad’s dream technology stack? 🚀",
        tags: [
            "database",
            "postgresql",
            "sql",
            "favorite database",
        ],
        category: "skills",
        tone: "professional",
        emoji: "🗄️",
    },

    {
        q: "Do you enjoy frontend or backend more?",
        a: "Mohammad enjoys both frontend and backend 😄 Frontend feels creative while backend feels logical and powerful. But backend development slightly excites him more because he enjoys building systems and logic.",
        followUp:
            "Would you like to know what kind of applications Mohammad loves building? 🚀",
        tags: [
            "frontend or backend",
            "backend",
            "frontend",
            "developer",
        ],
        category: "skills",
        tone: "friendly",
        emoji: "⚡",
    },

    {
        q: "What kind of applications do you enjoy building?",
        a: "Mohammad enjoys building AI-powered applications 🤖 especially platforms related to education, productivity, automation, and intelligent systems.",
        followUp:
            "Would you like to know Mohammad’s dream vision for AI? 🌍",
        tags: [
            "apps",
            "applications",
            "ai apps",
            "projects",
            "automation",
        ],
        category: "projects",
        tone: "inspirational",
        emoji: "🤖",
    },

    /* ---------------------------------------------------
       FUN & LIFESTYLE
    --------------------------------------------------- */

    {
        q: "What is your favorite food?",
        a: "Biryani 🍗 is Mohammad’s all-time favorite food 😄",
        followUp:
            "Would you like to know Mohammad’s favorite movie too? 🎬",
        tags: [
            "food",
            "favorite food",
            "biryani",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "🍗",
    },

    {
        q: "What is your favorite movie?",
        a: "Mohammad’s favorite movie is Sanam Teri Kasam ❤️",
        followUp:
            "Would you like to know Mohammad’s favorite time of the day? 🌙",
        tags: [
            "movie",
            "favorite movie",
            "sanam teri kasam",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "🎬",
    },

    {
        q: "What is your favorite color?",
        a: "Green 💚 is Mohammad’s favorite color.",
        followUp:
            "Would you like to know whether Mohammad prefers tea or coffee? ☕",
        tags: [
            "favorite color",
            "green",
            "color",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "💚",
    },

    {
        q: "Tea or coffee?",
        a: "Mohammad is definitely a tea lover ☕😄",
        followUp:
            "Would you like to know Mohammad’s favorite time for coding? 🌙",
        tags: [
            "tea",
            "coffee",
            "drink",
            "favorite drink",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "☕",
    },

    {
        q: "Are you a night owl or early morning person?",
        a: "Interestingly Mohammad can manage both 🌙☀️ He can stay awake coding late at night and also wake up early when needed.",
        followUp:
            "Would you like to know Mohammad’s favorite quote? ✨",
        tags: [
            "night owl",
            "morning",
            "sleep",
            "late night",
        ],
        category: "fun",
        tone: "friendly",
        emoji: "🌙",
    },

    {
        q: "What is your favorite quote?",
        a: "“Be consistent, work hard, and success will eventually come.” 🚀",
        followUp:
            "Would you like one final message from Mohammad? ✨",
        tags: [
            "quote",
            "motivation",
            "favorite quote",
        ],
        category: "career",
        tone: "inspirational",
        emoji: "🚀",
    },

    {
        q: "Give a message to visitors",
        a: "Keep working hard, stay consistent, explore the world, and enjoy your journey ✨ Life is temporary, so keep learning, growing, and creating beautiful memories.",
        followUp:
            "Thank you for visiting Mohammad.AI ❤️",
        tags: [
            "message",
            "visitors",
            "advice",
            "motivation",
            "portfolio",
        ],
        category: "personal",
        tone: "inspirational",
        emoji: "✨",
    },

    /* ---------------------------------------------------
       CONTACT
    --------------------------------------------------- */

    {
        q: "How can I contact you?",
        a: "You can connect with Mohammad through GitHub 💻, LinkedIn 🔗, or Email 📩",
        followUp:
            "Would you like Mohammad’s professional links too? 👀",
        tags: [
            "contact",
            "email",
            "linkedin",
            "github",
            "reach",
            "social",
        ],
        category: "contact",
        tone: "professional",
        emoji: "📩",
    },

];