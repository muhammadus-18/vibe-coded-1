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
    <section ref={sectionRef} className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              ref={el => statsRefs.current[i] = el}
              className="text-center group"
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="stat-value text-5xl md:text-7xl font-black text-white tracking-tighter">
                  0
                </span>
                <span className="text-3xl md:text-4xl font-bold text-accent-500">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mt-4 group-hover:text-accent-400 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
