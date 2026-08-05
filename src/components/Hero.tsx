"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { MarqueeLine } from "./MarqueeLine";
import { PortraitDistortion } from "./PortraitDistortion";

export function Hero() {
  const [line1, line2, line3] = site.marquee;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-6 pt-24 md:pb-8 md:pt-28"
    >
      {/* Marquee stack + bottom-aligned enlarged portrait with liquid distortion */}
      <div className="relative flex flex-1 flex-col justify-center">
        {/* Marquee stack with mix-blend-difference */}
        <div className="relative z-[1] flex flex-col justify-center gap-0 py-4 mix-blend-difference text-white">
          <MarqueeLine text={line1} direction={-1} speed={36} />
          <MarqueeLine text={line2} direction={1} speed={28} />
          <MarqueeLine text={line3} direction={-1} speed={32} />
        </div>

        {/* Enlarged portrait image with liquid distortion on hover */}
        <div className="absolute bottom-0 left-1/2 z-[2] h-[60vh] w-[min(380px,90vw)] -translate-x-1/2 sm:h-[68vh] sm:w-[460px] md:h-[75vh] md:w-[540px] lg:w-[600px]">
          <motion.div
            className="relative h-full w-full"
            // Ganti pakai opacity biar foto bisa membesar keluar batas tanpa kepotong
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <PortraitDistortion src={site.portrait.src} alt={site.portrait.alt} />
          </motion.div>
        </div>
      </div>

      {/* Meta bottom bar */}
      <div className="container relative z-[3] flex items-center justify-between pt-4">
        <motion.p
          className="text-xs uppercase tracking-[0.14em] text-fg sm:text-sm font-medium"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {site.location}
        </motion.p>

        {site.openToWork && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="pulse-dot" aria-hidden />
            <span className="text-xs uppercase tracking-[0.14em] text-fg sm:text-sm font-medium">
              Open to work
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
