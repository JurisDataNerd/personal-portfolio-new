"use client";

import { useEffect } from "react";

type ThemeConfig = {
  bg: string;
  fg: string;
  fgMuted: string;
  fgSubtle: string;
  line: string;
};

const lightTheme: ThemeConfig = {
  bg: "#ffffff",
  fg: "#111111",
  fgMuted: "rgba(17, 17, 17, 0.65)",
  fgSubtle: "rgba(17, 17, 17, 0.4)",
  line: "rgba(0, 0, 0, 0.12)",
};

const darkTheme: ThemeConfig = {
  bg: "#0e0e0e",
  fg: "#f5f5f5",
  fgMuted: "rgba(245, 245, 245, 0.65)",
  fgSubtle: "rgba(245, 245, 245, 0.4)",
  line: "rgba(255, 255, 255, 0.12)",
};

const themes: Record<string, ThemeConfig> = {
  top: lightTheme,
  about: lightTheme,
  experience: lightTheme,
  projects: lightTheme,
  quote: darkTheme,
  skills: darkTheme,
  contact: darkTheme,
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

    // Default top theme
    applyTheme(lightTheme);

    const sectionIds = ["top", "about", "experience", "projects", "quote", "skills", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const theme = themes[id];
            if (theme) applyTheme(theme);
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

