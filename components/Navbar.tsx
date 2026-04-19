
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const isViperZ = location.pathname === '/case-study/1';
  const isWolf = location.pathname === '/case-study/2';
  const hasCustomHero = isViperZ || isWolf;

  useEffect(() => {
    const handleScroll = () => {
      if (hasCustomHero) {
        // On custom case studies, show after scrolling past the hero section
        setScrolled(window.scrollY > window.innerHeight * 0.8);
      } else {
        // On home page and default case studies, background appears after a small scroll
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCustomHero]);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Theme logic
  let bgClass = 'bg-white/70 border-gray-200/50';
  let textClass = 'text-token-dark-green';
  let linkHoverClass = 'hover:bg-token-light-green hover:text-token-dark-green text-token-text-gray';

  // Visibility logic for content
  // On home page and default case studies, content is ALWAYS visible.
  // On custom case studies, content is only visible when scrolled (to avoid clashing with hero nav).
  const contentVisible = !hasCustomHero ? true : scrolled;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      {/* Background Layer - Frosted Glass Effect */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b backdrop-blur-md
          ${scrolled
            ? `opacity-100 ${bgClass} pointer-events-auto`
            : 'opacity-0 bg-transparent border-transparent pointer-events-none'
          }
        `}
      />

      {/* Content Layer */}
      <div className={`relative z-10 w-full mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-5' : 'py-8 md:py-10'} ${contentVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className={`font-sans text-lg md:text-xl tracking-[0.08em] uppercase font-normal ${textClass} hover:opacity-70 transition-opacity`} data-cursor="nav">
            Jayaram
          </Link>
        </div>

        {/* Horizontal Tab Bar (TOC) */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/#about"
            onClick={scrollToSection('about')}
            className={`text-[11px] font-sans uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors ${linkHoverClass}`}
            data-cursor="nav"
          >
            About
          </Link>
          <Link
            to="/#work"
            onClick={scrollToSection('work')}
            className={`text-[11px] font-sans uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors ${linkHoverClass}`}
            data-cursor="nav"
          >
            Work
          </Link>
          <Link
            to="/#contact"
            onClick={scrollToSection('contact')}
            className={`text-[11px] font-sans uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors ${linkHoverClass}`}
            data-cursor="nav"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
