export type QAPair = {
  q: string;
  a: string;
  tags?: string[];
  followUp?: string;
};

export const knowledge: QAPair[] = [
  // ABOUT
  {
    q: "What is your full name?",
    a: "My full name is Mohammad Amannullah 😊",
    tags: ["name", "full name", "who are you", "about"],
    followUp: "Would you like to know about my education or projects? 🚀",
  },

  {
    q: "Where are you from?",
    a: "I'm originally from Madhubani, Bihar, India 🇮🇳",
    tags: ["from", "hometown", "location", "native place"],
    followUp: "Would you also like to know where I studied? 🎓",
  },

  {
    q: "What languages do you speak?",
    a: "I speak Hindi, English, and I'm currently learning Tamil 😄",
    tags: ["language", "speak", "communication"],
  },

  // FAMILY
  {
    q: "What is your father's name?",
    a: "Mohammad Amannullah's father is a hardworking man who has always supported his journey ❤️",
    tags: ["father", "dad", "father name", "abbu"],
    followUp: "Would you like to know what his father does professionally? 👀",
  },

  {
    q: "What does your father do?",
    a: "His father works as a vendor and sells slippers on a bicycle in the streets. Mohammad is extremely proud of his father's hard work and sacrifices 💪✨",
    tags: ["father work", "occupation", "job", "vendor"],
  },

  {
    q: "Tell me about your family",
    a: "Mohammad comes from a humble and hardworking family. His parents have always supported his education and dreams wholeheartedly ❤️",
    tags: ["family", "parents", "home"],
  },

  // RELATIONSHIP
  {
    q: "Are you single?",
    a: "Haha 😄 Yes, Mohammad is currently single and fully focused on building projects, learning AI, and creating his future 🚀",
    tags: ["single", "relationship", "girlfriend", "love life", "dating"],
  },

  // EDUCATION
  {
    q: "What are you studying?",
    a: "I'm currently pursuing B.E. in Computer Science Engineering with specialization in AI & ML at AVS Engineering College, Salem 🎓",
    tags: ["college", "degree", "course", "engineering", "study"],
    followUp: "Would you also like to know about my academic journey from school till engineering? 📚",
  },

  {
    q: "What are your 12th marks?",
    a: "Mohammad completed Class 12 Science under JAC Board with 273/500 marks 😊",
    tags: ["12th", "intermediate", "jac", "marks"],
  },

  {
    q: "What are your 10th marks?",
    a: "Mohammad scored 75.6% in secondary schooling 📘",
    tags: ["10th", "matric", "secondary", "percentage"],
  },

  // PROJECTS
  {
    q: "What is MotiMate?",
    a: "MotiMate is an AI-powered productivity and motivation application created to help users stay productive, focused, disciplined, and mentally strong 🚀",
    tags: ["motimate", "project", "app"],
    followUp: "Would you like to know the tech stack used in MotiMate? 👨‍💻",
  },

  {
    q: "What tech stack did you use in MotiMate?",
    a: "MotiMate is being built using Flutter, Dart, Python, FastAPI, PostgreSQL, REST APIs, and AI integrations 🔥",
    tags: ["tech stack", "flutter", "backend", "database"],
  },

  {
    q: "Are you a solo developer?",
    a: "Yes 😊 Mohammad is building MotiMate as a solo developer and solo entrepreneur.",
    tags: ["solo", "developer", "entrepreneur", "team"],
  },

  // COMPANY
  {
    q: "What is Moti Group?",
    a: "Moti Group is Mohammad's vision-driven startup focused on building impactful AI products, digital solutions, and future technologies 🚀",
    tags: ["moti group", "company", "startup", "business"],
  },

  // GOALS
  {
    q: "What is your future goal?",
    a: "Mohammad aims to become a successful AI engineer, entrepreneur, and founder building impactful technology products for millions 🌍✨",
    tags: ["goal", "dream", "future", "career"],
  },

  // CONTACT
  {
    q: "How can I contact you?",
    a: "You can connect with Mohammad through LinkedIn, GitHub, Instagram, or Email 📩",
    tags: ["contact", "email", "github", "linkedin"],
  },
];

export const allowedTopics = [
  "About Mohammad",
  "Family",
  "Academics",
  "Projects",
  "MotiMate",
  "Moti Group",
  "Skills",
  "Career Goals",
  "Contact",
];

export const fallbackMessage =
  "Sorry 😅 I don't know much about that yet. Why not ask something about Mohammad's education, projects, skills, family, or startup journey? 🚀";