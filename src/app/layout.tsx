import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
    "Software Engineer with experience building production-ready ASP.NET Core, AI-powered full-stack, and cloud-native applications.",
  keywords: [
    "Software Engineer",
    "ASP.NET Core",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Azure",
    "AI",
  ],
  authors: [{ name: "Nandakishore Reddy" }],
  creator: "Nandakishore Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandakishore.dev", // Using a placeholder since no specific domain provided
    title: "Nandakishore Reddy | Software Engineer",
    description: "Software Engineer specializing in ASP.NET Core, full-stack, and AI-integrated applications.",
    siteName: "Nandakishore Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandakishore Reddy | Software Engineer",
    description: "Software Engineer specializing in ASP.NET Core, full-stack, and AI-integrated applications.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
