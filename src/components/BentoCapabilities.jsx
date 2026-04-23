import React from 'react';

export default function BentoCapabilities() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="mb-12" data-reveal>
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">Expertise & Capabilities</h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-lg text-balance">
          The mix that ships the best results: clean architecture, strong UX, and motion that supports the story. We build systems that scale gracefully.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[320px]">
        
        {/* Large item */}
        <div className="md:col-span-2 card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group" data-reveal>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-2xl">
              ⚡
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Performance Architecture</h3>
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="text-gray-400 leading-relaxed text-balance">Bundle discipline, advanced caching strategies, and meticulous image optimization to ensure 60fps experiences across all devices and network conditions.</p>
          </div>
        </div>

        {/* Tall item */}
        <div className="md:row-span-2 card p-8 md:p-10 flex flex-col relative overflow-hidden group" data-reveal>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-2xl">
              🎨
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Motion Design</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">GSAP timelines that feel intentional, physics-based, and degrade gracefully. Motion isn't just decoration; it guides the user.</p>
            
            <div className="space-y-3 mt-auto">
              {['ScrollTrigger', 'Flip', 'MorphSVG', 'CustomEase'].map(tech => (
                <div key={tech} className="px-4 py-3 bg-white/5 rounded-xl border border-white/5 text-sm text-gray-300 font-mono flex justify-between items-center group-hover:bg-white/10 transition-colors">
                  <span>{tech}</span>
                  <span className="text-accent-500/50 group-hover:text-accent-500 transition-colors">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regular item 1 */}
        <div className="card p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden" data-reveal>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">UI Engineering</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">Reusable design systems, thoughtful interaction states, and highly predictable state management using React.</p>
          </div>
          <div className="relative z-10 w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-6">
            <div className="w-3/4 h-full bg-accent-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />
          </div>
        </div>

        {/* Regular item 2 */}
        <div className="card p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative" data-reveal>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-accent-500/20 blur-[60px] rounded-full group-hover:bg-accent-500/30 transition-colors duration-700" />
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Accessibility First</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">Keyboard-only flows, focus management, high contrast modes, and reduced-motion support built in from day one.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
