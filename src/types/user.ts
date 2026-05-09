// FILE: src/types/user.ts

export type Gender =
  | "male"
  | "female"
  | "other";

export type Profession =
  | "student"
  | "recruiter"
  | "developer"
  | "teacher"
  | "working-professional"
  | "founder"
  | "other";

export type InteractionMode =
  | "friend"
  | "professional"
  | "visitor";

export type VisitorProfile = {
  name: string;
  gender: Gender;
  profession: Profession;
  interactionMode: InteractionMode;
  location: string;
};