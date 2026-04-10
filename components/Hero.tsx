import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen min-h-[700px] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-token-light-bg transition-colors duration-500">
      <div className="relative z-10 w-full max-w-site mx-auto text-center flex flex-col items-center justify-center -mt-6 md:-mt-0">
        <p className="mb-6 text-[11px] font-sans uppercase tracking-[0.18em] text-token-text-gray animate-entrance entrance-delay-1">
          Designing products since 2019
        </p>

        <h1 className="font-serif text-[8.5vw] md:text-[5.5vw] leading-[0.9] -tracking-[0.03em] text-token-dark-green animate-entrance entrance-delay-1">
          <span className="block md:whitespace-nowrap">
            I'm Jay. I design products and
          </span>
          <span className="block mt-1 md:mt-4">
            solve mechanical problems before production
            <span className="text-[#a3a3a3]">.</span>
          </span>
        </h1>

      </div>

      <div className="absolute bottom-4 left-6 right-6 md:left-12 md:right-12 pb-10 animate-entrance entrance-delay-2">
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3 md:gap-8">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.18em] text-token-text-gray mb-1">Current Role</div>
              <p className="text-sm font-sans text-token-dark-green">Product Design Engineer at Afterconcepts</p>
            </div>
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.18em] text-token-text-gray mb-1">Work</div>
              <p className="text-sm font-sans text-token-dark-green">Healthcare, consumer tech, mobility, and industrial products</p>
            </div>
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.18em] text-token-text-gray mb-1">Focus</div>
              <p className="text-sm font-sans text-token-dark-green">CAD, mechanical design, prototypes, and development</p>
            </div>
          </div>

          <a
            href="#work"
            className="text-[11px] font-sans text-token-text-gray uppercase tracking-[0.15em] hover:text-black transition-colors flex items-center gap-1 group"
          >
            View selected work
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
