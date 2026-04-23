'use client';

import { useEffect, useRef, useState } from 'react';

export default function FPSMonitor() {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    let animationId;
    lastTime.current = performance.now();

    const calculateFPS = (currentTime) => {
      frameCount.current++;

      if (lastTime.current && currentTime >= lastTime.current + 1000) {
        setFps(
          Math.round((frameCount.current * 1000) / (currentTime - lastTime.current))
        );
        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      animationId = requestAnimationFrame(calculateFPS);
    };

    animationId = requestAnimationFrame(calculateFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-green-400 px-3 py-2 rounded-lg text-sm font-mono z-50 backdrop-blur-sm border border-green-400/20">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span>FPS: {fps}</span>
      </div>
      <div className="text-xs text-green-300/70 mt-1">
        {fps >= 55 ? 'Smooth' : fps >= 30 ? 'Good' : fps >= 15 ? 'Choppy' : 'Poor'}
      </div>
    </div>
  );
}
