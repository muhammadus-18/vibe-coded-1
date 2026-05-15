'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function RevealText({ children, className = '', delay = 0, speed = 1, once = true }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const element = containerRef.current;
    if (!element) return;

    // Split text into words (simple split for demo, usually use SplitType library)
    const text = element.innerText;
    const words = text.split(' ');
    element.innerHTML = words
      .map(word => `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block">${word}&nbsp;</span></span>`)
      .join('');

    const wordSpans = element.querySelectorAll('.reveal-word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    });

    tl.fromTo(
      wordSpans,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8 * speed,
        stagger: 0.05,
        ease: 'expo.out',
        delay: delay,
      }
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [delay, speed, once]);

  return (
    <div ref={containerRef} className={`reveal-text ${className}`}>
      {children}
    </div>
  );
}
