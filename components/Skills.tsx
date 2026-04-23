import React, { useState } from 'react';
import { Box, Cable, CheckCircle2, Cog, Cpu, FileText, Lightbulb, Package, Ruler, Wrench, Zap } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Tool = {
  name: string;
  icon?: React.ReactNode;
  logoSrc?: string;
};

type Skill = {
  title: string;
  summaryLines: string[];
  tools: Tool[];
  toolsLabel?: string;
  visualization?: React.ReactNode;
  visualizationLabel?: string;
};

const PrototypeVisualization = () => {
  const stages = [
    { label: 'Phase 1', note: 'Fit' },
    { label: 'Phase 2', note: 'Function' },
    { label: 'Phase 3', note: 'Refinement' },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Iteration</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Phase by phase</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-4 h-px bg-gray-200" />
        <div className="relative grid grid-cols-3 gap-4">
          {stages.map((stage, index) => (
            <div key={stage.label}>
              <div className="mx-auto h-8 w-8 rounded-full border border-token-dark-green bg-white text-center font-mono text-[10px] leading-[30px] text-token-dark-green">
                {index + 1}
              </div>
              <div className="mt-4 rounded-lg border border-gray-200 p-3 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">{stage.label}</div>
                <div className="mt-2 font-sans text-[13px] text-token-dark-green">{stage.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductVisualization = () => {
  const steps = ['Define', 'Concept', 'Model', 'Validate', 'Handoff'];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Flow</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">5 stages</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex-1 rounded-lg border border-gray-200 px-3 py-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">{`0${index + 1}`}</div>
              <div className="mt-2 font-sans text-[13px] text-token-dark-green">{step}</div>
            </div>
            {index < steps.length - 1 && <div className="hidden px-1 font-mono text-xs text-gray-300 md:block">-&gt;</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const renderTool = (tool: Tool) => (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 transition-all hover:border-gray-300 hover:bg-gray-50">
      {tool.logoSrc && (
        <img src={tool.logoSrc} alt={`${tool.name} logo`} className="h-4 w-4 rounded-[4px] object-contain" loading="lazy" />
      )}
      {tool.icon && <div className="text-gray-400">{tool.icon}</div>}
      <span className="font-sans text-sm font-medium text-gray-600">{tool.name}</span>
    </div>
  );

  const skillsData: Skill[] = [
    {
      title: 'CAD Modeling',
      tools: [
        { name: 'SolidWorks', logoSrc: '/logos/solidworks.png' },
        { name: 'Fusion 360', logoSrc: '/logos/fusion360.png' },
        { name: 'Rhino', logoSrc: '/logos/rhino.png' },
        { name: 'Siemens NX', logoSrc: '/logos/siemens-nx.png' },
      ],
      toolsLabel: 'Software',
      summaryLines: [
        'I structure CAD around assemblies, interfaces, and manufacturing constraints from the start.',
        'Board space, fasteners, wire paths, bought-out parts, and service access are resolved early in the model.',
        'The model is set up to survive prototyping and handoff without constant back-and-forth fixes.',
      ],
    },
    {
      title: 'Prototyping',
      tools: [
        { name: 'Cura', logoSrc: '/logos/cura.png' },
        { name: 'PrusaSlicer', logoSrc: '/logos/prusaslicer.png' },
        { name: 'Bambu Studio', logoSrc: '/logos/bambu-studio.png' },
      ],
      toolsLabel: 'Software',
      summaryLines: [
        'Fit checks, enclosure studies, mechanism behavior, and wiring questions get answered early through prototypes.',
        'Builds are planned around assembly order, structural confidence, and what needs to be learned next.',
        'Experience spans FDM, SLA, SLS, silicone molding, CNC machining, laser cutting, and other rapid methods.',
      ],
      visualization: <PrototypeVisualization />,
      visualizationLabel: 'Iteration view',
    },
    {
      title: 'Product Development',
      tools: [
        { name: 'Requirements', icon: <FileText className="h-4 w-4" /> },
        { name: 'Concept direction', icon: <Lightbulb className="h-4 w-4" /> },
        { name: 'Validation', icon: <CheckCircle2 className="h-4 w-4" /> },
        { name: 'DFM handoff', icon: <Package className="h-4 w-4" /> },
      ],
      toolsLabel: 'Working across',
      summaryLines: [
        'I work across the full development path from definition through production handoff.',
        'Concept intent, engineering feasibility, and validation stay connected through each stage.',
        'Handoffs give the next team something they can actually build from, not vague notes or missing details.',
      ],
      visualization: <ProductVisualization />,
      visualizationLabel: 'Process view',
    },
    {
      title: 'Mechanisms',
      tools: [
        { name: 'Linkage studies', icon: <Cog className="h-4 w-4" /> },
        { name: 'Tolerance review', icon: <Ruler className="h-4 w-4" /> },
        { name: 'Motion checks', icon: <Wrench className="h-4 w-4" /> },
        { name: 'Hard stops', icon: <Box className="h-4 w-4" /> },
      ],
      toolsLabel: 'Key areas',
      summaryLines: [
        'I work through motion paths, pivots, clearances, and repeatable closed-open states.',
        'Hard-stop behavior, return movement, and stack-up are resolved before assembly issues show up.',
        'The goal is reliable movement across repeated use, service, and real assembly conditions.',
      ],
    },
    {
      title: 'System Integration',
      tools: [
        { name: 'Arduino', logoSrc: '/logos/arduino.png' },
        { name: 'Boards + wiring', icon: <Cpu className="h-4 w-4" /> },
        { name: 'Sensors + actuators', icon: <Zap className="h-4 w-4" /> },
        { name: 'Power + I/O', icon: <Cable className="h-4 w-4" /> },
      ],
      toolsLabel: 'Integrated systems',
      summaryLines: [
        'I balance enclosure, electronics, interfaces, and assembly constraints as one system.',
        'That includes boards, wiring, sensors, motors, relays, and control behavior inside tight mechanical packages.',
        'Power routing, connector access, and cable management are resolved so the system stays buildable, testable, and simpler to iterate on.',
      ],
    },
  ];

  return (
    <section className="relative mx-auto max-w-site px-6 py-20 md:px-12">
      <div className="mb-20 h-px w-full bg-gray-200 reveal" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="min-h-[320px] lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {selectedIndex === null ? (
                <motion.div
                  key="default"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="mt-0 font-sans text-[11px] uppercase tracking-[0.18em] text-token-text-gray">What I Do Most</h2>
                  <p className="mt-4 max-w-md font-sans text-xl font-light leading-relaxed text-gray-500">
                    Mechanical product work across CAD, prototyping, system decisions, and production-minded development.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={skillsData[selectedIndex].title}
                  id="skill-detail-panel"
                  role="region"
                  aria-labelledby={`skill-tab-${selectedIndex}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-8 pb-8 lg:max-h-[78vh] lg:overflow-y-auto lg:pr-4"
                >
                  <div>
                    <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                      {skillsData[selectedIndex].toolsLabel ?? 'Relevant tools'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillsData[selectedIndex].tools.map((tool, i) => (
                        <React.Fragment key={i}>{renderTool(tool)}</React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">In practice</div>
                    <div className="flex flex-col">
                      {skillsData[selectedIndex].summaryLines.map((line, lineIndex) => (
                        <div key={lineIndex} className="border-b border-gray-100 py-3 last:border-b-0">
                          <p className="font-sans text-[1rem] leading-relaxed text-gray-600">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {skillsData[selectedIndex].visualization && (
                    <div>
                      <div className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                        {skillsData[selectedIndex].visualizationLabel ?? 'View'}
                      </div>
                      {skillsData[selectedIndex].visualization}
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedIndex(null)}
                    aria-label="Close skill details"
                    className="mt-2 flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-[#1d1d1f]"
                  >
                    &larr; Close Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
          {skillsData.map((skill, index) => {
            const isSelected = selectedIndex === index;
            const isAnySelected = selectedIndex !== null;

            return (
              <div key={skill.title} className="reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <button
                  id={`skill-tab-${index}`}
                  onClick={() => setSelectedIndex(isSelected ? null : index)}
                  aria-pressed={isSelected}
                  aria-expanded={isSelected}
                  aria-controls="skill-detail-panel"
                  className={`w-full origin-left text-left font-serif leading-[0.95] transition-all duration-500 text-[2.1rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[4.6rem]
                    ${
                      isAnySelected
                        ? isSelected
                          ? 'translate-x-4 scale-105 text-token-dark-green'
                          : 'text-gray-200'
                        : 'text-token-text-gray hover:translate-x-4 hover:text-token-dark-green'
                    }
                  `}
                >
                  {skill.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
