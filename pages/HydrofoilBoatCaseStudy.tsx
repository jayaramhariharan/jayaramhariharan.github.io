import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const hydrofoilImages = {
  hero: '/case-studies/hydrofoil/hero.png',
  frame1: '[IMAGE NEEDED]',
  frame2: '[IMAGE NEEDED]',
  frame3: '[IMAGE NEEDED]',
};

const decisionPaths = [
  {
    title: 'Flat foil, 4° AoA.',
    body: 'Foil lift scales with v² — doubling speed quadruples lift force. An AoA that barely clears the hull at 5 knots will overstress the foil mount and risk cavitation at 10. I fixed at 4°: enough to hit takeoff cleanly, low enough that the foil isn\'t fighting the water surface at higher throttle.',
  },
  {
    title: 'O-ring over lip seal.',
    body: 'A lip seal is cheaper and easier to source. The problem: at shaft speeds above 3000 RPM with lateral water pressure, a lip seal extrudes into the clearance gap and tears. I ran an O-ring in a stuffing box with marine grease — two dynamic sealing surfaces, and a grease buffer the water has to displace before reaching the hull interior.',
  },
  {
    title: 'PETG struts at 50% infill.',
    body: 'Strut infill is a structural decision, not a print-time shortcut. Below 40% the strut walls flex under hydrodynamic load and change the AoA mid-run. I printed the main and stabilizer struts at 50% infill — stiff enough to hold geometry at speed, light enough not to upset the CG balance the ballast was tuned for.',
  },
];

const imageFrames = [
  {
    src: hydrofoilImages.frame1,
    alt: '[IMAGE NEEDED]',
    label: '01: [IMAGE LABEL]',
    caption: '[COPY PENDING]',
  },
  {
    src: hydrofoilImages.frame2,
    alt: '[IMAGE NEEDED]',
    label: '02: [IMAGE LABEL]',
    caption: '[COPY PENDING]',
  },
  {
    src: hydrofoilImages.frame3,
    alt: '[IMAGE NEEDED]',
    label: '03: [IMAGE LABEL]',
    caption: '[COPY PENDING]',
  },
];

const finalFrames = [
  { src: hydrofoilImages.hero, alt: 'Hydrofoil boat hero view', label: '01: hero view' },
  { src: '[IMAGE NEEDED]', alt: 'Hydrofoil boat side view', label: '02: side view' },
  { src: '[IMAGE NEEDED]', alt: 'Hydrofoil boat top view', label: '03: top view' },
];

const HydrofoilBoatCaseStudy: React.FC = () => {
  const nextProjects = [
    { id: 1, title: 'Viper-Z.', image: '/pics/final-front.jpg' },
    { id: 2, title: 'Wolf.', image: '/case-studies/wolf/hero.jpg' },
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
              src={hydrofoilImages.hero}
              alt="Hydrofoil boat hero render"
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
                <span className="font-semibold text-white">Case Study 03</span>
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
                Hydrofoil Boat.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl font-sans text-xl leading-tight font-light tracking-tight text-white/90 pointer-events-auto md:text-3xl"
              >
                A foil-assisted RC hull built around shaft sealing and geometry tradeoffs.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-site px-8 py-24 md:px-16">
          <div className="grid grid-cols-2 gap-12 border-y border-gray-200/60 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Context</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Blueprint Community</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Format</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">RC Marine Build</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Role</span>
              <span className="font-sans text-xl font-medium leading-snug tracking-tight text-[#1d1d1f]">
                Mechanical Design
                <br />
                Prototyping
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {['CAD', 'FDM 3D Printing', 'Foil Design', 'Waterproofing', 'ESP32'].map((tag) => (
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
                  Foil geometry
                  <br />
                  at speed.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-16 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Brief</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  27 parts — 19 mechanical, 8 electrical — total BOM $207.60. The mechanical problem is getting the hull to leave the water, stay stable once it does, and not flood through the spinning propeller shaft in the process.
                </p>
              </div>

              <div className="reveal delay-100">
                <h3 className="mb-6 font-sans text-2xl font-medium text-[#1d1d1f]">The Constraint</h3>
                <p className="font-sans text-xl leading-relaxed font-light tracking-tight text-[#86868b] md:text-2xl">
                  Shaft penetration is where RC marine builds die. The propeller shaft rotates at ~3000 RPM while seated in a watertight hull — and at speed, the propeller creates forward water pressure that pushes back up the shaft tube. Under that combined rotational and axial load, a standard rubber grommet extrudes into the clearance gap, the seal face tears, and the hull floods. Most RC boat builders find this out mid-run.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-400">The Objective</h3>
                  <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                    Design a hull that lifts clean, foils stable, and keeps water out of the shaft at full throttle.
                  </p>
                  <p className="font-sans text-base text-[#86868b] leading-relaxed tracking-tight mt-4">
                    Foil geometry and shaft sealing are not independent problems. If the AoA is wrong, the hull porpoises: it lifts onto the foils, the propeller breaks the water surface, thrust collapses, the hull falls back, and the cycle repeats. Each drop is a surge load on the shaft seal. The mechanical system fails at whichever link absorbs the most cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              "The foils get the boat out of the water. <span className="text-[#86868b]">The shaft seal keeps it there."</span>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-4">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  02 &mdash; Decision Paths
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Engineering tradeoffs.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {decisionPaths.slice(0, 3).map((path, index) => (
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {imageFrames.map((frame, index) => (
              <figure key={frame.label} className={`reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${index === 1 ? 'delay-100 md:mt-24' : index === 2 ? 'delay-200' : ''}`}>
                <img src={frame.src} alt={frame.alt} className="h-[420px] w-full object-contain" loading="lazy" />
                <div className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{frame.label}</div>
                <figcaption className="font-sans text-base leading-relaxed font-light text-gray-600">{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">03 &mdash; The Build</div>

          <div className="reveal delay-100 flex w-full flex-col">
            <div className="group flex flex-col gap-8 border-t border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">01</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Hull and foil geometry</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  Hull in PETG, 0.2mm layers, 25% infill, waterproofed post-print. Once the hull clears the water at ~5 knots, wetted surface area drops to near zero — that's the entire drag argument for foils. To get there cleanly: main foil AoA at 4°, struts at 50% infill to hold geometry under load, stabilizer foil sized conservatively. An oversized rear foil raises the stern first, the bow digs in, and the transition inverts before it starts.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">02</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Propeller shaft sealing</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  The shaft runs through a stern tube packed with marine grease, terminated with a rubber/silicone seal at the hull penetration point. The shaft housing is printed at 70% infill — the highest-stress printed part in the assembly — and the motor mount at 60%. O-ring compression is set tighter than maximum expected operating pressure. Grease fills the annular gap as the primary barrier before water reaches the seal face.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-b border-black/10 py-12 transition-colors hover:border-black/30 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-blue-600">03</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Ballast and drive train</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg leading-relaxed font-light text-gray-500">
                  Lead ballast at the bow sets the center of gravity at 31% of waterline length — the self-correcting pitch zone for RC hulls. Motor-to-shaft connection uses a universal flexible coupling, which absorbs vibration between the brushless motor and the stainless steel drive shaft. Control arms are printed at 100% infill — they're the smallest parts in the linkage and the most likely to fail under servo load.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div>
              <div className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">04 &mdash; Technical Details</div>
              <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-7xl">Precision at the shaft.</h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 md:mt-0">
              {['Shaft Sealing', 'Hydrodynamics', 'Waterproofing', 'Foil Geometry'].map((tag) => (
                <span key={tag} className="rounded-full border border-gray-300 bg-[#e5e7eb] px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
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
                    label: 'Parts Count',
                    value: '27',
                    unit: '',
                    title: '19 mechanical, 8 electrical',
                    body: 'Hybrid system for underwater and above-water performance.',
                  },
                  {
                    label: 'Foil Type',
                    value: 'Custom',
                    unit: '',
                    title: 'Shaft-sealed hydrofoil',
                    body: 'Waterproofing at the rotating junction.',
                  },
                  {
                    label: 'Build Method',
                    value: 'PETG',
                    unit: '+ CAD',
                    title: '12 printed parts',
                    body: '25–100% infill by load. Hull waterproofed post-print.',
                  },
                  {
                    label: 'Platform',
                    value: 'ESP32',
                    unit: '',
                    title: 'Embedded control',
                    body: 'Real-time foil pitch management.',
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

export default HydrofoilBoatCaseStudy;
