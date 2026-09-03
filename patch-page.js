const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ensure getAllProjects is imported
if (!page.includes('getAllProjects')) {
  page = page.replace(/import \{ PORTFOLIO_DATA \}/, 'import { PORTFOLIO_DATA, getAllProjects }');
}

const sectionStart = page.indexOf('<section id="projects"');
const sectionEnd = page.indexOf('</section>', sectionStart) + '</section>'.length;

const newProjectsSection = `<section id="projects" className="py-24 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionLabel label="Featured Work" />
            <h2 className="text-3xl font-bold mb-16 text-slate-900">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {getAllProjects().map(proj => {
                const category = 'category' in proj ? proj.category : proj.subtitle;
                const highlight = 'highlight' in proj ? proj.highlight : null;
                const firstImage = proj.images?.[0] || '';
                
                return (
                  <div key={proj.slug} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-rose-300 flex flex-col justify-between cursor-pointer">
                    <Link href={\`/projects/\${proj.slug}\`} className="block mb-4">
                      {/* 16:9 Image Preview */}
                      <div className="w-full aspect-video rounded-xl bg-slate-100 overflow-hidden mb-5 relative border border-slate-200/60">
                        {firstImage ? (
                          <img src={firstImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">Preview</div>
                        )}
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
        </section>`;

page = page.substring(0, sectionStart) + newProjectsSection + page.substring(sectionEnd);

fs.writeFileSync('src/app/page.tsx', page);
