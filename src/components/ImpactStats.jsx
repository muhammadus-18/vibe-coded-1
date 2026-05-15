'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { label: 'Built Works', value: 42, suffix: '+' },
  { label: 'Creative Years', value: 8, suffix: '+' },
  { label: 'Tech Stack', value: 15, suffix: '' },
  { label: 'Client Trust', value: 100, suffix: '%' },
];

export default function ImpactStats() {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      statsRefs.current.forEach((statEl, i) => {
        if (!statEl) return;
        
        const valueEl = statEl.querySelector('.stat-value');
        const targetValue = stats[i].value;

        // Counter animation
        gsap.fromTo(valueEl, 
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statEl,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            ease: 'expo.out',
          }
        );

        // Fade/Slide animation
        gsap.fromTo(statEl,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: statEl,
              start: 'top 95%',
            },
            ease: 'expo.out',
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 border-y border-white/5 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.03),transparent_70%)]" />
      
      <div className="container-page relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 border-x border-white/5">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              ref={el => statsRefs.current[i] = el}
              className="px-8 py-10 md:py-16 text-center group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="stat-value font-display text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
                  0
                </span>
                <span className="font-display text-2xl md:text-3xl font-light text-primary-container">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-mono text-[9px] md:text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.3em] mt-8 group-hover:text-foreground transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
