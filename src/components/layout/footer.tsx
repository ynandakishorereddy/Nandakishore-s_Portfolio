import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { personalInfo, navItems } from '@/data/portfolio-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-slate-200">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-slate-900 dark:text-slate-200">Location</span>
                <span>{personalInfo.location}</span>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-xs font-medium text-green-700 dark:text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {personalInfo.availability}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} {personalInfo.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind CSS</span>
            <span>Deployed on Vercel</span>
            <span className="text-slate-400">v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
