import { knowledge, allowedTopics, fallbackMessage, QAPair } from "@/data/my_knowledge";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

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
  ];

  return normalize(text)
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !stopWords.includes(word));
}

function scoreQuestion(userQ: string, item: QAPair) {
  const userTokens = tokens(userQ);

  let score = 0;

  // check tags
  if (item.tags) {
    for (const tag of item.tags) {
      if (userTokens.includes(tag.toLowerCase())) {
        score += 5;
      }
    }
  }

  // check question words
  const questionTokens = tokens(item.q);

  for (const token of userTokens) {
    if (questionTokens.includes(token)) {
      score += 2;
    }
  }

  return score;
}

export function askPortfolio(userQ: string) {
  const cleaned = normalize(userQ);

  if (!cleaned) {
    return {
      answer: fallbackMessage,
      score: 0,
    };
  }

  let bestMatch: QAPair | null = null;
  let bestScore = 0;

  for (const item of knowledge) {
    const score = scoreQuestion(cleaned, item);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore >= 4) {
    return {
      answer: bestMatch.followUp
        ? `${bestMatch.a}\n\n${bestMatch.followUp}`
        : bestMatch.a,
      matched: bestMatch.q,
      score: bestScore,
    };
  }

  return {
    answer: `${fallbackMessage}

Topics you can ask:
${allowedTopics.join(", ")}`,
    score: 0,
  };
}