const fs = require('fs');

// Fix portfolio-data.ts
let data = fs.readFileSync('src/lib/portfolio-data.ts', 'utf8');

// 1. Remove Architecture from navLinks
data = data.replace(/\{ label: "Architecture", href: "#architecture" \},\n\s*/, '');

// 2. Remove ADRs
data = data.replace(/\/\/\s*---\s*\n\/\/ Architecture Decision Records \(ADRs\)\n\/\/\s*---\s*\n\s*adrs: \[[\s\S]*?\],\n/, '');

// 3. Reorganize skills
const newSkills = `skills: [
    {
      title: "Full-Stack Systems",
      icon: "Code2" as const,
      items: [
        { name: "TypeScript", status: "Proficient" as const },
        { name: "C#/.NET 8", status: "Proficient" as const },
        { name: "Next.js", status: "Proficient" as const },
        { name: "React", status: "Proficient" as const }
      ]
    },
    {
      title: "Backend & Distributed Services",
      icon: "Server" as const,
      items: [
        { name: "ASP.NET Core", status: "Proficient" as const },
        { name: "gRPC", status: "Experienced" as const },
        { name: "Microservices", status: "Experienced" as const }
      ]
    },
    {
      title: "Data & Storage",
      icon: "Layout" as const,
      items: [
        { name: "PostgreSQL", status: "Proficient" as const },
        { name: "Redis", status: "Experienced" as const },
        { name: "EF Core", status: "Proficient" as const }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud" as const,
      items: [
        { name: "Docker", status: "Experienced" as const },
        { name: "GitHub Actions", status: "Experienced" as const },
        { name: "Linux", status: "Experienced" as const }
      ]
    },
    {
      title: "Quality & Architecture",
      icon: "Award" as const,
      items: [
        { name: "TDD", status: "Experienced" as const },
        { name: "NUnit", status: "Proficient" as const },
        { name: "Moq", status: "Proficient" as const },
        { name: "Accessibility", status: "Experienced" as const }
      ]
    }
  ],`;

data = data.replace(/skills: \[\s*\{[\s\S]*?\}\s*],\n/, newSkills + '\n');

// 4. Add getAllProjects helper at the end
data += `
export function getAllProjects() {
  return [PORTFOLIO_DATA.projects.flagship, ...PORTFOLIO_DATA.projects.secondary];
}
`;

fs.writeFileSync('src/lib/portfolio-data.ts', data);

// 5. Replace colors in all TSX files (page.tsx, navbar.tsx, terminal-widget.tsx)
function replaceColors(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/indigo-600/g, 'rose-800');
  content = content.replace(/indigo-700/g, 'rose-700');
  content = content.replace(/indigo-500/g, 'rose-600');
  content = content.replace(/indigo-200/g, 'rose-200');
  content = content.replace(/indigo-100/g, 'rose-100');
  content = content.replace(/indigo-50/g, 'rose-50');
  fs.writeFileSync(file, content);
}

replaceColors('src/app/page.tsx');
replaceColors('src/components/navbar.tsx');
replaceColors('src/components/terminal-widget.tsx');

console.log("Data fixed and colors replaced.");
