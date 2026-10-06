"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

const AUTO_ROTATE_INTERVAL = 8000; // 8 seconds per quote

export function Quote() {
  const quotes =
    site.quotes && site.quotes.length > 0
      ? site.quotes
      : [
          {
            id: "default",
            quote: site.quote.text,
            author: "Fauzan Arisanto",
            role: "Fullstack Web Developer",
            category: "Engineering Philosophy",
          },
        ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);

  const nextQuote = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    setProgress(0);
  }, [quotes.length]);

  const prevQuote = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    setProgress(0);
  }, [quotes.length]);

  const goToQuote = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Timer & progress bar loop
  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const increment = (stepMs / AUTO_ROTATE_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextQuote();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPaused, nextQuote]);

  const current = quotes[currentIndex];

  return (
    <section
      id="quote"
      className="relative py-24 md:py-36 overflow-hidden border-t border-b border-line"
      aria-label="Engineering & Design Philosophies"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-fg/[0.02] blur-[120px]"
        aria-hidden
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Header Row: Category Badge + Counter + Navigation Arrows */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                aria-hidden
              />
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-fg-subtle font-mono">
                [ {current.category} ]
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Counter */}
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(quotes.length).padStart(2, "0")}
              </span>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevQuote}
                  aria-label="Previous quote"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors duration-200 hover:border-fg hover:text-fg active:scale-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 12L6 8L10 4" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextQuote}
                  aria-label="Next quote"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors duration-200 hover:border-fg hover:text-fg active:scale-95"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 4L10 8L6 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quote Body with AnimatePresence */}
          <div className="min-h-[220px] sm:min-h-[190px] md:min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: direction * 16, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: direction * -16, filter: "blur(3px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <blockquote className="relative">
                  <span
                    className="absolute -top-6 -left-3 md:-left-6 font-display text-5xl md:text-7xl text-fg-subtle/25 select-none pointer-events-none"
                    aria-hidden
                  >
                    “
                  </span>
                  <p className="font-body text-[clamp(1.2rem,2.3vw+0.5rem,2.25rem)] font-medium leading-[1.38] tracking-tight text-fg">
                    {current.quote}
                  </p>
                </blockquote>

                {/* Author Attribution */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4 pt-2">
                  <cite className="not-italic font-display text-2xl sm:text-3xl uppercase tracking-wider text-fg">
                    {current.author}
                  </cite>
                  <span className="hidden sm:inline text-fg-subtle">•</span>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-fg-muted font-medium">
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Progress Bar & Jump Dots */}
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-line/60">
            {/* Auto-rotation Progress hairline */}
            <div className="flex-1 max-w-md">
              <div className="h-[2px] w-full bg-line overflow-hidden rounded-full">
                <div
                  className="h-full bg-fg transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-fg-subtle font-mono">
                {isPaused ? "Paused on hover" : "Auto-cycling philosophies"}
              </p>
            </div>

            {/* Quick-jump Dots */}
            <div className="flex items-center gap-1.5">
              {quotes.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => goToQuote(idx)}
                  aria-label={`Jump to quote by ${q.author}`}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? "w-8 bg-fg"
                      : "w-2 bg-line hover:bg-fg/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
