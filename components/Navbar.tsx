import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isViperZ = location.pathname === '/case-study/1';
  const isWolf = location.pathname === '/case-study/2';
  const isBoat = location.pathname === '/case-study/3';
  const hasCustomHero = isViperZ || isWolf || isBoat;

  useEffect(() => {
    const handleScroll = () => {
      if (hasCustomHero) {
        setScrolled(window.scrollY > window.innerHeight * 0.8);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCustomHero]);

  const handleSectionNav = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  };

  const bgClass = 'bg-white/70 border-gray-200/50';
  const textClass = 'text-token-dark-green';
  const linkHoverClass = 'hover:bg-token-light-green hover:text-token-dark-green text-token-text-gray';
  const contentVisible = !hasCustomHero ? true : scrolled;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 max-w-[100vw] pointer-events-none">
      {/* Background Layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b backdrop-blur-md
          ${scrolled
            ? `opacity-100 ${bgClass} pointer-events-auto`
            : 'opacity-0 bg-transparent border-transparent pointer-events-none'
          }
        `}
      />

      {/* Content Layer */}
      <div className={`relative z-10 w-full mx-auto px-4 md:px-12 flex flex-wrap justify-between items-start sm:items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-4 md:py-5' : 'py-6 md:py-10'} ${contentVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className={`font-sans text-sm md:text-xl tracking-[0.06em] md:tracking-[0.08em] uppercase font-normal ${textClass} hover:opacity-70 transition-opacity`} data-cursor="nav">
            Jayaram
          </Link>
        </div>

        {/* Horizontal Tab Bar */}
        <div className="order-3 mt-3 flex w-full items-center justify-between gap-0.5 sm:order-none sm:mt-0 sm:w-auto sm:justify-normal md:gap-4">
          <a
            href="#about"
            onClick={handleSectionNav('about')}
            className={`text-[9px] md:text-[11px] font-sans uppercase tracking-[0.06em] md:tracking-[0.08em] px-1.5 md:px-4 py-2 rounded-full transition-colors cursor-pointer ${linkHoverClass}`}
            data-cursor="nav"
          >
            About
          </a>
          <a
            href="#work"
            onClick={handleSectionNav('work')}
            className={`text-[9px] md:text-[11px] font-sans uppercase tracking-[0.06em] md:tracking-[0.08em] px-1.5 md:px-4 py-2 rounded-full transition-colors cursor-pointer ${linkHoverClass}`}
            data-cursor="nav"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={handleSectionNav('contact')}
            className={`text-[9px] md:text-[11px] font-sans uppercase tracking-[0.06em] md:tracking-[0.08em] px-1.5 md:px-4 py-2 rounded-full transition-colors cursor-pointer ${linkHoverClass}`}
            data-cursor="nav"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
