'use client';

import SectionHeading from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { skillCategories } from '@/data/portfolio-data';
import { Code2, Server, Layout, Cloud, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, Server, Layout, Cloud,
};

export default function Skills() {
  return (
    <section className="pt-8 pb-20 bg-white dark:bg-slate-950">
      <SectionHeading title="Technical Skills" subtitle="Technologies & Tools" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <FadeIn key={category.title} delay={index * 0.1}>
                <div className="h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800/50">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map(skill => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:border-blue-300 dark:hover:border-blue-700"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            skill.level === 'Proficient'
                              ? 'bg-emerald-500'
                              : skill.level === 'Experienced'
                                ? 'bg-blue-500'
                                : 'bg-amber-500'
                          }`}
                          aria-hidden="true"
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-10 text-xs font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Proficient
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
            Experienced
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
            Familiar
          </div>
        </div>
      </div>
    </section>
  );
}
