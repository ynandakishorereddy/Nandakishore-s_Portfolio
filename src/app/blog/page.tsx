import { Metadata } from 'next';
import SectionHeading from '@/components/ui/section-heading';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles and thoughts by Nandakishore Reddy.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pb-16 bg-white dark:bg-slate-950 flex flex-col">
      <SectionHeading title="Blog" subtitle="Articles & Thoughts" />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 max-w-lg mx-auto text-center mt-8">
        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-full flex items-center justify-center mb-6">
          <BookOpen size={36} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Coming Soon</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          I'm currently working on some technical articles about ASP.NET Core, React, and AI integrations. Check back later!
        </p>
      </div>
    </main>
  );
}
