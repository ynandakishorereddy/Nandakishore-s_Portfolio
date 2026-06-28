import { Metadata } from 'next';
import Projects from '@/components/sections/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Featured projects built by Nandakishore Reddy.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pb-16">
      <Projects />
    </main>
  );
}
