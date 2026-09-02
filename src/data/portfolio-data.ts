// ============================================================================
// Portfolio Data — Single Source of Truth
// All content is derived from the resume and GitHub repositories.
// DO NOT invent projects, experience, statistics, or certifications.
// ============================================================================

// ---------------------------------------------------------------------------
// Personal Information
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Nandakishore Reddy",
  fullName: "Yerrabandi Nandakishore Reddy",
  title: "Software Engineer",
  tagline: "ASP.NET Core · Full-Stack · Cloud (Azure) · AI-Integrated Systems",
  summary:
    "Software Engineer with experience building production-ready ASP.NET Core, AI-powered full-stack, and cloud-native applications. Skilled in C#, Java, React, Node.js, SQL Server, PostgreSQL, Docker, Azure, and CI/CD. Delivered enterprise software at Cognizant with 100% service-layer test coverage.",
  email: "nandakishore35731@gmail.com",
  phone: "+91 6385647597",
  location: "Kadapa, AP, India",
  github: "https://github.com/ynandakishorereddy",
  linkedin: "https://linkedin.com/in/ynandakishorereddy",
  portfolio: "https://nandakishore.dev",
  profileImage: "/images/profile.jpeg",
  resumeUrl: "/Nandakishore_Resume.pdf",
  availability: "Open to full-time opportunities",
} as const;

// ---------------------------------------------------------------------------
// Navigation Items
// ---------------------------------------------------------------------------
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "GitHub", href: "/github" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Saveetha University (SIMATS)",
    cgpa: "8.83/10",
    location: "Chennai, India",
    period: "2022 – 2026",
  },
] as const;

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  technologies: string[];
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Cognizant",
    period: "Feb 2026 – May 2026",
    location: "Chennai, India",
    technologies: [
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "NUnit/Moq",
      "Docker",
      "Azure",
      "GitHub Actions",
    ],
    achievements: [
      "Architected a normalized 5-table SQL Server schema for a Farm Management system using ASP.NET Core MVC, EF Core, and RBAC.",
      "Designed RESTful APIs following SOLID principles, enabling secure role-based authentication across 3 production modules.",
      "Eliminated manual release steps by automating Azure deployment through a GitHub Actions CI/CD pipeline.",
      "Built RetailIQ, an AI-powered analytics dashboard surfacing inventory forecasts and sales trends from SQL Server data.",
      "Achieved 100% service-layer test coverage with NUnit/Moq, eliminating untested CRUD paths before production handoff.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  status: "Completed" | "In Progress" | "Maintained";
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
  architecture: string;
  github?: string;
  liveDemo?: string;
  deployment?: string[];
  screenshots: { src: string; alt: string }[];
  futureRoadmap: string[];
}

export const projects: Project[] = [
  {
    slug: "prepiq",
    title: "PrepIQ",
    subtitle: "AI Interview Platform",
    category: "Personal Project",
    period: "2025",
    status: "Completed",
    featured: true,
    overview:
      "A full-stack AI interview-prep SaaS built on Next.js 14 with Clerk auth and Prisma/PostgreSQL, evaluating answers via Gemini AI in real time.",
    problem:
      "Aspiring professionals lack access to personalized, AI-driven mock interview platforms that provide real-time feedback and evaluation. Existing prep tools rely on static question banks with no adaptive assessment or contextual coaching.",
    solution:
      "Built a comprehensive SaaS platform that leverages Gemini AI to conduct mock interviews, evaluate answers in real time, and provide actionable feedback. The modular REST API decouples frontend and backend, enabling independent scaling. Clerk authentication ensures secure user management without custom auth boilerplate.",
    techStack: [
      "Next.js 14",
      "Prisma",
      "PostgreSQL",
      "Gemini AI",
      "Azure",
      "Vercel",
      "Clerk Auth",
      "TypeScript",
    ],
    features: [
      "AI-powered mock interviews with real-time answer evaluation",
      "Modular REST API decoupling frontend and backend",
      "Clerk authentication for secure user management",
      "Prisma ORM with PostgreSQL for data persistence",
      "Automated CI/CD pipeline via GitHub Actions",
      "Deployed across Azure App Service and Vercel",
    ],
    challenges: [
      "Integrating Gemini AI for consistent, high-quality answer evaluation across diverse question domains",
      "Designing a modular architecture that separates concerns effectively while maintaining type safety end-to-end",
      "Setting up end-to-end CI/CD with build, test, and deploy stages across multiple cloud providers",
    ],
    outcomes: [
      "End-to-end type-safe full-stack architecture with zero runtime type errors in production",
      "Sub-3-second AI evaluation response times via optimized Gemini API prompt engineering",
      "Fully automated CI/CD pipeline eliminating manual deployment steps",
      "Dual-cloud deployment (Azure + Vercel) for high availability",
    ],
    architecture: "Full-stack monorepo with Next.js API routes, Prisma ORM layer, and Gemini AI integration for real-time evaluation. The app uses server components for initial page loads and client components for interactive interview sessions.",
    github: "https://github.com/ynandakishorereddy/prepiq",
    screenshots: [
      { src: "/images/prepiq/slide_1.png", alt: "PrepIQ Dashboard" },
      { src: "/images/prepiq/slide_2.png", alt: "PrepIQ Interview" },
      { src: "/images/prepiq/slide_3.png", alt: "PrepIQ Results" },
      { src: "/images/prepiq/slide_4.png", alt: "PrepIQ Features" },
      { src: "/images/prepiq/slide_5.png", alt: "PrepIQ Analysis" },
      { src: "/images/prepiq/slide_6.png", alt: "PrepIQ Settings" },
      { src: "/images/prepiq/slide_7.png", alt: "PrepIQ Evaluation" },
      { src: "/images/prepiq/slide_8.png", alt: "PrepIQ History" },
      { src: "/images/prepiq/slide_9.png", alt: "PrepIQ Profile" },
    ],
    deployment: ["Azure App Service", "Vercel"],
    futureRoadmap: [
      "Video interview simulation",
      "Industry-specific question banks",
      "Progress tracking and analytics dashboard",
      "Multi-language support",
    ],
  },
  {
    slug: "orcare",
    title: "ORCare",
    subtitle: "AI Healthcare Platform",
    category: "Capstone Project",
    period: "2025 – 2026",
    status: "Maintained",
    featured: true,
    overview:
      "A cross-platform oral health companion with native Android + React web client sharing one secure REST API backend, integrated with Gemini AI for contextual health guidance.",
    problem:
      "People lack accessible, personalized tools for oral health management, symptom checking, and dental education — especially in underserved regions. Existing dental apps are fragmented, offering limited features on single platforms without AI-assisted guidance.",
    solution:
      "Architected a comprehensive cross-platform health platform featuring an AI-powered dental assistant, interactive symptom checker, educational learning center with quizzes, and smart reminders — deployed across web and Android platforms with shared Supabase PostgreSQL backend. The system serves 58 screens across platforms with full feature parity.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "React",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Gemini AI",
      "Google OAuth",
      "JWT",
      "Docker",
      "Material 3",
      "Retrofit",
      "Room Database",
    ],
    features: [
      "AI-powered 24/7 dental health assistant (Gemini 2.5 Flash)",
      "Interactive symptom checker covering 10+ dental conditions",
      "Educational learning center with expert-written modules and quizzes",
      "Smart dental hygiene reminders",
      "30 rotating daily oral health tips",
      "Google OAuth authentication with JWT security",
      "RBAC for secure endpoint access",
      "Cross-platform: Native Android (Kotlin) + Web (JavaScript)",
      "Supabase PostgreSQL with normalized schema",
      "22 web screens and 36 Android screens",
    ],
    challenges: [
      "Migrated data layer from MongoDB to Supabase (PostgreSQL), improving query performance and simplifying ops",
      "Maintaining feature parity across Android and web platforms with 58 total screens",
      "Integrating Gemini AI for contextual, medically-informed health guidance without hallucination",
      "Implementing secure JWT authentication with Google OAuth across platforms",
    ],
    outcomes: [
      "58 production screens (22 web + 36 Android) with full cross-platform feature parity",
      "Successfully migrated from MongoDB to PostgreSQL, reducing query latency",
      "10+ dental conditions covered in the AI symptom checker with contextual guidance",
      "Secure multi-platform authentication with Google OAuth + JWT + RBAC",
      "8-table normalized PostgreSQL schema supporting all data models",
    ],
    architecture:
      "Microservices architecture with separate web and Android backends deployed on Render, web frontend on Vercel, native Android app with MVVM pattern, shared Supabase PostgreSQL database.",
    github: "https://github.com/ynandakishorereddy/orcare_webapp",
    liveDemo: "https://orcare-webapp.vercel.app",
    deployment: [
      "Frontend: https://orcare-webapp.vercel.app (Vercel)",
      "Web Backend: https://orcare-webapp.onrender.com (Render)",
      "Android Backend: https://orcare-backend-1.onrender.com (Render)",
    ],
    screenshots: [
      { src: "/images/orcare-web/slide_1.png", alt: "ORCare Web - Home" },
      { src: "/images/orcare-web/slide_2.png", alt: "ORCare Web - Chat" },
      { src: "/images/orcare-web/slide_3.png", alt: "ORCare Web - Learn" },
      { src: "/images/orcare-web/slide_4.png", alt: "ORCare Web - Symptoms" },
      { src: "/images/orcare-web/slide_5.png", alt: "ORCare Web - Profile" },
      { src: "/images/orcare-android/slide_1.png", alt: "ORCare Android - Home" },
      { src: "/images/orcare-android/slide_2.png", alt: "ORCare Android - Chat" },
      { src: "/images/orcare-android/slide_3.png", alt: "ORCare Android - Learn" },
    ],
    futureRoadmap: [
      "Telehealth integration with dentists",
      "Image-based dental condition detection using computer vision",
      "Multi-language support for regional accessibility",
      "Wearable device integration for real-time monitoring",
      "Dental appointment scheduling system",
    ],
  },
  {
    slug: "farm-management",
    title: "Farm Management System",
    subtitle: "ASP.NET Core Enterprise Application",
    category: "Cognizant Internship Project",
    period: "Feb 2026 – May 2026",
    status: "Completed",
    featured: true,
    overview:
      "Enterprise-grade Farm Management system built with ASP.NET Core MVC, featuring crop tracking, inventory management, and field monitoring with 100% service-layer test coverage.",
    problem:
      "Agricultural operations lack digitized tools for efficient crop tracking, inventory management, and field monitoring, leading to data silos and operational inefficiencies. Manual processes cause delayed decision-making and inventory discrepancies.",
    solution:
      "Engineered a three-tier MVC application with 3 modules (crop tracking, inventory, field monitoring) on a normalized 5-table SQL Server schema with RBAC and automated CI/CD deployment. The system follows SOLID principles throughout with dependency injection enabling full testability.",
    techStack: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "NUnit",
      "Moq",
      "Docker",
      "Azure",
      "GitHub Actions",
      "RBAC",
    ],
    features: [
      "Crop tracking with real-time field data",
      "Inventory management with automated alerts",
      "Field monitoring dashboard",
      "Normalized 5-table SQL Server schema",
      "RBAC (Role-Based Access Control)",
      "RESTful APIs following SOLID principles",
      "100% service-layer test coverage (NUnit/Moq)",
      "Automated Azure deployment via GitHub Actions CI/CD",
      "89+ commits with feature branches and peer code review",
    ],
    challenges: [
      "Designing a normalized schema that balances performance and data integrity across 5 tables",
      "Achieving 100% test coverage across all service-layer CRUD operations before production handoff",
      "Automating the full CI/CD pipeline from build through testing to Azure deployment",
    ],
    outcomes: [
      "100% service-layer test coverage with NUnit/Moq — zero untested CRUD paths",
      "89+ commits demonstrating disciplined Git workflow with feature branching and code review",
      "Automated CI/CD pipeline eliminating all manual release steps",
      "3 production modules deployed to Azure App Service via Docker containers",
      "Normalized 5-table schema ensuring referential integrity across all entities",
    ],
    architecture:
      "Three-tier MVC architecture with Entity Framework Core ORM, SQL Server database, and Azure deployment with GitHub Actions CI/CD. Dependency injection throughout for full testability.",
    screenshots: [
      { src: "/images/farm-management/slide_1.png", alt: "Farm Management - Dashboard" },
      { src: "/images/farm-management/slide_2.png", alt: "Farm Management - Crops" },
      { src: "/images/farm-management/slide_3.png", alt: "Farm Management - Inventory" },
      { src: "/images/farm-management/slide_4.png", alt: "Farm Management - Fields" },
      { src: "/images/farm-management/slide_5.png", alt: "Farm Management - Reports" },
      { src: "/images/farm-management/slide_6.png", alt: "Farm Management - Settings" },
    ],
    deployment: ["Azure App Service", "Docker Container"],
    futureRoadmap: [
      "Weather API integration for predictive analytics",
      "Mobile companion app",
      "IoT sensor integration for real-time field monitoring",
      "Machine learning for crop yield prediction",
    ],
  },
  {
    slug: "retailiq",
    title: "RetailIQ",
    subtitle: "AI-Powered Analytics Dashboard",
    category: "Cognizant Internship Project",
    period: "Feb 2026 – May 2026",
    status: "Completed",
    featured: true,
    overview:
      "AI-powered retail analytics dashboard that surfaces inventory forecasts and sales trends from SQL Server data, built during the Cognizant internship.",
    problem:
      "Retail businesses struggle to extract actionable insights from large volumes of sales and inventory data, leading to stockouts, overstock situations, and missed revenue opportunities. Traditional reporting tools lack predictive capabilities.",
    solution:
      "Built an AI-powered analytics dashboard that processes SQL Server data to generate inventory forecasts, identify sales trends, and provide actionable business intelligence. The system uses ASP.NET Core for reliable backend processing and Entity Framework Core for efficient data access.",
    techStack: [
      "ASP.NET Core",
      "SQL Server",
      "C#",
      "AI/ML",
      "Entity Framework Core",
      "Docker",
      "Azure",
    ],
    features: [
      "AI-powered inventory forecasting",
      "Sales trend analysis and visualization",
      "Real-time analytics dashboard",
      "SQL Server data processing pipeline",
      "Enterprise-grade architecture",
    ],
    challenges: [
      "Processing large volumes of retail data efficiently with optimized SQL queries",
      "Designing accurate forecasting algorithms that adapt to seasonal patterns",
      "Creating intuitive data visualizations that translate complex analytics into business decisions",
    ],
    outcomes: [
      "Real-time analytics surfacing actionable inventory and sales insights",
      "AI-driven forecasting reducing manual data analysis overhead",
      "Enterprise-grade dashboard deployed to Azure for stakeholder access",
      "Integration with existing SQL Server data warehouse for zero-disruption adoption",
    ],
    architecture:
      "Enterprise analytics platform with ASP.NET Core backend, SQL Server data warehouse, and AI-driven forecasting engine deployed on Azure.",
    screenshots: [],
    deployment: ["Azure App Service"],
    futureRoadmap: [
      "Advanced ML models for demand prediction",
      "Multi-store analytics consolidation",
      "Automated reorder point calculation",
      "Customer behavior analytics",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills (grouped into 4 clean categories)
// ---------------------------------------------------------------------------
export interface Skill {
  name: string;
  icon?: string;
  level?: "Proficient" | "Experienced" | "Familiar";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core Fundamentals",
    icon: "Code2",
    skills: [
      { name: "C#", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Experienced" },
      { name: "JavaScript", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Kotlin", level: "Experienced" },
      { name: "SQL", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Proficient" },
      { name: "DSA", level: "Experienced" },
      { name: "OOP", level: "Proficient" },
      { name: "DBMS", level: "Proficient" },
      { name: "System Design", level: "Experienced" },
    ],
  },
  {
    title: "Frontend & UI Frameworks",
    icon: "Layout",
    skills: [
      { name: "React", level: "Proficient" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Jetpack Compose", level: "Experienced" },
      { name: "Material 3", level: "Experienced" },
      { name: "Framer Motion", level: "Experienced" },
    ],
  },
  {
    title: "Backend, APIs & Databases",
    icon: "Server",
    skills: [
      { name: "ASP.NET Core MVC", level: "Proficient" },
      { name: "Entity Framework Core", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "REST APIs", level: "Proficient" },
      { name: "SQL Server", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Experienced" },
      { name: "Supabase", level: "Experienced" },
      { name: "Prisma ORM", level: "Experienced" },
      { name: "JWT / OAuth", level: "Experienced" },
      { name: "RBAC", level: "Experienced" },
    ],
  },
  {
    title: "DevOps, Cloud & Tooling",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "Experienced" },
      { name: "GitHub Actions", level: "Experienced" },
      { name: "Azure App Service", level: "Experienced" },
      { name: "Vercel", level: "Proficient" },
      { name: "Render", level: "Experienced" },
      { name: "Git", level: "Proficient" },
      { name: "NUnit / Moq", level: "Proficient" },
      { name: "Gemini AI", level: "Experienced" },
      { name: "CI/CD Pipelines", level: "Experienced" },
      { name: "Linux (Ubuntu)", level: "Experienced" },
      { name: "VS Code / Visual Studio", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Certifications (exactly from resume)
// ---------------------------------------------------------------------------
export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    icon: "Award",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Professional%20Certificates/Oracle%20professional.pdf",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    icon: "Database",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates",
  },
  {
    title: "C# (Basic)",
    issuer: "HackerRank",
    icon: "Code2",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates",
  },
  {
    title: "Ethical Hacking Essentials",
    issuer: "Cisco",
    icon: "Shield",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Professional%20Certificates/Cisco%20Ethical%20Hacker.pdf",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    icon: "Lock",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Coursera/CyberSecurity.pdf",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google / Coursera",
    icon: "Terminal",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Coursera/python.pdf",
  },
  {
    title: "OpenCV Python For Beginners",
    issuer: "OpenCV",
    icon: "Code2",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Open%20CV/OpenCV%20Python%20For%20Beginners%20Certificate%20_%20OpenCV.pdf",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    icon: "Terminal",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/NPTEL/Python%20for%20Data%20Science.pdf",
  },
  {
    title: "Introduction To Internet Of Things",
    issuer: "NPTEL",
    icon: "Award",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/NPTEL/Introduction%20To%20Internet%20Of%20Things.pdf",
  },
  {
    title: "AWS Cloud Virtual Internship",
    issuer: "AICTE / EduSkills",
    icon: "Cloud",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Internship%20Online/Nanda%20Kishore%20Reddy%20Yerrabandi%20-%20AWS%20Internship%20-%20Internship.pdf",
  },
  {
    title: "Artificial Intelligence Foundations",
    issuer: "Great Learning",
    icon: "Brain",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Great%20Learning/GreatLearning_AI.jpg",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Great Learning",
    icon: "Brain",
    verificationUrl: "https://github.com/ynandakishorereddy/certificates/blob/main/Great%20Learning/GreatLearning_ML.jpg",
  }
];

// ---------------------------------------------------------------------------
// ORCare Showcase Data (dedicated page)
// ---------------------------------------------------------------------------
export const orcareShowcase = {
  title: "ORCare",
  subtitle: "AI-Powered Oral Health Companion",
  tagline: "Your personal oral health companion for a healthier, brighter smile",
  description:
    "A comprehensive cross-platform dental health platform featuring an AI-powered assistant, interactive symptom checker, educational learning center, and smart reminders — deployed across web and Android platforms.",
  platforms: [
    {
      name: "Web Application",
      tech: "Vanilla JavaScript · Vite 6.0 · Plus Jakarta Sans · Supabase",
      url: "https://orcare-webapp.vercel.app",
      deployment: "Vercel",
      screens: 22,
    },
    {
      name: "Android Application",
      tech: "Kotlin · Jetpack Compose · Material 3 · Retrofit · Room",
      url: "#",
      deployment: "APK / Play Store",
      screens: 36,
    },
    {
      name: "Web Backend API",
      tech: "Node.js · Express.js 5.2 · Supabase · Gemini 2.5 Flash",
      url: "https://orcare-webapp.onrender.com",
      deployment: "Render",
    },
    {
      name: "Android Backend API",
      tech: "Node.js · Express.js 5.2 · Supabase · Gemini 2.5 Flash",
      url: "https://orcare-backend-1.onrender.com",
      deployment: "Render",
    },
  ],
  keyFeatures: [
    "AI-Powered Dental Assistant (Gemini 2.5 Flash)",
    "Interactive Symptom Checker (10+ conditions)",
    "Educational Learning Center with Quizzes",
    "Smart Dental Hygiene Reminders",
    "30 Rotating Daily Health Tips",
    "Google OAuth with JWT Security",
    "Cross-Platform (Android + Web)",
    "Supabase PostgreSQL Backend",
  ],
  apiEndpoints: [
    { method: "POST", route: "/api/auth/google", description: "Google Sign-In" },
    { method: "GET", route: "/api/auth/me", description: "Get authenticated user" },
    { method: "PUT", route: "/api/user/profile", description: "Update profile" },
    { method: "POST", route: "/api/chat/", description: "Chat with AI dental assistant" },
    { method: "GET", route: "/api/chat/sessions", description: "List chat sessions" },
    { method: "GET", route: "/api/chat/history", description: "Get chat history" },
    { method: "POST", route: "/api/quiz/submit", description: "Submit quiz results" },
    { method: "GET", route: "/api/content/diseases", description: "Get diseases list" },
    { method: "GET", route: "/api/content/learning", description: "Get learning modules" },
    { method: "GET", route: "/api/health", description: "Health check" },
  ],
  databaseTables: [
    "users",
    "chat_sessions",
    "chat_messages",
    "diseases",
    "learning_modules",
    "learning_categories",
    "quizzes",
    "feedbacks",
  ],
  githubRepos: [
    { name: "orcare_webapp", url: "https://github.com/ynandakishorereddy/orcare_webapp" },
    { name: "orcare_backend", url: "https://github.com/ynandakishorereddy/orcare_backend" },
    { name: "orcare_andriod", url: "https://github.com/ynandakishorereddy/orcare_andriod" },
  ],
};

// ---------------------------------------------------------------------------
// GitHub Repositories (from actual repos)
// ---------------------------------------------------------------------------
export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
  stars?: number;
  forks?: number;
}

export const githubRepos: GitHubRepo[] = [
  {
    name: "orcare_webapp",
    description: "AI-powered oral health companion - Web Application with Vite + Supabase + Gemini AI",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/ynandakishorereddy/orcare_webapp",
    stars: 0,
    forks: 0,
  },
  {
    name: "orcare_backend",
    description: "ORCare REST API backend - Node.js/Express with Supabase PostgreSQL and Gemini AI",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/ynandakishorereddy/orcare_backend",
    stars: 0,
    forks: 0,
  },
  {
    name: "orcare_andriod",
    description: "ORCare native Android app - Kotlin/Jetpack Compose with Material 3 and MVVM architecture",
    language: "Kotlin",
    languageColor: "#A97BFF",
    url: "https://github.com/ynandakishorereddy/orcare_andriod",
    stars: 0,
    forks: 0,
  },
  {
    name: "prepiq",
    description: "AI Interview Platform - Next.js 14, Prisma, PostgreSQL, Gemini AI, Clerk Auth",
    language: "JavaScript",
    languageColor: "#f1e05a",
    url: "https://github.com/ynandakishorereddy/prepiq",
    stars: 0,
    forks: 0,
  },
];

// ---------------------------------------------------------------------------
// GitHub Languages Distribution (from repos)
// ---------------------------------------------------------------------------
export const githubLanguages = [
  { name: "TypeScript", percentage: 30, color: "#3178c6" },
  { name: "JavaScript", percentage: 25, color: "#f1e05a" },
  { name: "C#", percentage: 18, color: "#178600" },
  { name: "Kotlin", percentage: 15, color: "#A97BFF" },
  { name: "Java", percentage: 7, color: "#b07219" },
  { name: "Python", percentage: 5, color: "#3572A5" },
];
