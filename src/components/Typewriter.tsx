"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  loop?: boolean;
  playKey?: number; // when changed, restarts the animation
  fast?: boolean; // faster timings when true
};

function randomChar() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?";
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function Typewriter({ text, className = "", loop = false, playKey = 0, fast = false }: Props) {
  const [display, setDisplay] = useState("");
  const runRef = useRef(0);

  useEffect(() => {
    const safeText = String(text ?? "");
    const thisRun = ++runRef.current;

    let mounted = true;

    async function runOnce() {
      setDisplay("");
      const charMin = fast ? 12 : 35;
      const charVar = fast ? 20 : 100;
      const scrambleMin = fast ? 1 : 2;
      const scrambleVar = fast ? 2 : 3;

      for (let i = 0; i < safeText.length && mounted && runRef.current === thisRun; i++) {
        // scramble
        const scrambleCount = scrambleMin + Math.floor(Math.random() * scrambleVar);
        for (let s = 0; s < scrambleCount && mounted && runRef.current === thisRun; s++) {
          setDisplay((prev) => (prev ?? "") + randomChar());
          await new Promise((r) => setTimeout(r, charMin + Math.random() * charVar));
          // remove last char
          setDisplay((prev) => (prev ?? "").slice(0, -1));
        }

        // append the real char
        setDisplay((prev) => (prev ?? "") + safeText[i]);
        await new Promise((r) => setTimeout(r, charMin + Math.random() * charVar));
      }

      // ensure final exact text
      if (mounted && runRef.current === thisRun) setDisplay(safeText);

      if (loop && mounted && runRef.current === thisRun) {
        await new Promise((r) => setTimeout(r, 600));
        if (mounted && runRef.current === thisRun) runOnce();
      }
    }

    runOnce();

    return () => {
      mounted = false;
    };
  }, [text, loop, playKey, fast]);

  return (
    <span className={className} aria-hidden>
      {display}
      <span className="ml-1 inline-block w-1 align-middle animate-pulse">|</span>
    </span>
  );
}
