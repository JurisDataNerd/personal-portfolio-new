"use client";

import { useEffect } from "react";
import { site } from "@/data/site";

export function PrintController() {
  useEffect(() => {
    let originalTitle = document.title;
    const printTitle = `${site.name.replace(/\s+/g, "_")}_Fullstack_Developer_Portfolio_Dossier`;

    const handleBeforePrint = () => {
      originalTitle = document.title;
      document.title = printTitle;
    };

    const handleAfterPrint = () => {
      document.title = originalTitle;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Triggered by Ctrl+P or Cmd+P
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        document.title = printTitle;
        // Allow the default browser print dialog to open naturally with the optimized print layout
      }
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
