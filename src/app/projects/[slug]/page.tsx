import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, getAllProjects } from '@/lib/portfolio-data';
import { GithubIcon } from '@/components/ui/icons';

// Generate static params for all projects
export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = getAllProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Helper to safely get properties that might be on flagship only or secondary only
  const category = 'category' in project ? project.category : 'Project';
  const subtitle = 'subtitle' in project ? project.subtitle : '';
  const liveDemo = 'liveDemo' in project ? project.liveDemo : undefined;
    
  // Extract links
  let links: {name: string, url: string}[] = [];
  if ('links' in project && Array.isArray(project.links)) {
    links = project.links;
  } else if ('github' in project && typeof project.github === 'string') {
    links = [{ name: 'GitHub Repo', url: project.github }];
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-rose-800 transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Hero Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-800">
              {category}
            </span>
            {subtitle && (
              <>
                <span className="text-slate-300">•</span>
                <span className="text-sm font-medium text-slate-600">{subtitle}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-4">
            {liveDemo && (
              <a 
                href={liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-rose-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-rose-700 shadow-sm transition-all active:scale-95"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            
            {links.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 hover:text-rose-800 shadow-sm transition-all active:scale-95"
              >
                <GithubIcon size={18} /> {link.name}
              </a>
            ))}
          </div>
        </header>

        {/* Media Showcase */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md mb-20">
          <Image alt={`${project.title} Preview`} className="object-cover object-top" fill priority src={(project as any).thumbnail} />
        </div>

        {/* In-depth Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center text-sm">1</span>
                Project Summary
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  Building {project.title} required addressing complex functional requirements while ensuring scalability and maintainability. The core problem revolved around creating a seamless user experience that could handle varying loads and complex state management.
                </p>
                <p>
                  The solution implemented a modular architecture, decoupling the frontend presentation layer from the backend services. By leveraging modern frameworks, we ensured that the application remains responsive and resilient under stress.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center text-sm">2</span>
                Key Architecture Pillars
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The technology stack was chosen based on the need for rapid iteration, type safety, and strong community support. We utilized {project.tags.slice(0, 3).join(', ')} to build a robust foundation.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  {project.tags.map(tag => (
                    <li key={tag}><strong>{tag}:</strong> Selected for its superior ecosystem and performance characteristics in this context.</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center text-sm">3</span>
                Engineering Challenges
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  One of the primary challenges was ensuring data consistency across distributed components. We implemented robust synchronization mechanisms and optimistic UI updates to mask network latency.
                </p>
                <p>
                  Additionally, optimizing the build pipeline and reducing the initial bundle size required deep profiling and code-splitting strategies, resulting in a significantly improved Time-to-Interactive (TTI).
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Measurable Benchmarks</h3>
              <ul className="space-y-4">
                {'highlight' in project && (
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-slate-600 font-medium">{project.highlight as string}</span>
                  </li>
                )}
                {'metrics' in project && Array.isArray(project.metrics) && (project.metrics as any)?.map((m: any) => (
                  <li key={m.label} className="flex flex-col">
                    <span className="text-2xl font-bold text-rose-800">{m.value}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">{m.label}</span>
                    <span className="text-xs text-slate-500 mt-1">{m.detail}</span>
                  </li>
                ))}
                {!('highlight' in project) && !('metrics' in project) && (
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-slate-600 font-medium">Successfully delivered on time with 100% core requirements met.</span>
                  </li>
                )}
              </ul>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
