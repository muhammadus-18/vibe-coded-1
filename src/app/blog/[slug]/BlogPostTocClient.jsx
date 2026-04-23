'use client';

import { useEffect, useRef } from 'react';
import { useActiveHeading } from '@/hooks/useActiveHeading';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

export default function BlogPostTocClient({ headings }) {
  const tocRef = useRef(null);
  const headingIds = headings.map((h) => h.id);
  const activeId = useActiveHeading(headingIds);

  useEffect(() => {
    const root = tocRef.current;
    if (!root) return;

    const links = Array.from(root.querySelectorAll('a'));
    if (!links.length) return;

    const handlers = links.map((link) => {
      const handler = (e) => {
        const href = link.getAttribute('href');
        if (!href?.startsWith('#')) return;
        e.preventDefault();

        const targetId = href.slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        const top = window.scrollY + targetEl.getBoundingClientRect().top - 80;
        window.scrollTo({
          top,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
      };

      link.addEventListener('click', handler);
      return { link, handler };
    });

    return () => {
      handlers.forEach(({ link, handler }) => link.removeEventListener('click', handler));
    };
  }, [headings]);

  return (
    <div className="sticky top-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Table of Contents</h3>
      <nav className="space-y-2" ref={tocRef}>
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={[
              'block text-sm transition-colors',
              heading.level === 1 ? 'font-semibold' : 'font-normal',
              activeId === heading.id ? 'text-blue-400' : 'text-gray-400 hover:text-gray-300',
            ].join(' ')}
            style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

