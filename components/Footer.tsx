import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Footer: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('jayaram.h1501@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <footer id="contact" className="sticky bottom-0 z-0 px-6 md:px-12 pt-20 pb-8 bg-[#f5f5f5] text-token-dark-green overflow-hidden transition-colors duration-500">
      <div className="max-w-site mx-auto relative z-10 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)] gap-12 mb-20 md:mb-28 items-end">
          <div className="flex flex-col items-start">
            <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.15em] text-token-text-gray">
              Working on something new?
            </p>
            <button onClick={handleCopyEmail} className="group inline-flex items-center gap-2 -ml-1 text-left cursor-pointer" data-cursor="nav">
              <h2 className="font-serif text-5xl md:text-7xl leading-tight text-token-dark-green">
                Let's talk
              </h2>

              <div className="transform translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-token-light-green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <a href="https://www.linkedin.com/in/jayaramh" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit md:ml-auto" data-cursor="nav">
              LinkedIn
            </a>
            <a href="/resume.pdf" className="text-base font-sans text-token-dark-green hover:text-token-light-green transition-colors w-fit md:ml-auto" data-cursor="nav">
              Download CV
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-500 text-sm font-sans">
          <p>Product design portfolio.</p>
          <p>&copy; 2026 Jayaram H</p>
        </div>
      </div>

      <AnimatePresence>
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 right-8 z-[100] bg-token-dark-green text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-sans text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-token-light-green">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Email copied
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
