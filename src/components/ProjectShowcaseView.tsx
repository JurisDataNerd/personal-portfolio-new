"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectItem } from "@/data/site";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { TechIcon } from "./TechIcon";

type Props = {
  project: ProjectItem;
};

type ThemeConfig = {
  bg: string;
  fg: string;
  fgMuted: string;
  fgSubtle: string;
  line: string;
};

const darkTheme: ThemeConfig = {
  bg: "#0e0e0e",
  fg: "#f5f5f5",
  fgMuted: "rgba(245, 245, 245, 0.65)",
  fgSubtle: "rgba(245, 245, 245, 0.4)",
  line: "rgba(255, 255, 255, 0.12)",
};

const lightTheme: ThemeConfig = {
  bg: "#ffffff",
  fg: "#111111",
  fgMuted: "rgba(17, 17, 17, 0.65)",
  fgSubtle: "rgba(17, 17, 17, 0.4)",
  line: "rgba(0, 0, 0, 0.12)",
};

const creamTheme: ThemeConfig = {
  bg: "#f3f2ed",
  fg: "#111111",
  fgMuted: "rgba(17, 17, 17, 0.7)",
  fgSubtle: "rgba(17, 17, 17, 0.45)",
  line: "rgba(0, 0, 0, 0.14)",
};

const sectionThemes: Record<string, ThemeConfig> = {
  "sc-hero": darkTheme,
  "sc-narrative": darkTheme,
  "sc-gallery": lightTheme,
  "sc-next": creamTheme,
  "sc-contact": darkTheme,
};

function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--fg", theme.fg);
  root.style.setProperty("--fg-muted", theme.fgMuted);
  root.style.setProperty("--fg-subtle", theme.fgSubtle);
  root.style.setProperty("--line", theme.line);
}

export function ProjectShowcaseView({ project }: Props) {
  useEffect(() => {
    // Set dark theme immediately on mount
    applyTheme(darkTheme);

    const ids = Object.keys(sectionThemes);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most-visible entry among those intersecting
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
              bestEntry = entry;
            }
          }
        }
        if (bestEntry) {
          const theme = sectionThemes[bestEntry.target.id];
          if (theme) applyTheme(theme);
        }
      },
      { threshold: [0.1, 0.3, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* ── Hero: Giant Title ── */}
        <section id="sc-hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.88] uppercase tracking-tight text-fg">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ── Narrative & Meta ── */}
        <section id="sc-narrative" className="pb-20 md:pb-32">
          <div className="container">
            <div className="grid gap-12 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
              {/* Meta Columns */}
              <div className="grid grid-cols-3 gap-4 md:col-span-4 md:flex md:flex-col md:gap-8">
                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-fg-subtle">Year</span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.14em] text-fg md:text-base font-medium">{project.year}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-fg-subtle">Role</span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.14em] text-fg md:text-base font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-fg-subtle">Status</span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.14em] text-fg md:text-base font-medium">{project.status || "Completed"}</span>
                </div>

                {/* Tech Stack */}
                {project.tags.length > 0 && (
                  <div className="col-span-3 md:col-span-1">
                    <span className="block text-xs uppercase tracking-[0.2em] text-fg-subtle mb-2">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.12em] text-fg-muted">
                          <TechIcon name={tag} className="h-3.5 w-3.5" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Description & CTA */}
              <div className="flex flex-col justify-between md:col-span-7 md:col-start-6">
                <motion.p
                  className="text-lg leading-relaxed text-fg-muted sm:text-xl md:text-2xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  {project.fullDescription || project.description}
                </motion.p>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-draw font-display text-2xl uppercase tracking-wider text-fg sm:text-3xl">
                      See Project<span aria-hidden>→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-draw font-display text-2xl uppercase tracking-wider text-fg-muted hover:text-fg sm:text-3xl">
                      Source Code<span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery (scrolls to white) ── */}
        <section id="sc-gallery" className="py-20 md:py-32">
          <div className="container">
            <div className="mb-10">
              <h2 className="font-display text-3xl text-fg sm:text-4xl md:text-5xl uppercase tracking-tight">
                Project Preview
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-28">
              {project.gallery.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  className="relative aspect-[16/10] w-full overflow-hidden border border-line shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} Screenshot ${idx + 1}`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Next Project ── */}
        {project.nextProject && (
          <section id="sc-next" className="border-t border-line py-20 md:py-28">
            <div className="container">
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-fg-subtle">(Next Project)</p>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-fg-muted sm:text-sm">
                    {project.nextProject.year} · {project.nextProject.role}
                  </span>
                  <Link href={project.nextProject.href}>
                    <h2 className="mt-2 font-display text-5xl text-fg transition-colors hover:text-fg-muted sm:text-7xl md:text-8xl">
                      {project.nextProject.title}
                    </h2>
                  </Link>
                </div>
                <Link href={project.nextProject.href} className="link-draw font-display text-2xl uppercase tracking-wider text-fg sm:text-3xl">
                  Next Project<span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Contact & Footer ── */}
        <div id="sc-contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
