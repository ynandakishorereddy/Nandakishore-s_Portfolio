'use client';

import { useState } from 'react';
import Image from 'next/image';
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
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
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

      <main>
        {/* ═══════ #about — Hero ═══════════════════════════════════════════ */}
        <section id="about" className="relative min-h-[90vh] flex items-center pt-[88px] overflow-hidden">
          <div className="absolute inset-0 mesh-glow -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  {D.personal.availability}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                  <span className="text-[var(--c-ink)]">{D.personal.fullName.split(' ')[0]} </span>
                  <span className="text-[var(--c-accent-indigo)]">
                    {D.personal.fullName.split(' ').slice(1).join(' ')}
                  </span>
                </h1>

                <p className="text-xl font-semibold text-[var(--c-accent-indigo)] mb-2">
                  {D.personal.headline}
                </p>
                <p className="text-sm font-medium text-[var(--c-muted)] mb-6 flex items-center gap-2">
                  <MapPin size={14} />
                  {D.personal.experience.role} @ {D.personal.experience.company} · {D.personal.location}
                </p>

                <p className="text-base text-[var(--c-muted)] max-w-lg mb-8 leading-relaxed">
                  {D.personal.bio}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 items-center mb-10">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 bg-[var(--c-accent-indigo)] hover:opacity-90 text-white px-6 py-3 rounded-xl font-medium transition-all active:scale-95"
                  >
                    View Projects <ArrowRight size={18} />
                  </a>
                  <a
                    href={D.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--c-line)] hover:bg-[var(--c-surface)] px-6 py-3 rounded-xl font-medium transition-all active:scale-95"
                  >
                    <Download size={18} /> Resume
                  </a>
                  <div className="flex gap-2 ml-2">
                    <a href={D.personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[var(--c-line)] hover:bg-[var(--c-surface)] transition-colors" aria-label="GitHub">
                      <GithubIcon size={20} />
                    </a>
                    <a href={D.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[var(--c-line)] hover:bg-[var(--c-surface)] transition-colors" aria-label="LinkedIn">
                      <LinkedinIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Stats ribbon */}
                <div className="grid grid-cols-4 gap-6 pt-8 border-t border-[var(--c-line)] w-full max-w-lg">
                  {D.personal.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-2xl sm:text-3xl font-bold text-[var(--c-ink)]">{stat.value}</div>
                      <div className="text-xs font-medium text-[var(--c-muted)] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Profile */}
              <div className="hidden lg:flex justify-center relative">
                <div className="relative w-[340px] h-[340px] xl:w-[400px] xl:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--c-accent-indigo)] to-[var(--c-accent-cyan)] rounded-[2rem] blur-2xl opacity-20" />
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-[var(--c-line)] shadow-2xl z-10">
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
        <section id="projects" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Featured Work" />
            <h2 className="text-3xl font-bold mb-16">Projects</h2>

            {/* Flagship — ORCare */}
            <div className="mb-16 p-8 sm:p-10 rounded-2xl border border-[var(--c-line)] bg-[var(--c-surface)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--c-accent-indigo)]/10 to-transparent rounded-bl-full -z-0" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--c-accent-indigo)]">
                    Flagship · {D.projects.flagship.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--c-accent-emerald)]/10 text-[var(--c-accent-emerald)] border border-[var(--c-accent-emerald)]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent-emerald)] animate-pulse-dot" />
                    {D.projects.flagship.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{D.projects.flagship.title}</h3>
                <p className="text-[var(--c-muted)] max-w-2xl mb-8">{D.projects.flagship.overview}</p>

                {/* Architecture pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {D.projects.flagship.architecture.map(a => (
                    <div key={a.pillar} className="p-4 rounded-xl border border-[var(--c-line)] bg-[var(--c-canvas)]">
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--c-accent-indigo)] mb-1">{a.pillar}</div>
                      <div className="text-sm text-[var(--c-muted)]">{a.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {D.projects.flagship.metrics.map(m => (
                    <div key={m.label} className="text-center p-4 rounded-xl bg-[var(--c-accent-indigo)]/5 border border-[var(--c-accent-indigo)]/10">
                      <div className="text-2xl font-bold text-[var(--c-accent-indigo)]">{m.value}</div>
                      <div className="text-xs font-semibold text-[var(--c-ink)] mt-1">{m.label}</div>
                      <div className="text-[10px] text-[var(--c-muted)]">{m.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {D.projects.flagship.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--c-line)] bg-[var(--c-canvas)] font-medium text-[var(--c-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {D.projects.flagship.liveDemo && (
                    <a href={D.projects.flagship.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--c-accent-indigo)] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {D.projects.flagship.links.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--c-line)] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[var(--c-surface)] transition-colors">
                      <GithubIcon size={16} /> {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {D.projects.secondary.map(proj => (
                <div key={proj.slug} className="p-6 rounded-2xl border border-[var(--c-line)] bg-[var(--c-surface)] flex flex-col hover:border-[var(--c-accent-indigo)]/40 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--c-accent-indigo)] mb-3">{proj.subtitle}</span>
                  <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                  <p className="text-sm text-[var(--c-muted)] mb-4 line-clamp-3 flex-1">{proj.overview}</p>

                  <div className="text-xs font-semibold text-[var(--c-accent-emerald)] mb-4 flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    {proj.highlight}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-md border border-[var(--c-line)] text-[var(--c-muted)] font-medium">{tag}</span>
                    ))}
                    {proj.tags.length > 4 && (
                      <span className="text-[10px] px-2 py-1 rounded-md border border-[var(--c-line)] text-[var(--c-muted)] font-medium">+{proj.tags.length - 4}</span>
                    )}
                  </div>

                  {'github' in proj && typeof proj.github === 'string' && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--c-accent-indigo)] hover:underline mt-auto">
                      <GithubIcon size={14} /> View Source
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ #architecture — ADRs ════════════════════════════════════ */}
        <section id="architecture" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Engineering Decisions" />
            <h2 className="text-3xl font-bold mb-16">Architecture Decision Records</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {D.adrs.map(adr => (
                <div key={adr.id} className="p-6 rounded-2xl border border-[var(--c-line)] bg-[var(--c-surface)] flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold font-[family-name:var(--font-jetbrains)] text-[var(--c-accent-cyan)]">{adr.id}</span>
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--c-accent-emerald)]/10 text-[var(--c-accent-emerald)] border border-[var(--c-accent-emerald)]/20">
                      {adr.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-4">{adr.title}</h3>

                  <div className="space-y-3 text-sm text-[var(--c-muted)] flex-1">
                    <div>
                      <span className="font-semibold text-[var(--c-ink)] text-xs uppercase tracking-wider">Context</span>
                      <p className="mt-1 leading-relaxed">{adr.context}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--c-ink)] text-xs uppercase tracking-wider">Decision</span>
                      <p className="mt-1 leading-relaxed">{adr.decision}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--c-ink)] text-xs uppercase tracking-wider">Consequence</span>
                      <p className="mt-1 leading-relaxed">{adr.consequence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ #skills — Competencies ══════════════════════════════════ */}
        <section id="skills" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Technologies & Tools" />
            <h2 className="text-3xl font-bold mb-16">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {D.skills.map(cat => {
                const Icon = skillIconMap[cat.icon] || Code2;
                return (
                  <div key={cat.title} className="p-8 rounded-2xl border border-[var(--c-line)] bg-[var(--c-surface)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--c-accent-indigo)]/10 text-[var(--c-accent-indigo)] flex items-center justify-center border border-[var(--c-accent-indigo)]/20">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{cat.title}</h3>
                        <p className="text-xs text-[var(--c-muted)]">{cat.items.length} technologies</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(skill => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--c-line)] bg-[var(--c-canvas)] text-sm font-medium hover:border-[var(--c-accent-indigo)]/40 transition-colors"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              skill.status === 'Proficient' ? 'bg-[var(--c-accent-emerald)]' : 'bg-[var(--c-accent-indigo)]'
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
            <div className="flex items-center justify-center gap-8 mt-8 text-xs font-medium text-[var(--c-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--c-accent-emerald)]" /> Proficient
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--c-accent-indigo)]" /> Experienced
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ #credentials — Certifications ══════════════════════════ */}
        <section id="credentials" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Verified Credentials" />
            <h2 className="text-3xl font-bold mb-16">Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {D.credentials.map((cert, i) => (
                <a
                  key={i}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl border border-[var(--c-line)] bg-[var(--c-surface)] hover:border-[var(--c-accent-indigo)]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--c-accent-indigo)]/10 text-[var(--c-accent-indigo)] flex items-center justify-center shrink-0 border border-[var(--c-accent-indigo)]/20">
                    <Award size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold group-hover:text-[var(--c-accent-indigo)] transition-colors leading-snug mb-1">{cert.title}</h3>
                    <p className="text-xs text-[var(--c-muted)]">{cert.issuer} · {cert.date}</p>
                  </div>
                  <ExternalLink size={14} className="text-[var(--c-muted)] group-hover:text-[var(--c-accent-indigo)] shrink-0 mt-1 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ #terminal — Terminal Preview ═══════════════════════════ */}
        <section id="terminal" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel label="Developer Tooling" />
            <h2 className="text-3xl font-bold mb-4">Interactive Terminal</h2>
            <p className="text-[var(--c-muted)] mb-8 max-w-lg mx-auto">
              Explore my background, projects, and skills through a developer-friendly terminal interface.
            </p>
            <button
              onClick={() => setTerminalOpen(true)}
              className="inline-flex items-center gap-2 bg-[var(--c-ink)] text-[var(--c-canvas)] px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity active:scale-95 shadow-lg"
            >
              <TerminalIcon size={20} />
              Launch Terminal
            </button>
          </div>
        </section>

        {/* ═══════ #contact — Contact ═════════════════════════════════════ */}
        <section id="contact" className="py-24 border-t border-[var(--c-line)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <SectionLabel label="Get In Touch" />
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-[var(--c-muted)] mb-10 max-w-lg mx-auto">
              I&apos;m currently open to full-time software engineering opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <a
              href={`mailto:${D.personal.email}`}
              className="inline-flex items-center gap-3 bg-[var(--c-accent-indigo)] text-white px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity active:scale-95 shadow-lg shadow-[var(--c-accent-indigo)]/20"
            >
              <Mail size={20} />
              {D.personal.email}
            </a>

            <div className="flex items-center justify-center gap-4 mt-8">
              <a href={D.personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[var(--c-line)] hover:bg-[var(--c-surface)] transition-colors" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={D.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-[var(--c-line)] hover:bg-[var(--c-surface)] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ Footer ═════════════════════════════════════════════════ */}
        <footer className="py-8 border-t border-[var(--c-line)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--c-muted)]">
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
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--c-accent-indigo)]/20 bg-[var(--c-accent-indigo)]/5 text-[var(--c-accent-indigo)] text-xs font-bold uppercase tracking-widest mb-4">
      <FileText size={12} />
      {label}
    </div>
  );
}
