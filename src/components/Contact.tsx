"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Contact() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const emailAddress = site.email.toLowerCase();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative border-t border-line pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="container">
        <motion.p
          className="mb-8 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {site.contact.intro}
        </motion.p>

        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-fg-subtle">
            {site.contact.cta}
          </p>
          <div className="group relative inline-block">
            <a
              href={`mailto:${emailAddress}`}
              onClick={handleCopyEmail}
              className="link-draw font-display text-3xl text-fg sm:text-5xl md:text-6xl lg:text-7xl fill-current lowercase tracking-normal"
              title="Click to copy email"
            >
              {emailAddress}
            </a>

            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-9 left-0 rounded bg-fg px-3 py-1 text-xs uppercase tracking-widest text-bg shadow font-sans"
              >
                Copied to clipboard! ✓
              </motion.span>
            )}
          </div>

          {site.phone ? (
            <a
              href={`tel:${String(site.phone).replace(/\s/g, "")}`}
              className="mt-4 block text-base uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-fg sm:text-lg"
            >
              {site.phone}
            </a>
          ) : null}
        </motion.div>

        <footer className="flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
              © {year} {site.footer.brand} · {time ? `JKT ${time} UTC+7` : ""}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-fg-muted">
              {site.footer.credit}
            </p>
          </div>

          <ul className="flex flex-wrap gap-6">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-sm uppercase tracking-[0.16em] text-fg"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
