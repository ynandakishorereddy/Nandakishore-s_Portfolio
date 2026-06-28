import { MetadataRoute } from 'next';
import { navItems, projects } from '@/data/portfolio-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nandakishore.dev'; // Replace with actual domain
  
  const routes = navItems.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route.href === '/' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
