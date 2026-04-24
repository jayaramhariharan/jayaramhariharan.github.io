import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PROJECTS } from '../lib/projectSummaries';
import { areCaseStudiesUnlocked } from '../lib/caseStudyAccess';

const homepageCopy: Record<number, { hook: string; proof: string }> = {
  1: {
    hook: 'Kept the flight grip the client already liked and added yaw without pedals or a full replacement.',
    proof: '$15 emulator | Added yaw axis'
  },
  2: {
    hook: 'Designed a combat robot, changed the front geometry between rounds, and turned that update into a winning build.',
    proof: 'Tournament winner | Best Designer'
  },
  3: {
    hook: 'Printed hull, rotating shaft, zero ingress.',
    proof: ''
  }
};

const WorkGrid: React.FC = () => {
  const caseStudiesUnlocked = areCaseStudiesUnlocked();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/pics/cad-screenshot.jpg';
  };

  return (
    <section id="work" className="scroll-mt-28 px-6 pt-6 pb-24 min-[360px]:pt-10 sm:pt-16 md:px-12 max-w-site mx-auto">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 reveal">
        <h2 className="font-serif text-5xl md:text-7xl text-token-dark-green tracking-tight">Selected work</h2>
        <p className="max-w-md font-sans text-sm md:text-base font-light leading-relaxed text-gray-500 md:text-right">
          Three builds where the hardest constraint decided what the design had to do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        {HOME_PROJECTS.map((project, i) => {
            const homeCopy = homepageCopy[project.id];

            if (project.isNDA) {
              return (
                <div key={project.id} className={`group reveal block ${i % 2 === 0 ? '' : 'delay-100'}`}>
                  <div className="overflow-hidden rounded-sm bg-gray-50 aspect-[4/3] mb-6 relative p-6 md:p-10 flex flex-col justify-center border border-gray-200">
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                      <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray">Confidential</span>
                    </div>
                    <div className="space-y-5 mt-4">
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray block mb-1">Role</span>
                        <p className="text-token-dark-green font-serif text-xl">{project.details?.role}</p>
                      </div>
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray block mb-1">Problem</span>
                        <p className="text-gray-600 font-sans font-light text-sm leading-relaxed">{project.details?.challenge}</p>
                      </div>
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray block mb-1">Outcome</span>
                        <p className="text-token-dark-green font-sans text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2 text-token-dark-green">{project.title}</h3>
                    <p className="text-gray-600 font-sans font-light leading-relaxed mb-4">Details protected under NDA.</p>
                  </div>
                </div>
              );
            }

            return (
              caseStudiesUnlocked ? (
                <Link
                  key={project.id}
                  to={`/case-study/${project.id}`}
                  className={`group reveal block ${i % 2 === 0 ? '' : 'delay-100'}`}
                >
                  <div className="overflow-hidden rounded-sm bg-gray-100 aspect-[4/3] mb-6 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />
                  </div>
                  <div>
                    <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.15em] text-token-text-gray">
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-serif mb-2 text-token-dark-green group-hover:text-token-light-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    {homeCopy?.proof ? (
                      <p className="mb-3 font-serif text-xl leading-tight text-token-dark-green md:text-2xl">
                        {homeCopy.proof}
                      </p>
                    ) : null}
                    <p className="text-gray-600 font-sans font-light leading-relaxed mb-4">{homeCopy?.hook ?? project.description}</p>
                    <div className="inline-flex items-center gap-2 border-b border-token-dark-green/20 pb-1 transition-all group-hover:border-token-light-green group-focus-visible:border-token-light-green">
                      <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray">View project</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-token-text-gray transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={project.id}
                  className={`reveal block ${i % 2 === 0 ? '' : 'delay-100'}`}
                >
                  <div className="overflow-hidden rounded-sm bg-gray-100 aspect-[4/3] mb-6 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />
                  </div>
                  <div>
                    <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.15em] text-token-text-gray">
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-serif mb-2 text-token-dark-green">
                      {project.title}
                    </h3>
                    {homeCopy?.proof ? (
                      <p className="mb-3 font-serif text-xl leading-tight text-token-dark-green md:text-2xl">
                        {homeCopy.proof}
                      </p>
                    ) : null}
                    <p className="text-gray-600 font-sans font-light leading-relaxed mb-4">{homeCopy?.hook ?? project.description}</p>
                    <div className="inline-flex items-center gap-2 border-b border-transparent pb-0.5">
                      <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray">Case study in progress</span>
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </section>
  );
};

export default WorkGrid;
