import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, Wrench } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParallaxImage from '../components/ParallaxImage';
import useScrollReveal from '../hooks/useScrollReveal';

const wolfImages = {
  heroBackdrop: '/case-studies/wolf/iso34th.png',
  projectCard: '/case-studies/wolf/internal_ghost.png',
  hero: '/case-studies/wolf/hero.png',
  iso: '/case-studies/wolf/iso.png',
  iso34th: '/case-studies/wolf/iso34th.png',
  side: '/case-studies/wolf/side.png',
  top: '/case-studies/wolf/top.png',
  closeupWedge: '/case-studies/wolf/closeup_wedge.png',
  noWedge: '/case-studies/wolf/no_wedge.png',
  internalGhost: '/case-studies/wolf/internal_ghost.png',
  systemSchematic: '/case-studies/wolf/schematic.svg',
};

const imageAspectRatios = {
  heroBackdrop: '2752 / 1536',
  hero: '1792 / 2398',
  iso: '1792 / 2400',
  iso34th: '1792 / 2400',
  side: '1792 / 2400',
  top: '1792 / 2400',
  closeupWedge: '1792 / 2400',
  noWedge: '1024 / 1536',
  internalGhost: '2752 / 1536',
  systemSchematic: '16 / 9',
};

type AspectImageProps = {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string;
  imgClassName?: string;
};

const AspectImage: React.FC<AspectImageProps> = ({
  src,
  alt,
  aspectRatio,
  className = '',
  imgClassName = '',
}) => (
  <ParallaxImage
    src={src}
    alt={alt}
    className={className}
    imgClassName={imgClassName}
    fit="contain"
    style={{ aspectRatio }}
  />
);

const decisionPaths = [
  {
    title: 'Start with the wedge.',
    body: 'Tempting, but compound bends are hard to get right on a deadline. One mistake and you\'re starting over.',
  },
  {
    title: 'Build tall walls.',
    body: 'More protection, but the bot gets top-heavy. Get hit from the side and you\'re on your back.',
  },
  {
    title: 'Keep it low and flat.',
    body: 'Draw the pattern, cut once, fold. The fold IS the structure. Every gram saved on the chassis is a gram for the weapon.',
  },
];

const wedgeFrames = [
  {
    src: wolfImages.noWedge,
    alt: 'Wolf before the wedge upgrade',
    aspectRatio: imageAspectRatios.noWedge,
    label: '01: before upgrade',
    caption: 'Round one exposed the contact problem: the flat front face could push, but it could not consistently get under opponents.',
  },
  {
    src: wolfImages.closeupWedge,
    aspectRatio: imageAspectRatios.closeupWedge,
    alt: 'Close-up of Wolf wedge geometry',
    label: '02: contact detail',
    caption: 'The front geometry lowers the first contact point and turns the leading edge into a control surface.',
  },
  {
    src: wolfImages.hero,
    aspectRatio: imageAspectRatios.hero,
    alt: 'Wolf with wedge installed',
    label: '03: after upgrade',
    caption: 'The bolt-on wedge changed first contact without forcing a chassis rebuild, which is why it mattered mid-tournament.',
  },
];

const finalFrames = [
  { src: wolfImages.top, alt: 'Wolf top view', aspectRatio: imageAspectRatios.top, label: 'top' },
];

const WolfCaseStudy: React.FC = () => {
  const [activeCostTab, setActiveCostTab] = useState<'electrical' | 'mechanical'>('electrical');
  const nextProjects = [
    { id: 1, title: 'Viper-Z.', image: '/pics/final-front.jpg' },
    { id: 3, title: 'Hydrofoil.', image: '/case-studies/hydrofoil/hero.png' },
  ];
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const currentNextProject = nextProjects[nextProjectIndex];

  const handleNextProjectSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setNextProjectIndex((prev) => (prev + 1) % nextProjects.length);
  };

  useScrollReveal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#fbfbfd] font-sans text-token-dark-green selection:bg-token-light-green selection:text-token-dark-green"
    >
      <Navbar />
      <main className="relative z-10 bg-[#fbfbfd]">
        <section
          className="relative my-2 mx-auto flex h-[95vh] w-[calc(100%-1rem)] items-center justify-center overflow-hidden bg-gray-100 md:my-4 md:w-[calc(100%-2rem)]"
          style={{ clipPath: 'inset(0 round 2.5rem)' }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none flex">
            <div className="flex-1 relative">
              <ParallaxImage
                src={wolfImages.heroBackdrop}
                alt="Wolf robot hero render"
                className="h-full w-full"
                imgClassName="object-center opacity-95"
                loading="eager"
              />
            </div>
            <div className="flex-1 relative">
              <ParallaxImage
                src={wolfImages.hero}
                alt="Wolf robot front view"
                className="h-full w-full"
                imgClassName="object-center opacity-95"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
          </div>

          <div className="relative z-10 h-full w-full pointer-events-none">
            <nav className="absolute top-0 left-0 z-20 mt-4 flex w-full items-start justify-between p-6 pointer-events-auto md:mt-6 md:p-8">
              <Link to="/" className="group flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl transition-all duration-300 group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black">
                  <ArrowLeft size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-token-light-green">
                  Index
                </span>
              </Link>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-right font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] text-white/70 backdrop-blur-2xl">
                <span className="font-semibold text-white">Case Study 02</span>
                <br />
                2022
              </div>
            </nav>

            <div className="absolute bottom-16 left-8 z-20 flex flex-col pointer-events-none md:left-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 font-display text-7xl font-semibold leading-[0.85] tracking-tighter text-white pointer-events-auto md:text-9xl lg:text-[11rem]"
              >
                Wolf.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl font-sans text-xl leading-tight font-light tracking-tight text-white/90 pointer-events-auto md:text-3xl"
              >
                A combat robot cut from a single aluminium sheet.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-site px-8 py-24 md:px-16">
          <div className="grid grid-cols-2 gap-12 border-y border-gray-200/60 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Organizer</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Propeller Tech</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Format</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Combat Robotics</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Role</span>
              <span className="font-sans text-xl font-medium leading-snug tracking-tight text-[#1d1d1f]">
                Design Lead
                <br />
                Fabrication
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {['CAD', 'Sheet Metal', 'ESP32', '3D Printing', 'Brushless'].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-gray-600 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-48">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-5">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  The Setup
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Build it once.
                  <br />
                  Build it right.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-16 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Tournament</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  Propeller Technologies hosted a 10-team combat robotics tournament over two days. Open arena melee to open - all bots, no pairing - then one-on-one elimination bouts through to the championship. <span className="font-medium text-[#1d1d1f]">Whatever you brought in, you built without a shop.</span>
                </p>
              </div>

              <div className="reveal delay-100">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Constraint</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  No kits. No templates. Three-person team - I owned chassis geometry and fabrication strategy. We needed a compact chassis folded from Aluminum 5052 without a second fabrication pass. 5052-H32, not 6061. 6061 at 3mm needs heat treatment to fold clean without cracking. 5052 holds the radius. The fold is the structure.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-400">The Objective</h3>
                  <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                    Build a competitive combat robot from a folded Aluminum 5052 chassis. One sheet, one fabrication pass, no second chances.
                  </p>
                  <p className="font-sans text-base text-[#86868b] leading-relaxed tracking-tight mt-4">
                    Low rectangular form: stable under side impact, foldable from a flat pattern, and fast to iterate if round one exposed a problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-4">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  The Decision
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Shape follows function.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <figure className="reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
                <AspectImage
                  src={wolfImages.top}
                  alt="Wolf top view render"
                  aspectRatio={imageAspectRatios.top}
                />
                <figcaption className="mt-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                  <span className="font-mono">Selected final geometry</span>
                  <span className="font-sans text-[11px] font-medium text-[#1d1d1f]">Low, stable, single-sheet friendly</span>
                </figcaption>
              </figure>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {decisionPaths.map((path, index) => (
                  <article key={path.title} className={`reveal rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}>
                    <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{`0${index + 1}`}</div>
                    <h3 className="mb-4 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">{path.title}</h3>
                    <p className="font-sans text-base leading-relaxed font-light text-gray-600">{path.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 text-left font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">The Build</div>

          <div className="reveal delay-100 flex w-full flex-col">
            <div className="group flex flex-col gap-8 border-t border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">01</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Flat Pattern Fabrication.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  The engineering started with a flat pattern. I drew the full cut layout directly onto the aluminium: cut lines, bend radii, motor mounts, battery positions, and wiring channels. Every fold served double duty. 5052-H32 holds the bend radius without cracking - it's not the alloy off a hardware shelf, it's the one you pick when the fold IS the structure.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">02</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Drivetrain and Control.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  The folded chassis became the packaging frame for motors, battery, controller, and support parts. The design goal was stable weight distribution, clean routing, and enough clarity in the structure to make field changes quickly.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-b border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">03</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Why not upgrade?</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  Round one exposed the problem: Wolf's front sat too high. No surface could get under opponents. I cut a wedge from the offcuts in the pit. Thirty minutes. Same sheet, same tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div>
              <div className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">The Fix</div>
              <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-7xl">Lower.</h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 md:mt-0">
              {['Get under', 'Pit fix', 'Low'].map((tag) => (
                <span key={tag} className="rounded-full border border-gray-300 bg-[#e5e7eb] px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {wedgeFrames.map((frame, index) => (
              <figure key={frame.label} className={`reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${index === 1 ? 'delay-100 md:mt-24' : index === 2 ? 'delay-200' : ''}`}>
                <AspectImage src={frame.src} alt={frame.alt} aspectRatio={frame.aspectRatio} />
                <div className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{frame.label}</div>
                <figcaption className="font-sans text-base leading-relaxed font-light text-gray-600">{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

<section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Final Build</div>
           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
             {finalFrames.map((frame, index) => (
               <figure
                 key={frame.label}
                 className={`group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                   index === 1 ? 'delay-100' : ''
                 }`}
               >
                 <AspectImage src={frame.src} alt={frame.alt} aspectRatio={frame.aspectRatio} />
                 <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">{frame.label}</figcaption>
               </figure>
             ))}
            </div>
        </section>

        <section className="mx-auto max-w-site px-6 py-24 md:px-12 md:py-32">
          <div className="reveal mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-gray-200 pt-16 md:grid-cols-12 md:gap-16 md:pt-24 lg:gap-32">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="mb-4 font-display text-2xl font-medium tracking-tight text-[#1d1d1f] md:text-3xl">Specifications</h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-gray-500">
                What we built, what it cost, and how it performed.
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <div className="flex flex-col border-t border-gray-200">
                {[
                  {
                    label: 'Win Rate',
                    value: '100',
                    unit: '%',
                    title: 'Tournament champion',
                    body: 'Open arena to open, then five elimination bouts.',
                  },
                  {
                    label: 'Chassis Logic',
                    value: 'Low',
                    unit: '',
                    title: 'Stable mass distribution',
                    body: 'Chosen over taller and riskier alternatives.',
                  },
                  {
                    label: 'Material',
                    value: '5052',
                    unit: 'Al',
                    title: 'Single-piece folded chassis',
                    body: 'Constraint-driven sheet construction.',
                  },
                  {
                    label: 'Awards',
                    value: '2',
                    unit: '',
                    title: 'Champion and Best Designer',
                    body: 'Tournament Champion. Best Design.',
                  },
                ].map((metric) => (
                  <div key={metric.label} className="group -mx-4 flex flex-col justify-between border-b border-gray-200 px-4 py-6 transition-colors hover:bg-gray-50 sm:flex-row sm:items-start">
                    <div className="mb-2 w-full pt-1 sm:mb-0 sm:w-1/3">
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-gray-400">{metric.label}</div>
                    </div>
                    <div className="mb-1 w-full sm:mb-0 sm:w-1/3">
                      <div className="font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">
                        {metric.value}
                        {metric.unit ? <span className="ml-1 text-base font-normal text-gray-400">{metric.unit}</span> : null}
                      </div>
                    </div>
                    <div className="w-full pt-1 sm:w-1/3 sm:text-right">
                      <div className="font-sans text-sm font-medium text-[#1d1d1f]">{metric.title}</div>
                      <div className="mt-1 font-sans text-xs text-gray-500">{metric.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200/60 px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">System Architecture</div>

          <div className="reveal delay-100 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 font-display text-4xl font-medium tracking-tight text-[#1d1d1f] md:text-5xl">
                Electrical and Mechanical Integration
              </h3>
              <p className="mb-8 font-sans text-lg leading-relaxed text-gray-600">
                Wolf&apos;s architecture centers on an ESP32-controlled drive stack with distributed power and a compact internal layout. The point of the system was not complexity. It was to keep the robot stable, repairable, and ready for quick iteration under tournament pressure.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'ESP32-WROOM-32D Core',
                  'Dual Brushless Rear Drive',
                  'Battery, PDB, and receiver kept low in the envelope',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                    <div className="h-2 w-2 rounded-full bg-token-light-green" />
                    <span className="font-mono text-sm text-[#1d1d1f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-sm">
              <AspectImage
                src={wolfImages.internalGhost}
                alt="Wolf internal ghost render"
                aspectRatio={imageAspectRatios.internalGhost}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200/60 px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">Component Breakdown</div>

          <div className="reveal delay-100 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 lg:gap-32">
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="mb-4 font-display text-3xl font-medium tracking-tight text-[#1d1d1f] md:text-4xl">Component Breakdown</h2>
              <p className="mb-8 font-sans text-lg leading-relaxed text-gray-600">
                A mix of high-performance COTS parts and fabricated structure kept the robot competitive while remaining easy to service between matches.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-2 font-mono text-xs uppercase tracking-widest text-gray-400">Total Estimated Cost</div>
                <div className="font-display text-5xl font-medium text-[#1d1d1f]">$178<span className="text-2xl text-gray-400">.50</span></div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-8">
              <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="flex border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setActiveCostTab('electrical')}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-mono text-sm uppercase tracking-widest transition-colors ${
                      activeCostTab === 'electrical'
                        ? 'bg-gray-50 text-[#1d1d1f]'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Zap size={16} />
                    Electrical
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCostTab('mechanical')}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-mono text-sm uppercase tracking-widest transition-colors ${
                      activeCostTab === 'mechanical'
                        ? 'bg-gray-50 text-[#1d1d1f]'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Wrench size={16} />
                    Mechanical
                  </button>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4">
                    {activeCostTab === 'electrical' ? (
                      <>
                        {[
                          { name: 'ESP32-WROOM-32D Dev Board', desc: 'Main Controller', cost: '$12.00' },
                          { name: 'LiPo 3S 2200mAh XT60', desc: 'Main Power Source', cost: '$25.00' },
                          { name: 'Matek Systems PDB XT60', desc: 'Power Distribution', cost: '$15.00' },
                          { name: 'BLHeli_S 30A ESC (x2)', desc: 'Motor Controllers', cost: '$20.00' },
                          { name: 'Brushless DC 2205 2300KV (x2)', desc: 'Drive Motors', cost: '$36.00' },
                          { name: 'Flysky FS-iA6B', desc: 'RC Receiver', cost: '$15.00' },
                        ].map((part) => (
                          <div key={part.name} className="group flex items-center justify-between border-b border-gray-100 py-4">
                            <div>
                              <div className="text-lg font-medium text-[#1d1d1f]">{part.name}</div>
                              <div className="mt-1 text-sm text-gray-500">{part.desc}</div>
                            </div>
                            <div className="font-mono text-token-dark-green">{part.cost}</div>
                          </div>
                        ))}
                        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                          <span className="font-mono text-sm uppercase tracking-widest text-gray-400">Subtotal</span>
                          <span className="font-mono text-lg font-semibold text-token-dark-green">$123.00</span>
                        </div>
                      </>
                    ) : (
                      <>
                        {[
                          { name: 'Custom Folded Aluminum Sheet', desc: 'Main Chassis (5052)', cost: '$40.00' },
                          { name: 'Aluminum 5052 Offcut', desc: 'Front Impact Wedge (from chassis sheet)', cost: '$0.00' },
                          { name: 'RC Robot Wheel 80mm (x2)', desc: 'Rear Drive Wheels', cost: '$30.00' },
                          { name: 'Custom 3D Printed Parts', desc: 'Motor Mounts and Electronics Tray (PETG)', cost: '$11.00' },
                          { name: 'Hardware Assortment', desc: 'M3 Screws, Nuts, Shafts, Couplers', cost: '$20.50' },
                        ].map((part) => (
                          <div key={part.name} className="group flex items-center justify-between border-b border-gray-100 py-4">
                            <div>
                              <div className="text-lg font-medium text-[#1d1d1f]">{part.name}</div>
                              <div className="mt-1 text-sm text-gray-500">{part.desc}</div>
                            </div>
                            <div className="font-mono text-token-dark-green">{part.cost}</div>
                          </div>
                        ))}
                        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                          <span className="font-mono text-sm uppercase tracking-widest text-gray-400">Subtotal</span>
                          <span className="font-mono text-lg font-semibold text-token-dark-green">$101.50</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200/60 px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">Reference Views</div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <figure className="reveal delay-100 rounded-[2.5rem] border border-gray-200 bg-white p-4 shadow-sm md:p-8">
              <AspectImage
                src={wolfImages.side}
                alt="Wolf side profile reference"
                aspectRatio={imageAspectRatios.internalGhost}
                className="overflow-hidden rounded-2xl"
                imgClassName="!object-cover object-center"
              />
            </figure>
            <figure className="reveal delay-200 rounded-[2.5rem] border border-gray-200 bg-white p-4 shadow-sm md:p-8">
              <AspectImage
                src={wolfImages.internalGhost}
                alt="Wolf internal ghost reference"
                aspectRatio={imageAspectRatios.internalGhost}
                className="rounded-2xl"
              />
            </figure>
          </div>
        </section>
      </main>

      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]" />

      <section className="sticky bottom-0 left-0 z-0 flex w-full flex-col bg-[#fbfbfd]">
        <div className="group relative h-[80vh] w-full overflow-hidden">
          <ParallaxImage
            key={currentNextProject.id}
            src={currentNextProject.image}
            alt="Next Project"
            className="absolute inset-0"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/10" />

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md"
            >
              Next Project
            </motion.div>
            <motion.h2
              key={`title-${currentNextProject.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex items-center justify-center font-display text-6xl font-semibold tracking-tighter text-white drop-shadow-lg md:text-8xl lg:text-[10rem]"
            >
              <div className="relative flex items-center transition-transform duration-500 group-hover:-translate-x-4 md:group-hover:-translate-x-6">
                <span>{currentNextProject.title}</span>
                <ArrowRight className="absolute left-full ml-4 h-8 w-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:ml-6 md:h-12 md:w-12" strokeWidth={1.5} />
              </div>
            </motion.h2>
          </div>

          <button
            onClick={handleNextProjectSwitch}
            aria-label="Switch next project"
            data-cursor="nav"
            className="group/switchbtn absolute top-1/2 right-8 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/30 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black"
          >
            <ArrowRight size={24} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover/switchbtn:translate-x-1" />
          </button>

          <Link to={`/case-study/${currentNextProject.id}`} className="absolute inset-0 z-0" />
        </div>

        <div className="relative z-20 flex h-[100px] items-center justify-between border-t border-gray-200 bg-[#fbfbfd] px-6 text-sm font-sans text-gray-500 pointer-events-auto md:px-12">
          <Link to="/" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
            Index
          </Link>
          <div className="flex gap-2 md:gap-4">
            <a href="https://www.linkedin.com/in/jayaramh" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
              LinkedIn
            </a>
            <a href="https://www.dropbox.com/scl/fi/23hl8s4mtt27p26u92ahh/jayaram_hariharan-resume.pdf?rlkey=krxna677qsjagszmjh7nc4owp&st=l2zyh8v0&dl=0" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
              Resume
            </a>
            <a href="mailto:jayaram.h1501@gmail.com" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
              Email
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WolfCaseStudy;
