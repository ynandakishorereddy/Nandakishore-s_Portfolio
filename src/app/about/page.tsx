import { Metadata } from 'next';
import About from '@/components/sections/about';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Nandakishore Reddy - Software Engineer specializing in ASP.NET Core, AI-integrated full-stack applications, and cloud-native systems.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-16">
      <About />
    </main>
  );
}
