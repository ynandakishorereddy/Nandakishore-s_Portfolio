import { Metadata } from 'next';
import Experience from '@/components/sections/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience of Nandakishore Reddy at Cognizant.',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pb-16">
      <Experience />
    </main>
  );
}
