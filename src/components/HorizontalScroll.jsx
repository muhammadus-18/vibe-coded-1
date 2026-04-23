'use client';

import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalScroll({ projects }) {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!section || !container || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set container width to 100% * number of items
      gsap.set(container, {
        width: `${100 * projects.length}%`,
      });

      // Create horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${window.innerHeight * projects.length}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate container horizontally
      tl.to(container, {
        xPercent: -(100 * (projects.length - 1) / projects.length),
        ease: 'none',
      });

      // Parallax scaling effect for cards with CSS variables
      cards.forEach((card) => {
        const image = card.querySelector('img');
        if (image) {
          image.classList.add('parallax-scale');
          
          gsap.fromTo(
            image,
            {
              '--progress': 0,
            },
            {
              '--progress': 1,
              scrollTrigger: {
                trigger: card,
                start: 'left center',
                end: 'right center',
                scrub: 1,
                containerAnimation: tl,
              },
              ease: 'power1.inOut',
            }
          );
        }
      });
    }, sectionRef);

    // Cleanup
    return () => {
      ctx.revert();
    };
  }, [projects]);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-background">
      <div className="h-screen overflow-hidden">
        <div 
          ref={containerRef}
          className="flex h-full backface-hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardsRef.current[index] = el}
              className="w-full h-full flex items-center justify-center px-8 backface-hidden"
            >
              <div className="max-w-4xl w-full">
                <div className="card overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-cover backface-hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-400 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link className="btn-primary" href={`/work/${project.id}`}>
                      View case study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
