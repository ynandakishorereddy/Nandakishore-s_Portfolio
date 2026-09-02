import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, orcareShowcase } from '@/data/portfolio-data';
import { FadeIn } from '@/components/ui/motion-wrapper';
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Smartphone,
  Server,
  Globe,
  Database,
  Layers,
  TrendingUp,
  Wrench,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'ORCare — AI-Powered Oral Health Platform',
  description:
    'A cross-platform oral health companion with native Android + React web sharing one secure REST API backend, integrated with Gemini AI for contextual health guidance.',
};

export default function ORCareProjectPage() {
  const project = projects.find((p) => p.slug === 'orcare');

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-900 dark:text-slate-200 font-medium">ORCare Platform</span>
            </nav>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Flagship Project
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                ORCare{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Platform
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                {project.subtitle} — A cross-platform ecosystem with AI-powered dental health assistant, symptom checker, and educational resources.
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                    aria-label="Open ORCare web application"
                  >
                    <Globe size={18} />
                    Web App Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-medium transition-all active:scale-95"
                    aria-label="View ORCare frontend repository on GitHub"
                  >
                    <GithubIcon size={18} />
                    Frontend Repo
                  </a>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-[2rem] transform rotate-3 scale-105" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 aspect-[4/3]">
                {project.screenshots && project.screenshots.length > 0 && (
                  <Image
                    src={project.screenshots[0].src}
                    alt="ORCare Web Application Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    ORCare Web Dashboard
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Multi-Platform Ecosystem */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Multi-Platform Ecosystem
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                ORCare is built as a complete ecosystem with {orcareShowcase.platforms.length} primary services connected via a unified backend infrastructure — totaling 58 production screens.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orcareShowcase.platforms.map((platform, i) => {
              const icons = [Globe, Smartphone, Server, Server];
              const colors = [
                'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
                'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
              ];
              const PlatformIcon = icons[i];

              return (
                <FadeIn key={platform.name} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl ${colors[i]} flex items-center justify-center mb-4`}>
                      <PlatformIcon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 font-mono">
                      {platform.tech}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-500">{platform.deployment}</span>
                      {'screens' in platform && (
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {platform.screens} screens
                        </span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem & Solution + Outcomes */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeIn>
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-red-100 dark:border-red-900/30 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                  <AlertCircle size={16} /> The Challenge
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  {project.problem}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-green-100 dark:border-green-900/30 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} /> The Solution
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  {project.solution}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Measurable Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <FadeIn delay={0.2} className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900/30">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <TrendingUp size={22} className="text-blue-600" />
                  Measurable Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-blue-100/50 dark:border-blue-900/30">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Architecture */}
          <FadeIn delay={0.3} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers size={24} className="text-blue-500" />
              System Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {project.architecture}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Key Features & Engineering Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <FadeIn delay={0.4}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-500" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.5}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Wrench size={20} className="text-amber-500" />
                Engineering Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                    <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Security & Data */}
          <FadeIn delay={0.6}>
            <div className="mb-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Security & Data Integrity
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Role-Based Access Control:</strong> Strict separation of concerns between user roles and admin privileges.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Supabase RLS:</strong> Row Level Security policies ensuring users can only access their own records at the database level.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Secure Authentication:</strong> JWT-based authentication with Google OAuth handling session management across platforms.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* API Reference */}
          <FadeIn delay={0.7} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Server size={24} className="text-purple-500" />
              API Reference
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left px-6 py-4 font-bold text-slate-900 dark:text-white">Method</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900 dark:text-white">Route</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {orcareShowcase.apiEndpoints.map((endpoint, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <td className="px-6 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          endpoint.method === 'GET'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : endpoint.method === 'POST'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                              : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-slate-700 dark:text-slate-300">{endpoint.route}</td>
                      <td className="px-6 py-3 text-slate-600 dark:text-slate-400">{endpoint.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Database Schema */}
          <FadeIn delay={0.8} className="mb-16">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Database size={20} className="text-cyan-500" />
              Database Schema ({orcareShowcase.databaseTables.length} tables)
            </h2>
            <div className="flex flex-wrap gap-2">
              {orcareShowcase.databaseTables.map((table) => (
                <span key={table} className="px-4 py-2 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-400 text-sm font-mono font-medium">
                  {table}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* GitHub Repositories */}
          <FadeIn delay={0.85} className="mb-16">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Source Repositories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {orcareShowcase.githubRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <GithubIcon size={20} className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-sm group-hover:underline">
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ExternalLink size={12} />
                    View on GitHub
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <FadeIn delay={0.9} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900 group">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium text-sm bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {screenshot.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Future Roadmap */}
          <FadeIn delay={0.95} className="mb-16">
            <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Future Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.futureRoadmap.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                    <ArrowRight size={16} className="text-blue-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Navigation */}
          <FadeIn delay={1.0}>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-between items-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
                <ArrowLeft size={18} />
                All Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
