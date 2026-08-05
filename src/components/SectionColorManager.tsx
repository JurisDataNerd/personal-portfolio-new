"use client";

import { useEffect } from "react";

type ThemeConfig = {
  bg: string;
  fg: string;
  fgMuted: string;
  fgSubtle: string;
  line: string;
};

const themes: Record<string, ThemeConfig> = {
  hero: {
    bg: "#ffffff",
    fg: "#111111",
    fgMuted: "rgba(17, 17, 17, 0.65)",
    fgSubtle: "rgba(17, 17, 17, 0.4)",
    line: "rgba(0, 0, 0, 0.12)",
  },
  about: {
    bg: "#f3f2ed",
    fg: "#111111",
    fgMuted: "rgba(17, 17, 17, 0.7)",
    fgSubtle: "rgba(17, 17, 17, 0.45)",
    line: "rgba(0, 0, 0, 0.14)",
  },
  projects: {
    bg: "#0e0e0e",
    fg: "#f5f5f5",
    fgMuted: "rgba(245, 245, 245, 0.65)",
    fgSubtle: "rgba(245, 245, 245, 0.4)",
    line: "rgba(255, 255, 255, 0.12)",
  },
  quote: {
    bg: "#16161a",
    fg: "#f5f5f5",
    fgMuted: "rgba(245, 245, 245, 0.7)",
    fgSubtle: "rgba(245, 245, 245, 0.45)",
    line: "rgba(255, 255, 255, 0.15)",
  },
  services: {
    bg: "#ffffff",
    fg: "#111111",
    fgMuted: "rgba(17, 17, 17, 0.65)",
    fgSubtle: "rgba(17, 17, 17, 0.4)",
    line: "rgba(0, 0, 0, 0.12)",
  },
  contact: {
    bg: "#0e0e0e",
    fg: "#f5f5f5",
    fgMuted: "rgba(245, 245, 245, 0.65)",
    fgSubtle: "rgba(245, 245, 245, 0.4)",
    line: "rgba(255, 255, 255, 0.12)",
  },
};

export function SectionColorManager() {
  useEffect(() => {
    const applyTheme = (theme: ThemeConfig) => {
      const root = document.documentElement;
      root.style.setProperty("--bg", theme.bg);
      root.style.setProperty("--fg", theme.fg);
      root.style.setProperty("--fg-muted", theme.fgMuted);
      root.style.setProperty("--fg-subtle", theme.fgSubtle);
      root.style.setProperty("--line", theme.line);
    };

    // Default hero theme
    applyTheme(themes.hero);

    const sectionIds = ["top", "about", "projects", "quote", "services", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "top") applyTheme(themes.hero);
            else if (id === "about") applyTheme(themes.about);
            else if (id === "projects") applyTheme(themes.projects);
            else if (id === "quote") applyTheme(themes.quote);
            else if (id === "services") applyTheme(themes.services);
            else if (id === "contact") applyTheme(themes.contact);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
