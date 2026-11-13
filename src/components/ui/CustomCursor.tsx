import React, { useEffect, useState, useRef } from 'react';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

export const CustomCursor: React.FC = () => {
  const { isMobile, prefersReducedMotion } = useDevicePerformance();
  const [hasPointer, setHasPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCanvasHovered, setIsCanvasHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

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

      const target = e.target as HTMLElement | null;
      if (target) {
        // Detect contextual data-cursor attribute
        const labeledTarget = target.closest('[data-cursor]');
        if (labeledTarget) {
          const label = labeledTarget.getAttribute('data-cursor');
          setCursorLabel(label);
        } else {
          setCursorLabel(null);
        }

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
      const ease = cursorLabel ? 0.28 : 0.22;
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
  }, [hasPointer, isMobile, prefersReducedMotion, isVisible, cursorLabel]);

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
      {/* Central Sharp Focus Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none transition-transform duration-75 ${
          cursorLabel
            ? 'opacity-0 scale-50'
            : isClicking
            ? 'scale-150 bg-purple-300'
            : isHovered
            ? 'scale-125 bg-electric-400'
            : 'bg-purple-200'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Smooth Adaptive Follower Ring with Contextual Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none flex items-center justify-center transition-[width,height,border-color,background-color,border-radius,padding] duration-200 ${
          cursorLabel
            ? 'px-3.5 py-1 rounded-full border border-purple-400/80 bg-space-950/95 text-[10px] font-mono font-bold text-purple-200 tracking-wider shadow-[0_0_24px_rgba(168,85,247,0.5)] backdrop-blur-md'
            : isCanvasHovered
            ? 'w-14 h-14 rounded-full border border-purple-400/70 bg-purple-950/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
            : isHovered
            ? 'w-10 h-10 rounded-full border border-electric-400/80 bg-electric-500/10 shadow-[0_0_18px_rgba(56,189,248,0.3)]'
            : isClicking
            ? 'w-6 h-6 rounded-full border-2 border-purple-300 bg-purple-600/30'
            : 'w-7 h-7 rounded-full border border-purple-400/35 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorLabel && <span className="select-none uppercase leading-none">{cursorLabel}</span>}
      </div>
    </div>
  );
};
