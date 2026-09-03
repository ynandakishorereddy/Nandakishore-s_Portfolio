import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const p = PORTFOLIO_DATA.personal;

export const metadata: Metadata = {
  title: {
    template: "%s | Nandakishore Reddy",
    default: "Nandakishore Reddy | Software Engineer",
  },
  description: p.bio,
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
  authors: [{ name: p.shortName }],
  creator: p.shortName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: p.social.portfolio,
    title: `${p.shortName} | ${p.headline}`,
    description: p.bio,
    siteName: `${p.shortName} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${p.shortName} | ${p.headline}`,
    description: p.bio,
  },
  metadataBase: new URL(p.social.portfolio),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: p.fullName,
    jobTitle: p.headline,
    description: p.bio,
    email: `mailto:${p.email}`,
    url: p.social.portfolio,
    sameAs: [p.social.github, p.social.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadapa",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: p.education.institution,
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ backgroundColor: "var(--c-canvas)", color: "var(--c-ink)" }}
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
