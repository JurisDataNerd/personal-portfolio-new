"use client";

import React from "react";

type Props = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = "h-4 w-4" }: Props) {
  const normalized = name.toLowerCase();

  if (normalized.includes("next")) {
    // Next.js Icon
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#mask-next)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V69.757L137.604 161.439C141.874 160.366 145.856 159.043 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="12.5" height="72" fill="white" />
        </g>
      </svg>
    );
  }

  if (normalized.includes("supabase")) {
    // Supabase Icon
    return (
      <svg className={className} viewBox="0 0 106 106" fill="none">
        <path d="M58.077 104.093C54.49 107.493 48.665 104.952 48.665 100.076V59.4261H9.86656C3.31016 59.4261 -0.669842 51.9861 3.03016 46.5761L47.923 2.5761C51.51 -0.823901 57.335 1.7171 57.335 6.5931V47.2431H96.1334C102.69 47.2431 106.67 54.6831 102.97 60.0931L58.077 104.093Z" fill="#3ECF8E" />
      </svg>
    );
  }

  if (normalized.includes("react")) {
    // React Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="10" fill="#61DAFB" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
      </svg>
    );
  }

  if (normalized.includes("typescript")) {
    // TypeScript Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#3178C6" />
        <path d="M48 68V36H57V68H48ZM63 68V44H70V68H63ZM63 36H70V40H63V36Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    // TailwindCSS Icon
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none">
        <path d="M25 5C15 5 8.75 10 6.25 20C10 15 15 13.75 18.75 15C22.5 16.25 26.25 20 31.25 25C37.5 31.25 43.75 35 56.25 35C66.25 35 72.5 30 75 20C71.25 25 66.25 26.25 62.5 25C58.75 23.75 55 20 50 15C43.75 8.75 37.5 5 25 5ZM6.25 25C-3.75 25 -10 30 -12.5 40C-8.75 35 -3.75 33.75 0 35C3.75 36.25 7.5 40 12.5 45C18.75 51.25 25 55 37.5 55C47.5 55 53.75 50 56.25 40C52.5 45 47.5 46.25 43.75 45C40 43.75 36.25 40 31.25 35C25 28.75 18.75 25 6.25 25Z" fill="#38BDF8" transform="translate(12, 0)" />
      </svg>
    );
  }

  if (normalized.includes("node")) {
    // Node.js Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <path d="M50 5L90 28V72L50 95L10 72V28L50 5Z" fill="#5FA04E" />
        <path d="M50 20L75 35V65L50 80L25 65V35L50 20Z" fill="#333333" />
      </svg>
    );
  }

  if (normalized.includes("express")) {
    // Express.js Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />
        <text x="50" y="62" fontSize="36" fontWeight="bold" textAnchor="middle" fill="currentColor">ex</text>
      </svg>
    );
  }

  if (normalized.includes("postgres")) {
    // PostgreSQL Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM68 62C64 66 58 68 50 68C42 68 36 66 32 62C28 58 26 52 26 44C26 36 28 30 32 26C36 22 42 20 50 20C58 20 64 22 68 26C72 30 74 36 74 44C74 52 72 58 68 62Z" fill="#336791" />
      </svg>
    );
  }

  if (normalized.includes("framer") || normalized.includes("motion")) {
    // Framer Motion Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <path d="M20 10H80V40H50L80 70H50V100L20 70V40H50L20 10Z" fill="#0055FF" />
      </svg>
    );
  }

  if (normalized.includes("solidity") || normalized.includes("eth") || normalized.includes("viem") || normalized.includes("web3")) {
    // Ethereum / Solidity Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <path d="M50 10L15 50L50 70L85 50L50 10Z" fill="#62688F" />
        <path d="M50 10L50 70L85 50L50 10Z" fill="#454A75" />
        <path d="M50 75L15 55L50 90L85 55L50 75Z" fill="#62688F" />
        <path d="M50 75L50 90L85 55L50 75Z" fill="#454A75" />
      </svg>
    );
  }

  if (normalized.includes("socket")) {
    // WebSockets Icon
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#010101" strokeWidth="8" fill="none" />
        <path d="M35 50L45 60L65 40" stroke="#010101" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
