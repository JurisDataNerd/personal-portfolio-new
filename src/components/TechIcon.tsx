"use client";

import React from "react";

type Props = {
  name: string;
  className?: string;
};

/** Exact user-uploaded SVG file mappings in /public/ */
const publicSvgMap: Record<string, string> = {
  react: "/react.svg",
  next: "/nextdotjs.svg",
  nextdotjs: "/nextdotjs.svg",
  typescript: "/typescript.svg",
  tailwind: "/tailwindcss.svg",
  tailwindcss: "/tailwindcss.svg",
  figma: "/figma.svg",
  node: "/nodejs.svg",
  nodejs: "/nodejs.svg",
  express: "/express.svg",
  expressjs: "/express.svg",
  postgres: "/postgresql.svg",

  postgresql: "/postgresql.svg",
  supabase: "/supabase.svg",
  mongodb: "/mongodb.svg",
  linux: "/linux.svg",
  docker: "/docker.svg",
  github: "/github.svg",
  copilot: "/github-copilot.svg",
  "github-copilot": "/github-copilot.svg",
  vscode: "/visual-studio-code.svg",
  "visual-studio-code": "/visual-studio-code.svg",
  vercel: "/vercel.svg",
  cloudflare: "/cloudflare.svg",
  openai: "/openai.svg",
  chatgpt: "/openai.svg",
  claude: "/claude.svg",
  qwen: "/qwen.svg",
  deepseek: "/deepseek.svg",
  python: "/python.svg",
};

export function TechIcon({ name, className = "h-7 w-7" }: Props) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9-]/g, "");

  // Priority 1: Direct match with user's uploaded SVG in /public/
  for (const [key, path] of Object.entries(publicSvgMap)) {
    if (normalized.includes(key)) {
      return (
        <img
          src={path}
          alt={`${name} logo`}
          className={`${className} object-contain shrink-0`}
        />
      );
    }
  }

  // Fallback for any other tech names
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}
