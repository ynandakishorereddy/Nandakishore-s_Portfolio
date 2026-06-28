import { Metadata } from 'next';
import Skills from '@/components/sections/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and technologies used by Nandakishore Reddy.',
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen pb-16">
      <Skills />
    </main>
  );
}
