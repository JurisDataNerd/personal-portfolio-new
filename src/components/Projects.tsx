"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { TechIcon } from "./TechIcon";
import Typewriter from "./Typewriter";
import { useState } from "react";

export function Projects() {
  const { projects } = site;
  const [playKey, setPlayKey] = useState<number>(0);

  return (
    <section id="projects" className="relative py-20 md:py-32">
      {/* Animated Section Heading */}
      <div className="container mb-16 flex flex-wrap items-end justify-between gap-4 md:mb-24">
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tight text-fg"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: false, margin: "-10% 0px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={() => setPlayKey((k) => k + 1)}
            >
              <Typewriter text={projects.title} playKey={playKey} fast />
            </motion.h2>
          </div>
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-fg-subtle sm:text-sm font-medium"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.hint}
        </motion.p>
      </div>

      {/* Projects list — revealed one by one */}
      <div className="flex flex-col gap-24 md:gap-36">
        {projects.items.map((project, index) => {
          const isOdd = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              className="container group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card Meta Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-fg-muted sm:text-sm font-medium">
                  <span>{project.role}</span>
                </div>

                <span className="text-xs uppercase tracking-[0.14em] text-fg-muted sm:text-sm font-medium">
                  {project.year}
                </span>
              </div>

              {/* Grid content */}
              <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
                {/* Media Image with Mask Reveal */}
                <motion.div
                  className={`md:col-span-7 ${isOdd ? "md:order-2 md:col-start-6" : ""}`}
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={project.href}
                    className="project-media relative block aspect-[16/10] w-full text-left overflow-hidden border border-line"
                  >
                    <div className="media-inner absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </Link>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className={`flex flex-col justify-center md:col-span-5 ${
                    isOdd ? "md:order-1 md:col-start-1" : "md:col-start-8"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={project.href}>
                    <h3 className="font-display text-5xl text-fg transition-colors hover:text-fg-muted sm:text-6xl md:text-7xl lg:text-8xl leading-none">
                      {project.title}
                    </h3>
                  </Link>

                  {project.subtitle ? (
                    <p className="mt-3 text-sm uppercase tracking-[0.14em] text-fg-muted font-medium">
                      {project.subtitle}
                    </p>
                  ) : null}

                  {/* Tech stack badges with SVG icons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-fg-muted"
                      >
                        <TechIcon name={tag} className="h-3.5 w-3.5 text-fg" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted sm:text-lg">
                    {project.description}
                  </p>

                  <Link
                    href={project.href}
                    className="link-draw mt-6 w-fit font-display text-2xl uppercase tracking-wider text-fg sm:text-3xl"
                  >
                    View Project
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
