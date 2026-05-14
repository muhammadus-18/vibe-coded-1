'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { label: 'Projects Completed', value: 40, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Technologies', value: 12, suffix: '' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
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
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statEl,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            ease: 'power3.out',
          }
        );

        // Fade/Slide animation
        gsap.fromTo(statEl,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: statEl,
              start: 'top 90%',
            },
            ease: 'power3.out',
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 border-y border-outline-variant/30 bg-surface-bright/10">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:px-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              ref={el => statsRefs.current[i] = el}
              className="text-center group"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="stat-value font-display text-5xl md:text-7xl font-extrabold text-foreground tracking-tighter">
                  0
                </span>
                <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-mono text-xs md:text-sm font-bold text-on-surface-variant uppercase tracking-widest mt-6 group-hover:text-primary transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
