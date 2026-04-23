'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPProvider({ children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global defaults tuned for smooth scroll + fewer edge-case refreshes.
      ScrollTrigger.config({ ignoreMobileResize: true });
      // GSAP animations will be automatically cleaned up
      // when the context is reverted on unmount
    }, containerRef);

    return () => {
      // This will revert all animations created within this context
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    // Route transitions can change layout/height; refresh triggers after paint.
    // Keep this cheap + delayed one frame to avoid double-refresh with other providers.
    const id = requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div ref={containerRef} className="gsap-container">
      {children}
    </div>
  );
}
