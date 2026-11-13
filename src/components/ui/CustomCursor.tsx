import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.style.cursor = 'none';

    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      rx += (x - rx) * 0.1;
      ry += (y - ry) * 0.1;
    };

    let raf: number;
    const loop = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[9998] w-2 h-2 bg-lime-acid rounded-full" style={{ willChange: 'transform' }} />
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-[9997] w-8 h-8 border border-lime-acid/40 rounded-full" style={{ willChange: 'transform', transition: 'transform 0.08s linear' }} />
    </>
  );
};
