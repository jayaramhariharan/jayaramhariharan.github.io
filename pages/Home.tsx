import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkGrid from '../components/WorkGrid';
import ExperienceList from '../components/ExperienceList';
import DesignValues from '../components/DesignValues';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  useScrollReveal();

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
      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]" />
      <Footer />
    </div>
  );
};

export default Home;
