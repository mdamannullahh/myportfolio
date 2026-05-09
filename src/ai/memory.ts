// FILE: src/ai/memory.ts

type MemoryState = {
  lastTopic: string;
  lastProject: string;
  lastQuestion: string;
  lastCategory?: string;
  lastAnswer?: string;
};

const memory: MemoryState = {
  lastTopic: "",
  lastProject: "",
  lastQuestion: "",
};

/* ---------------------------------------------------
   SAVE MEMORY
--------------------------------------------------- */

export function saveMemory(data: Partial<MemoryState>) {
  Object.assign(memory, data);
}

/* ---------------------------------------------------
   GET MEMORY
--------------------------------------------------- */

export function getMemory() {
  return memory;
}

/* ---------------------------------------------------
   CLEAR MEMORY
--------------------------------------------------- */

export function clearMemory() {
  memory.lastTopic = "";
  memory.lastProject = "";
  memory.lastQuestion = "";
}