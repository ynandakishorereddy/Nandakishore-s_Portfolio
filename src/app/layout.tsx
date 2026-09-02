import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { personalInfo } from "@/data/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nandakishore Reddy",
    default: "Nandakishore Reddy | Software Engineer",
  },
  description:
    "Software Engineer with experience building production-ready ASP.NET Core, AI-powered full-stack, and cloud-native applications. Skilled in C#, Java, React, Node.js, Azure, and CI/CD.",
  keywords: [
    "Software Engineer",
    "ASP.NET Core",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Azure",
    "AI",
    "Nandakishore Reddy",
    "Portfolio",
  ],
  authors: [{ name: "Nandakishore Reddy" }],
  creator: "Nandakishore Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandakishore.dev",
    title: "Nandakishore Reddy | Software Engineer",
    description:
      "Software Engineer specializing in ASP.NET Core, full-stack, and AI-integrated applications.",
    siteName: "Nandakishore Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandakishore Reddy | Software Engineer",
    description:
      "Software Engineer specializing in ASP.NET Core, full-stack, and AI-integrated applications.",
  },
  metadataBase: new URL("https://nandakishore.dev"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: personalInfo.fullName,
    jobTitle: personalInfo.title,
    description: personalInfo.summary,
    email: `mailto:${personalInfo.email}`,
    url: "https://nandakishore.dev",
    sameAs: [personalInfo.github, personalInfo.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadapa",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Saveetha University (SIMATS)",
    },
    knowsAbout: [
      "ASP.NET Core",
      "React",
      "Next.js",
      "Node.js",
      "Azure",
      "Docker",
      "PostgreSQL",
      "SQL Server",
      "C#",
      "TypeScript",
      "Kotlin",
      "AI Integration",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
