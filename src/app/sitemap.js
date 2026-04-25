import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';

export default function sitemap() {
  const baseUrl = 'https://gsap-portfolio.vercel.app';
  
  const routes = ['', '/work', '/blog', '/services', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...postRoutes, ...projectRoutes];
}
