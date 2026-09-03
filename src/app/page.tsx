'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Code2,
  Layout,
  Server,
  Cloud,
  CheckCircle2,
  FileText,
  Award,
  Terminal as TerminalIcon,
  type LucideIcon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { PORTFOLIO_DATA, getAllProjects } from '@/lib/portfolio-data';
import { Navbar } from '@/components/navbar';
import { TerminalWidget } from '@/components/terminal-widget';

const D = PORTFOLIO_DATA;

const skillIconMap: Record<string, LucideIcon> = {
  Code2, Layout, Server, Cloud,
};

export default function HomePage() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <Navbar onTerminalOpen={() => setTerminalOpen(true)} />

      <main className="bg-slate-50 min-h-screen">
        {/* ═══════ #about — Hero ═══════════════════════════════════════════ */}
        <section id="about" className="relative min-h-[90vh] flex items-center pt-[88px] overflow-hidden bg-white">
          <div className="absolute inset-0 mesh-glow -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  {D.personal.availability}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                  <span className="text-slate-900">{D.personal.fullName.split(' ')[0]} </span>
                  <span className="text-rose-800">
                    {D.personal.fullName.split(' ').slice(1).join(' ')}
                  </span>
                </h1>

                <p className="text-xl font-semibold text-rose-800 mb-2">
                  {D.personal.headline}
                </p>
                <p className="text-sm font-medium text-slate-500 mb-6 flex items-center gap-2">
                  <MapPin size={14} />
                  {D.personal.experience.role} @ {D.personal.experience.company} · {D.personal.location}
                </p>

                <p className="text-base text-slate-600 max-w-lg mb-8 leading-relaxed">
                  {D.personal.bio}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 items-center mb-10">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 bg-rose-800 hover:bg-rose-700 text-white shadow-sm px-6 py-3 rounded-xl font-medium transition-all active:scale-95"
                  >
                    View Projects <ArrowRight size={18} />
                  </a>
                  <a
                    href={D.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3 rounded-xl font-medium transition-all active:scale-95 shadow-sm"
                  >
                    <Download size={18} /> Resume
                  </a>
                  <div className="flex gap-2 ml-2">
                    <a href={D.personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-700 hover:text-rose-800 transition-colors" aria-label="GitHub">
                      <GithubIcon size={20} />
                    </a>
                    <a href={D.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-700 hover:text-rose-800 transition-colors" aria-label="LinkedIn">
                      <LinkedinIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Stats ribbon */}
                <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-200 w-full max-w-lg bg-white rounded-xl">
                  {D.personal.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-2xl sm:text-3xl font-bold text-rose-800">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Profile */}
              <div className="hidden lg:flex justify-center relative">
                <div className="relative w-[340px] h-[340px] xl:w-[400px] xl:h-[400px]">
                  <div className="absolute inset-0 bg-rose-800/30 blur-3xl rounded-full" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 shadow-2xl z-10 bg-white">
                    <Image
                      src={D.personal.profileImage}
                      alt={D.personal.shortName}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ #projects — Featured Work ═══════════════════════════════ */}
        <section id="projects" className="py-24 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Featured Work" />
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {getAllProjects().map(proj => {
                const category = 'category' in proj ? proj.category : proj.subtitle;
                const highlight = 'highlight' in proj ? proj.highlight : null;
                const firstImage = (proj as any).images?.[0] || '';
                
                return (
                  <div key={proj.slug} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-rose-300 flex flex-col justify-between cursor-pointer">
                    <Link href={`/projects/${proj.slug}`} className="block mb-4">
                      {/* 16:9 Image Preview */}
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-5 group-hover:border-rose-200 transition-colors">
                        <Image
                          alt={`${proj.title} Preview`}
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          fill
                          priority
                          src={(proj as any).thumbnail}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      <span className="text-xs font-bold uppercase tracking-widest text-rose-800 mb-2 block">{category}</span>
                      <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-rose-800 transition-colors">{proj.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">{proj.overview}</p>

                      {highlight && (
                        <div className="text-xs font-semibold text-emerald-700 mb-4 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1.5 rounded-md border border-emerald-100 w-fit">
                          <CheckCircle2 size={14} />
                          {highlight}
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[10px] px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                          {tag}
                        </span>
                      ))}
                      {proj.tags.length > 4 && (
                        <span className="text-[10px] px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-600 font-medium">
                          +{proj.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-4">
                      {'liveDemo' in proj && typeof proj.liveDemo === 'string' && (
                        <a href={proj.liveDemo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-800 hover:text-rose-700 transition-colors">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      
                      {'github' in proj && typeof proj.github === 'string' && (
                        <a href={proj.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-rose-800 transition-colors">
                          <GithubIcon size={16} /> Source
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════ #skills — Competencies ══════════════════════════════════ */}
        <section id="skills" className="py-24 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Technologies & Tools" />
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {D.skills.map(cat => {
                const Icon = skillIconMap[cat.icon] || Code2;
                return (
                  <div key={cat.title} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center border border-rose-100">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                        <p className="text-xs font-medium text-slate-500">{cat.items.length} technologies</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cat.items.map(skill => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200/80 bg-slate-50 text-slate-700 text-sm font-medium hover:bg-white hover:border-indigo-300 transition-colors shadow-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              skill.status === 'Proficient' ? 'bg-emerald-500' : 'bg-rose-600'
                            }`}
                            aria-hidden="true"
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-10 text-xs font-bold text-slate-600 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Proficient
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" /> Experienced
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ #credentials — Certifications ══════════════════════════ */}
        <section id="credentials" className="py-24 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Verified Credentials" />
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {D.credentials.map((cert, i) => (
                <a
                  key={i}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center shrink-0 border border-rose-100">
                    <Award size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-rose-800 transition-colors leading-snug mb-1">{cert.title}</h3>
                    <p className="text-xs font-medium text-slate-500">{cert.issuer} · {cert.date}</p>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-rose-800 shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ #terminal — Terminal Preview ═══════════════════════════ */}
        <section id="terminal" className="py-24 border-t border-slate-200 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel label="Developer Tooling" />
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Interactive Terminal</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Explore my background, projects, and skills through a developer-friendly terminal interface.
            </p>
            <button
              onClick={() => setTerminalOpen(true)}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-slate-800 transition-colors active:scale-95 shadow-md hover:shadow-lg"
            >
              <TerminalIcon size={20} />
              Launch Terminal
            </button>
          </div>
        </section>

        {/* ═══════ #contact — Contact ═════════════════════════════════════ */}
        <section id="contact" className="py-24 border-t border-slate-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-md rounded-3xl p-10 sm:p-16">
              <SectionLabel label="Get In Touch" />
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Let&apos;s Build Something Together</h2>
              <p className="text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
                I&apos;m currently open to full-time software engineering opportunities. Whether you have a question or just want to say hi, my inbox is always open.
              </p>

              <a
                href={`mailto:${D.personal.email}`}
                className="inline-flex items-center gap-3 bg-rose-800 hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors active:scale-95 shadow-sm hover:shadow-md"
              >
                <Mail size={20} />
                {D.personal.email}
              </a>

              <div className="flex items-center justify-center gap-4 mt-10">
                <a href={D.personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-700 hover:text-rose-800 transition-colors" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href={D.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-700 hover:text-rose-800 transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ Footer ═════════════════════════════════════════════════ */}
        <footer className="py-8 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <p>© {new Date().getFullYear()} {D.personal.fullName}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Built with Next.js &amp; Tailwind CSS</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </footer>
      </main>

      <TerminalWidget isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

/* ─── Reusable section label ────────────────────────────────────────────── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
      <FileText size={14} />
      {label}
    </div>
  );
}
