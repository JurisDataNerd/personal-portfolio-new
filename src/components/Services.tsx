"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

export function Services() {
  const { services } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24" aria-label="Services">
      <div className="container">
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-fg-muted sm:text-sm md:mb-10">
          {services.label}
        </p>

        <ul className="list-none p-0">
          {services.items.map((service, index) => {
            const isOpen = openIndex === index;
            const odd = index % 2 === 1;

            return (
              <li key={service.title} className="service-row" data-open={isOpen}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-8"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-display text-4xl text-fg sm:text-5xl md:text-6xl lg:text-7xl">
                    {service.title}
                  </span>
                  <span className="hidden shrink-0 items-center gap-3 text-xs uppercase tracking-[0.16em] text-fg-subtle sm:flex">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-[0.65rem] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                    <span>{service.hint}</span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-sm transition-transform duration-300 sm:hidden ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`pb-7 text-sm uppercase tracking-[0.12em] text-fg-muted sm:text-base md:pb-9 ${
                          odd ? "md:text-right" : ""
                        }`}
                      >
                        {service.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <motion.p
          className="mt-14 max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg md:mt-20 md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {services.closing}
        </motion.p>
      </div>
    </section>
  );
}
