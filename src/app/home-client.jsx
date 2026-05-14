'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import MagneticButton from '@/components/MagneticButton';
import BentoCapabilities from '@/components/BentoCapabilities';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechMarquee from '@/components/TechMarquee';
import ImpactStats from '@/components/ImpactStats';
import FeaturedInsights from '@/components/FeaturedInsights';

export default function Home({ posts }) {
  const heroVisual = useRef(null);
  const heroContent = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // Stagger animation for hero content (h1, p, button)
    if (heroContent.current) {
      const elements = heroContent.current.children;
      gsap.fromTo(elements, { y: 24, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: reduceMotion ? 0 : 0.9,
        stagger: reduceMotion ? 0 : 0.12,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }

    // Border radius morphing animation for hero visual
    if (!reduceMotion && heroVisual.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.to(heroVisual.current, {
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(heroVisual.current, {
        borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(heroVisual.current, {
        borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
        duration: 2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-16 items-center">
            <div ref={heroContent} className="lg:col-start-2 lg:col-span-5 space-y-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-container mr-3" />
                Motion-first UI • Performance-minded • Accessibility-aware
              </p>
              <h1 className="font-display text-5xl md:text-[80px] font-extrabold text-foreground text-balance tracking-tighter leading-tight uppercase" data-reveal-text>
                Creative Developer & Designer
              </h1>
              <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Blending high-end editorial aesthetics with technical precision. I build digital experiences that prioritize narrative, intentional asymmetry, and sophisticated interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton href="/work" className="btn-primary font-mono uppercase tracking-wider text-xs">
                  Explore work
                </MagneticButton>
                <MagneticButton href="/services" className="btn-ghost font-mono uppercase tracking-wider text-xs" max={14}>
                  What I do
                </MagneticButton>
              </div>
              <div className="pt-8 flex flex-wrap gap-2">
                {['Next.js', 'GSAP', 'Design Systems', 'Performance'].map((t) => (
                  <span key={t} className="font-mono px-3 py-1.5 bg-surface-bright/20 text-on-surface border border-outline-variant/30 rounded-xl text-[11px] uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-start-8 lg:col-span-5 flex items-center justify-center" data-reveal data-reveal-from="right" data-reveal-delay="0.05">
              <div
                ref={heroVisual}
                id="hero-visual"
                className="relative w-72 h-72 sm:w-96 sm:h-96 bg-surface-bright rounded-[12px] shadow-glowStrong overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.35),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(0,0,0,0.8),transparent_60%)]" />
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-[12px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* Featured Projects */}
      <section className="container-page py-40">
        <div className="flex items-end justify-between gap-6 mb-16" data-reveal>
          <div className="lg:col-start-2 lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Featured projects</h2>
            <p className="font-sans text-on-surface-variant mt-4 text-lg">A few recent builds with crisp UX and disciplined motion.</p>
          </div>
          <Link href="/work" className="hidden sm:inline-flex font-mono text-sm text-primary hover:text-primary-container transition-colors tracking-widest uppercase">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:px-12">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="card card-hover overflow-hidden group block" data-reveal>
              <div className="relative aspect-video p-5">
                <div className="absolute inset-0 bg-surface-bright/40" />
                <div className="relative w-full h-full rounded-[12px] bg-background/50 border border-outline-variant/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.1),transparent_70%)]" />
                </div>
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-on-surface-variant bg-surface-bright/50 px-2 py-1 rounded-md group-hover:text-primary transition-colors">
                    {p.tags[0] || 'Web'}
                  </span>
                </div>
                <p className="font-sans text-on-surface-variant mt-4 leading-relaxed">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.slice(1, 4).map((t) => (
                    <span key={t} className="font-mono px-2 py-1 text-on-surface-variant/70 border border-outline-variant/30 rounded-md text-[11px] uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ImpactStats />
      <BentoCapabilities />
      <ExperienceTimeline />
      <FeaturedInsights posts={posts} />

      {/* Contact */}
      <section className="container-page py-40">
        <div className="card p-10 md:p-16 lg:mx-12" data-reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Let’s build something great.</h2>
              <p className="font-sans text-on-surface-variant mt-6 text-lg leading-relaxed">
                If you like this style of work, I’m available for freelance projects and collaborations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton className="btn-primary font-mono uppercase tracking-wider text-xs" href="mailto:hello@example.com" max={16}>
                Email me
              </MagneticButton>
              <MagneticButton className="btn-ghost font-mono uppercase tracking-wider text-xs" href="/work" max={14}>
                See case studies
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
