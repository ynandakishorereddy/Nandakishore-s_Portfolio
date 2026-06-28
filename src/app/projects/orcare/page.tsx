import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio-data';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, Shield, Activity, Smartphone, Server, Database, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'ORCare - Flagship Healthcare Platform',
  description: 'A comprehensive, multi-platform healthcare management system built with microservices architecture.',
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
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <span>/</span>
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
                ORCare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Platform</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 active:scale-95">
                    <Globe size={18} />
                    Web App Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-medium transition-all active:scale-95">
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
                     alt="ORCare Dashboard" 
                     fill 
                     className="object-cover"
                     priority
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                   <div className="text-white font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                     Patient Management Dashboard
                   </div>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Multi-Platform Ecosystem</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                ORCare is built as a complete ecosystem consisting of three primary applications connected via a unified backend infrastructure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Staff Web Portal</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  React/Vite SPA for hospital administrators and doctors to manage patients, appointments, and medical records.
                </p>
                <div className="mt-auto">
                  <a href="https://github.com/ynandakishorereddy/orcare_webapp" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    View Repository <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Component 2 */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Patient Android App</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  Native Android application built with Kotlin and Jetpack Compose for patients to book appointments and view records.
                </p>
                <div className="mt-auto">
                  <a href="https://github.com/ynandakishorereddy/orcare_andriod" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-600 dark:text-green-400 hover:underline flex items-center gap-1">
                    View Repository <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Component 3 */}
            <FadeIn delay={0.3}>
              <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                  <Server size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Core API Gateway</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  Node.js/Express backend service handling authentication, business logic, and database operations.
                </p>
                <div className="mt-auto">
                  <a href="https://github.com/ynandakishorereddy/orcare_backend" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                    View Repository <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Challenge</h2>
              <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                <p>
                  {project.problem}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Solution</h2>
              <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                <p>
                  {project.solution}
                </p>
                <p>
                  {project.architecture}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-16 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Security & Data Integrity
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Role-Based Access Control:</strong> Strict separation of concerns between patient, doctor, and admin privileges.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Supabase RLS:</strong> Row Level Security policies implemented at the database level ensuring users can only access their own records.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Secure Authentication:</strong> JWT-based authentication with Supabase Auth handling secure session management.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
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
