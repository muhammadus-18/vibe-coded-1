'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function splitIntoWords(el) {
  if (!el || el.getAttribute('data-reveal-text-ready') === 'true') return;
  const text = el.textContent ?? '';
  el.setAttribute('data-reveal-text-original', text);
  el.setAttribute('data-reveal-text-ready', 'true');
  el.classList.add('reveal-text');

  const words = text.trim().split(/\s+/).filter(Boolean);
  el.textContent = '';

  words.forEach((w, i) => {
    const span = document.createElement('span');
    span.className = 'reveal-word';
    span.textContent = w;
    el.appendChild(span);
    if (i !== words.length - 1) el.appendChild(document.createTextNode(' '));
  });
}

export default function MotionProvider() {
  const pathname = usePathname();
  const ctxRef = useRef(null);
  const ioRef = useRef(null);
  const textElsRef = useRef([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Revert previous route's animations cleanly.
    ctxRef.current?.revert?.();
    ioRef.current?.disconnect?.();
    textElsRef.current.forEach((el) => {
      if (!el) return;
      const original = el.getAttribute('data-reveal-text-original');
      if (original != null) {
        el.textContent = original;
      }
      el.removeAttribute('data-reveal-text-ready');
      el.removeAttribute('data-reveal-text-original');
      el.classList.remove('reveal-text');
    });
    textElsRef.current = [];

    ctxRef.current = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]');
      const textItems = gsap.utils.toArray('[data-reveal-text]');
      if (!items.length && !textItems.length) return;

      const groups = new Map();
      items.forEach((el) => {
        const from = el.getAttribute?.('data-reveal-from') ?? 'bottom';
        const delay = Number(el.getAttribute?.('data-reveal-delay') ?? 0);
        const key = `${from}|${delay}`;
        const arr = groups.get(key) ?? [];
        arr.push(el);
        groups.set(key, arr);

        // Set initial state once so IO callback can stay tiny.
        const y = from === 'bottom' ? 18 : from === 'top' ? -18 : 0;
        const x = from === 'left' ? -18 : from === 'right' ? 18 : 0;
        gsap.set(el, { autoAlpha: 0, x, y });
      });

      // Prepare text reveals (word-level)
      textItems.forEach((el) => {
        splitIntoWords(el);
        textElsRef.current.push(el);
        const words = el.querySelectorAll('.reveal-word');
        gsap.set(words, { autoAlpha: 0, y: 18 });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          // Build batches per group for a single animation call.
          const toAnimate = new Map();
          const textToAnimate = [];
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target;
            observer.unobserve(el);

            if (el.hasAttribute('data-reveal-text')) {
              textToAnimate.push(el);
              continue;
            }

            const from = el.getAttribute?.('data-reveal-from') ?? 'bottom';
            const delay = Number(el.getAttribute?.('data-reveal-delay') ?? 0);
            const key = `${from}|${delay}`;
            const arr = toAnimate.get(key) ?? [];
            arr.push(el);
            toAnimate.set(key, arr);
          }

          toAnimate.forEach((els, key) => {
            const [, delayStr] = key.split('|');
            const delay = Number(delayStr ?? 0);
            gsap.to(els, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.08,
              delay,
              clearProps: 'transform',
              overwrite: 'auto',
            });
          });

          // Animate text elements word-by-word
          textToAnimate.forEach((el) => {
            const delay = Number(el.getAttribute?.('data-reveal-delay') ?? 0);
            const words = el.querySelectorAll('.reveal-word');
            gsap.to(words, {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              stagger: 0.03,
              delay,
              clearProps: 'transform',
              overwrite: 'auto',
            });
          });
        },
        { root: null, rootMargin: '-10% 0px -20% 0px', threshold: 0.01 }
      );

      items.forEach((el) => observer.observe(el));
      textItems.forEach((el) => observer.observe(el));
      ioRef.current = observer;
    });

    return () => {
      ioRef.current?.disconnect?.();
      ctxRef.current?.revert?.();
    };
  }, [pathname]);

  return null;
}

