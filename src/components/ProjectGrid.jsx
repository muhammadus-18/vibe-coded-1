'use client';

import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
// @ts-ignore
import { Flip } from 'gsap/Flip';
import Link from 'next/link';

export default function ProjectGrid({ projects }) {
  const [filter, setFilter] = useState('All');
  const [flipState, setFlipState] = useState(null);
  const containerRef = useRef(null);

  // Register GSAP Flip
  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  // Extract top categories based on tag frequency
  const tagCounts = {};
  projects.forEach(p => p.tags.forEach(t => {
    tagCounts[t] = (tagCounts[t] || 0) + 1;
  }));
  const categories = ['All', ...Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]).slice(0, 4)];

  const handleFilter = (category) => {
    if (category === filter) return;
    
    // Capture state before layout change
    const state = Flip.getState('.project-card');
    setFlipState(state);
    setFilter(category);
  };

  useLayoutEffect(() => {
    if (!flipState) return;

    // Run Flip animation after layout has updated
    Flip.from(flipState, {
      duration: 0.6,
      ease: 'power3.out',
      absolute: true, // Make elements position:absolute during animation for smooth reordering
      stagger: 0.05,
      onEnter: elements => gsap.fromTo(elements, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.4 }
      ),
      onLeave: elements => gsap.to(elements, 
        { opacity: 0, scale: 0.9, duration: 0.4 }
      )
    });
  }, [filter, flipState]);

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-12" data-reveal>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`font-mono px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${
              filter === cat 
                ? 'bg-primary-container text-on-primary-container' 
                : 'bg-surface-bright/20 text-on-surface hover:bg-surface-bright/40 hover:text-primary-container border border-outline-variant/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative min-h-[400px]">
        {projects.map((p) => {
          // Toggle visibility via class instead of unmounting so GSAP can animate them
          const isVisible = filter === 'All' || p.tags.includes(filter);
          
          return (
            <div 
              key={p.id} 
              className={`project-card ${isVisible ? 'block' : 'hidden'}`}
            >
              <Link
                href={`/work/${p.id}`}
                className="card card-hover p-8 group block h-full flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-on-surface flex items-center gap-2 mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-container" />
                    Case study
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary-container tracking-tight transition-colors duration-300">{p.title}</h3>
                    <span className="text-outline-variant group-hover:text-primary-container group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">↗</span>
                  </div>
                  <p className="font-sans text-on-surface-variant mt-4 leading-relaxed">{p.description}</p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono px-3 py-1 bg-surface-bright/20 text-on-surface border border-outline-variant/30 rounded-xl text-[11px] uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
