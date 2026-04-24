import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { RESUME_URL } from '../constants';

const Footer: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const resetTimerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText('jayaram.h1501@gmail.com');
      setCopyStatus('success');
    } catch {
      setCopyStatus('error');
    }

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCopyStatus('idle');
      resetTimerRef.current = null;
    }, 2500);
  };

  const toastText = copyStatus === 'success' ? 'Email copied' : copyStatus === 'error' ? 'Copy failed' : '';

  return (
    <footer id="contact" className="sticky bottom-0 z-0 relative scroll-mt-28 px-6 pt-20 pb-8 md:px-12 bg-[#f5f5f5] text-token-dark-green overflow-hidden transition-colors duration-500">
      <div className="max-w-site mx-auto relative z-10 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)] gap-12 mb-20 md:mb-28 items-end">
          <div className="flex flex-col items-start">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.15em] text-token-text-gray">
              Need help with a product?
            </p>
            <a href="mailto:jayaram.h1501@gmail.com" className="group inline-flex items-center gap-2 -ml-1 text-left" data-cursor="nav">
              <h2 className="font-serif text-4xl leading-tight text-token-dark-green sm:text-5xl md:text-7xl">
                Let's work through it.
              </h2>

              <div className="transform translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-token-light-green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
            <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-gray-600">
              Email is the best way to reach me if you want to talk through a mechanism, prototype, or design that is stuck.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <button onClick={handleCopyEmail} aria-label="Copy email address to clipboard" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit md:ml-auto text-left cursor-pointer" data-cursor="nav">
              jayaram.h1501@gmail.com
            </button>
            <a href="https://www.linkedin.com/in/jayaramh" target="_blank" rel="noopener noreferrer" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit md:ml-auto" data-cursor="nav">
              LinkedIn
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit md:ml-auto" data-cursor="nav">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm font-sans">
          <p>Mechanical design portfolio.</p>
          <p>&copy; 2026 Jayaram H</p>
        </div>
      </div>

      <span className="sr-only" role="status" aria-live="polite">
        {toastText}
      </span>

      <AnimatePresence>
        {copyStatus !== 'idle' && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: 20, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-4 right-4 z-[100] flex items-center justify-center gap-3 rounded-full bg-token-dark-green px-6 py-3 font-sans text-sm text-white shadow-lg sm:left-auto sm:right-8 sm:justify-start"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-token-light-green">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {toastText}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
