
import { useEffect } from 'react';
import { prefersReducedMotion } from '../lib/sectionNavigation';

const useScrollReveal = () => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = window.setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');

      if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('active'));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      reveals.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);
};

export default useScrollReveal;
