"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

/**
 * Global page transition — 5 vertical curtain columns that hold briefly,
 * then slide down in a staggered wave (left → right) to reveal content.
 *
 * Pure CSS keyframe animation for GPU-accelerated performance.
 * Triggers on every route change (including initial load).
 */

const COLUMN_COUNT = 5;
const HOLD_MS = 180;          // brief hold while curtain sits
const SLIDE_MS = 620;         // each column's slide-down duration
const STAGGER_MS = 65;        // delay between each column
const TOTAL_MS = HOLD_MS + SLIDE_MS + (COLUMN_COUNT - 1) * STAGGER_MS + 50; // buffer

export function PageTransition() {
  const pathname = usePathname();
  const [playing, setPlaying] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const isFirst = useRef(true);

  const play = useCallback(() => {
    setPlaying(true);
    setAnimKey((k) => k + 1);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, left: 0 });

    const timer = setTimeout(() => setPlaying(false), TOTAL_MS);
    return () => clearTimeout(timer);
  }, []);

  // Initial mount
  useEffect(() => {
    return play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Subsequent route changes
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return play();
  }, [pathname, play]);

  if (!playing) return null;

  return (
    <div
      key={animKey}
      className="curtain"
      aria-hidden="true"
    >
      {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
        <div
          key={i}
          className="curtain__col"
          style={{
            animationDelay: `${HOLD_MS + i * STAGGER_MS}ms`,
          }}
        />
      ))}
    </div>
  );
}
