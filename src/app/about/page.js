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
            className="inline-flex items-center gap-2 font-mono text-primary-container text-[10px] font-bold uppercase tracking-widest mb-6"
            data-reveal
          >
            <span className="w-8 h-[1px] bg-primary-container" />
            The Profile
          </div>
          <h1 
            className="font-display text-6xl md:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tighter uppercase"
            data-reveal-text
          >
            Digital <br />
            <span className="text-on-surface-variant italic font-sans lowercase">Architect.</span>
          </h1>
          <p 
            className="mt-8 font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl"
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
              <h2 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest border-l-2 border-primary-container pl-4">
                The Mission
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                I help startups bridge the gap between complex engineering and human-centric design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-on-surface-variant leading-relaxed">
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
              <h2 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest border-l-2 border-primary-container pl-4">
                Expertise
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-surface-bright/20 border border-outline-variant/30 rounded-[12px] overflow-hidden">
              {[
                { title: 'Frontend Architecture', desc: 'Building scalable systems with React, Next.js, and TypeScript.' },
                { title: 'Motion Systems', desc: 'High-fidelity animations that support the narrative using GSAP.' },
                { title: 'UX Design', desc: 'Creating intuitive flows and design systems that scale.' },
                { title: 'Performance', desc: 'Optimizing for Core Web Vitals and instant load times.' },
              ].map((item, i) => (
                <div key={i} className="bg-surface/80 p-8 md:p-10 hover:bg-surface-bright/40 transition-colors">
                  <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Tech Stack (Dense & Clean) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" data-reveal>
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest border-l-2 border-primary-container pl-4">
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
                    <h4 className="font-mono text-[10px] font-bold text-primary-container uppercase tracking-widest">{cat.category}</h4>
                    <ul className="space-y-2 font-sans text-foreground font-medium">
                      {cat.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="border-t border-outline-variant/30 pt-20 text-center" data-reveal>
            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-6">Let's Talk</p>
            <Link 
              href="mailto:hello@example.com"
              className="font-display text-3xl md:text-6xl font-extrabold text-foreground hover:text-primary-container transition-colors tracking-tighter"
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
