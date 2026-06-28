'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { skillCategories } from '@/data/portfolio-data';
import { Code2, Server, Layout, Database, Cloud, GitBranch, TestTube, Brain, Blocks, Monitor, Wrench, GraduationCap, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Layout, Database, Cloud, GitBranch, TestTube, Brain, Blocks, Monitor, Wrench, GraduationCap
};

export default function Skills() {
  return (
    <section className="pt-8 pb-20 bg-white dark:bg-slate-950">
      <SectionHeading title="Technical Skills" subtitle="Technologies & Tools" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <FadeIn key={category.title} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800/50">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map(skill => (
                      <div key={skill.name} className="flex items-center justify-between group">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && skill.level !== 'Experienced' && (
                          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider
                            ${skill.level === 'Proficient' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50' : 
                              'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50'}`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full 
                              ${skill.level === 'Proficient' ? 'bg-green-500' : 
                                'bg-amber-500'}`} 
                            />
                            {skill.level}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
