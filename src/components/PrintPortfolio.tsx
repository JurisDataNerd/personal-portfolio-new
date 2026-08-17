import React from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { TechIcon } from "./TechIcon";

export function PrintPortfolio() {
  const { projects, experience } = site;
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="print-portfolio-document"
      className="hidden print:block text-slate-900 bg-white antialiased font-sans leading-relaxed text-[10pt]"
      style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
    >
      {/* ══════════════════════════════════════════════════════════════
          PAGE 1: DOSSIER HEADER, SUMMARY, SKILLS MATRIX & EXPERIENCE
          ══════════════════════════════════════════════════════════════ */}
      <div className="print-page pb-4">
        {/* ── Document Header & Profile Bar ── */}
        <header className="border-b-2 border-slate-900 pb-5 mb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tight text-slate-950 uppercase">
                  {site.name}
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[8pt] font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Fullstack Developer & Engineer
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-700 mt-0.5 tracking-wide">
                Specialized in React, Next.js, Node.js, Supabase, PostgreSQL & Web Architecture
              </p>
            </div>

            {/* Print Timestamp & Dossier Label */}
            <div className="text-right text-[8pt] text-slate-500 font-mono">
              <div>PORTFOLIO DOSSIER</div>
              <div>UPDATED {currentYear}</div>
            </div>
          </div>

          {/* Contact & Links Bar */}
          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-200 text-[8.5pt]">
            <div className="flex items-center gap-1.5 text-slate-700">
              <svg className="w-3.5 h-3.5 text-slate-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${site.email}`} className="font-medium hover:underline text-slate-900 truncate">
                {site.email}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <svg className="w-3.5 h-3.5 text-slate-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{site.phone}</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <svg className="w-3.5 h-3.5 text-slate-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <a href="https://github.com/JurisDataNerd" className="font-medium hover:underline text-slate-900 truncate">
                github.com/JurisDataNerd
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <svg className="w-3.5 h-3.5 text-slate-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="https://www.linkedin.com/in/fauzanarisanto/" className="font-medium hover:underline text-slate-900 truncate">
                linkedin.com/in/fauzanarisanto
              </a>
            </div>
          </div>
        </header>

        {/* ── Executive Summary ── */}
        <section className="mb-5 print-avoid-break">
          <h2 className="text-[10pt] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900 inline-block" />
            Executive Profile & Philosophy
          </h2>
          <p className="text-[9pt] leading-relaxed text-slate-700 text-justify">
            {site.about.paragraphs.join(" ")} {site.skills.closing}
          </p>
        </section>

        {/* ── Core Technical Stack Matrix ── */}
        <section className="mb-5 print-avoid-break">
          <h2 className="text-[10pt] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900 inline-block" />
            Technical Stack & Engineering Matrix
          </h2>

          <div className="grid grid-cols-2 gap-2 text-[8.5pt]">
            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
              <span className="font-bold text-slate-900 block text-[8pt] uppercase tracking-wider mb-1">
                Frontend & UI Engineering
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["React 19", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "WebGL", "Figma"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-800 text-[7.5pt] font-medium">
                    <TechIcon name={t} className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
              <span className="font-bold text-slate-900 block text-[8pt] uppercase tracking-wider mb-1">
                Backend & Database Architecture
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "PostgreSQL", "Supabase", "MongoDB", "REST APIs", "WebSockets"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-800 text-[7.5pt] font-medium">
                    <TechIcon name={t} className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
              <span className="font-bold text-slate-900 block text-[8pt] uppercase tracking-wider mb-1">
                Infrastructure & Cloud DevOps
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Linux Admin", "Docker", "Git / GitHub", "Vercel", "Cloudflare R2", "Midtrans Payment Gateway"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-800 text-[7.5pt] font-medium">
                    <TechIcon name={t} className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
              <span className="font-bold text-slate-900 block text-[8pt] uppercase tracking-wider mb-1">
                Specialized Domains & AI Tooling
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Web3 & Smart Contracts", "Solidity", "Ethers.js / Viem", "Python", "AI Integration", "Prompt Engineering"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-800 text-[7.5pt] font-medium">
                    <TechIcon name={t} className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Professional Experience ── */}
        <section className="mb-4 print-avoid-break">
          <h2 className="text-[10pt] font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900 inline-block" />
            Professional Experience & Career History
          </h2>

          <div className="space-y-3.5">
            {experience.items.map((item) => (
              <div key={item.id} className="border-l-2 border-slate-900 pl-3 py-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-[9.5pt] text-slate-950">{item.role}</h3>
                    <div className="text-[8.5pt] font-medium text-slate-700">
                      {item.company} <span className="text-slate-400">•</span> {item.location}
                    </div>
                  </div>
                  <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-mono shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-[8.5pt] leading-relaxed text-slate-700 text-justify">
                  {item.description}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[7pt] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Honors & Awards Snapshot ── */}
        <section className="mt-4 pt-3 border-t border-slate-200 print-avoid-break">
          <h2 className="text-[10pt] font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            Honors, Awards & Competitions
          </h2>
          <div className="grid grid-cols-3 gap-2 text-[8pt]">
            <div className="p-2 rounded bg-amber-50/70 border border-amber-200">
              <div className="font-bold text-amber-900">1st Place Winner</div>
              <div className="text-slate-700 text-[7.5pt]">Informatics Studios 2.0 (SISEMOK)</div>
              <div className="text-slate-500 text-[7pt] mt-0.5 font-mono">UNU Yogyakarta · 2025</div>
            </div>
            <div className="p-2 rounded bg-amber-50/70 border border-amber-200">
              <div className="font-bold text-amber-900">Top 13 National Finalist</div>
              <div className="text-slate-700 text-[7.5pt]">Global Hackatom Indonesia (AgriNuklir)</div>
              <div className="text-slate-500 text-[7pt] mt-0.5 font-mono">National Competition · 2025</div>
            </div>
            <div className="p-2 rounded bg-amber-50/70 border border-amber-200">
              <div className="font-bold text-amber-900">Top 10 & Jury Recognition</div>
              <div className="text-slate-700 text-[7.5pt]">QS Impact Youth Summit (Santri)</div>
              <div className="text-slate-500 text-[7pt] mt-0.5 font-mono">Global SDG Summit · 2025</div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PAGE 2 & PAGE 3: COMPREHENSIVE FEATURED PROJECTS SHOWCASE
          ══════════════════════════════════════════════════════════════ */}
      <div className="print-page-break-before pt-6">
        <div className="border-b-2 border-slate-900 pb-3 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-950">
              Featured Engineering Projects Showcase
            </h2>
            <p className="text-[8.5pt] text-slate-600 font-medium">
              In-depth breakdown of fullstack applications, production systems, and award-winning solutions
            </p>
          </div>
          <span className="text-[8pt] font-mono text-slate-500 uppercase">
            6 Core Projects
          </span>
        </div>

        {/* ── Project Grid / Showcase ── */}
        <div className="space-y-6">
          {projects.items.map((project, idx) => (
            <article
              key={project.id}
              className="print-project-card p-4 rounded-xl border border-slate-200 bg-slate-50/40 print-avoid-break shadow-xs"
            >
              {/* Project Card Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 mb-3">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-lg font-black text-slate-950 tracking-tight">
                      {project.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[7pt] font-bold uppercase tracking-wider bg-slate-200/80 text-slate-800 border border-slate-300">
                      {project.status || "Completed"}
                    </span>
                    {project.id === "04" && (
                      <span className="px-2 py-0.5 rounded text-[7pt] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                        Top 13 Finalist
                      </span>
                    )}
                    {project.id === "05" && (
                      <span className="px-2 py-0.5 rounded text-[7pt] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                        1st Place Winner
                      </span>
                    )}
                    {project.id === "06" && (
                      <span className="px-2 py-0.5 rounded text-[7pt] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                        Top 10 Finalist
                      </span>
                    )}
                  </div>
                  <p className="text-[8.5pt] font-semibold text-slate-700 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="text-right text-[8pt] text-slate-600 shrink-0 font-medium">
                  <div className="font-bold text-slate-900">{project.role}</div>
                  <div className="font-mono text-slate-500">{project.year}</div>
                </div>
              </div>

              {/* Project Card Body: Visual Thumbnail + Deep Technical Content */}
              <div className="grid grid-cols-12 gap-4 items-start">
                {/* Visual Snapshot */}
                <div className="col-span-4">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-300 bg-slate-200">
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      fill
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Links */}
                  <div className="mt-2.5 space-y-1 text-[7.5pt]">
                    {project.liveUrl && (
                      <div className="flex items-center gap-1 text-slate-700 truncate">
                        <span className="font-bold text-slate-900">Live:</span>
                        <a href={project.liveUrl} className="hover:underline text-blue-700 truncate font-mono">
                          {project.liveUrl.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )}
                    {project.githubUrl && (
                      <div className="flex items-center gap-1 text-slate-700 truncate">
                        <span className="font-bold text-slate-900">Code:</span>
                        <a href={project.githubUrl} className="hover:underline text-slate-800 truncate font-mono">
                          {project.githubUrl.replace(/^https?:\/\/github\.com\//, "gh/")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative & Feature Bullets */}
                <div className="col-span-8 flex flex-col justify-between">
                  <div>
                    <p className="text-[8.5pt] leading-relaxed text-slate-700 text-justify">
                      {project.fullDescription || project.description}
                    </p>

                    {/* Key Technical Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mt-2.5">
                        <span className="text-[7.5pt] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                          Key Architecture & Features:
                        </span>
                        <ul className="grid grid-cols-1 gap-1 text-[8pt] text-slate-700">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1.5">
                              <span className="text-slate-900 font-bold leading-none mt-0.5">•</span>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Technology Pills */}
                  <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white text-slate-800 text-[7pt] font-medium border border-slate-300"
                      >
                        <TechIcon name={tag} className="w-2.5 h-2.5 text-slate-700" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Document Sign-Off & Verification Footer ── */}
        <footer className="mt-8 pt-4 border-t-2 border-slate-900 flex items-center justify-between text-[8pt] text-slate-500 font-mono print-avoid-break">
          <div>
            <span>FAUZAN ARISANTO · PORTFOLIO & PROJECTS DOSSIER</span>
          </div>
          <div>
            <span>AVAILABLE FOR FULLSTACK & SOFTWARE ENGINEERING ROLES</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
