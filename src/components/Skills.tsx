"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { site, SkillMarqueeItem } from "@/data/site";
import { TechIcon } from "./TechIcon";
import Typewriter from "./Typewriter";

function BentoMarqueeStrip({
  items,
  direction = 1,
  speed = 28,
}: {
  items: SkillMarqueeItem[];
  direction?: 1 | -1;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const measureRef = useRef<HTMLDivElement>(null);
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
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (reduce || widthRef.current === 0) return;
    const w = widthRef.current;
    let next = baseX.get() + (direction * (speed * delta)) / 1000;
    if (direction > 0 && next >= 0) next = -w;
    if (direction < 0 && next <= -w) next = 0;
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}px`);
  // Use exactly 2 copies for seamless loop without cluttering duplicated cards
  const copies = 2;

  if (items.length === 0) return null;

  return (
    <div className="relative flex w-full items-center overflow-hidden py-2">
      {/* Off-screen single measurement strip */}
      <div
        ref={measureRef}
        className="pointer-events-none absolute flex items-center gap-4 opacity-0"
        aria-hidden
      >
        {items.map((item, i) => (
          <div
            key={`${item.name}-measure-${i}`}
            className="flex w-48 sm:w-56 shrink-0 flex-col justify-between rounded-2xl border border-line p-4"
          >
            <TechIcon name={item.name} className="h-6 w-6" />
            <span className="font-display text-base uppercase">{item.name}</span>
          </div>
        ))}
      </div>

      <motion.div className="flex w-max items-center gap-4" style={{ x }}>
        {Array.from({ length: copies }).map((_, cIdx) => (
          <div key={`copy-${cIdx}`} className="flex items-center gap-4">
            {items.map((item) => (
              <div
                key={`${item.name}-${cIdx}`}
                className="group relative flex w-48 sm:w-56 shrink-0 cursor-default flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-elevated/40 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-fg/50 hover:shadow-xl"
              >
                {/* Subtle Radial Glow Accent on Hover */}
                <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-fg/15 via-transparent to-transparent rounded-2xl" />

                <div className="flex items-center justify-between">
                  <TechIcon name={item.name} className="h-7 w-7 sm:h-8 sm:w-8 text-fg transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-[0.65rem] font-mono uppercase tracking-widest text-fg-subtle">
                    {item.category.split(" ")[0]}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-base uppercase tracking-wider text-fg sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-widest text-fg-muted">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const { skills } = site;
  const [playKey, setPlayKey] = useState<number>(0);

  const total = skills.marquee.length;
  const quarter = Math.max(1, Math.ceil(total / 4));
  const row1 = skills.marquee.slice(0, quarter);
  const row2 = skills.marquee.slice(quarter, quarter * 2);
  const row3 = skills.marquee.slice(quarter * 2, quarter * 3);
  const row4 = skills.marquee.slice(quarter * 3);

  return (
    <section id="skills" className="relative py-20 md:py-28" aria-label="Skills and Technologies">
      <div className="container mb-12">
        {/* Section Header */}
        <div className="flex items-center justify-end border-b border-line pb-4 md:pb-5">
          <span className="text-xs uppercase tracking-[0.18em] text-fg-subtle">
            [ Tech Stack & Matrix ]
          </span>
        </div>

        <div className="overflow-hidden mt-10">
          <motion.h2
            className="font-body text-[clamp(2rem,5.5vw+1rem,5rem)] font-bold uppercase leading-[1.1] tracking-tight"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onViewportEnter={() => setPlayKey((k) => k + 1)}
          >
            <Typewriter text={skills.title} playKey={playKey} fast />
          </motion.h2>
        </div>
      </div>

      {/* Modern Bento Card Marquee Container */}
      <div className="container my-10">
        {/* Bento Cards Continuous Marquee Box — 4 Rows Thick */}
        <div className="relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-bg-elevated/30 py-6 shadow-sm md:rounded-3xl md:py-9">
          {/* Left and Right Subtle Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24" />

          <div className="flex flex-col gap-3">
            <BentoMarqueeStrip items={row1} direction={-1} speed={28} />
            <BentoMarqueeStrip items={row2} direction={1} speed={34} />
            <BentoMarqueeStrip items={row3} direction={-1} speed={26} />
            <BentoMarqueeStrip items={row4} direction={1} speed={32} />
          </div>
        </div>

        {/* Closing Statement */}
        {skills.closing && (
          <motion.p
            className="mt-14 max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg md:mt-16 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {skills.closing}
          </motion.p>
        )}
      </div>
    </section>
  );
}
