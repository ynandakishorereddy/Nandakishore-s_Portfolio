import { Metadata } from 'next';
import Certifications from '@/components/sections/certifications';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications earned by Nandakishore Reddy.',
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pb-16">
      <Certifications />
    </main>
  );
}
