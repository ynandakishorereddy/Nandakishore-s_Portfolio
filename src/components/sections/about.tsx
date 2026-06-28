'use client';

import SectionHeading from '@/components/ui/section-heading';
import { FadeIn, SlideIn } from '@/components/ui/motion-wrapper';
import { GraduationCap, MapPin, Target, Lightbulb } from 'lucide-react';
import { personalInfo, education } from '@/data/portfolio-data';

export default function About() {
  const currentEdu = education[0];

  return (
    <section className="pt-8 pb-20 bg-white dark:bg-slate-950">
      <SectionHeading title="About Me" subtitle="Who I Am" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="prose prose-lg dark:prose-invert prose-slate max-w-none text-slate-600 dark:text-slate-400">
                <p className="mb-6 leading-relaxed">
                  I'm a Software Engineer passionate about building production-ready applications that solve real-world problems. Currently pursuing my {currentEdu.degree} at {currentEdu.institution} with a CGPA of {currentEdu.cgpa}.
                </p>
                <p className="mb-6 leading-relaxed">
                  During my internship at Cognizant, I architected enterprise-grade systems using ASP.NET Core, Entity Framework Core, and SQL Server — achieving 100% service-layer test coverage and automating deployments with GitHub Actions CI/CD pipelines.
                </p>
                <p className="mb-6 leading-relaxed">
                  I specialize in building AI-integrated full-stack applications, from native Android apps with Kotlin and Jetpack Compose to web platforms with React and Next.js. My work spans the entire stack: database design, REST API development, cloud deployment, and CI/CD automation.
                </p>
                <p className="leading-relaxed">
                  I believe in clean architecture, SOLID principles, and test-driven development. Every system I build is designed to be maintainable, scalable, and production-ready.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              <SlideIn delay={0.1}>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Education</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{currentEdu.degree}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{currentEdu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">CGPA: {currentEdu.cgpa}</p>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.2}>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-xl shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{personalInfo.location}</p>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.3}>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Current Focus</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">AI-Integrated Full-Stack Systems</p>
                  </div>
                </div>
              </SlideIn>

              <SlideIn delay={0.4}>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-xl shrink-0">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Engineering Philosophy</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Clean Architecture · SOLID · TDD</p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
