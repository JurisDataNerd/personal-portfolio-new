"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

type Props = {
  text: string;
  /** Positive = right, negative = left */
  direction?: 1 | -1;
  /** Base speed in px/sec */
  speed?: number;
  className?: string;
};

export function MarqueeLine({
  text,
  direction = 1,
  speed = 40,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const widthRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (measureRef.current) {
        widthRef.current = measureRef.current.offsetWidth;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  useAnimationFrame((_, delta) => {
    if (reduce || widthRef.current === 0) return;
    const w = widthRef.current;
    let next = baseX.get() + direction * (speed * delta) / 1000;
    // wrap within one copy width
    if (direction > 0 && next >= 0) next = -w;
    if (direction < 0 && next <= -w) next = 0;
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  // Enough copies so the strip always covers the viewport
  const copies = 6;

  return (
    <div className={`relative flex flex-1 items-center overflow-hidden ${className}`}>
      {/* hidden measure of a single item including padding */}
      <span
        ref={measureRef}
        className="font-display marquee-item pointer-events-none absolute opacity-0"
        aria-hidden
      >
        {text}
      </span>

      <motion.div className="marquee-track" style={{ x }}>
        {Array.from({ length: copies }).map((_, i) => (
          <h2 key={i} className="font-display marquee-item mix-blend-difference">
            {text}
          </h2>
        ))}
      </motion.div>
    </div>
  );
}
