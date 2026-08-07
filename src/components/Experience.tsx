"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { TechIcon } from "./TechIcon";
import Typewriter from "./Typewriter";
import { Lanyard } from "./Lanyard";

export function Experience() {
  const { experience } = site;
  const [openId, setOpenId] = useState<string | null>("01");
  const [playKey, setPlayKey] = useState<number>(0);

  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center py-16 md:py-24" aria-label="Professional Experience">
      <div className="container">
        {/* Section Divider */}
        <div className="mb-10 flex items-center justify-end border-b-2 border-line pb-4 md:mb-16 md:pb-5">
          <span className="text-xs uppercase tracking-[0.18em] text-fg-subtle">
            [ Career & Track Record ]
          </span>
        </div>

        {/* Responsive Grid Layout: 3D Lanyard on Left (Desktop), Title + Experience Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive 3D Lanyard Badge anchored to top section border */}
          <div className="hidden lg:block lg:col-span-5 h-[900px] sticky top-6 -mt-16 z-20">
            <Lanyard />
          </div>

          {/* Right Column: Section Header Title + Experience Rows */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-hidden mb-10 md:mb-14">
              <motion.h2
                className="font-body text-[clamp(2rem,4.5vw+1rem,4.5rem)] font-bold uppercase leading-[1.1] tracking-tight"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: false, margin: "-10% 0px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onViewportEnter={() => setPlayKey((k) => k + 1)}
              >
                <Typewriter text={experience.title} playKey={playKey} fast />
              </motion.h2>
            </div>

            <div className="flex flex-col border-t border-line">
              {experience.items.map((item, idx) => {
                const isOpen = openId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="group border-b border-line transition-colors duration-300 hover:bg-fg/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between py-6 text-left sm:items-center md:py-8"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        {item.logo && (
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-line bg-white p-1 shadow-sm sm:h-12 sm:w-12">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              className="object-contain p-0.5"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="font-display text-2xl uppercase text-fg sm:text-3xl md:text-4xl">
                            {item.role}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.14em] text-fg-muted sm:text-sm font-medium">
                            {item.company} <span className="hidden sm:inline text-fg-subtle">• {item.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-4 sm:gap-6">
                        <span className="hidden rounded-full border border-line px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-fg-muted sm:inline-block">
                          {item.period}
                        </span>
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-full border border-line text-sm transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          aria-hidden
                        >
                          +
                        </span>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pt-2 sm:pl-16 md:pl-20">
                            <div className="flex flex-wrap items-center gap-3 pb-4 text-xs uppercase tracking-[0.14em] text-fg-subtle sm:hidden">
                              <span>{item.period}</span>
                              <span>•</span>
                              <span>{item.location}</span>
                            </div>

                            <p className="max-w-3xl text-sm leading-relaxed text-fg-muted sm:text-base md:text-lg">
                              {item.description}
                            </p>

                            {/* Tech Tag Pills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-fg-muted"
                                >
                                  <TechIcon name={tag} className="h-3.5 w-3.5 text-fg" />
                                  <span>{tag}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
