
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const latestPositionRef = useRef({ x: -100, y: -100 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

    const updateEnabled = () => {
      const isTouchDevice = coarsePointerQuery.matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsEnabled(!isTouchDevice && !reducedMotionQuery.matches);
    };

    updateEnabled();
    reducedMotionQuery.addEventListener('change', updateEnabled);
    coarsePointerQuery.addEventListener('change', updateEnabled);

    return () => {
      reducedMotionQuery.removeEventListener('change', updateEnabled);
      coarsePointerQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('custom-cursor-enabled', isEnabled);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [isEnabled]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
        setIsKeyboardMode(true);
      }
    };

    const onPointerInput = () => {
      document.body.classList.remove('using-keyboard');
      setIsKeyboardMode(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerInput);
    document.addEventListener('pointermove', onPointerInput);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerInput);
      document.removeEventListener('pointermove', onPointerInput);
      document.body.classList.remove('using-keyboard');
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      latestPositionRef.current = { x: e.clientX, y: e.clientY };

      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const { x, y } = latestPositionRef.current;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        frameRef.current = null;
      });
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [isEnabled]);

  if (!isEnabled || isHidden || isKeyboardMode) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        mixBlendMode: 'difference'
      }}
    >
      <div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform duration-200"
      />
    </div>
  );
};

export default CustomCursor;
