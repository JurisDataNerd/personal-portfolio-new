"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function IntroLoader() {
  const [mounted, setMounted] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
    const played = sessionStorage.getItem("introPlayed");
    if (played === "true") {
      setComplete(true);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("introPlayed", "true");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted || complete) return null;

  const columns = Array.from({ length: 8 });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen overflow-hidden"
    >
      {columns.map((_, i) => (
        <motion.div
          key={i}
          className="relative h-full w-[12.5%] bg-[#0e0e0e]"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            delay: 0.3 + i * 0.05,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => {
            if (i === columns.length - 1) {
              setComplete(true);
            }
          }}
        />
      ))}
    </div>
  );
}
