'use client';

import SectionHeading from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '@/data/portfolio-data';

export default function Experience() {
  return (
    <section className="pt-8 pb-20 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800">
      <SectionHeading title="Professional Experience" subtitle="Career Journey" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative border-l-[3px] border-blue-100 dark:border-slate-800 ml-4 md:ml-6 py-4">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 mb-16 last:mb-0 w-full">
              
              {/* Timeline Dot */}
              <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 shadow-sm z-10" />

              {/* Content Card */}
              <FadeIn delay={index * 0.1} className="w-full">
                <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-md transition-all">
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                        <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                          <Building2 size={16} />
                          {item.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                          <MapPin size={16} />
                          {item.location}
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg w-fit">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
