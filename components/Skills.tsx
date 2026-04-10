import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SiAutodesk, SiRhinoceros, SiDassaultsystemes } from 'react-icons/si';
import { CircuitBoard, Printer, Settings, LayoutTemplate, GitMerge, TestTube, Box } from 'lucide-react';

const Skills: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const skillsData = [
    {
      title: 'CAD',
      tools: [
        { name: 'SolidWorks', icon: <SiDassaultsystemes className="w-4 h-4" /> },
        { name: 'Fusion 360', icon: <SiAutodesk className="w-4 h-4" /> },
        { name: 'Rhino 3D', icon: <SiRhinoceros className="w-4 h-4" /> }
      ],
      description: 'I use CAD to sort fit, assembly order, mounting, and interference before anything gets made. The point is to catch problems early, not just make clean geometry.',
      additionalSections: [
        {
          heading: 'What this looks like',
          type: 'list',
          content: [
            'I usually start with the parts that are hardest to move later: bought-out parts, boards, batteries, and connector space.',
            'I check sections and interferences before the first print, while changes are still cheap.',
            'I want the CAD to make the next build easier, not just look finished.'
          ]
        },
        {
          heading: 'Where this shows up',
          type: 'tags',
          content: ['Housing layout', 'Mounting and fit checks', 'Pre-prototype interference review']
        }
      ]
    },
    {
      title: 'Layout And Fit',
      tools: [
        { name: 'SolidWorks', icon: <SiDassaultsystemes className="w-4 h-4" /> },
        { name: 'Fusion 360', icon: <SiAutodesk className="w-4 h-4" /> },
        { name: 'PCB And Sensors', icon: <CircuitBoard className="w-4 h-4" /> }
      ],
      description: 'A lot of product work comes down to how parts fit together inside the product without creating trouble in assembly or service later.',
      additionalSections: [
        {
          heading: 'What this looks like',
          type: 'list',
          content: [
            'I work through board placement, wire paths, connector access, and battery space early.',
            'I check tool access and pull paths in CAD before a build turns them into rework.',
            'I would rather give up a little space than create a product that is miserable to assemble.'
          ]
        },
        {
          heading: 'Where this shows up',
          type: 'tags',
          content: ['PCB and wire routing', 'Tight internal layouts', 'Service access checks']
        }
      ]
    },
    {
      title: 'Mechanisms',
      tools: [
        { name: 'SolidWorks', icon: <SiDassaultsystemes className="w-4 h-4" /> },
        { name: 'Fusion 360', icon: <SiAutodesk className="w-4 h-4" /> },
        { name: 'Assembly Reviews', icon: <Settings className="w-4 h-4" /> }
      ],
      description: 'When a part rotates, folds, locks, or has to come apart, I spend time on the geometry and stack-up that make it work more than once.',
      additionalSections: [
        {
          heading: 'What this looks like',
          type: 'list',
          content: [
            'I look at locating features, brackets, and stack-ups before worrying about polish.',
            'I review tolerance build-up before metal or hard tooling, especially on moving parts.',
            'I care about how an assembly comes apart, not just how it goes together the first time.'
          ]
        },
        {
          heading: 'Where this shows up',
          type: 'tags',
          content: ['Moving assemblies', 'Tolerance-sensitive parts', 'Service-friendly layouts']
        }
      ]
    },
    {
      title: 'Prototypes',
      tools: [
        { name: '3D Printing', icon: <Printer className="w-4 h-4" /> },
        { name: 'CNC Machining', icon: <Settings className="w-4 h-4" /> },
        { name: 'Test Rigs', icon: <TestTube className="w-4 h-4" /> }
      ],
      description: 'I use quick prints, mockups, and test parts to answer the risky question early, even if the first version looks rough.',
      additionalSections: [
        {
          heading: 'What this looks like',
          type: 'list',
          content: [
            'Quick prints for fit, screw engagement, bracket checks, and assembly order.',
            'Bench setups for one specific risk like torque, alignment, cable routing, or sensor behavior.',
            'Simple checks before CNC or sheet metal spend when a cheap test can answer the question.'
          ]
        },
        {
          heading: 'Where this shows up',
          type: 'tags',
          content: ['3D printed checks', 'Bench validation', 'Fast pre-fab decisions']
        }
      ]
    },
    {
      title: 'Drawings And Handoff',
      tools: [
        { name: 'Drawing Sets', icon: <LayoutTemplate className="w-4 h-4" /> },
        { name: 'Vendor Review', icon: <GitMerge className="w-4 h-4" /> },
        { name: 'Assembly Notes', icon: <Box className="w-4 h-4" /> }
      ],
      description: 'A design is not really ready if the next person still has to guess what matters. I care about clear drawings, BOMs, and build notes.',
      additionalSections: [
        {
          heading: 'What this looks like',
          type: 'list',
          content: [
            'A drawing set should be clear enough for quoting, fabrication, and assembly.',
            'BOMs should survive revision without turning into a clean-looking but useless part list.',
            'Build notes should catch the mistakes a new builder is most likely to make.'
          ]
        },
        {
          heading: 'Why this matters',
          type: 'text',
          content: 'Good handoff saves time, avoids avoidable mistakes, and makes the next revision easier.'
        }
      ]
    }
  ];

  return (
    <section className="px-6 md:px-12 py-20 max-w-site mx-auto relative">
      <div className="w-full h-px bg-gray-200 mb-20 reveal" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32 min-h-[300px]">
            <AnimatePresence mode="wait">
              {selectedIndex === null ? (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="text-[11px] font-sans uppercase tracking-[0.15em] text-token-text-gray mt-0">What I Do Most</h2>
                  <p className="mt-4 max-w-sm font-sans text-xl text-gray-500 font-light leading-relaxed">
                    Most of my work is mechanical product design: CAD, assemblies, prototypes, product development, and handoff.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-8 max-h-[75vh] overflow-y-auto pr-4 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-4">Supporting tools</div>
                    <div className="flex flex-wrap gap-2">
                      {skillsData[selectedIndex].tools.map((tool, i) => (
                        <div key={i} className="flex items-center gap-2 bg-transparent border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all">
                          <div className="text-gray-400">{tool.icon}</div>
                          <span className="font-sans text-sm text-gray-600 font-medium">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-3">In practice</div>
                    <p className="font-sans text-xl text-gray-500 font-light leading-relaxed">
                      {skillsData[selectedIndex].description}
                    </p>
                  </div>

                  {skillsData[selectedIndex].additionalSections?.map((section, i) => (
                    <div key={i}>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-3">{section.heading}</div>

                      {section.type === 'text' && (
                        <p className="font-sans text-xl text-gray-500 font-light leading-relaxed">
                          {section.content as string}
                        </p>
                      )}

                      {section.type === 'list' && (
                        <div className="flex flex-col mt-2">
                          {(section.content as string[]).map((item, j) => (
                            <div key={j} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0 group">
                              <span className="font-mono text-[10px] text-gray-300 mt-2 shrink-0 group-hover:text-token-dark-green transition-colors">
                                {(j + 1).toString().padStart(2, '0')}
                              </span>
                              <span className="font-sans text-lg text-gray-500 font-light leading-relaxed group-hover:text-gray-900 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.type === 'tags' && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {(section.content as string[]).map((item, j) => (
                            <span key={j} className="px-3 py-1.5 bg-transparent text-gray-500 rounded-full text-[11px] font-mono uppercase tracking-widest border border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400 hover:text-[#1d1d1f] mt-2 flex items-center gap-2 transition-colors w-fit"
                  >
                    &larr; Close Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-6 relative z-10">
          {skillsData.map((skill, index) => {
            const isSelected = selectedIndex === index;
            const isAnySelected = selectedIndex !== null;

            return (
              <div key={index} className="reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <button
                  onClick={() => setSelectedIndex(isSelected ? null : index)}
                  className={`font-serif text-[3rem] md:text-[5rem] leading-none transition-all duration-500 text-left w-full origin-left
                    ${isAnySelected
                      ? isSelected
                        ? 'text-token-dark-green translate-x-4 scale-105'
                        : 'text-gray-200'
                      : 'text-token-text-gray hover:text-token-dark-green hover:translate-x-4'
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
