'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / height) * 100;
      gsap.to(bar, {
        scaleX: progress / 100,
        duration: 0.1,
        ease: 'none',
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] origin-left bg-primary-container/20">
      <div ref={barRef} className="h-full bg-primary-container origin-left scale-x-0" />
    </div>
  );
}
