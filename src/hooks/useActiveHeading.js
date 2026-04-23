import { useState, useEffect } from 'react';

export const useActiveHeading = (headingIds) => {
  const [activeId, setActiveId] = useState('');
  
  useEffect(() => {
    const observers = headingIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { 
          if (entry.isIntersecting) setActiveId(id); 
        },
        { 
          rootMargin: '-20% 0px -60% 0px', 
          threshold: 0 
        }
      );
      observer.observe(el);
      return observer;
    }).filter(Boolean);
    
    return () => observers.forEach(obs => obs?.disconnect());
  }, [headingIds]);
  
  return activeId;
};
