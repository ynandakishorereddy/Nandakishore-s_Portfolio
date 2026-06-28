import { Metadata } from 'next';
import Contact from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nandakishore Reddy.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-16">
      <Contact />
    </main>
  );
}
