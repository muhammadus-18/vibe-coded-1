'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

import FAQAccordion from '@/components/FAQAccordion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Metadata must be exported from a server component; Services is a client component.
// Consider creating a separate server wrapper if SEO for this page is critical.

export default function Services() {
  const containerRef = useRef(null);
  const parallaxContainerRefs = useRef([]);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      parallaxContainerRefs.current.forEach((container) => {
        if (!container) return;
        const img = container.querySelector('img');
        if (!img) return;

        gsap.fromTo(
          img,
          { yPercent: 20 },
          {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Production-grade Next.js apps: fast, accessible, and easy to evolve.',
      bullets: ['App Router architecture', 'Component systems', 'Edge-friendly patterns'],
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Interfaces that feel inevitable: clear hierarchy, crisp states, and great flow.',
      bullets: ['Information architecture', 'Design tokens', 'Interaction specs'],
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Make it feel instant: LCP, hydration, image strategy, and animation hygiene.',
      bullets: ['Bundle + route analysis', 'Core Web Vitals', 'Perf budgets'],
    },
    {
      id: 4,
      title: 'Animation Design',
      description: 'GSAP motion that supports the story—plus reduced-motion fallbacks.',
      bullets: ['ScrollTrigger reveals', 'Micro-interactions', 'Motion system'],
    },
    {
      id: 5,
      title: 'Consulting',
      description: 'A focused audit + action plan: unblock decisions, de-risk architecture, ship faster.',
      bullets: ['Technical direction', 'Code review', 'Roadmap + trade-offs'],
    },
    {
      id: 6,
      title: 'Maintenance',
      description: 'Keep it healthy: upgrades, fixes, monitoring, and small iterative improvements.',
      bullets: ['Dependency upgrades', 'Bugfix SLA', 'Content updates'],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tighter uppercase">
            Services
          </h1>
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            A modular service offering for a high-end portfolio template. Swap copy, pricing, and packages to fit your brand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary font-mono uppercase tracking-wider text-xs">
              Start a project
            </Link>
            <Link href="/work" className="btn-ghost font-mono uppercase tracking-wider text-xs">
              See case studies
            </Link>
          </div>
        </div>

        {/* Parallax feature strip (no pin) */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" ref={containerRef}>
          <div className="lg:col-span-5 card p-8 md:p-10" data-reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Motion that supports the story.
            </h2>
            <p className="mt-4 font-sans text-on-surface-variant leading-relaxed">
              Subtle depth, clean reveals, and scroll effects that stay at 60fps. No hijacking, no heavy filters.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ScrollTrigger', 'Lenis', 'Accessibility', 'Reduced motion'].map((t) => (
                <span
                  key={t}
                  className="font-mono px-3 py-1 bg-surface-bright/20 text-on-surface border border-outline-variant/30 rounded-xl text-[11px] uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Design → Build', img: 'https://picsum.photos/seed/services-1/900/700' },
              { title: 'Performance', img: 'https://picsum.photos/seed/services-2/900/700' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card overflow-hidden"
                data-parallax-container
                data-reveal
                data-reveal-delay={index === 0 ? '0' : '0.05'}
                ref={(el) => (parallaxContainerRefs.current[index] = el)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover will-change-transform transform-gpu"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-display text-lg font-bold text-foreground tracking-tight">{item.title}</div>
                    <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Passive parallax • no pin</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card p-8 hover:border-white/20 transition-all duration-300"
              data-reveal
              data-reveal-delay={String(Math.min(0.18, index * 0.03))}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 font-sans text-sm text-on-surface-variant leading-relaxed">
                {service.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary-container shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">Process</h2>
            <p className="font-sans text-on-surface-variant mt-3 leading-relaxed">
              A clear, repeatable approach that keeps scope honest and quality high—perfect for a template site.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: 'Discovery', d: 'Align on goals, users, constraints, and success metrics.' },
              { t: 'Design', d: 'IA + UI states + interaction spec with a small, consistent system.' },
              { t: 'Build', d: 'Ship in slices: performance-first structure, then polish.' },
              { t: 'Iterate', d: 'Tight feedback loops and fixes that stick (docs + reusable patterns).' },
            ].map((s) => (
              <div key={s.t} className="card p-6" data-reveal>
                <div className="font-mono text-xs uppercase tracking-widest text-on-surface flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-container" />
                  {s.t}
                </div>
                <p className="font-sans text-on-surface-variant mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion />

        <div className="mt-16 flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
          <Link href="/contact" className="btn-primary font-mono uppercase tracking-wider text-xs">
            Start a project
          </Link>
          <Link href="/work" className="btn-ghost font-mono uppercase tracking-wider text-xs">
            Browse work
          </Link>
        </div>
      </div>
    </div>
  );
}
