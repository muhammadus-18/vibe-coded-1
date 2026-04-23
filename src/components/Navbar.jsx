'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import MagneticButton from '@/components/MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = useId();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="container-page">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500">
                GSAP
              </span>{' '}
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'text-sm transition-colors',
                  isActive(l.href) ? 'text-foreground' : 'text-gray-400 hover:text-foreground'
                )}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
            <MagneticButton href="/work" className="btn-primary" max={14}>
              View work
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-gray-200 hover:bg-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id={mobileMenuId}
          className={clsx(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-48' : 'max-h-0'
          )}
        >
          <div className="pb-4 pt-2 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'block rounded-xl px-4 py-2 text-sm transition-colors',
                  isActive(l.href)
                    ? 'bg-white/5 text-foreground border border-white/10'
                    : 'text-gray-300 hover:bg-white/5 hover:text-foreground'
                )}
                aria-current={isActive(l.href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/work" className="btn-primary w-full">
                View work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
