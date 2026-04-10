
import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    // Small timeout to ensure DOM elements from new route are mounted and painted
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));

      // Cleanup function to unobserve
      return () => {
         reveals.forEach(el => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};

export default useScrollReveal;
