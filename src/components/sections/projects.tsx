'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { projects } from '@/data/portfolio-data';
import { ExternalLink, ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export default function Projects() {
  return (
    <section className="pt-8 pb-20 bg-white dark:bg-slate-950">
      <SectionHeading title="Featured Projects" subtitle="What I've Built" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1} className="h-full">
              <motion.div 
                whileHover={{ y: -6 }}
                className="h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8 flex-1 flex flex-col relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl -z-10" />

                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      {project.status === 'Completed' ? (
                        <CheckCircle2 size={12} className="text-green-500" />
                      ) : (
                        <Activity size={12} className="text-blue-500" />
                      )}
                      {project.status}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm">
                    {project.overview}
                  </p>
                  
                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="px-8 py-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
