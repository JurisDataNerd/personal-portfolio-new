"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectItem } from "@/data/site";

type Props = {
  project: ProjectItem | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#0e0e0e]/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-none border border-line bg-[#121212] p-6 text-fg shadow-2xl md:p-10"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header bar */}
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fg-muted">
                <span className="text-fg-subtle">({project.id})</span>
                <span>{project.role}</span>
                <span>·</span>
                <span>{project.year}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors hover:text-fg"
              >
                <span>Close</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line transition-transform duration-300 group-hover:rotate-90">
                  ✕
                </span>
              </button>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-display text-4xl text-fg sm:text-5xl md:text-6xl">
              {project.title}
            </h2>
            <p className="mt-1 text-sm uppercase tracking-[0.14em] text-fg-muted md:text-base">
              {project.subtitle}
            </p>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-fg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Media preview */}
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden border border-line">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="mt-8 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Overview
                </h3>
                <p className="text-base leading-relaxed text-fg-muted md:text-lg">
                  {project.fullDescription || project.description}
                </p>
              </div>

              <div className="md:col-span-5">
                <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Key Deliverables
                </h3>
                <ul className="flex flex-col gap-2.5 text-sm text-fg-muted">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 text-xs text-fg-subtle">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions footer */}
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-fg px-6 py-3 text-xs uppercase tracking-[0.18em] text-fg transition-colors hover:bg-fg hover:text-bg"
                >
                  Live Demo ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-6 py-3 text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors hover:border-fg hover:text-fg"
                >
                  GitHub Repository ↗
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
