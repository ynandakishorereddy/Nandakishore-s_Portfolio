const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove Architecture Section
const startArch = content.indexOf('{/* ═══════ #architecture — ADRs');
const endArch = content.indexOf('{/* ═══════ #skills — Competencies');
if (startArch !== -1 && endArch !== -1) {
  content = content.substring(0, startArch) + content.substring(endArch);
}

// 2. Avatar styling
content = content.replace(
  /<div className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-cyan-400 rounded-\[2rem\] blur-2xl opacity-20" \/>\s*<div className="relative w-full h-full rounded-\[2rem\] overflow-hidden border border-slate-200 shadow-2xl z-10 bg-white">/g,
  '<div className="absolute inset-0 bg-rose-800/30 blur-3xl rounded-full" />\n                  <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 shadow-2xl z-10 bg-white">'
);

// 3. Import Link
if (!content.includes("import Link from 'next/link';")) {
  content = content.replace("import Image from 'next/image';", "import Image from 'next/image';\nimport Link from 'next/link';");
}

// 4. Update flagship project link
content = content.replace(
  /<h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900">\{D.projects.flagship.title\}<\/h3>/,
  '<Link href={`/projects/${D.projects.flagship.slug}`}><h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900 hover:text-rose-800 transition-colors">{D.projects.flagship.title}</h3></Link>'
);

// 5. Update secondary projects to be Links
content = content.replace(
  /<div key=\{proj\.slug\} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col hover:shadow-md hover:border-slate-300 transition-all">/g,
  '<Link key={proj.slug} href={`/projects/${proj.slug}`} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col hover:shadow-md hover:border-slate-300 transition-all cursor-pointer block">'
);
content = content.replace(
  /<\/a>\s*\}\)\s*\}\s*<\/div>\s*\)\)\}\s*<\/div>/g,
  '</a>\n                  )}\n                </Link>\n              ))}\n            </div>'
); // Adjusting the end of secondary projects map

fs.writeFileSync('src/app/page.tsx', content);
console.log("page.tsx updated");
