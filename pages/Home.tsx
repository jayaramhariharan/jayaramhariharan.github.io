import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkGrid from '../components/WorkGrid';
import ExperienceList from '../components/ExperienceList';
import DesignValues from '../components/DesignValues';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = windowHeight * 0.15;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <main className="relative z-10 bg-[#fbfbfd]">
        <Hero />
        <Skills />
        <ExperienceList />
        <WorkGrid />
        <DesignValues />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
