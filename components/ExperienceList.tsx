import React from 'react';
import { EXPERIENCE } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-20 max-w-site mx-auto">
      <div className="w-full h-px bg-gray-200 mb-20 reveal" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="font-serif text-[4rem] md:text-[6rem] leading-[0.9] text-token-dark-green reveal mt-0">About</h2>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12">
          <div className="flex flex-col gap-8 reveal delay-100">
            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-token-dark-green">
              I'm a product design engineer. I like building products, solving mechanical problems, and working through the parts that decide whether something will come together properly.
            </p>

            <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-token-dark-green">
              Most of my work is in CAD, mechanical design, prototyping, and product development. I care about products that are useful, work well, look right, and stay simple enough to build.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200 my-4 reveal" />

          <div className="flex flex-col">
            <div className="mb-8 text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray reveal">Experience</div>
            {EXPERIENCE.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="border-b border-gray-200 py-8 group reveal"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-serif text-token-dark-green mb-1 group-hover:text-token-light-green transition-colors">{exp.company}</h3>
                      <p className="font-serif text-xl md:text-2xl text-black transition-colors">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-12">
                      <span className="hidden md:block font-sans text-[11px] text-token-text-gray uppercase tracking-[0.15em]">{exp.period}</span>
                    </div>
                  </div>

                  <div className="pt-5 max-w-3xl">
                    <p className="font-sans text-lg text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.details?.length ? (
                      <div className="mt-3 flex flex-col gap-2">
                        {exp.details.map((detail, index) => (
                          <p key={index} className="font-sans text-lg text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-8 reveal">
            <a href="/resume.pdf" className="relative group inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase transition-colors text-token-text-gray pb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-token-light-green transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
