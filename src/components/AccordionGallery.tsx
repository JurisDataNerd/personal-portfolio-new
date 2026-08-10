"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  description?: string;
  link?: string;
}

export interface AccordionGalleryProps {
  items: (string | AccordionGalleryItem)[];
  defaultIndex?: number;
  expandRatio?: number; // e.g. 0.52 (52% of total width for active item)
  trigger?: "hover" | "click";
  className?: string;
  showLightbox?: boolean;
}

export function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
  className = "",
  showLightbox = true,
}: AccordionGalleryProps) {
  // Normalize items to standard AccordionGalleryItem object format
  const normalizedItems: AccordionGalleryItem[] = items.map((item, idx) => {
    if (typeof item === "string") {
      return {
        image: item,
        label: `Preview ${idx + 1}`,
      };
    }
    return {
      ...item,
      label: item.label || `Preview ${idx + 1}`,
    };
  });

  const total = normalizedItems.length;
  const initialIndex = Math.min(Math.max(0, defaultIndex), total - 1);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Calculate flex grow ratios based on expandRatio prop
  // active item flex grow: expandRatio * 10
  // inactive items flex grow: ((1 - expandRatio) / (total - 1)) * 10
  const activeFlex = expandRatio * 10;
  const inactiveFlex = total > 1 ? ((1 - expandRatio) / (total - 1)) * 10 : 1;

  const handleInteraction = (index: number, eventType: "hover" | "click") => {
    if (eventType === trigger || trigger === "click") {
      setActiveIndex(index);
    }
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (showLightbox) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev === 0 ? total - 1 : prev - 1) : null));
  }, [total]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev === total - 1 ? 0 : prev + 1) : null));
  }, [total]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevLightbox, nextLightbox]);

  if (total === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* ── Desktop & Tablet Accordion Showcase (md and up) ── */}
      <div className="hidden md:flex h-[540px] lg:h-[620px] w-full gap-3 overflow-hidden rounded-xl border border-line bg-bg-elevated/40 p-2 backdrop-blur-sm">
        {normalizedItems.map((item, index) => {
          const isActive = activeIndex === index;
          const flexValue = isActive ? activeFlex : inactiveFlex;

          return (
            <motion.div
              key={index}
              className="relative h-full overflow-hidden rounded-lg cursor-pointer group select-none"
              animate={{ flex: flexValue }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => handleInteraction(index, "hover")}
              onClick={() => handleItemClick(index)}
            >
              {/* Screenshot Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.label || `Screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 800px"
                  className={`object-cover object-top transition-transform duration-700 ease-out ${
                    isActive ? "scale-100" : "scale-105 filter brightness-[0.7] group-hover:brightness-[0.88]"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  isActive
                    ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"
                    : "bg-gradient-to-t from-black/85 via-black/40 to-black/30 opacity-70 group-hover:opacity-50"
                }`}
              />

              {/* Number Badge (Always Visible) */}
              <div className="absolute top-4 left-4 z-10 flex items-center justify-center">
                <span
                  className={`inline-flex items-center justify-center font-display text-xs tracking-wider transition-all duration-300 rounded-full border px-3 py-1 ${
                    isActive
                      ? "bg-white/90 text-black border-white shadow-lg"
                      : "bg-black/60 text-white/80 border-white/20 backdrop-blur-md group-hover:border-white/50 group-hover:text-white"
                  }`}
                >
                  0{index + 1}
                </span>
              </div>

              {/* Lightbox / Zoom Action Icon */}
              {showLightbox && isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md border border-white/20 hover:bg-black/80 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>Click to Expand</span>
                </motion.div>
              )}

              {/* Collapsed Vertical Label (when not active) */}
              {!isActive && (
                <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
                  <div className="writing-mode-vertical origin-bottom-left rotate-180 transform font-display text-lg uppercase tracking-wider text-white/70 group-hover:text-white transition-colors line-clamp-1">
                    {item.label}
                  </div>
                </div>
              )}

              {/* Expanded Caption & Details (when active) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute bottom-0 inset-x-0 p-6 z-10 text-white"
                  >
                    <div className="max-w-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                          Preview {index + 1} of {total}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl text-white tracking-wide uppercase">
                        {item.label}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white font-medium hover:underline pt-1"
                        >
                          View Details ↗
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile Layout (under md): Touch-Friendly Expanding Cards ── */}
      <div className="flex md:hidden flex-col gap-4 w-full">
        {normalizedItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
                isActive ? "border-line shadow-2xl h-[360px]" : "border-line/60 h-[120px]"
              }`}
              onClick={() => handleItemClick(index)}
              layout
            >
              <Image
                src={item.image}
                alt={item.label || `Screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={`object-cover object-top transition-all duration-500 ${
                  isActive ? "brightness-95" : "brightness-[0.6]"
                }`}
              />
              <div
                className={`absolute inset-0 ${
                  isActive
                    ? "bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                    : "bg-black/40"
                }`}
              />
              {/* Header Badge & Title */}
              <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between z-10">
                <span className="font-display text-xs tracking-wider rounded-full bg-black/60 px-3 py-1 text-white border border-white/20 backdrop-blur-md">
                  0{index + 1}
                </span>
                <span className="font-display text-sm uppercase text-white/90 tracking-wider">
                  {item.label}
                </span>
              </div>

              {/* Active Mobile Details */}
              {isActive && (
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 text-white">
                  {item.description && (
                    <p className="text-xs text-white/80 line-clamp-2 mb-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs text-white/70 pt-1 border-t border-white/20">
                    <span>Tap image to open fullscreen</span>
                    <span className="font-display uppercase tracking-wider text-white">Expand ↗</span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ── Slide Navigation Pointers / Dots Below Accordion ── */}
      <div className="mt-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          {normalizedItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-fg"
                  : "w-2 bg-fg-subtle hover:bg-fg-muted"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="text-xs font-mono text-fg-subtle uppercase tracking-wider">
          {activeIndex + 1} / {total}
        </div>
      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 p-4 sm:p-8 backdrop-blur-xl select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/80 border border-white/20">
                  {lightboxIndex + 1} of {total}
                </span>
                <h4 className="font-display text-lg uppercase tracking-wider text-white">
                  {normalizedItems[lightboxIndex]?.label}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full bg-white/10 p-2.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors border border-white/20"
                aria-label="Close Lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Lightbox Image View */}
            <div
              className="relative flex-1 my-4 w-full h-full max-w-6xl mx-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-h-[82vh] overflow-hidden rounded-lg border border-white/10 shadow-2xl"
              >
                <Image
                  src={normalizedItems[lightboxIndex].image}
                  alt={normalizedItems[lightboxIndex].label || "Project Full Preview"}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Prev / Next Navigation Arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white/90 hover:bg-black/90 hover:text-white border border-white/20 shadow-2xl transition-all"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white/90 hover:bg-black/90 hover:text-white border border-white/20 shadow-2xl transition-all"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Bottom Bar Hints */}
            <div
              className="text-center text-xs text-white/50 font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">ESC</kbd> to close · Use arrow keys <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">←</kbd> <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">→</kbd> to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionGallery;
