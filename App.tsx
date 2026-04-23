
import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';
import { getSectionIdFromHash, scrollToSectionId } from './lib/sectionNavigation';

const CaseStudy = React.lazy(() => import('./pages/CaseStudy'));

const GlobalProgressBar: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scroll})`;
      }
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 w-full origin-left bg-token-light-green z-[60]"
      style={{ transform: 'scaleX(0)' }}
    />
  );
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname, hash } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        const sectionId = getSectionIdFromHash(hash);

        if (scrollToSectionId(sectionId, prefersReducedMotion ? 'auto' : 'smooth')) {
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash, prefersReducedMotion]);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -15 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route
          path="/case-study/:id"
          element={
            <PageTransition>
              <React.Suspense fallback={<div className="min-h-screen bg-[#fbfbfd]" />}>
                <CaseStudy />
              </React.Suspense>
            </PageTransition>
          }
        />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-sans antialiased transition-colors duration-500">
        <CustomCursor />
        <GlobalProgressBar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;

