'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { FadeIn, SlideIn } from '@/components/ui/motion-wrapper';
import { githubRepos, personalInfo } from '@/data/portfolio-data';
import { Star, GitFork, BookOpen, Users, Activity } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
export default function GithubSection() {
  const username = "ynandakishorereddy";
  const publicRepos = 10;
  
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pt-8 pb-20 bg-white dark:bg-slate-950">
      <SectionHeading title="GitHub Activity" subtitle="Open Source & Contributions" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Stats Overview */}
          <div className="lg:col-span-1 space-y-6">
            <FadeIn>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  <GithubIcon size={32} className="text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {username}
                  </h3>
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-4">
              <FadeIn delay={0.1}>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
                  <BookOpen size={24} className="mx-auto text-blue-500 mb-2" />
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{publicRepos}</div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Repositories</div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Top Repositories */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.3}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Activity className="text-blue-500" />
                Featured Repositories
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {githubRepos.map((repo) => (
                  <motion.a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 group-hover:underline truncate pr-4">
                        {repo.name}
                      </h4>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                        Public
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 min-h-[40px]">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                        {repo.language}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-slate-400" />
                        {repo.stars || 0}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} className="text-slate-400" />
                        {repo.forks || 0}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* GitHub Graph Representation (Static Visual) */}
        <FadeIn delay={0.4}>
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contribution Activity</h3>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">
                View on GitHub
              </a>
            </div>
            
            <div className="w-full overflow-x-auto pb-4 flex justify-center min-h-[140px]">
              {mounted && (
                <GitHubCalendar 
                  username={username} 
                  colorScheme={theme === 'dark' ? 'dark' : 'light'} 
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                />
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
