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

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  logo?: string;
  tags: string[];
}

export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
}

export interface SkillMarqueeItem {
  name: string;
  icon: string;
  category: string;
}

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fauzanarisanto.vercel.app",
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
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  /** Hero marquee lines — large scrolling role titles */
  marquee: ["Fullstack developer", "Software engineer", "Information & Technology enthusiast"],
  about: {
    title: "About",
    paragraphs: [
      "I design and develop digital experiences with a focus on craft, motion, and interaction — creating interfaces where every detail is intentional.",
      "Based in Indonesia, I work at the intersection of creativity and engineering. From complex backend architecture to frontend motion polish, I bring ideas to life with meticulous attention to detail.",
    ],
  },
  experience: {
    title: "Experiences",
    items: [
      {
        id: "01",
        role: "Fullstack Web Developer",
        company: "PT. Gajah Medika Cendekia",
        period: "September 2025 — Present",
        location: "Yogyakarta, Indonesia",
        logo: "/medskill.webp",
        description:
          "Developed and scaled MedSkill LMS, a production-ready medical platform currently serving 700+ medical students across Indonesia for UKMPPD exam preparation and equipment rental. Architected a full-stack system using React, Node.js, and Supabase, integrating automated payment gateways and a custom CMS that reduced administrative overhead by 60%, contributing to a 2× increase in student engagement compared to traditional learning methods.",
        tags: ["React", "Node.js", "Supabase", "PostgreSQL", "Express", "Payment Gateway"],
      },
      {
        id: "02",
        role: "Laboratory Assistant",
        company: "UNU Yogyakarta",
        period: "November 2025 - January 2026",
        location: "Yogyakarta, Indonesia",
        logo: "/unu.webp",
        description:
          "Lead Assistant for Web Programming & Assistant for Programming Algorithms, mentoring 180+ students across 5 classes in full-stack development and logical problem-solving. Delivered technical instruction in Python (OOP, Data Structures) and Web Technologies (Next.js, Node.js, PostgreSQL) while designing practicum modules and evaluating student final projects.",
        tags: ["Next.js", "Python", "Node.js", "PostgreSQL", "Data Structures", "Algorithms"],
      },
      {
        id: "03",
        role: "Cyber Security Track Mentor",
        company: "Informatics Study Jam — Himatika UNU Jogja",
        period: "2025",
        location: "Yogyakarta, Indonesia",
        logo: "/himatika.webp",
        description:
          "Mentored informatics students in the Cyber Security Track during Informatics Study Jam hosted by Himatika UNU Jogja. Delivered hands-on instruction in Linux system administration, command-line utilities, network defense fundamentals, penetration testing concepts, and ethical hacking practices.",
        tags: ["Cyber Security", "Linux", "Network Security", "Penetration Testing", "Ethical Hacking"],
      },
    ] as ExperienceItem[],

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
        githubUrl: "https://github.com/JurisDataNerd",
        liveUrl: "https://agrinuklir.netlify.app",
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
          "A comprehensive web application designed to streamline the management of boarding houses, including tenant tracking, payment processing, and maintenance requests. - Awarded 1st Place in the 2025 Informatics Studios 2.0 Final Project Competition at Universitas Nahdlatul Ulama Yogyakarta (UNU Jogja).",
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
        liveUrl: "https://seeds-of-hope-eight.vercel.app/",
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
  quotes: [
    {
      id: "jensen-1",
      quote: "Greatness is not intelligence. Greatness comes from character, and character isn't formed out of smart people — it is formed out of people who suffered.",
      author: "Jensen Huang",
      role: "Founder & CEO, NVIDIA",
      category: "Mindset & Resilience",
    },
    {
      id: "jobs-1",
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      role: "Co-founder, Apple",
      category: "Design & Craft",
    },
    {
      id: "torvalds-1",
      quote: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds",
      role: "Creator of Linux & Git",
      category: "Engineering Truth",
    },
    {
      id: "huang-2",
      quote: "Software is eating the world, but AI is eating software. Run, don't walk. Either you are running for food, or you are running from becoming food.",
      author: "Jensen Huang",
      role: "Founder & CEO, NVIDIA",
      category: "Velocity & AI Era",
    },
    {
      id: "graham-1",
      quote: "Make something people want. Relentlessly resourceful builders win because they never surrender when things seem impossible.",
      author: "Paul Graham",
      role: "Co-founder, Y Combinator",
      category: "Product Philosophy",
    },
    {
      id: "jobs-2",
      quote: "The people who are crazy enough to think they can change the world are the ones who do.",
      author: "Steve Jobs",
      role: "Co-founder, Apple",
      category: "Conviction",
    },
    {
      id: "kay-1",
      quote: "The best way to predict the future is to invent it. People who are really serious about software should make their own hardware.",
      author: "Alan Kay",
      role: "Computer Science Pioneer",
      category: "Innovation",
    },
    {
      id: "ive-1",
      quote: "Simplicity is not the lack of clutter. Simplicity is essentially describing the purpose and place of an object and product.",
      author: "Jony Ive",
      role: "Former Chief Design Officer, Apple",
      category: "Minimalist Craft",
    },
    {
      id: "naval-1",
      quote: "Code and media are permissionless leverage. You can create software that works for you while you sleep.",
      author: "Naval Ravikant",
      role: "Entrepreneur & Investor",
      category: "Leverage & Code",
    },
    {
      id: "nadella-1",
      quote: "Our industry does not respect tradition — it only respects innovation. Don't be a know-it-all, be a learn-it-all.",
      author: "Satya Nadella",
      role: "CEO, Microsoft",
      category: "Continuous Learning",
    },
  ] as QuoteItem[],
  skills: {
    title: "Skills & Technologies",
    subtitle: "Technologies & Engineering Stack",
    marquee: [
      { name: "React", icon: "react", category: "Frontend" },
      { name: "Next.js", icon: "nextdotjs", category: "Frontend" },
      { name: "TypeScript", icon: "typescript", category: "Frontend" },
      { name: "TailwindCSS", icon: "tailwindcss", category: "Frontend" },
      { name: "Figma", icon: "figma", category: "Design & UI" },

      { name: "Node.js", icon: "nodejs", category: "Backend" },
      { name: "PostgreSQL", icon: "postgresql", category: "Backend" },
      { name: "Supabase", icon: "supabase", category: "Backend" },
      { name: "MongoDB", icon: "mongodb", category: "Backend" },
      { name: "Express.js", icon: "express", category: "Backend" },

      { name: "Linux", icon: "linux", category: "OS & DevOps" },
      { name: "Docker", icon: "docker", category: "DevOps & Containers" },
      { name: "GitHub", icon: "github", category: "Version Control" },
      { name: "VS Code", icon: "visual-studio-code", category: "Developer Tools" },
      { name: "Vercel", icon: "vercel", category: "Deployment" },
      { name: "Cloudflare", icon: "cloudflare", category: "Infrastructure" },

      { name: "ChatGPT", icon: "openai", category: "AI Tooling" },
      { name: "Claude", icon: "claude", category: "AI Tooling" },
      { name: "Qwen AI", icon: "qwen", category: "AI Models" },
      { name: "DeepSeek", icon: "deepseek", category: "AI Models" },
      { name: "GitHub Copilot", icon: "github-copilot", category: "AI Assistant" },
      { name: "Python", icon: "python", category: "Language & AI" },
    ] as SkillMarqueeItem[],






    closing:
      "Engineering is not just about writing code; it's about crafting reliable systems, fluid user interactions, and meaningful digital products. From high-throughput APIs to pixel-perfect micro-animations, I build end-to-end applications that perform effortlessly under scale.",
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
export type Experience = (typeof site.experience.items)[number];
export type SkillCategory = SkillMarqueeItem;


