import { useEffect, useMemo, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;

  /* optional */
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  humanized?: boolean;
}

/* ----------------------------------------
   SMART AI TYPING EFFECT
---------------------------------------- */

export const TypingEffect = ({
  text,
  speed = 18,
  onComplete,

  className = "",
  showCursor = true,
  cursorChar = "▋",
  humanized = true,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] =
    useState("");

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ----------------------------------------
     RESET WHEN TEXT CHANGES
  ---------------------------------------- */

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  /* ----------------------------------------
     SMART DELAY ENGINE
  ---------------------------------------- */

  const getDelay = useMemo(() => {
    return (char: string) => {
      if (!humanized) return speed;

      // punctuation pause
      if (
        [".", "!", "?", ","].includes(char)
      ) {
        return speed + 140;
      }

      // newline pause
      if (char === "\n") {
        return speed + 180;
      }

      // emoji pause
      if (
        /\p{Emoji}/u.test(char)
      ) {
        return speed + 100;
      }

      // random natural variation
      return (
        speed +
        Math.floor(Math.random() * 18)
      );
    };
  }, [speed, humanized]);

  /* ----------------------------------------
     TYPING ENGINE
  ---------------------------------------- */

  useEffect(() => {
    if (currentIndex >= text.length) {
      onComplete?.();
      return;
    }

    const currentChar =
      text[currentIndex];

    timeoutRef.current = setTimeout(() => {
      setDisplayedText((prev) =>
        prev + currentChar
      );

      setCurrentIndex((prev) => prev + 1);
    }, getDelay(currentChar));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentIndex,
    text,
    getDelay,
    onComplete,
  ]);

  /* ----------------------------------------
     RENDER
  ---------------------------------------- */

  return (
    <span
      className={`whitespace-pre-line ${className}`}
    >
      {displayedText}

      {showCursor && (
        <span className="animate-pulse ml-[1px]">
          {cursorChar}
        </span>
      )}
    </span>
  );
};