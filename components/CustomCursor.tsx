
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device and reduced motion preference
    const checkDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkDevice();
    
    // Don't show custom cursor on touch devices or if user prefers reduced motion
    if (isTouchDevice || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      positionRef.current = { x: clientX, y: clientY };
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
    };
  }, [isTouchDevice, prefersReducedMotion]);

  // Don't render on touch devices or if user prefers reduced motion
  if (isTouchDevice || prefersReducedMotion || isHidden) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
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
