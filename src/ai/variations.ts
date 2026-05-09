// FILE: src/ai/variations.ts

const variations: Record<
  string,
  string[]
> = {
  projects: [
    "Mohammad loves building modern AI-powered applications 🚀",
    
    "Most of Mohammad’s projects focus on real-world AI solutions 🤖",

    "Mohammad enjoys creating full-stack AI systems with beautiful UI and strong backend architecture ⚡",
  ],

  skills: [
    "Mohammad mainly works with React, Flutter, FastAPI, PostgreSQL, and AI integrations 🔥",

    "His strongest area is full-stack AI application development 🚀",

    "Mohammad enjoys combining frontend experiences with intelligent backend systems 🤖",
  ],

  career: [
    "Mohammad believes consistency and learning are the biggest keys to growth 📈",

    "His coding journey started completely from scratch with big ambitions 🚀",

    "Mohammad focuses heavily on long-term growth and real-world skill building 💻",
  ],

  education: [
    "Mohammad is currently pursuing B.E CSE AI & ML at AVS Engineering College 🎓",

    "He is studying engineering while simultaneously building advanced AI projects 🤖",

    "Mohammad balances academics along with practical software development 🚀",
  ],

  relationship: [
    "Right now Mohammad is deeply focused on building his future and technology journey 🚀",

    "Coding, AI, and ambitious goals take most of Mohammad’s attention currently 😄",

    "Mohammad believes emotional maturity and loyalty matter a lot ✨",
  ],
};

/* ---------------------------------------------------
   GET RANDOM VARIATION
--------------------------------------------------- */

export function getVariation(
  category?: string
) {
  if (!category) return "";

  const items =
    variations[category];

  if (
    !items ||
    items.length === 0
  ) {
    return "";
  }

  const random =
    Math.floor(
      Math.random() *
        items.length
    );

  return items[random];
}