'use client';

import { cn } from '@/lib/utils';
import { FadeIn } from './motion-wrapper';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <FadeIn className={cn('mb-12 md:mb-16', align === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start', className)}>
      {subtitle && (
        <span className="inline-block uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold text-xs mb-3 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className={cn("h-1.5 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full", align === 'center' ? 'mx-auto' : '')} />
    </FadeIn>
  );
}
