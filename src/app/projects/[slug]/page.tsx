import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { projects } from '@/data/portfolio-data';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { ExternalLink, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export async function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== 'orcare')
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }
  
  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  if (resolvedParams.slug === 'orcare') {
    redirect('/projects/orcare');
  }
  
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">{project.title}</span>
          </nav>
        </FadeIn>

        {/* Hero */}
        <FadeIn delay={0.1}>
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full border border-green-100 dark:border-green-800">
                <CheckCircle2 size={12} />
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-6">
              {project.subtitle}
            </p>
            
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
              <Calendar size={16} />
              {project.period}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm shadow-blue-500/20">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                  <GithubIcon size={18} />
                  View Source
                </a>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Overview */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">Overview</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </FadeIn>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={0.3}>
            <div className="h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-red-100 dark:border-red-900/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                <AlertCircle size={16} /> The Problem
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                {project.problem}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
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

        {/* Tech Stack */}
        <FadeIn delay={0.5} className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack & Architecture</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {project.architecture}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm">
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Features & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <FadeIn delay={0.6}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.7}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technical Challenges</h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <FadeIn delay={0.8} className="mb-16">
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
        <FadeIn delay={0.9} className="mb-16">
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

        {/* Navigation Footer */}
        <FadeIn delay={1.0} className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-16">
          <Link href="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to all projects
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
