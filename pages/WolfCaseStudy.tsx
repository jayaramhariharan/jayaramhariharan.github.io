import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const wolfImages = {
  hero: '/case-studies/wolf/hero.jpg',
  iso: '/case-studies/wolf/iso.jpg',
  side: '/case-studies/wolf/side.jpg',
  top: '/case-studies/wolf/top.jpg',
  closeupWedge: '/case-studies/wolf/closeup-wedge.jpg',
  wedgeVariation: '/case-studies/wolf/wedge-variation.jpg',
  systemSchematic: '/case-studies/wolf/system-schematic.svg',
};

const decisionPaths = [
  {
    title: 'Wedge-first concept.',
    body: 'Best first-contact theory, but the fabrication path was too risky. The compound bends asked for precision the single-pass build could not guarantee.',
  },
  {
    title: 'Tall-wall protection.',
    body: 'Protection improved, but the center of gravity moved in the wrong direction. A bot that tips under side impact is already halfway to losing.',
  },
  {
    title: 'Low rectangular chassis.',
    body: 'The whole form resolves from a single flat pattern. Mark it, cut it, fold it. Every gram the chassis doesn\'t weigh is a gram available for the weapon and drive — the alternatives threw away that math as soon as they added compound bends.',
  },
];

const wedgeFrames = [
  {
    src: wolfImages.wedgeVariation,
    alt: 'Wolf with removable wedge variation attached',
    label: '01: upgrade package',
    caption: 'The between-rounds wedge add-on changed how Wolf entered contact without forcing a chassis rebuild.',
  },
  {
    src: wolfImages.closeupWedge,
    alt: 'Close-up of Wolf wedge geometry',
    label: '02: contact detail',
    caption: 'The front geometry lowers the first contact point and turns the leading edge into a control surface.',
  },
  {
    src: wolfImages.side,
    alt: 'Wolf side profile',
    label: '03: low profile',
    caption: 'The side profile shows why the chassis logic mattered: low mass, short walls, and a stable stance under impact.',
  },
];

const finalFrames = [
  { src: wolfImages.hero, alt: 'Wolf front hero view', label: '01: hero view' },
  { src: wolfImages.iso, alt: 'Wolf isometric view', label: '02: isometric view' },
  { src: wolfImages.top, alt: 'Wolf top view', label: '03: top view' },
];

const WolfCaseStudy: React.FC = () => {
  const nextProjects = [
    { id: 1, title: 'Viper-Z.', image: '/pics/final-front.jpg' },
    { id: 3, title: 'Fintech.', image: 'https://picsum.photos/seed/fintech/1920/1080' },
  ];
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const currentNextProject = nextProjects[nextProjectIndex];

  const handleNextProjectSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setNextProjectIndex((prev) => (prev + 1) % nextProjects.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i += 1) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = windowHeight * 0.15;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={wolfImages.hero}
              alt="Wolf robot hero render"
              className="h-full w-full object-cover object-[center_42%] opacity-80"
            />
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
                Confidential
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
                  01 &mdash; The Challenge
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Single-pass
                  <br />
                  fabrication.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-16 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Tournament</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  Propeller Technologies ran a combat robotics tournament. Roughly ten teams, multi-day format. Free-for-all royal rumble to open, then one-on-one elimination bouts through to the championship. One rule: <span className="font-medium text-[#1d1d1f]">last bot in the ring wins</span>.
                </p>
              </div>

              <div className="reveal delay-100">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Constraint</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  No kits. No templates. I was design lead on a three-person team. We needed a compact chassis folded from Aluminum 5052 that could package drive, control, and impact hardware without a second fabrication pass. 5052-H32, not 6061. 6061 at 3mm needs heat treatment to fold clean without cracking. 5052 holds the radius. The drum was a separate decision — 6061 billet, machined, so hardness mattered more than formability.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-400">The Objective</h3>
                  <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                    Package a spinning drum weapon, dual brushless drivetrain, and full ESP32 control system into a chassis that folds from a single aluminium sheet.
                  </p>
                  <p className="font-sans text-base text-[#86868b] leading-relaxed tracking-tight mt-4">
                    Drum over vertical spinner: horizontal mass rotation means lower gyroscopic torque when hit from the side. The bot stays planted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              "Pick the right alloy. Draw the flat pattern. <span className="text-[#86868b]">Every fold is load-bearing.</span>"
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-4">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  02 &mdash; Decision Path
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  The geometry had to earn its keep.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <figure className="reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
                <img src={wolfImages.top} alt="Wolf top view render" className="h-[60vh] w-full object-contain" loading="lazy" />
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
          <div className="reveal mb-20 text-left font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">03 &mdash; The Build</div>

          <div className="reveal delay-100 flex w-full flex-col">
            <div className="group flex flex-col gap-8 border-t border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">01</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Flat Pattern Fabrication.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  The engineering started with a flat pattern. I drew the full cut layout directly onto the aluminium: cut lines, bend radii, motor mounts, battery positions, and wiring channels. Every fold served double duty. 5052-H32 holds the bend radius without cracking — it's not the alloy off a hardware shelf, it's the one you pick when the fold IS the structure.
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
                <p className="font-sans text-gray-500 leading-relaxed text-lg font-light mt-4">
                  Teeth beveled for edge contact. A sharp leading edge bites into armour and transfers energy; a flat face deflects. Drum runs above 8,000 RPM at operating voltage — standard threshold for reliable energy delivery at this weight class.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-b border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">03</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Mid-Competition Upgrade.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  After round one, the geometry gap was clear: no surface on Wolf contacted below the opponent&apos;s centre of mass. I cut and folded a wedge from the remaining sheet offcuts in the pit. Thirty minutes. Same alloy, same tools — the flat-pattern method scaled directly to a field repair.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div>
              <div className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">04 &mdash; Wedge Upgrade</div>
              <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-7xl">Contact control.</h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 md:mt-0">
              {['First Contact', 'Low Profile', 'Bolt-On', 'Constraint Aware'].map((tag) => (
                <span key={tag} className="rounded-full border border-gray-300 bg-[#e5e7eb] px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {wedgeFrames.map((frame, index) => (
              <figure key={frame.label} className={`reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${index === 1 ? 'delay-100 md:mt-24' : index === 2 ? 'delay-200' : ''}`}>
                <img src={frame.src} alt={frame.alt} className="h-[420px] w-full object-contain" loading="lazy" />
                <div className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{frame.label}</div>
                <figcaption className="font-sans text-base leading-relaxed font-light text-gray-600">{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">05 &mdash; Final Execution</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <figure className="group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-8">
              <img src={finalFrames[0].src} alt={finalFrames[0].alt} className="h-[80vh] w-full object-contain" loading="lazy" />
              <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">{finalFrames[0].label}</figcaption>
            </figure>

            <div className="md:col-span-4 flex flex-col gap-6">
              {finalFrames.slice(1).map((frame, index) => (
                <figure key={frame.label} className={`group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${index === 0 ? 'delay-100' : 'delay-200'}`}>
                  <img src={frame.src} alt={frame.alt} className="h-[calc(40vh-0.75rem)] w-full object-contain" loading="lazy" />
                  <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">{frame.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-6 py-24 md:px-12 md:py-32">
          <div className="reveal mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-gray-200 pt-16 md:grid-cols-12 md:gap-16 md:pt-24 lg:gap-32">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="mb-4 font-display text-2xl font-medium tracking-tight text-[#1d1d1f] md:text-3xl">Specifications</h2>
              <p className="max-w-xs font-sans text-sm leading-relaxed text-gray-500">
                Key metrics and technical details defining the final outcome of the project.
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
                    body: 'Royal rumble opening + five elimination bouts.',
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
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">07 &mdash; System Architecture</div>

          <div className="reveal delay-100 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
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

            <div className="flex items-center justify-center rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-sm">
              <img src={wolfImages.systemSchematic} alt="Wolf system schematic" className="max-h-[500px] h-auto w-full object-contain" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200/60 px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">08 &mdash; Bill of Materials</div>

          <div className="reveal delay-100 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 lg:gap-32">
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="mb-4 font-display text-3xl font-medium tracking-tight text-[#1d1d1f] md:text-4xl">Component Breakdown</h2>
              <p className="mb-8 font-sans text-lg leading-relaxed text-gray-600">
                A mix of high-performance COTS parts and fabricated structure kept the robot competitive while remaining easy to service between matches.
              </p>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-2 font-mono text-xs uppercase tracking-widest text-gray-400">Total Estimated Cost</div>
                <div className="font-display text-5xl font-medium text-[#1d1d1f]">$248<span className="text-2xl text-gray-400">.50</span></div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-8">
              <div className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="flex border-b border-gray-200">
                  <div className="flex-1 bg-gray-50 px-6 py-4 font-mono text-sm uppercase tracking-widest text-[#1d1d1f]">
                    Electrical and Power
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4">
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
                  </div>
                </div>

                <div className="flex border-y border-gray-200">
                  <div className="flex-1 bg-gray-50 px-6 py-4 font-mono text-sm uppercase tracking-widest text-[#1d1d1f]">
                    Mechanical and Structural
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4">
                    {[
                      { name: 'Custom Folded Aluminum Sheet', desc: 'Main Chassis (5052)', cost: '$40.00' },
                      { name: 'Custom Fabricated Stainless Steel', desc: 'Front Impact Wedge (304)', cost: '$35.00' },
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200/60 px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">09 &mdash; Profile Reference</div>
          <div className="reveal delay-100 rounded-[2.5rem] border border-gray-200 bg-white p-4 shadow-sm md:p-8">
            <img src={wolfImages.side} alt="Wolf side profile reference" className="w-full rounded-2xl object-contain" loading="lazy" />
          </div>
        </section>
      </main>

      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]" />

      <section className="sticky bottom-0 left-0 z-0 flex w-full flex-col bg-[#fbfbfd]">
        <div className="group relative h-[80vh] w-full overflow-hidden">
          <motion.img
            key={currentNextProject.id}
            initial={{ opacity: 0.5, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            src={currentNextProject.image}
            alt="Next Project"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
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
            data-cursor="nav"
            className="group/switchbtn absolute top-1/2 right-8 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/30 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black"
          >
            <ArrowRight size={24} strokeWidth={1.5} className="transition-transform duration-500 group-hover/switchbtn:translate-x-1" />
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
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
