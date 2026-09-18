import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef({
    mouseX: -100,
    mouseY: -100,
    ringX: -100,
    ringY: -100,
  });

  useEffect(() => {
    // Check if touch device or coarse pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      posRef.current.mouseX = e.clientX;
      posRef.current.mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hoverable targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="pointer"]');

      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationId: number;
    const animateRing = () => {
      const p = posRef.current;
      p.ringX += (p.mouseX - p.ringX) * 0.2;
      p.ringY += (p.mouseY - p.ringY) * 0.2;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${p.ringX}px, ${p.ringY}px, 0)`;
      }
      animationId = requestAnimationFrame(animateRing);
    };

    animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 overflow-hidden transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-opacity duration-150"
      />
      {/* Outer trailing aura ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out -ml-4 -mt-4 ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-red-500 bg-red-500/10 scale-110'
            : isClicked
            ? 'w-6 h-6 -ml-3 -mt-3 border-blue-400 bg-blue-500/20'
            : 'w-8 h-8 border-blue-400/60 bg-blue-500/5'
        }`}
      />
    </div>
  );
};
