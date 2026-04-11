import React, { useState } from 'react';
import { Box, Cable, CheckCircle2, Cog, Cpu, FileText, Lightbulb, Package, Ruler, Wrench, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

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
    <div className="rounded-3xl border border-gray-200 bg-white p-4">
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
              <div className="mt-4 rounded-2xl border border-gray-200 p-3 text-center">
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
    <div className="rounded-3xl border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Flow</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">5 stages</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex-1 rounded-2xl border border-gray-200 px-3 py-4">
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
        'Where it helps, I use parametric setups and lightweight automation to speed repetitive modeling and design updates.',
        'The result is production-minded CAD that supports review, prototyping, and handoff with fewer downstream corrections.',
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
        'Prototyping is used to answer design questions early, not as a final presentation step.',
        'Builds are planned around fit, assembly order, mechanism behavior, wiring paths, and structural confidence.',
        'Experience spans FDM, SLA, SLS, silicone molding, CNC machining, laser cutting, and other rapid methods.',
        'Used for fit checks, enclosure studies, mechanism trials, electronics packaging, and short-run proof parts.',
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
        'The work usually spans requirement framing, modeling, prototype learning, and refinement.',
        'Handoffs are structured so the next build phase starts from something usable and clear.',
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
        'A lot of the work sits in brackets, contact surfaces, and tolerance build-up that changes mechanism feel.',
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
        'Power routing, connector access, and cable management are considered alongside structure and serviceability.',
        'Mechanical and electronic decisions stay aligned so the product remains buildable, testable, and easier to revise.',
      ],
    },
  ];

  return (
    <section className="relative mx-auto max-w-site px-6 py-20 md:px-12">
      <div className="mb-20 h-px w-full bg-gray-200 reveal" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="sticky top-32 min-h-[320px]">
            <AnimatePresence mode="wait">
              {selectedIndex === null ? (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="mt-0 font-sans text-[11px] uppercase tracking-[0.18em] text-token-text-gray">What I Do Most</h2>
                  <p className="mt-4 max-w-md font-sans text-xl font-light leading-relaxed text-gray-500">
                    Mechanical product work across CAD, prototype learning, system decisions, and production-minded development.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={skillsData[selectedIndex].title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex max-h-[78vh] flex-col gap-8 overflow-y-auto pb-8 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                  onClick={() => setSelectedIndex(isSelected ? null : index)}
                  className={`w-full origin-left text-left font-serif leading-none transition-all duration-500 text-[2.7rem] md:text-[5rem]
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
