import React, { useEffect, useState, useRef } from 'react';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

export const CustomCursor: React.FC = () => {
  const { isMobile, prefersReducedMotion } = useDevicePerformance();
  const [hasPointer, setHasPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCanvasHovered, setIsCanvasHovered] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Position coordinates
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const pointerQuery = window.matchMedia('(pointer: fine)');
    setHasPointer(pointerQuery.matches);

    const updatePointer = (e: MediaQueryListEvent) => setHasPointer(e.matches);
    pointerQuery.addEventListener('change', updatePointer);

    return () => pointerQuery.removeEventListener('change', updatePointer);
  }, []);

  useEffect(() => {
    if (!hasPointer || isMobile || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check what element is currently under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, [tabindex="0"]')
        );
        setIsHovered(isClickable);

        const isCanvas = Boolean(target.closest('canvas, #canvas-container, [data-interactive-3d]'));
        setIsCanvasHovered(isCanvas);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for the follower ring
    const loop = () => {
      // Lerp ring position towards real mouse coordinates
      const ease = 0.22;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [hasPointer, isMobile, prefersReducedMotion, isVisible]);

  if (!hasPointer || isMobile || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none transition-transform duration-75 ${
          isClicking
            ? 'scale-150 bg-cyber-cyan'
            : isHovered
            ? 'scale-125 bg-cyber-cyan'
            : 'bg-slate-200'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Smooth Ambient Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-200 ${
          isCanvasHovered
            ? 'w-12 h-12 border border-cyber-cyan/60 bg-cyan-950/20'
            : isHovered
            ? 'w-10 h-10 border border-cobalt-400/80 bg-cobalt-500/10'
            : isClicking
            ? 'w-6 h-6 border-2 border-cobalt-300 bg-cobalt-600/20'
            : 'w-7 h-7 border border-slate-400/30 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

