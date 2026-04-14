import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const homepageCopy: Record<number, { hook: string; proof: string }> = {
  1: {
    hook: 'Added twist yaw to a Viper grip without changing the feel of the original body.',
    proof: '$15 test rig | original form kept intact'
  },
  2: {
    hook: 'Designed the chassis from a flat pattern, added a wedge between rounds, and won the tournament.',
    proof: 'Tournament champion | Best Designer'
  },
  3: {
    hook: 'Sealed a spinning propeller shaft at 3000 RPM and designed foil geometry to lift the hull clean at 5 knots.',
    proof: '$207 BOM | 27 parts | zero shaft ingress'
  }
};

const WorkGrid: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/pics/cad-screenshot.jpg';
  };

  return (
    <section id="work" className="px-6 md:px-12 py-24 max-w-site mx-auto">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16 reveal">
        <h2 className="font-serif text-5xl md:text-7xl text-token-dark-green tracking-tight">Selected work</h2>
        <p className="max-w-md font-sans text-sm md:text-base font-light leading-relaxed text-gray-500 md:text-right">
          A few projects I've documented so far.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        {PROJECTS.map((project, i) => {
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
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-2 text-token-dark-green group-hover:text-token-light-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-sans font-light leading-relaxed mb-4">{homeCopy?.hook ?? project.description}</p>
                  {homeCopy?.proof ? (
                    <p className="mb-4 text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray">
                      {homeCopy.proof}
                    </p>
                  ) : null}
                  <div className="inline-flex items-center gap-2 border-b border-transparent group-hover:border-token-light-green transition-all pb-0.5">
                    <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray">View project</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default WorkGrid;
