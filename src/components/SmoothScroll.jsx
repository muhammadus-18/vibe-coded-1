'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // On reduced motion: keep native scroll, but still allow ScrollTrigger.
    if (reduceMotion) return;

    // Ensure we never run multiple instances.
    lenisRef.current?.destroy?.();

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    const onTick = (time) => {
      // GSAP ticker provides seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Measure after Lenis attaches and classes apply.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(id);
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Reset scroll on route change + refresh triggers after paint.
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true });

    // Defer 1 frame so layout settles after navigation.
    const id = requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
