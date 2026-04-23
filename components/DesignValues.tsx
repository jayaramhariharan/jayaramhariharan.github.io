import React from 'react';
import { PHILOSOPHY_RULES } from '../constants';

const DesignValues: React.FC = () => {
  return (
    <section id="philosophy" className="scroll-mt-28 px-6 py-28 md:px-12 max-w-site mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal gap-8">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-token-dark-green leading-[1.1] tracking-tight">
          Design philosophy<span className="text-token-light-green">.</span>
        </h2>
        <p className="max-w-md font-sans text-sm md:text-base text-gray-500 leading-relaxed font-light md:text-right">
          A few rules that keep the work clear, useful, and buildable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 reveal delay-200">
        {PHILOSOPHY_RULES.map((item, index) => (
          <div
            key={item.title}
            className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white p-7 shadow-none transition-all duration-500 hover:border-gray-200 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] md:min-h-[320px] md:p-10"
          >
            <div className="pointer-events-none absolute -right-6 -top-10 hidden select-none font-sans text-[11rem] font-bold text-gray-50/80 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-105 md:block">
              {index + 1}
            </div>

            <div className="relative z-10 mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-serif text-3xl md:text-4xl text-token-dark-green mb-4 tracking-tight group-hover:text-token-light-green transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignValues;
