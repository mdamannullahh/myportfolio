// FILE: src/ai/personality.ts

import { VisitorProfile } from "@/types/user";

export type PersonalityMode =
  | "friendly"
  | "professional"
  | "flirty"
  | "respectful"
  | "motivational";

export function detectPersonality(
  visitor: VisitorProfile | null
): PersonalityMode {
  if (!visitor) {
    return "friendly";
  }

  /* -----------------------------------
     RECRUITER / PROFESSIONAL
  ----------------------------------- */

  if (
    visitor.profession === "recruiter" ||
    visitor.interactionMode === "professional"
  ) {
    return "professional";
  }

  /* -----------------------------------
     FEMALE + FRIEND
  ----------------------------------- */

  if (
    visitor.gender === "female" &&
    visitor.interactionMode === "friend"
  ) {
    return "flirty";
  }

  /* -----------------------------------
     MALE + FRIEND
  ----------------------------------- */

  if (
    visitor.gender === "male" &&
    visitor.interactionMode === "friend"
  ) {
    return "friendly";
  }

  /* -----------------------------------
     FOUNDER / TEACHER
  ----------------------------------- */

  if (
    visitor.profession === "founder" ||
    visitor.profession === "teacher"
  ) {
    return "respectful";
  }

  return "friendly";
}

/* ---------------------------------------------------
   APPLY PERSONALITY
--------------------------------------------------- */

export function applyPersonality(
  text: string,
  visitor: VisitorProfile | null
) {
  const personality =
    detectPersonality(visitor);

  let finalText = text;

  /* -----------------------------------
     PROFESSIONAL MODE
  ----------------------------------- */

  if (personality === "professional") {
    finalText =
      finalText.replace(/😄|👀|🤝|✨/g, "");

    finalText +=
      "\n\n💼 Thank you for visiting Mohammad.AI professionally.";
  }

  /* -----------------------------------
     FRIEND MODE
  ----------------------------------- */

  if (personality === "friendly") {
    finalText +=
      "\n\n🤝 Really nice talking with you bro!";
  }

  /* -----------------------------------
     FLIRTY MODE
  ----------------------------------- */

  if (personality === "flirty") {
    finalText +=
      "\n\n🌸 Mohammad thinks your vibe feels really positive and sweet.";
  }

  /* -----------------------------------
     RESPECTFUL MODE
  ----------------------------------- */

  if (personality === "respectful") {
    finalText +=
      "\n\n🙏 Mohammad truly appreciates your presence and support.";
  }

  return finalText;
}