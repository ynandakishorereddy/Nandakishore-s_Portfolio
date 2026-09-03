// ============================================================================
// Portfolio Data — Single Source of Truth
// All content derived from the resume and GitHub repositories.
// DO NOT invent projects, experience, statistics, or certifications.
// ============================================================================

// ---------------------------------------------------------------------------
// Personal
// ---------------------------------------------------------------------------
export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Yerrabandi Nandakishore Reddy",
    shortName: "Nandakishore Reddy",
    monogram: "YN",
    headline: "Software Engineer",
    bio: "Software Engineer with experience building production-ready ASP.NET Core, AI-powered full-stack, and cloud-native applications. Skilled in C#, Java, React, Node.js, SQL Server, PostgreSQL, Docker, Azure, and CI/CD. Delivered enterprise software at Cognizant with 100% service-layer test coverage.",
    location: "Kadapa, AP, India",
    email: "nandakishore35731@gmail.com",
    phone: "+91 6385647597",
    availability: "Open to full-time opportunities",
    social: {
      github: "https://github.com/ynandakishorereddy",
      linkedin: "https://linkedin.com/in/ynandakishorereddy",
      portfolio: "https://nandakishore.dev",
    },
    profileImage: "/images/profile.jpeg",
    resumeUrl: "/Nandakishore_Resume.pdf",
    stats: [
      { label: "Production Apps", value: "4+" },
      { label: "Certifications", value: "12" },
      { label: "Test Coverage", value: "100%" },
      { label: "Screens Shipped", value: "58" },
    ],
    education: {
      degree: "B.E. Computer Science & Engineering",
      institution: "Saveetha University (SIMATS)",
      cgpa: "8.83/10",
      period: "2022 – 2026",
    },
    experience: {
      role: "Software Engineering Intern",
      company: "Cognizant",
      period: "Feb 2026 – May 2026",
      location: "Chennai, India",
    },
  },

  // ---------------------------------------------------------------------------
  // Navigation (SPA anchor links)
  // ---------------------------------------------------------------------------
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ] as const,

  // ---------------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------------
  projects: {
    flagship: {
      slug: "orcare",
      title: "ORCare Health Ecosystem",
      subtitle: "AI-Powered Cross-Platform Oral Health Companion",
      category: "Capstone Project",
      period: "2025 – 2026",
      status: "Maintained" as const,
      images: ["/projects/orcare-1.png", "/projects/orcare-2.png", "/projects/orcare-3.png"],
      overview:
        "A cross-platform oral health companion with native Android + React web client sharing one secure REST API backend, integrated with Gemini AI for contextual health guidance.",
      architecture: [
        { pillar: "Frontend", detail: "Kotlin / Jetpack Compose (Android) + Vanilla JS / Vite 6 (Web)" },
        { pillar: "Backend", detail: "Node.js / Express.js 5.2 REST API with JWT + Google OAuth" },
        { pillar: "Data", detail: "Supabase PostgreSQL with 8-table normalized schema + RLS" },
        { pillar: "AI Engine", detail: "Gemini 2.5 Flash for symptom analysis & dental assistant" },
      ],
      metrics: [
        { value: "58", label: "Screens", detail: "22 web + 36 Android" },
        { value: "10+", label: "Conditions", detail: "AI symptom checker" },
        { value: "8", label: "DB Tables", detail: "Normalized schema" },
        { value: "3", label: "Repos", detail: "Microservices arch" },
      ],
      tags: ["Kotlin", "Jetpack Compose", "React", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Gemini AI", "Google OAuth", "JWT", "Docker", "Material 3"],
      github: "https://github.com/ynandakishorereddy/orcare_webapp",
      liveDemo: "https://orcare-webapp.vercel.app",
      links: [
        { name: "Web App", url: "https://orcare-webapp.vercel.app" },
        { name: "Frontend Repo", url: "https://github.com/ynandakishorereddy/orcare_webapp" },
        { name: "Backend Repo", url: "https://github.com/ynandakishorereddy/orcare_backend" },
        { name: "Android Repo", url: "https://github.com/ynandakishorereddy/orcare_andriod" },
      ],
    },
    secondary: [
      {
        slug: "prepiq",
        title: "PrepIQ",
        subtitle: "AI Interview Platform",
        images: ["/projects/prepiq-1.png", "/projects/prepiq-2.png", "/projects/prepiq-3.png"],
        overview: "Full-stack AI interview-prep SaaS built on Next.js 14 with Clerk auth and Prisma/PostgreSQL, evaluating answers via Gemini AI in real time.",
        tags: ["Next.js 14", "Prisma", "PostgreSQL", "Gemini AI", "Clerk Auth", "TypeScript"],
        github: "https://github.com/ynandakishorereddy/prepiq",
        highlight: "Sub-3s AI evaluation latency",
      },
      {
        slug: "farm-management",
        title: "Farm Management System",
        subtitle: "ASP.NET Core Enterprise Application",
        images: ["/projects/farm-1.png", "/projects/farm-2.png", "/projects/farm-3.png"],
        overview: "Enterprise-grade Farm Management system built with ASP.NET Core MVC at Cognizant, featuring crop tracking, inventory management, and field monitoring with 100% service-layer test coverage.",
        tags: ["ASP.NET Core MVC", "EF Core", "SQL Server", "NUnit/Moq", "Docker", "Azure", "GitHub Actions"],
        highlight: "100% service-layer test coverage",
      },
      {
        slug: "retailiq",
        title: "RetailIQ",
        subtitle: "AI-Powered Analytics Dashboard",
        images: ["/projects/retail-1.png", "/projects/retail-2.png", "/projects/retail-3.png"],
        overview: "AI-powered retail analytics dashboard that surfaces inventory forecasts and sales trends from SQL Server data, built during the Cognizant internship.",
        tags: ["ASP.NET Core", "SQL Server", "AI/ML", "EF Core", "Azure"],
        highlight: "Real-time inventory forecasting",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Architecture Decision Records (ADRs)
  // ---------------------------------------------------------------------------
  adrs: [
    {
      id: "ADR-001",
      title: "Pessimistic Locking in ORCare",
      status: "Accepted" as const,
      context: "Concurrent edits to chat sessions and quiz submissions across Android and Web platforms could corrupt user data in the shared PostgreSQL backend.",
      decision: "Adopted database-level row locking via Supabase RLS policies combined with JWT-scoped transactions, ensuring each user session holds an exclusive lock during write operations.",
      consequence: "Zero data corruption incidents across 58 screens. Slight increase in write latency (~15ms) deemed acceptable for data integrity guarantees.",
    },
    {
      id: "ADR-002",
      title: "Next.js App Router for SSR Portfolios",
      status: "Accepted" as const,
      context: "Portfolio sites need excellent SEO, fast initial paint, and minimal client-side JavaScript. Traditional SPAs fail at server-rendered meta tags and structured data injection.",
      decision: "Selected Next.js 16 App Router with server components for static generation and metadata API for per-page OpenGraph/JSON-LD. Client components used only for interactive widgets (terminal, theme toggle).",
      consequence: "Full SSG at build time with zero client JS for content pages. Lighthouse SEO score of 100. JSON-LD Person schema validated by Google Rich Results Test.",
    },
    {
      id: "ADR-003",
      title: "Native CSS Tokens in Tailwind v4",
      status: "Accepted" as const,
      context: "Tailwind v4 replaces JS config with native CSS @theme directives. The design system needs to support dark mode, custom color tokens, and responsive typography without a tailwind.config.js file.",
      decision: "Defined all design tokens (canvas, surface, line, ink, accent colors) as CSS custom properties in globals.css and registered them via @theme inline. Dark mode uses .dark class selector with next-themes.",
      consequence: "Eliminated tailwind.config.js entirely. Tokens are now hot-reloadable and inspectable in DevTools. Reduced build config surface area by 40%.",
    },
  ],

  // ---------------------------------------------------------------------------
  // Skills (4 clean categories)
  // ---------------------------------------------------------------------------
  skills: [
    {
      title: "Languages & Fundamentals",
      icon: "Code2" as const,
      items: [
        { name: "C#", status: "Proficient" as const },
        { name: "Java", status: "Proficient" as const },
        { name: "Python", status: "Experienced" as const },
        { name: "JavaScript", status: "Proficient" as const },
        { name: "TypeScript", status: "Proficient" as const },
        { name: "Kotlin", status: "Experienced" as const },
        { name: "SQL", status: "Proficient" as const },
        { name: "HTML / CSS", status: "Proficient" as const },
        { name: "DSA", status: "Experienced" as const },
        { name: "OOP", status: "Proficient" as const },
        { name: "System Design", status: "Experienced" as const },
      ],
    },
    {
      title: "Frontend & Architecture",
      icon: "Layout" as const,
      items: [
        { name: "React", status: "Proficient" as const },
        { name: "Next.js", status: "Proficient" as const },
        { name: "Tailwind CSS", status: "Proficient" as const },
        { name: "Jetpack Compose", status: "Experienced" as const },
        { name: "Material 3", status: "Experienced" as const },
        { name: "Framer Motion", status: "Experienced" as const },
      ],
    },
    {
      title: "Backend & Databases",
      icon: "Server" as const,
      items: [
        { name: "ASP.NET Core MVC", status: "Proficient" as const },
        { name: "Entity Framework Core", status: "Proficient" as const },
        { name: "Node.js", status: "Proficient" as const },
        { name: "Express.js", status: "Proficient" as const },
        { name: "REST APIs", status: "Proficient" as const },
        { name: "SQL Server", status: "Proficient" as const },
        { name: "PostgreSQL", status: "Proficient" as const },
        { name: "Supabase", status: "Experienced" as const },
        { name: "Prisma ORM", status: "Experienced" as const },
        { name: "JWT / OAuth", status: "Experienced" as const },
        { name: "RBAC", status: "Experienced" as const },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: "Cloud" as const,
      items: [
        { name: "Docker", status: "Experienced" as const },
        { name: "GitHub Actions", status: "Experienced" as const },
        { name: "Azure App Service", status: "Experienced" as const },
        { name: "Vercel", status: "Proficient" as const },
        { name: "Render", status: "Experienced" as const },
        { name: "Git", status: "Proficient" as const },
        { name: "NUnit / Moq", status: "Proficient" as const },
        { name: "Gemini AI", status: "Experienced" as const },
        { name: "CI/CD Pipelines", status: "Experienced" as const },
        { name: "Linux", status: "Experienced" as const },
        { name: "Postman", status: "Proficient" as const },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // Credentials (12 verified certifications)
  // ---------------------------------------------------------------------------
  credentials: [
    { title: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", date: "2025", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Professional%20Certificates/Oracle%20professional.pdf" },
    { title: "SQL (Advanced)", issuer: "HackerRank", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates" },
    { title: "C# (Basic)", issuer: "HackerRank", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates" },
    { title: "Ethical Hacking Essentials", issuer: "Cisco", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Professional%20Certificates/Cisco%20Ethical%20Hacker.pdf" },
    { title: "Google Cybersecurity Professional", issuer: "Google / Coursera", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Coursera/CyberSecurity.pdf" },
    { title: "IT Automation with Python", issuer: "Google / Coursera", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Coursera/python.pdf" },
    { title: "OpenCV Python For Beginners", issuer: "OpenCV", date: "2024", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Open%20CV/OpenCV%20Python%20For%20Beginners%20Certificate%20_%20OpenCV.pdf" },
    { title: "Python for Data Science", issuer: "NPTEL", date: "2023", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/NPTEL/Python%20for%20Data%20Science.pdf" },
    { title: "Introduction to Internet of Things", issuer: "NPTEL", date: "2023", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/NPTEL/Introduction%20To%20Internet%20Of%20Things.pdf" },
    { title: "AWS Cloud Virtual Internship", issuer: "AICTE / EduSkills", date: "2023", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Internship%20Online/Nanda%20Kishore%20Reddy%20Yerrabandi%20-%20AWS%20Internship%20-%20Internship.pdf" },
    { title: "Artificial Intelligence Foundations", issuer: "Great Learning", date: "2023", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Great%20Learning/GreatLearning_AI.jpg" },
    { title: "Machine Learning Foundations", issuer: "Great Learning", date: "2023", verifyUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Great%20Learning/GreatLearning_ML.jpg" },
  ],

  // ---------------------------------------------------------------------------
  // Terminal commands
  // ---------------------------------------------------------------------------
  terminalCommands: {
    help: [
      "Available commands:",
      "  about       — Who I am",
      "  projects    — Featured work",
      "  skills      — Tech stack",
      "  certs       — Certifications",
      "  contact     — Get in touch",
      "  clear       — Clear terminal",
      "  sudo hire-nandu  — 🚀",
    ],
    about: [
      "┌─ Yerrabandi Nandakishore Reddy",
      "├─ Software Engineer",
      "├─ B.E. CSE @ Saveetha University (8.83 CGPA)",
      "├─ Ex-Intern @ Cognizant (Feb–May 2026)",
      "└─ Kadapa, AP, India",
    ],
    projects: [
      "┌─ ORCare Health Ecosystem (Flagship)",
      "│  Cross-platform AI dental health app",
      "│  58 screens · Kotlin + React + Node.js",
      "├─ PrepIQ — AI Interview Platform",
      "│  Next.js 14 + Prisma + Gemini AI",
      "├─ Farm Management System",
      "│  ASP.NET Core MVC · 100% test coverage",
      "└─ RetailIQ — AI Analytics Dashboard",
      "   ASP.NET Core · SQL Server · Azure",
    ],
    skills: [
      "Languages:  C# · Java · Python · JS · TS · Kotlin",
      "Frontend:   React · Next.js · Tailwind · Compose",
      "Backend:    ASP.NET Core · Node.js · Express · EF Core",
      "Data:       SQL Server · PostgreSQL · Supabase · Prisma",
      "DevOps:     Docker · Azure · GitHub Actions · Vercel",
    ],
    certs: [
      "12 verified certifications:",
      "  Oracle AI Vector Search · SQL Advanced",
      "  C# Basic · Ethical Hacking · Cybersecurity",
      "  Python Automation · OpenCV · Data Science",
      "  IoT · AWS Cloud · AI Foundations · ML Foundations",
    ],
    contact: [
      "📧 nandakishore35731@gmail.com",
      "🔗 github.com/ynandakishorereddy",
      "🔗 linkedin.com/in/ynandakishorereddy",
      "📍 Kadapa, AP, India",
    ],
    "sudo hire-nandu": [
      "",
      "  🚀 ACCESS GRANTED",
      "",
      "  Deploying Nandakishore to your team...",
      "  ████████████████████ 100%",
      "",
      "  ✓ 4+ production apps shipped",
      "  ✓ 12 certifications verified",
      "  ✓ 100% service-layer test coverage",
      "  ✓ Ready to contribute from Day 1",
      "",
      "  → nandakishore35731@gmail.com",
      "",
    ],
  },
} as const;

// Re-export convenience aliases used by legacy imports
export const personalInfo = PORTFOLIO_DATA.personal;
export const navItems = PORTFOLIO_DATA.navLinks;

export function getAllProjects() {
  return [PORTFOLIO_DATA.projects.flagship, ...PORTFOLIO_DATA.projects.secondary];
}
