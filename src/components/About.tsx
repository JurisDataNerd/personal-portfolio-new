"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import Typewriter from "./Typewriter";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function About() {
  const { about } = site;
  const [playKey, setPlayKey] = useState(0);

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container">
        <div className="mb-10 border-b border-line pb-4 md:mb-14" />


        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h2
            className="font-body text-[clamp(2rem,6vw+1rem,5.5rem)] font-bold uppercase leading-[1.15] tracking-tight md:leading-[1.1]"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: false, margin: "-10% 0px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onViewportEnter={() => setPlayKey((k) => k + 1)}
          >
            <Typewriter text={about.title} playKey={playKey} fast />
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10">

          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={`max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg md:text-xl ${
                i === 0 ? "md:col-span-6" : "md:col-span-5 md:col-start-8"
              }`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
