import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-token-light-bg font-sans selection:bg-token-light-green selection:text-token-dark-green flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-display font-bold text-token-dark-green leading-none tracking-tighter mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-token-dark-green mb-6">
            Well, this is awkward.
          </h2>
          <p className="text-token-text-gray text-lg mb-12 max-w-md mx-auto">
            You've found a page that doesn't exist. It's like opening the fridge and finding only half a lemon. Let's get you back to the good stuff.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              to="/" 
              data-cursor="nav"
              className="px-8 py-4 bg-token-dark-green text-token-light-bg rounded-full font-medium hover:bg-token-light-green hover:text-token-dark-green transition-colors w-full sm:w-auto"
            >
              Return Home
            </Link>
            <Link 
              to="/case-study/1" 
              data-cursor="nav"
              className="px-8 py-4 bg-gray-100 text-token-dark-green rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              View Viper-Z
            </Link>
          </div>

          <div className="text-left max-w-md mx-auto bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-sans font-medium text-token-dark-green mb-4 text-sm uppercase tracking-widest">Working Routes</h3>
            <ul className="space-y-3 font-mono text-sm text-token-text-gray">
              <li>
                <Link to="/" className="hover:text-token-light-green transition-colors flex items-center gap-2" data-cursor="nav">
                  <span className="w-2 h-2 rounded-full bg-token-light-green"></span> / (Home)
                </Link>
              </li>
              <li>
                <Link to="/case-study/1" className="hover:text-token-light-green transition-colors flex items-center gap-2" data-cursor="nav">
                  <span className="w-2 h-2 rounded-full bg-token-light-green"></span> /case-study/1 (Viper-Z)
                </Link>
              </li>
              <li>
                <Link to="/case-study/2" className="hover:text-token-light-green transition-colors flex items-center gap-2" data-cursor="nav">
                  <span className="w-2 h-2 rounded-full bg-token-light-green"></span> /case-study/2 (Wolf)
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </main>
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.03]">
        <div className="text-[40vw] font-display font-bold whitespace-nowrap">
          LOST
        </div>
      </div>
    </div>
  );
};

export default NotFound;
