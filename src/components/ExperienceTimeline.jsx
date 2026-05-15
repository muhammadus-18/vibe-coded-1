import React from 'react';

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Design Engineer",
    company: "Creative Studio",
    desc: "Spearheading the transition to Next.js App Router. Built an entire design system from scratch bridging Figma tokens to Tailwind CSS and creating immersive GSAP animations that won multiple CSS Design Awards.",
  },
  {
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Tech StartUp",
    desc: "Developed a robust e-commerce dashboard serving 10,000+ daily active users. Improved Core Web Vitals by 40% through lazy loading, dynamic imports, and aggressive edge caching.",
  },
  {
    year: "2019 - 2021",
    role: "Web Designer",
    company: "Digital Agency",
    desc: "Designed and built high-conversion landing pages. Worked closely with clients to establish branding, typography, and visual identities that stand out in crowded markets.",
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="mb-16" data-reveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">Experience & Journey</h2>
        <p className="font-sans text-on-surface-variant mt-4 max-w-2xl text-lg leading-relaxed text-balance">
          A track record of building scalable products, collaborating with ambitious teams, and delivering high-quality user experiences.
        </p>
      </div>

      <div className="relative border-l border-outline-variant/30 ml-4 md:ml-6 space-y-16 pb-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-16 group" data-reveal>
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-outline-variant/30 group-hover:border-primary-container group-hover:bg-primary-container transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">{exp.role}</h3>
              <span className="text-outline-variant hidden md:inline-block">/</span>
              <span className="text-primary font-mono">{exp.company}</span>
            </div>
            
            <div className="inline-block px-3 py-1 mb-4 rounded-xl bg-surface-bright/20 text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface-variant border border-outline-variant/30">
              {exp.year}
            </div>
            
            <p className="font-sans text-on-surface-variant leading-relaxed max-w-3xl text-lg text-balance">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
