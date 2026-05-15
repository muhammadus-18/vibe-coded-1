import React from 'react';

const techStack = [
  "React", "Next.js", "TypeScript", "GSAP", "Tailwind CSS", 
  "Framer Motion", "Node.js", "WebGL", "Three.js", "Figma",
  "PostgreSQL", "GraphQL", "Vercel", "Stripe"
];

export default function TechMarquee() {
  // Double the array for seamless infinite scrolling
  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-16 md:py-20 border-y border-outline-variant/30 overflow-hidden bg-surface-bright/10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-infinite {
          animation: marquee 60s linear infinite;
        }
      `}</style>
      
      <div className="flex w-full relative">
        {/* Left and right gradient masks for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee-infinite whitespace-nowrap w-max">
          {duplicatedTech.map((tech, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 md:mx-12 font-display text-3xl md:text-5xl font-bold text-on-surface/10 uppercase tracking-[0.2em] hover:text-primary transition-colors duration-500">
                {tech}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary-container/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
