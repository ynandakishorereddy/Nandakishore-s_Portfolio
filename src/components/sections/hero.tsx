'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { personalInfo } from '@/data/portfolio-data';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 1, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-8 pb-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten animate-float" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
              <span className="text-xl">👋</span> Hello, I'm
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4 flex flex-wrap gap-x-4">
              <span>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-blue-600 dark:text-blue-500">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-8">
              <span className="text-blue-600 dark:text-blue-400">{personalInfo.title}</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
              {personalInfo.summary.split('.')[0]}. {personalInfo.summary.split('.')[1]}.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <Link href="/projects" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-medium transition-all active:scale-95">
                <Download size={18} />
                Resume
              </a>
              <div className="flex gap-2 ml-2">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 w-full max-w-lg">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">4+</div>
                <div className="text-sm font-medium text-slate-500 mt-1">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">6</div>
                <div className="text-sm font-medium text-slate-500 mt-1">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">100%</div>
                <div className="text-sm font-medium text-slate-500 mt-1">Test Coverage</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-[320px] h-[320px] xl:w-[400px] xl:h-[400px]">
              {/* Clean glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-[2rem] blur-2xl opacity-20 dark:opacity-30" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-2xl z-10 bg-slate-100 dark:bg-slate-800">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest font-medium mb-2">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
