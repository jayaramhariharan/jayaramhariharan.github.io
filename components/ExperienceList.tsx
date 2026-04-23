import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiAnsys } from 'react-icons/si';
import { EXPERIENCE, RESUME_URL } from '../constants';

type ExperienceTool = {
  name: string;
  logoSrc?: string;
  icon?: React.ReactNode;
};

type ExperiencePanelData = {
  tools: ExperienceTool[];
  scope: string[];
  companyUrl: string;
  companyLinkLabel: string;
};

const EXPERIENCE_PANEL_DATA: Record<number, ExperiencePanelData> = {
  1: {
    tools: [
      { name: 'SolidWorks', logoSrc: '/logos/solidworks.png' },
      { name: 'Fusion 360', logoSrc: '/logos/fusion360.png' },
      { name: 'ANSYS', icon: <SiAnsys className="h-4 w-4" /> },
      { name: 'Rhino', logoSrc: '/logos/rhino.png' },
      { name: 'Siemens NX', logoSrc: '/logos/siemens-nx.png' },
    ],
    scope: [
      'Plastics',
      'Sheet metal',
      'CNC parts',
      'Electronics integration',
      'Internal packaging',
      'Prototype testing',
    ],
    companyUrl: 'https://afterconcept.com/',
    companyLinkLabel: 'Visit Afterconcept',
  },
  2: {
    tools: [
      { name: 'SolidWorks', logoSrc: '/logos/solidworks.png' },
      { name: 'ANSYS', icon: <SiAnsys className="h-4 w-4" /> },
      { name: 'Packaging studies' },
      { name: 'Build checks' },
    ],
    scope: [
      'Vehicle structure',
      'Mounting layout',
      'Part placement',
      'Build sequence',
      'Fabrication-ready CAD',
    ],
    companyUrl: 'https://www.iitm.ac.in/',
    companyLinkLabel: 'Visit IIT Madras',
  },
  3: {
    tools: [
      { name: 'SolidWorks', logoSrc: '/logos/solidworks.png' },
      { name: 'CAD detailing' },
      { name: 'Drawings' },
      { name: 'Revision control' },
    ],
    scope: [
      'Aerospace parts',
      'Automotive parts',
      'Prototype support',
      'Documentation',
      'Design updates',
    ],
    companyUrl: RESUME_URL,
    companyLinkLabel: 'See full CV',
  },
};

const AboutSection: React.FC = () => {
  const experienceListRef = useRef<HTMLDivElement>(null);
  const [activeExperienceId, setActiveExperienceId] = useState<number | null>(null);
  const [hasUserSelectedExperience, setHasUserSelectedExperience] = useState(false);
  const [hasAutoOpenedAfterconcepts, setHasAutoOpenedAfterconcepts] = useState(false);

  const activeExperience = EXPERIENCE.find((experience) => experience.id === activeExperienceId) ?? null;
  const activePanel = activeExperience ? EXPERIENCE_PANEL_DATA[activeExperience.id] : null;

  useEffect(() => {
    const updateActiveExperienceFromScroll = () => {
      const experienceList = experienceListRef.current;

      if (!experienceList) {
        return;
      }

      const rect = experienceList.getBoundingClientRect();
      const activationLine = window.innerHeight * 0.24;

      if (
        rect.top <= activationLine &&
        rect.bottom > activationLine &&
        !hasUserSelectedExperience &&
        !hasAutoOpenedAfterconcepts
      ) {
        setActiveExperienceId(1);
        setHasAutoOpenedAfterconcepts(true);
      }
    };

    updateActiveExperienceFromScroll();
    window.addEventListener('scroll', updateActiveExperienceFromScroll, { passive: true });
    window.addEventListener('resize', updateActiveExperienceFromScroll);

    return () => {
      window.removeEventListener('scroll', updateActiveExperienceFromScroll);
      window.removeEventListener('resize', updateActiveExperienceFromScroll);
    };
  }, [hasAutoOpenedAfterconcepts, hasUserSelectedExperience]);

  const selectExperience = (experienceId: number) => {
    setHasUserSelectedExperience(true);
    setActiveExperienceId((currentExperienceId) => {
      if (experienceId === 1 && currentExperienceId === 1) {
        return null;
      }

      return experienceId;
    });
  };

  const renderToolChip = (tool: ExperienceTool) => (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 transition-all hover:border-gray-300 hover:bg-white">
      {tool.logoSrc ? (
        <img src={tool.logoSrc} alt={`${tool.name} logo`} className="h-4 w-4 rounded-[4px] object-contain" loading="lazy" />
      ) : null}
      {tool.icon ? <span className="text-gray-500">{tool.icon}</span> : null}
      <span className="font-sans text-sm font-medium text-gray-600">{tool.name}</span>
    </div>
  );

  const renderMarkedText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={`${part}-${index}`} className="font-medium text-token-dark-green">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
  };

  const renderExperiencePanel = () => {
    if (!activeExperience || !activePanel) {
      return (
        <motion.div
          key="about-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-[clamp(3.25rem,12vw,5rem)] md:text-[5.25rem] leading-[0.92] tracking-[-0.015em] text-token-dark-green mt-0">About</h2>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={`experience-panel-${activeExperience.id}`}
        id="experience-detail-panel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex max-h-[78vh] flex-col gap-7 overflow-y-auto pb-8 pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div>
          <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Tools used</div>
          <div className="flex flex-wrap gap-2">
            {activePanel.tools.map((tool) => (
              <React.Fragment key={tool.name}>{renderToolChip(tool)}</React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Scope</div>
          <div className="grid grid-cols-2 gap-2">
            {activePanel.scope.map((scope) => (
              <div key={scope} className="rounded-2xl border border-gray-200 bg-white/75 px-3 py-3">
                <p className="font-sans text-[13px] font-medium leading-snug text-gray-600">{scope}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Company link</div>
          <a
            href={activePanel.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/75 px-4 py-2 font-sans text-sm font-medium text-token-dark-green transition-all hover:border-token-light-green/50 hover:text-token-light-green hover:shadow-sm"
          >
            {activePanel.companyLinkLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="about" className="px-6 md:px-12 py-20 md:py-28 lg:py-32 max-w-site mx-auto">
      <div className="w-full h-px bg-gray-200 mb-12 md:mb-16 reveal" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32 min-h-[320px]">
            <AnimatePresence mode="wait">{renderExperiencePanel()}</AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-6 md:gap-7 reveal delay-100">
            <p className="font-sans text-lg md:text-xl leading-8 md:leading-9 text-token-dark-green">
              I build mechanical products and work through the parts that decide whether they actually come together.
            </p>

            <p className="font-sans text-lg md:text-xl leading-8 md:leading-9 text-token-dark-green">
              Most of my time goes into CAD, layout, prototypes, drawings, vendor handoff, and the checks that make the next build clearer.
            </p>

            <p className="font-sans text-lg md:text-xl leading-8 md:leading-9 text-token-dark-green">
              I like doing things I&apos;m not good at yet, because that is how I learn.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200 my-4 reveal" />

          <div ref={experienceListRef} className="flex flex-col">
            <div className="mb-6 text-[11px] sm:text-xs font-sans uppercase tracking-[0.11em] md:tracking-[0.14em] leading-snug font-medium text-token-text-gray reveal">Experience</div>
            {EXPERIENCE.map((exp) => {
              const isActive = activeExperienceId === exp.id || (activeExperienceId === null && exp.id === 1);

              return (
                <div
                  key={exp.id}
                  className="border-b border-gray-200 py-7 md:py-8 group reveal"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <h3 className="mb-1 text-2xl md:text-3xl leading-tight font-serif">
                        <button
                          type="button"
                          onClick={() => selectExperience(exp.id)}
                          aria-pressed={isActive}
                          aria-controls="experience-detail-panel"
                          className={`group/company relative inline-flex items-center text-left font-serif transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-light-green/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white ${
                            isActive ? 'text-token-light-green' : 'text-token-dark-green hover:text-token-light-green'
                          }`}
                        >
                          <span
                            className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-token-light-green transition-all duration-300 md:w-7 ${
                              isActive
                                ? 'scale-x-100 opacity-100'
                                : 'scale-x-0 opacity-0 group-hover/company:scale-x-100 group-hover/company:opacity-100 group-focus-visible/company:scale-x-100 group-focus-visible/company:opacity-100'
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`inline-flex items-center gap-2 transition-transform duration-500 md:gap-3 ${
                              isActive
                                ? 'translate-x-8 md:translate-x-10'
                                : 'translate-x-0 group-hover/company:translate-x-8 group-focus-visible/company:translate-x-8 md:group-hover/company:translate-x-10 md:group-focus-visible/company:translate-x-10'
                            }`}
                          >
                            <span>{exp.company}</span>
                            <span
                              className={`h-1.5 w-1.5 rounded-full bg-token-light-green transition-transform ${
                                isActive
                                  ? 'scale-100 opacity-100'
                                  : 'scale-75 opacity-45 group-hover/company:scale-100 group-hover/company:opacity-100 group-focus-visible/company:scale-100 group-focus-visible/company:opacity-100'
                              }`}
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      </h3>
                      <p className="font-serif text-xl md:text-2xl leading-tight text-black transition-colors">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-12">
                      <span className="hidden md:block font-sans text-[11px] sm:text-xs text-token-text-gray uppercase tracking-[0.11em] md:tracking-[0.14em] leading-snug font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <div className="pt-5 max-w-3xl">
                    <p className="font-sans text-base md:text-lg text-gray-600 leading-7 md:leading-8">
                      {exp.description}
                    </p>
                    {exp.highlights?.length ? (
                      <ul className="mt-4 flex flex-col gap-2.5 border-y border-gray-100 py-4">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 font-sans text-[15px] leading-7 text-gray-600 md:text-base">
                            <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-token-light-green" aria-hidden="true" />
                            <span>{renderMarkedText(highlight)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {exp.details?.length ? (
                      <div className="mt-4 flex flex-col gap-2 border-y border-gray-100 py-4">
                        {exp.details.map((detail) => (
                          <p key={detail} className="font-sans text-[15px] leading-7 text-gray-600 md:text-base">
                            {renderMarkedText(detail)}
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
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="relative group inline-flex items-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.11em] md:tracking-[0.14em] leading-snug font-medium uppercase transition-colors text-token-text-gray pb-1">
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
