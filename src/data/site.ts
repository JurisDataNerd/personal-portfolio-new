/**
 * Site content — edit this file to customize your portfolio.
 * Projects, contacts, copy, socials, and services all live here.
 */

export interface ProjectItem {
  id: string;
  slug: string;
  role: string;
  year: string;
  status: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  tags: string[];
  fullDescription: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  nextProject: {
    title: string;
    year: string;
    role: string;
    href: string;
  };
}

export const site = {
  name: "Fauzan Arisanto",
  shortName: "Fauzan",
  lastName: "Arisanto",
  title: "Fullstack Web Developer",
  description:
    "Fauzan Arisanto is a fullstack web developer designing and building digital experiences with a focus on craft, motion, and interaction.",
  location: "based in indonesia",
  openToWork: true,
  email: "arisantofauzan@gmail.com",
  phone: "+62 821 9609 1319",
  socials: [
    { label: "GitHub", href: "https://github.com/JurisDataNerd" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fauzanarisanto/" },
    { label: "Instagram", href: "https://www.instagram.com/fauzanarisanto/" },
    { label: "Twitter", href: "https://x.com/darkprince_oo" },
  ],
  nav: [
    { index: "01", label: "About", href: "/#about" },
    { index: "02", label: "Projects", href: "/#projects" },
    { index: "03", label: "Contact", href: "/#contact" },
  ],
  /** Hero marquee lines — large scrolling role titles */
  marquee: ["Fullstack developer", "Software engineer", "Vibe coder"],
  about: {
    index: "(01)",
    title: "About",
    paragraphs: [
      "I design and develop digital experiences with a focus on craft, motion, and interaction — creating interfaces where every detail is intentional.",
      "Based in Indonesia, I work at the intersection of creativity and engineering. From complex backend architecture to frontend motion polish, I bring ideas to life with meticulous attention to detail.",
    ],
  },
  projects: {
    title: "Featured Work",
    hint: "[Scroll to explore more]",
    items: [
      {
        id: "01",
        slug: "medskill-lms",
        role: "Fullstack Developer",
        year: "2025",
        status: "Completed",
        title: "Medskill Indonesia LMS",
        subtitle: "Medical E-Learning Platform",
        description:
          "An all-in-one medical learning management platform with automated credit tracking, interactive clinical quizzes, and adaptive video streaming.",
        href: "/projects/medskill-lms",
        image: "/images/medskill-1.png",
        imageAlt: "Medskill Indonesia LMS Showcase",
        gallery: [
          "/images/medskill-1.png",
          "/images/medskill-2.png",
          "/images/medskill-3.png",
          "/images/medskill-4.png",
          "/images/medskill-5.png",
        ],
        tags: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "TailwindCSS", "Framer Motion", "Cloudflare R2", "Midtrans Payment Gateway"],
        fullDescription:
          "This project pushed back on the idea that online medical training is just dry static content. Through research-driven design and systematic experimentation, I explored how healthcare education can come alive through interaction — blending real-time progress analytics, interactive diagnostic quizzes, and adaptive video streaming into an experience that invites medical professionals to actively master clinical skills.",
        features: [
          "Interactive course player with adaptive video playback & chapter bookmarks",
          "Real-time diagnostic quiz engine with detailed performance analytics",
          "Automated PDF certificate generation & QR code verification",
          "Comprehensive administrator analytics suite and user role permissions",
        ],
        githubUrl: "https://github.com/fauzanarisanto",
        liveUrl: "https://medskillindonesia.com",
        nextProject: {
          title: "Praxis by Medskill",
          year: "2025",
          role: "OSCE Simulation Platform",
          href: "/projects/praxis-osce",
        },
      },
      {
        id: "02",
        slug: "praxis-osce",
        role: "Lead Developer",
        year: "2026",
        status: "On-going",
        title: "Praxis by Medskill",
        subtitle: "OSCE Simulation Platform",
        description:
          "An interactive clinical exam simulator enabling medical students to practice OSCE stations with virtual patient interactions, timers, and instant rubrics.",
        href: "/projects/praxis-osce",
        image: "/images/praxis-1.png",
        imageAlt: "Praxis by Medskill OSCE Simulation Showcase",
        gallery: [
          "/images/praxis-1.png",
          "/images/praxis-2.png",
          "/images/praxis-3.png",
        ],
        tags: ["React 19", "TypeScript", "WebSockets", "Node.js", "TailwindCSS", "Framer Motion"],
        fullDescription:
          "Praxis by Medskill Indonesia is a specialized OSCE (Objective Structured Clinical Examination) simulation suite. Designed to emulate real medical board examination stations, students navigate step-by-step diagnostic checklists, physical examination hot-spots, vitals monitors, and timed evaluation rubrics.",
        features: [
          "Interactive patient simulation canvas with clickable physical exam points",
          "Live vitals monitor feed (ECG, Blood Pressure, SpO2, Respiratory Rate)",
          "Station countdown timer with automated step scoring and feedback",
          "Comprehensive guideline repository & student performance logbook",
        ],
        githubUrl: "https://github.com/fauzanarisanto",
        liveUrl: "https://osce.medskillindonesia.com",
        nextProject: {
          title: "ChainAid Web3 Donation",
          year: "2024",
          role: "Web3 & Smart Contract Integration",
          href: "/projects/chainaid",
        },
      },
      {
        id: "03",
        slug: "chainaid",
        role: "Web3 & Smart Contract Integration",
        year: "2024",
        status: "Completed",
        title: "ChainAid Web3 Donation",
        subtitle: "Transparent Crypto Philanthropy",
        description:
          "A decentralized Web3 donation platform ensuring 100% financial transparency using smart contracts and real-time transaction tracking.",
        href: "/projects/chainaid",
        image: "/images/chainaid-1.png",
        imageAlt: "ChainAid Web3 Donation Showcase",
        gallery: ["/images/chainaid-1.png",
          "/images/chainaid-2.png",
          "/images/chainaid-3.png",
          "/images/chainaid-4.png",
        ],
        tags: ["Next.js", "Solidity", "Ethers.js / Viem", "TailwindCSS", "Framer Motion"],
        fullDescription:
          "ChainAid Web3 Donation provides an immutable, transparent ledger for global charitable causes. Donors connect Web3 wallets (MetaMask, WalletConnect) to stream crypto contributions directly to audited smart contract vaults with real-time distribution tracking.",
        features: [
          "Web3 wallet connection with multi-chain support (Ethereum, Polygon)",
          "Real-time streaming transaction visualizer powered by smart contract events",
          "Transparent fund allocation breakdown (Distributed vs. Reserve)",
          "Instant campaign creation with verified multisig governance",
        ],
        githubUrl: "https://github.com/JurisDataNerd/frontend_chainaid_web3",
        liveUrl: "https://chainaidsepolia.vercel.app/",
        nextProject: {
          title: "Agrinuklir Smart Farming Education",
          year: "2025",
          role: "Project Manager",
          href: "/projects/agrinuklir",
        }
      },
      {
        id: "04",
        slug: "agrinuklir",
        role: "Project Manager",
        year: "2025",
        status: "Completed",
        title: "AgriNuklir",
        subtitle: "Smart Farming Education with Nuclear Technology",
        description:
          "A web-based educational platform designed to introduce the peaceful use of nuclear technology in agriculture for students, young farmers, and rural communities. - Awarded Top 13 National Finalist at Global Hackatom Indonesia 2025.",
        href: "/projects/agrinuklir",
        image: "/images/agrinuklir-1.png",
        imageAlt: "AgriNuklir Platform Showcase",
        gallery: [
          "/images/agrinuklir-1.png",
          "/images/agrinuklir-2.png",
          "/images/agrinuklir-3.png",
          "/images/agrinuklir-4.png",
        ],
        tags: ["React", "Vite", "Supabase", "Netlify"],
        fullDescription:
          "Developed in association with Universitas Nahdlatul Ulama Yogyakarta (UNU Jogja), AgriNuklir aims to close the literacy gap and reduce misconceptions regarding nuclear technology in Indonesia. The platform empowers users with interactive learning tools to adopt science-based smart farming, successfully earning a spot as a Top 13 National Finalist at Global Hackatom Indonesia 2025.",
        features: [
          "Structured learning modules with localized nuclear-agriculture content",
          "Rule-based AI chatbot to answer questions interactively",
          "Hands-on simulations exploring nuclear techniques in farming scenarios",
          "Score-based quizzes, certificates, and community discussion forums",
        ],
        githubUrl: "https://github.com/JurisDataNerd", // Ubah jika ada URL repository spesifik
        liveUrl: "https://agrinuklir.netlify.app", // Tambahkan URL live jika sudah di-deploy
        nextProject: {
          title: "Sistem Informasi Manajemen Kos (SISEMOK)",
          year: "2025",
          role: "Fullstack Developer",
          href: "/projects/sisemok",
        },
      },
      {
        id: "05",
        slug: "sisemok",
        role: "Fullstack Developer",
        year: "2025",
        status: "Completed",
        title: "Sistem Informasi Manajemen Kos (SISEMOK)",
        subtitle: "Web-based Boarding House Management System",
        description:
          "A comprehensive web application designed to streamline the management of boarding houses, including tenant tracking, payment processing, and maintenance requests. - Awarded 1st Place in the 2025 Informatics Studios 2.0 Final Project Competition at Universitas Nahdlatul Ulama Yogyakarta (UNU Jogja).  ",
        href: "/projects/sisemok",
        image: "/images/sisemok-1.png",
        imageAlt: "SISEMOK Platform Showcase",
        gallery: [
          "/images/sisemok-1.png",
          "/images/sisemok-2.png"
        ],
        tags: ["PHP", "MySQL", "TailwindCSS"],
        fullDescription:
          "SISEMOK is a web-based application that simplifies the management of boarding houses. It allows landlords to efficiently track tenants, manage payments, and handle maintenance requests, all in one platform. The system is designed to improve operational efficiency and enhance the tenant experience. Awarded 1st Place in the 2025 Informatics Studios 2.0 Final Project Competition at Universitas Nahdlatul Ulama Yogyakarta (UNU Jogja).",
        features: [
          "Tenant management with detailed profiles and history",
          "Automated payment tracking and invoicing system",
          "Maintenance request submission and tracking",
          "User-friendly dashboard for landlords and tenants",
        ],
        githubUrl: "https://github.com/JurisDataNerd/SiSemok"
      }, 
      {
        id: "06",
        slug: "santri-seeds-of-hope",
        role: "Game Developer",
        year: "2025",
        status: "Completed",
        title: "Santri : Seeds of Hope",
        subtitle: "A Digital Behavioral Intervention for SDG 12",
        description:
          "An interactive RPG simulation designed as a behaviour-changing tool for the Nahdlatul Ulama ecosystem. Presented via a project video (YouTube).",
        href: "/projects/santri-seeds-of-hope",
        image: "/images/santri-1.png",
        imageAlt: "SANTRI: The Seeds of Hope Video Preview",
        gallery: ["/images/santri-1.png",
          "/images/santri-2.png",
          "/images/santri-3.png",
          "/images/santri-4.png",
        ],
        tags: ["Game Design", "Behavioral Intervention", "SDG 12", "Replit AI"],
        fullDescription:
          `"SANTRI: The Seeds of Hope" is an interactive RPG simulation designed as a "behavior-changing tool" for the 150-million-member Nahdlatul Ulama (NU) ecosystem. Developed using Replit AI in an agile methodology, the game bridges traditional Pesantren values with modern environmentalism.

      Innovation & Features:
      - Invisible Learning: Players master complex UN frameworks through localized RPG diplomacy.
      - Green Ledger Mechanic: Success is achieved by presenting real-world evidence and blueprints to community leaders.
      - The Final Commitment: A groundbreaking fourth-wall-breaking finale where players must type a tangible, real-world environmental pledge to complete their journey.

      SDG 12 (11/11) Alignment:
      We have meticulously mapped and embedded all 11 sub-targets of SDG 12 (Responsible Consumption & Production): 12.1 - 12.8 cover SCP policies, resource management, food waste, and education. 12.a - 12.c target tech transfer, sustainable tourism, and fossil-fuel subsidy rationalization.`,
        features: [
          "Interactive RPG simulation blending local culture and environmental education",
          "Invisible-learning design to teach UN frameworks through gameplay",
          "Green Ledger mechanic requiring real-world evidence submissions",
          "Final pledge mechanic that asks players for a tangible environmental commitment",
          "Project awarded Top 10 Finalist and Special Jury Recognition at QS Impact Youth Summit 2025",
        ],
        // No source code — deliverable is a project video on YouTube.
        liveUrl: "https://www.youtube.com/watch?v=P49iPaS8Phw",
        nextProject: {
          title: "Medskill Indonesia LMS",
          year: "2025",
          role: "Fullstack Developer",
          href: "/projects/medskill-lms",
        },
      },
    ] as ProjectItem[],
  },
  quote: {
    text: "The web is loud, and most brands just blend into it. I work across design, frontend, and backend all at once — building digital experiences that feel as sharp as they look. Nothing gets handed off between teams or lost in translation, because I build every layer myself. That's how the identity we create together actually holds up once it's live. If your product deserves to be seen, let's make sure people can't look away.",
  },
  services: {
    label: "(Services)",
    items: [
      {
        title: "Frontend",
        hint: "click me →",
        details: "React / Next.js · Motion & interactions · Responsive design · Performance",
      },
      {
        title: "Backend",
        hint: "← click me",
        details: "APIs · Node.js / Express · PostgreSQL · WebSockets · Auth & Security",
      },
      {
        title: "Fullstack Development",
        hint: "click me →",
        details: "End-to-end web apps · System architecture · DevOps · Launch & iteration",
      },
    ],
    closing:
      "I'm not a founder, a CEO, or a strategist hiding behind a title. I'm just a creator — someone who designs, builds, and thinks in equal measure, and uses that to walk products through every stage of their growth, from the first idea on a blank page to the moment a finished site goes live. Work that lifts what it belongs to, not just decorates it.",
  },
  contact: {
    id: "contact",
    intro:
      "For enquiries, collaboration requests or job opportunities, don't hesitate to reach out!",
    cta: "Get in touch",
  },
  footer: {
    credit: "Designed & Developed by Fauzan Arisanto",
    brand: "Fauzan Arisanto",
  },
  portrait: {
    src: "/images/fauzan.png",
    alt: "Portrait of Fauzan Arisanto",
  },
} as const;

export type Site = typeof site;
export type Project = (typeof site.projects.items)[number];
export type Service = (typeof site.services.items)[number];
