// FILE: src/ai/intents.ts

export type IntentType =
  | "projects"
  | "skills"
  | "career"
  | "education"
  | "contact"
  | "relationship"
  | "recruitment"
  | "technical"
  | "fun"
  | "unknown";

/* ---------------------------------------------------
   DETECT INTENT
--------------------------------------------------- */

export function detectIntent(
  text: string
): IntentType {
  const q = text.toLowerCase();

  /* -----------------------------------
     PROJECTS
  ----------------------------------- */

  if (
    q.includes("project") ||
    q.includes("motimate") ||
    q.includes("app") ||
    q.includes("portfolio")
  ) {
    return "projects";
  }

  /* -----------------------------------
     SKILLS
  ----------------------------------- */

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("frontend") ||
    q.includes("backend")
  ) {
    return "skills";
  }

  /* -----------------------------------
     RECRUITMENT
  ----------------------------------- */

  if (
    q.includes("hire") ||
    q.includes("job") ||
    q.includes("work") ||
    q.includes("internship") ||
    q.includes("company")
  ) {
    return "recruitment";
  }

  /* -----------------------------------
     TECHNICAL
  ----------------------------------- */

  if (
    q.includes("architecture") ||
    q.includes("database") ||
    q.includes("api") ||
    q.includes("ai") ||
    q.includes("system design")
  ) {
    return "technical";
  }

  /* -----------------------------------
     EDUCATION
  ----------------------------------- */

  if (
    q.includes("college") ||
    q.includes("study") ||
    q.includes("education") ||
    q.includes("marks")
  ) {
    return "education";
  }

  /* -----------------------------------
     CONTACT
  ----------------------------------- */

  if (
    q.includes("contact") ||
    q.includes("github") ||
    q.includes("linkedin") ||
    q.includes("email")
  ) {
    return "contact";
  }

  /* -----------------------------------
     RELATIONSHIP
  ----------------------------------- */

  if (
    q.includes("girlfriend") ||
    q.includes("single") ||
    q.includes("love") ||
    q.includes("relationship")
  ) {
    return "relationship";
  }

  /* -----------------------------------
     FUN
  ----------------------------------- */

  if (
    q.includes("fun") ||
    q.includes("meme") ||
    q.includes("joke")
  ) {
    return "fun";
  }

  return "unknown";
}