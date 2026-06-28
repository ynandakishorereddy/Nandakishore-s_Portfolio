'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import { FadeIn } from '@/components/ui/motion-wrapper';
import { certifications } from '@/data/portfolio-data';
import { Award, Database, Code2, Shield, Lock, Terminal, Cloud, Brain, ExternalLink, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Award, Database, Code2, Shield, Lock, Terminal, Cloud, Brain
};

export default function Certifications() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <SectionHeading title="Certifications" subtitle="Professional Credentials" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            const hasVerification = cert.verificationUrl && cert.verificationUrl !== '#';
            
            return (
              <FadeIn key={cert.title} delay={index * 0.1} className="h-full">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="h-full flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  {/* Decorative background shape */}
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-800/50 shadow-inner">
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                      Issued by {cert.issuer}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                      {hasVerification ? (
                        <a 
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          Verify Credential
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-400 dark:text-slate-500 italic">
                          Verification link pending
                        </span>
                      )}
                    </div>
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
