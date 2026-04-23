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
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div ref={heroContent} className="lg:col-span-7 space-y-6" data-reveal>
              <p className="eyebrow">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-300 to-accent-500" />
                Motion-first UI • Performance-minded • Accessibility-aware
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance headline" data-reveal-text>
                I build fast, expressive web experiences.
              </h1>
              <p className="text-lg md:text-2xl text-gray-400 max-w-2xl">
                A portfolio playground for GSAP-driven interaction design, with clean engineering underneath.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <MagneticButton href="/work" className="btn-primary">
                  Explore work
                </MagneticButton>
                <MagneticButton href="/services" className="btn-ghost" max={14}>
                  What I do
                </MagneticButton>
              </div>
              <div className="pt-6 flex flex-wrap gap-2">
                {['Next.js', 'GSAP', 'Design Systems', 'Performance'].map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center" data-reveal data-reveal-from="right" data-reveal-delay="0.05">
              <div
                ref={heroVisual}
                id="hero-visual"
                className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-accent-400 via-accent-500 to-black rounded-3xl shadow-glowStrong"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.55),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(0,0,0,0.65),transparent_60%)]" />
                <div className="absolute -inset-10 blur-3xl opacity-25 bg-[radial-gradient(circle_at_40%_40%,rgba(245,158,11,0.85),transparent_55%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* Featured Projects */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-6 mb-8" data-reveal>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Featured projects</h2>
            <p className="text-gray-400 mt-2">A few recent builds with crisp UX and disciplined motion.</p>
          </div>
          <Link href="/work" className="hidden sm:inline-flex text-sm text-gray-300 hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="card card-hover overflow-hidden group" data-reveal>
              <div className="relative aspect-video">
                {/* Using gradient overlay; images rendered in work pages via HorizontalScroll and detail */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/18 via-accent-500/10 to-black/0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-gray-500 group-hover:text-gray-200 transition-colors">↗</span>
                </div>
                <p className="text-gray-400 mt-2">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs">
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
      <section className="container-page py-16">
        <div className="card p-8 md:p-12" data-reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Let’s build something great.</h2>
              <p className="text-gray-400 mt-3 max-w-2xl">
                If you like this style of work, I’m available for freelance projects and collaborations.
              </p>
            </div>
            <div className="flex gap-3">
              <MagneticButton className="btn-primary" href="mailto:hello@example.com" max={16}>
                Email me
              </MagneticButton>
              <MagneticButton className="btn-ghost" href="/work" max={14}>
                See case studies
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
