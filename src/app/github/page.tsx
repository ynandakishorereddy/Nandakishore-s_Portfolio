import { Metadata } from 'next';
import GithubSection from '@/components/sections/github';

export const metadata: Metadata = {
  title: 'GitHub',
  description: 'GitHub repositories, open source contributions, and activity of Nandakishore Reddy.',
};

export default function GithubPage() {
  return (
    <main className="min-h-screen pb-16">
      <GithubSection />
    </main>
  );
}
