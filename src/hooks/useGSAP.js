'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP() {
  const heroVisual = useRef(null);
  const heroContent = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Stagger animation for hero content (h1, p, button)
    if (heroContent.current) {
      const elements = heroContent.current.children;
      gsap.fromTo(
        elements,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }

    // Magnetic effect for button
    if (buttonRef.current) {
      const button = buttonRef.current;
      
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
          x: x * 0.15,
          y: y * 0.15,
          rotation: x * 0.01,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    // Border radius morphing animation for hero visual
    if (heroVisual.current) {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl.to(heroVisual.current, {
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(heroVisual.current, {
        borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%',
        duration: 2,
        ease: 'power1.inOut',
      })
      .to(heroVisual.current, {
        borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
        duration: 2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return {
    heroVisual,
    heroContent,
    buttonRef,
  };
}
