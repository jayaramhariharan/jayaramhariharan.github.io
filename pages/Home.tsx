import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
        <ExperienceList />
        <WorkGrid />
        <DesignValues />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
