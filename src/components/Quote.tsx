"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Quote() {
  const words = site.quote.text.split(" ");

  return (
    <section id="quote" className="relative py-24 md:py-36" aria-label="Statement">
      <div className="container">
        <blockquote className="mx-auto max-w-5xl">
          <p className="font-body text-[clamp(1.35rem,2.6vw+0.6rem,2.75rem)] font-medium leading-[1.35] tracking-tight text-fg">
            <span className="text-fg-subtle">“</span>
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block will-change-transform"
                initial={{ opacity: 0.2, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i * 0.018, 1.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
            <span className="text-fg-subtle">”</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
