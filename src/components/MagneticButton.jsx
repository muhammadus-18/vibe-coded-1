'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

/**
 * Magnetic button/link using gsap.quickTo (cheap, no layout thrash).
 * - Internal links use Next <Link>.
 * - External links (or mailto) use <a>.
 */
export default function MagneticButton({
  href,
  children,
  className,
  external,
  max = 20,
  as = 'link',
  ...rest
}) {
  const ref = useRef(null);
  const isExternal = useMemo(() => {
    if (typeof external === 'boolean') return external;
    return typeof href === 'string' && /^(https?:|mailto:)/.test(href);
  }, [external, href]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3.out' });

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);

      const nx = dx / (r.width / 2);
      const ny = dy / (r.height / 2);

      xTo(gsap.utils.clamp(-max, max, nx * max));
      yTo(gsap.utils.clamp(-max, max, ny * max));
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max]);

  const mergedClass = clsx('inline-block will-change-transform transform-gpu', className);

  if (as === 'button') {
    return (
      <button ref={ref} className={mergedClass} {...rest}>
        {children}
      </button>
    );
  }

  if (isExternal) {
    const target = rest.target ?? (String(href).startsWith('http') ? '_blank' : undefined);
    const rel = rest.rel ?? (target === '_blank' ? 'noreferrer' : undefined);
    return (
      <a ref={ref} href={href} className={mergedClass} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} className={mergedClass} {...rest}>
      {children}
    </Link>
  );
}

