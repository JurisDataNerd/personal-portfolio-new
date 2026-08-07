"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled || open ? "bg-[#0e0e0e]/80 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-5">
          <a
            href="/"
            className="group relative z-50 flex flex-col leading-none"
            onClick={close}
          >
            <span className="font-body text-sm font-medium uppercase tracking-[0.18em] text-fg md:text-base">
              {site.shortName}
            </span>
            <span className="font-body text-sm font-medium uppercase tracking-[0.18em] text-fg md:text-base">
              {site.lastName}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-baseline text-sm uppercase tracking-[0.16em] text-fg"
              >
                <span className="link-draw pb-0.5">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="relative z-50 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "close" : "menu"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu-overlay fixed inset-0 z-30 flex flex-col justify-center px-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="flex flex-col gap-8" aria-label="Mobile">
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <span className="font-display text-5xl text-fg sm:text-6xl">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
