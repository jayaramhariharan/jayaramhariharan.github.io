import React from 'react';
import { DESIGN_VALUES } from '../constants';

const DesignValues: React.FC = () => {
  return (
    <section id="philosophy" className="px-6 md:px-12 py-32 max-w-site mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 reveal gap-8">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-token-dark-green leading-[1.1] tracking-tight">
          Design philosophy.
        </h2>
        <p className="max-w-md font-sans text-sm md:text-base text-gray-500 leading-relaxed font-light md:text-right">
          A few rules that guide the way I design products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 reveal delay-200">
        {DESIGN_VALUES.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col justify-between min-h-[380px]"
          >
            <div className="absolute -top-12 -right-8 text-[14rem] font-sans font-bold text-gray-50/80 select-none pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-translate-x-4 group-hover:translate-y-4">
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
