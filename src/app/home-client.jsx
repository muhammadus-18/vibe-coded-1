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
import RevealText from '@/components/RevealText';
import HorizontalScroll from '@/components/HorizontalScroll';

export default function Home({ posts }) {
  const heroVisual = useRef(null);
  const heroContent = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // Stagger animation for hero visual elements
    if (!reduceMotion && heroVisual.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.to(heroVisual.current, {
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        duration: 4,
        ease: 'power1.inOut',
      })
      .to(heroVisual.current, {
        borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%',
        duration: 4,
        ease: 'power1.inOut',
      });

      // Floating animation
      gsap.to(heroVisual.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="container-page py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-16 items-center">
            <div ref={heroContent} className="lg:col-start-1 lg:col-span-7 space-y-10">
              <div className="overflow-hidden">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-container animate-pulse">
                  Available for Q3/Q4 2026
                </p>
              </div>
              
              <h1 className="font-display text-6xl md:text-[110px] font-extrabold text-foreground tracking-tighter leading-[0.85] uppercase">
                <RevealText speed={1.2}>Creative</RevealText>
                <RevealText speed={1.2} delay={0.1}>Developer</RevealText>
                <span className="text-primary-container italic font-light">&</span>
                <RevealText speed={1.2} delay={0.2}>Designer</RevealText>
              </h1>

              <div className="max-w-xl space-y-6">
                <p className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed text-balance">
                  Crafting high-end editorial experiences where technical precision meets artistic narrative. 
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <MagneticButton href="/work" className="btn-primary px-8 py-4 text-[11px]">
                    Explore Portfolio
                  </MagneticButton>
                  <MagneticButton href="/services" className="btn-ghost px-8 py-4 text-[11px]">
                    Capabilities
                  </MagneticButton>
                </div>
              </div>
            </div>

            <div className="lg:col-start-9 lg:col-span-4 flex items-center justify-center">
              <div className="relative group">
                <div
                  ref={heroVisual}
                  className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] bg-surface-bright rounded-[120px] shadow-2xl overflow-hidden transition-all duration-1000 group-hover:scale-105"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.4),transparent_55%)] animate-pulse" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(0,0,0,0.6),transparent_60%)]" />
                  <div className="absolute inset-0 border border-white/10 rounded-inherit pointer-events-none" />
                  
                  {/* Decorative lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 rotate-45" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-background border border-outline-variant/30 rounded-full flex items-center justify-center p-4 shadow-xl animate-spin-slow">
                  <p className="font-mono text-[8px] uppercase tracking-widest text-center">
                    Fullstack • Motion • Design • 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* Featured Projects - Horizontal Scroll */}
      <section className="py-24 md:py-40 border-t border-outline-variant/20">
        <div className="container-page mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none">
                <RevealText>Selected</RevealText>
                <RevealText delay={0.1}>Narratives</RevealText>
              </h2>
              <p className="font-sans text-on-surface-variant mt-6 text-xl leading-relaxed">A curated collection of digital architecture and visual storytelling.</p>
            </div>
            <Link href="/work" className="font-mono text-sm text-primary hover:text-primary-container transition-all hover:tracking-[0.2em] uppercase tracking-widest">
              Explore All Works →
            </Link>
          </div>
        </div>
        
        <HorizontalScroll projects={projects.slice(0, 5)} />
      </section>

      <ImpactStats />
      <BentoCapabilities />
      <ExperienceTimeline />
      <FeaturedInsights posts={posts} />

      {/* Final Call to Action */}
      <section className="container-page py-40">
        <div className="card p-12 md:p-24 lg:mx-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)]" />
          <div className="relative z-10 space-y-10">
            <h2 className="font-display text-5xl md:text-8xl font-bold text-foreground tracking-tighter uppercase leading-none">
              Ready for the<br/>
              <span className="text-primary-container">Next Level?</span>
            </h2>
            <p className="font-sans text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Currently accepting new projects for Q4 2026. Let's build a digital experience that resonates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <MagneticButton className="btn-primary px-10 py-5 text-[11px]" href="mailto:hello@example.com">
                Inquire Project
              </MagneticButton>
              <MagneticButton className="btn-ghost px-10 py-5 text-[11px]" href="/work">
                View Archive
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
