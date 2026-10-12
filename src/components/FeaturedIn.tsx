"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import Typewriter from "./Typewriter";

export function FeaturedIn() {
  const { featuredIn } = site;
  const [playKey, setPlayKey] = useState<number>(0);

  if (!featuredIn || !featuredIn.items || featuredIn.items.length === 0) {
    return null;
  }

  return (
    <section
      id="featured-in"
      className="relative py-20 md:py-28 border-t border-line"
      aria-label="Featured In and Press Coverage"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-fg/[0.015] blur-[140px]"
        aria-hidden
      />

      <div className="container relative z-10">
        {/* Animated Section Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6 md:mb-16">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tight text-fg"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false, margin: "-10% 0px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={() => setPlayKey((k) => k + 1)}
            >
              <Typewriter text={featuredIn.title} playKey={playKey} fast />
            </motion.h2>
          </div>
        </div>

        {/* 2x2 Bento/Media Grid — compact and non-elongating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredIn.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-white/[0.015] p-5 sm:p-6 transition-all duration-300 hover:border-fg/40 hover:bg-white/[0.035]"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full justify-between"
                aria-label={`Read article: ${item.title}`}
              >
                <div>
                  {/* Image Container with Hover Zoom & Floating Pill */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line/60 bg-black/40 mb-5">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Category Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-mono uppercase tracking-wider bg-bg/85 backdrop-blur-md border border-line text-fg font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* External Link Pill Icon */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg/85 backdrop-blur-md border border-line text-fg-muted transition-colors duration-200 group-hover:border-fg group-hover:text-fg">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 12L12 4M12 4H6M12 4V10" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-fg-subtle">
                    <span>{item.publisher}</span>
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl text-fg tracking-wide uppercase transition-colors duration-200 group-hover:text-fg-muted leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-fg-muted/90 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Read Action */}
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs uppercase tracking-widest text-fg-subtle group-hover:text-fg font-medium transition-colors">
                  <span>Read Publication</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1 font-mono">
                    ↗
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
