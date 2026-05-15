'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import MagneticButton from '@/components/MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const links = [
    { href: '/', label: 'Index' },
    { href: '/work', label: 'Works' },
    { href: '/services', label: 'Expertise' },
    { href: '/blog', label: 'Journal' },
    { href: '/about', label: 'Story' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <nav 
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="container-page">
        <div 
          className={clsx(
            "flex justify-between items-center transition-all duration-700 rounded-[20px] px-8",
            scrolled ? "bg-surface/60 backdrop-blur-xl border border-white/5 py-4 shadow-2xl shadow-black/40" : "bg-transparent py-0"
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-display text-2xl font-black tracking-tighter text-foreground group">
              <span className="inline-block group-hover:text-primary-container transition-colors duration-500 uppercase">AV</span>
              <span className="text-primary-container group-hover:text-foreground transition-colors duration-500">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'font-mono text-[10px] transition-all duration-500 uppercase tracking-[0.25em] relative group',
                  isActive(l.href) ? 'text-primary-container' : 'text-on-surface-variant hover:text-foreground'
                )}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {l.label}
                <span 
                  className={clsx(
                    "absolute -bottom-1 left-0 w-full h-[1px] bg-primary-container origin-left transition-transform duration-500",
                    isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} 
                />
              </Link>
            ))}
            <MagneticButton href="/contact" className="btn-primary py-2.5 px-6 !rounded-full !text-[9px]" max={12}>
              Project Inquiry
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              <div className="relative w-4 h-4">
                <span className={clsx(
                  "absolute block w-full h-[1.5px] bg-current transition-all duration-300",
                  isOpen ? "rotate-45 top-2" : "top-1"
                )} />
                <span className={clsx(
                  "absolute block w-full h-[1.5px] bg-current transition-all duration-300",
                  isOpen ? "-rotate-45 top-2" : "top-3"
                )} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id={mobileMenuId}
          className={clsx(
            'md:hidden mt-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden rounded-[24px] border border-white/5 bg-surface/90 backdrop-blur-2xl shadow-2xl',
            isOpen ? 'max-h-[500px] opacity-100 p-8' : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'block font-display text-3xl font-bold transition-all duration-500 tracking-tighter uppercase',
                  isActive(l.href)
                    ? 'text-primary-container'
                    : 'text-foreground/60 hover:text-foreground'
                )}
                aria-current={isActive(l.href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-white/5">
              <Link href="/contact" className="btn-primary w-full py-4 !rounded-2xl font-mono uppercase tracking-widest text-[10px]">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
