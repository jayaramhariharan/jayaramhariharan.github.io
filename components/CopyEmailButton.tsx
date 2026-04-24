import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const EMAIL = 'jayaram.h1501@gmail.com';

const CopyEmailButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus('success');
    } catch {
      setStatus('error');
    }
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setStatus('idle');
      timerRef.current = null;
    }, 2500);
  };

  const toastText = status === 'success' ? 'Email copied' : status === 'error' ? 'Copy failed' : '';

  return (
    <>
      <button
        onClick={handleClick}
        aria-label="Copy email address"
        data-cursor="nav"
        className={className}
      >
        Email
      </button>

      <span className="sr-only" role="status" aria-live="polite">{toastText}</span>

      <AnimatePresence>
        {status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-4 right-4 z-[100] flex items-center justify-center gap-3 rounded-full bg-token-dark-green px-6 py-3 font-sans text-sm text-white shadow-lg sm:left-auto sm:right-8 sm:justify-start"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-token-light-green">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {toastText}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CopyEmailButton;
