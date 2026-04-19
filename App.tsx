
import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';

const GlobalProgressBar: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Guard against division by zero
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${scroll * 100}%`;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 bg-token-light-green z-[60] transition-all duration-100 ease-out"
      style={{ width: '0%' }}
    />
  );
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Scroll to top when the new page mounts (after exit animation of previous page)
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
        <Route path="/case-study/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
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

