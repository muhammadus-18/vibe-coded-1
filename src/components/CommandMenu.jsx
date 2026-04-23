'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';

export default function CommandMenu({ dynamicPosts = [], dynamicProjects = [] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  const navigateTo = (path) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <Command 
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0D0D0D]/90 backdrop-blur-md shadow-glow relative z-50 overflow-hidden text-foreground"
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
      >
        <Command.Input 
          autoFocus 
          placeholder="Type a command or search..." 
          className="w-full border-b border-white/10 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-gray-400"
        />

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider">
            {[
              { name: 'Home', path: '/' },
              { name: 'Work', path: '/work' },
              { name: 'Blog', path: '/blog' },
              { name: 'Services', path: '/services' },
            ].map((route) => (
              <Command.Item 
                key={route.path}
                onSelect={() => navigateTo(route.path)}
                className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 aria-selected:bg-white/10 mt-1 transition-colors"
                value={route.name}
              >
                {route.name}
              </Command.Item>
            ))}
          </Command.Group>

          {dynamicProjects.length > 0 && (
            <Command.Group heading="Case Studies" className="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider">
              {dynamicProjects.map((project) => (
                <Command.Item 
                  key={`work-${project.id}`}
                  onSelect={() => navigateTo(`/work/${project.id}`)}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 aria-selected:bg-white/10 mt-1 transition-colors"
                  value={project.title}
                >
                  {project.title}
                </Command.Item>
              ))}
            </Command.Group>
          )}

          {dynamicPosts.length > 0 && (
            <Command.Group heading="Blog Posts" className="px-2 py-2 text-xs text-gray-500 uppercase tracking-wider">
              {dynamicPosts.map((post) => (
                <Command.Item 
                  key={`blog-${post.slug}`}
                  onSelect={() => navigateTo(`/blog/${post.slug}`)}
                  className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 aria-selected:bg-white/10 mt-1 transition-colors"
                  value={post.title}
                >
                  {post.title}
                </Command.Item>
              ))}
            </Command.Group>
          )}
        </Command.List>
      </Command>
    </div>
  );
}
