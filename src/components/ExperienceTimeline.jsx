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
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">Experience & Journey</h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-lg text-balance">
          A track record of building scalable products, collaborating with ambitious teams, and delivering high-quality user experiences.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16 pb-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-16 group" data-reveal>
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-white/20 group-hover:border-accent-500 group-hover:bg-accent-500 transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{exp.role}</h3>
              <span className="text-gray-600 hidden md:inline-block">/</span>
              <span className="text-accent-400 font-mono">{exp.company}</span>
            </div>
            
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 text-xs font-mono tracking-widest text-gray-400 border border-white/10">
              {exp.year}
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-3xl text-lg text-balance">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
