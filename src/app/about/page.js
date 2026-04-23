'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef(null);
  const glowRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth) - 0.5;
      const yPos = (clientY / window.innerHeight) - 0.5;

      glowRefs.current.forEach((glow, i) => {
        if (!glow) return;
        const speed = (i + 1) * 15;
        gsap.to(glow, {
          x: xPos * speed,
          y: yPos * speed,
          duration: 1.2,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* 📐 Subtle Digital Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div ref={el => glowRefs.current[0] = el} className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-accent-500/5 blur-[100px] rounded-full" />
        <div ref={el => glowRefs.current[1] = el} className="absolute bottom-[-5%] right-[-5%] w-[30vw] h-[30vw] bg-accent-600/5 blur-[100px] rounded-full" />
      </div>

      <section className="container-page py-24 md:py-32 relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mb-20">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
            data-reveal
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            Independent Developer / Designer
          </div>
          <h1 
            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase"
            data-reveal-text
          >
            Engineering <br />
            <span className="text-gray-600">Digital Vibes.</span>
          </h1>
        </div>

        {/* 🍱 Content-Dense Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">
          
          {/* Main Story Block */}
          <div 
            className="md:col-span-8 md:row-span-2 rounded-3xl p-10 md:p-14 bg-white/[0.02] border border-white/5 flex flex-col justify-end relative overflow-hidden group"
            data-reveal
          >
            <div className="absolute top-10 right-10 text-[120px] font-black italic text-white/[0.01] select-none pointer-events-none">
              STORY
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-accent-500 font-bold uppercase tracking-widest text-xs">The Background</h3>
              <p className="text-2xl md:text-3xl font-medium text-gray-200 leading-tight">
                I bridge the gap between <span className="text-white italic underline decoration-accent-500/30 underline-offset-4">vision</span> and code. 
                Focusing on high-fidelity motion and scalable architecture.
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                For over 5 years, I've partnered with startups to build products that don't just work—they feel incredible to use. My philosophy is rooted in performance-first design.
              </p>
            </div>
          </div>

          {/* Visual Accent Block (Reduced size) */}
          <div 
            className="md:col-span-4 md:row-span-1 rounded-3xl overflow-hidden relative border border-white/5"
            data-reveal
            data-reveal-delay="0.1"
          >
            <Image 
              src="/creative_developer_portrait_1776931998687.png" 
              alt="Digital Art" 
              fill
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Location Block */}
          <div 
            className="md:col-span-4 md:row-span-1 rounded-3xl p-8 bg-white/[0.02] border border-white/5 flex flex-col justify-between"
            data-reveal
            data-reveal-delay="0.2"
          >
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Base</span>
            <div>
              <div className="text-2xl font-bold text-white">London, UK</div>
              <p className="text-xs text-gray-500 mt-1 italic">Worldwide Availability</p>
            </div>
          </div>

          {/* Expertise Block */}
          <div 
            className="md:col-span-5 md:row-span-1 rounded-3xl p-8 bg-accent-500/5 border border-accent-500/10 flex flex-col justify-between"
            data-reveal
            data-reveal-delay="0.3"
          >
            <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest">Expertise</span>
            <ul className="text-lg font-bold text-white leading-none space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-500" /> UI/UX Design</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-500" /> Motion Systems</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent-500" /> Fullstack Dev</li>
            </ul>
          </div>

          {/* Stats Block */}
          <div 
            className="md:col-span-3 md:row-span-1 rounded-3xl p-8 bg-white/[0.02] border border-white/5 flex flex-col justify-between"
            data-reveal
            data-reveal-delay="0.4"
          >
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Exp</span>
            <div>
              <div className="text-5xl font-black text-white">5+</div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Years active</p>
            </div>
          </div>

          {/* Toolbox Block (Wide) */}
          <div 
            className="md:col-span-4 md:row-span-1 rounded-3xl p-8 bg-white/[0.02] border border-white/5 group relative overflow-hidden"
            data-reveal
            data-reveal-delay="0.5"
          >
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Toolbox</span>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Next.js', 'GSAP', 'TS', 'Tailwind', 'Node'].map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">{t}</span>
              ))}
            </div>
          </div>

          {/* Contact Block (Call to Action) */}
          <div 
            className="md:col-span-12 md:row-span-1 rounded-3xl p-10 bg-gradient-to-r from-accent-500/10 via-accent-500/5 to-transparent border border-accent-500/10 flex flex-col md:flex-row items-center justify-between gap-8 mt-4"
            data-reveal
            data-reveal-delay="0.6"
          >
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white italic mb-2">Have a project in mind?</h4>
              <p className="text-gray-400">Let’s collaborate on something extraordinary.</p>
            </div>
            <Link 
              href="mailto:hello@example.com"
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
