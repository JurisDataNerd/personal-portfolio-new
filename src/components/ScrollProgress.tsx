"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-50 mix-blend-difference md:bottom-6 md:right-6"
      aria-hidden
    >
      <span className="font-body text-sm tracking-widest text-white tabular-nums">
        {Math.round(progress).toString().padStart(2, "0")}
        <span className="ml-0.5 opacity-70">%</span>
      </span>
    </div>
  );
}
