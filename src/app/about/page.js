'use client';

import Link from 'next/link';
import LogoMarquee from '@/components/LogoMarquee';

// Metadata must be exported from a server component; About is a client component.
// Consider creating a separate server wrapper if SEO for this page is critical.

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container-page py-24 md:py-32">
        {/* Tight Hero Section */}
        <div className="max-w-4xl mb-24">
          <div 
            className="inline-flex items-center gap-2 text-accent-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
            data-reveal
          >
            <span className="w-8 h-[1px] bg-accent-500" />
            The Profile
          </div>
          <h1 
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase"
            data-reveal-text
          >
            Digital <br />
            <span className="text-gray-500 italic font-serif lowercase">Architect.</span>
          </h1>
          <p 
            className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            data-reveal
            data-reveal-delay="0.2"
          >
            Focused on building high-performance web experiences where every pixel, 
            motion, and line of code has a clear purpose.
          </p>
        </div>

        {/* Dense Content Sections */}
        <div className="space-y-32">
          
          {/* Section 1: The Story (Editorial Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" data-reveal>
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] border-l-2 border-accent-500 pl-4">
                The Mission
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-2xl md:text-4xl font-medium text-white leading-tight">
                I help startups bridge the gap between complex engineering and human-centric design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
                <p>
                  With over 5 years of experience in fullstack development, I've realized that 
                  the most successful products aren't just the ones that work—they're the ones
                  that people actually enjoy using. I specialize in taking raw ideas and
                  transforming them into polished, performant digital realities.
                </p>
                <p>
                  My toolkit is built for speed and scale. Whether it's crafting intricate
                  GSAP animations or architecting complex Next.js systems, I ensure that 
                  performance is never sacrificed for aesthetics.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Core Expertise (Dense Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-reveal>
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] border-l-2 border-accent-500 pl-4">
                Expertise
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {[
                { title: 'Frontend Architecture', desc: 'Building scalable systems with React, Next.js, and TypeScript.' },
                { title: 'Motion Systems', desc: 'High-fidelity animations that support the narrative using GSAP.' },
                { title: 'UX Design', desc: 'Creating intuitive flows and design systems that scale.' },
                { title: 'Performance', desc: 'Optimizing for Core Web Vitals and instant load times.' },
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 md:p-10 hover:bg-white/[0.02] transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Tech Stack (Dense & Clean) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-reveal>
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] border-l-2 border-accent-500 pl-4">
                Tech Stack
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
                {[
                  { category: 'Frameworks', items: ['Next.js', 'React', 'Node.js'] },
                  { category: 'Styling', items: ['Tailwind', 'SCSS', 'Radix UI'] },
                  { category: 'Animation', items: ['GSAP', 'Framer Motion', 'Three.js'] },
                  { category: 'Tools', items: ['Figma', 'GitHub', 'Vercel'] },
                ].map((cat, i) => (
                  <div key={i} className="space-y-4">
                    <h4 className="text-[10px] font-bold text-accent-500 uppercase tracking-widest">{cat.category}</h4>
                    <ul className="space-y-2 text-white font-medium">
                      {cat.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="border-t border-white/5 pt-20 text-center" data-reveal>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">Let's Talk</p>
            <Link 
              href="mailto:hello@example.com"
              className="text-3xl md:text-6xl font-black text-white hover:text-accent-500 transition-colors tracking-tighter"
            >
              hello@example.com
            </Link>
          </div>

        </div>
      </section>

      <LogoMarquee />
    </div>
  );
}
