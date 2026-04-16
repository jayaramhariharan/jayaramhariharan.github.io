import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const hydrofoilImages = { hero: '/case-studies/hydrofoil/hero.png' };
const imageAspectRatios = { hero: '16 / 9' };

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
  <div className={className} style={{ aspectRatio }}>
    <img src={src} alt={alt} className={`h-full w-full object-cover ${imgClassName}`.trim()} loading="lazy" />
  </div>
);

const decisionPaths = [
  {
    title: 'PETG, not PLA.',
    body: 'Material selection is failure-mode selection. Community data shows PLA hulls flood in under 60 seconds — the material is hydrophilic and layer-line porosity cannot be sealed reliably. PETG reduces immediate ingress risk and gives tighter inter-layer adhesion, but still needs post-print treatment. The material buys time for the sealing architecture to work. It is not the waterproofing.',
  },
  {
    title: 'Grease first, seal second.',
    body: 'The stern tube is packed with marine grease before the rubber seal is installed. Water must displace the entire grease column before it reaches the seal face. Most printed enclosures get this backwards — they treat the seal as the primary barrier and the surrounding geometry as secondary. Here the grease column is the plan and the seal is the last resort.',
  },
  {
    title: 'Close the layer lines.',
    body: 'FDM layer-line porosity is invisible to the naked eye but water finds it. Post-print epoxy treatment applied to all exterior surfaces before any water exposure closes the microscopic gaps that infill percentage cannot address. Not optional for any printed part in a wet environment.',
  },
];

const processFrames = [
  {
    label: '01: material selection',
    caption: 'PETG over PLA — failure-mode selection, not preference. Post-print epoxy treatment closes layer-line porosity before any water exposure.',
  },
  {
    label: '02: sealing hierarchy',
    caption: 'Stern tube packed with marine grease. Water must displace the grease column before reaching the rubber seal face. Seal is last resort, not the plan.',
  },
  {
    label: '03: infill tiering',
    caption: 'Five tiers across 12 printed parts: 100% control arms → 70% shaft housing → 60% motor mount → 50% struts → 25% hull shell. Mass follows failure consequence.',
  },
];

const finalFrames = [
  { label: '01: hero view', className: 'md:col-span-3' },
  { label: '02: foil geometry', className: '' },
  { label: '03: stern detail', className: '' },
  { label: '04: full assembly', className: '' },
];

const stats = [
  { value: '0', label: 'Ingress Events' },
  { value: '$207', label: 'Total BOM' },
  { value: '3', label: 'Sealing Layers' },
  { value: '5', label: 'Infill Tiers' },
];

const HydrofoilBoatCaseStudy: React.FC = () => {
  const nextProjects = [
    { id: 1, title: 'Viper-Z.', image: '/pics/final-front.jpg' },
    { id: 2, title: 'Wolf.', image: '/case-studies/wolf/internal_ghost.png' },
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
      className="min-h-screen bg-[#fbfbfd] font-sans text-[#1d1d1f] selection:bg-token-light-green selection:text-token-dark-green"
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
              className="h-full w-full object-cover object-center opacity-90"
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
                Blueprint Community
              </div>
            </nav>

            <div className="absolute bottom-16 left-8 z-20 flex flex-col pointer-events-none md:left-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 font-display text-7xl font-semibold leading-[0.85] tracking-tighter text-white pointer-events-auto md:text-9xl lg:text-[11rem]"
              >
                Hydrofoil.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl font-sans text-xl font-light leading-tight tracking-tight text-white/90 pointer-events-auto md:text-3xl"
              >
                A 3D-printed RC hull built to prove a waterproofing methodology at the hardest version of the problem: rotating shaft, dynamic loads, below the waterline.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-site px-8 py-24 md:px-16">
          <div className="grid grid-cols-2 gap-12 border-y border-gray-200/60 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Client</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Blueprint Community</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Format</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Waterproofing / FDM</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Role</span>
              <span className="font-sans text-xl font-medium leading-snug tracking-tight text-[#1d1d1f]">
                Mechanical Design
                <br />
                Prototyping
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Tech</span>
              <div className="flex flex-wrap gap-2">
                {['CAD', 'FDM-PETG', 'Waterproofing', 'Sealing-Design', 'PETG-Post-Process'].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#86868b] shadow-sm">
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
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">
                  01 &mdash; The Challenge
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Waterproofing is not a feature.
                  <br />
                  It's a hierarchy.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-16 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <p className="font-sans text-xl font-light leading-relaxed tracking-tight text-[#86868b] md:text-2xl">
                  The propeller shaft has to rotate at ~3000 RPM while seated in a watertight hull below the waterline. Standard rubber seals compress out of spec under sustained dynamic load. FDM-printed hulls have layer-line porosity invisible to the naked eye — but water finds it. Most printed enclosures flood from porosity, not catastrophic seal failure.
                </p>
              </div>

              <div className="reveal delay-100">
                <p className="font-sans text-xl font-light leading-relaxed tracking-tight text-[#86868b] md:text-2xl">
                  Community data is unambiguous: PLA hulls flood in under 60 seconds. PETG fares better but reaches 75% water ingress after 2 hours at 5 bars without post-treatment. The material is not the waterproofing — it buys time for the sealing architecture to work. If the architecture is wrong, the material does not matter.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#86868b]">The Objective</h3>
                  <p className="font-sans text-xl font-normal leading-relaxed tracking-tight text-[#1d1d1f] md:text-2xl">
                    Prove that a three-layer waterproofing hierarchy — material selection, sealing architecture, porosity closure — holds at the hardest version of the problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              "Waterproofing is not a feature you add. It's a hierarchy you design from the inside out. The shaft seal is not the plan — it's the last resort."
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-4">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">
                  02 &mdash; Decision Path
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Three decisions.
                  <br />
                  In this order.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <figure className="reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
                <AspectImage
                  src={hydrofoilImages.hero}
                  alt="Hydrofoil boat render"
                  aspectRatio={imageAspectRatios.hero}
                  className="overflow-hidden rounded-[2rem]"
                />
                <figcaption className="mt-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-[#86868b]">
                  <span className="font-mono">Final assembly</span>
                  <span className="font-sans text-[11px] font-medium text-[#1d1d1f]">Three-layer sealing hierarchy validated under dynamic load</span>
                </figcaption>
              </figure>

              <div className="flex flex-col border-l border-gray-200">
                {decisionPaths.map((path, index) => (
                  <article
                    key={path.title}
                    className={`reveal pl-8 ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''} ${index === 0 ? 'pt-2' : 'pt-10'}`}
                  >
                    <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868b]">{`0${index + 1}`}</div>
                    <h3 className="mb-4 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">{path.title}</h3>
                    <p className="max-w-3xl font-sans text-base font-light leading-relaxed text-[#86868b]">{path.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">03 &mdash; Process</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processFrames.map((frame, index) => (
              <figure
                key={frame.label}
                className={`reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                  index === 1 ? 'delay-100 md:mt-24' : index === 2 ? 'delay-200' : ''
                }`}
              >
                <AspectImage
                  src={hydrofoilImages.hero}
                  alt={frame.label}
                  aspectRatio={imageAspectRatios.hero}
                  className="overflow-hidden rounded-[2rem]"
                />
                <div className="mt-6 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868b]">{frame.label}</div>
                <figcaption className="font-sans text-base font-light leading-relaxed text-[#86868b]">{frame.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div>
              <div className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">04 &mdash; Final Renders</div>
              <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-7xl">Build documentation.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <figure className="group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-3">
              <AspectImage
                src={hydrofoilImages.hero}
                alt="Hydrofoil hero view"
                aspectRatio={imageAspectRatios.hero}
                className="overflow-hidden rounded-[2rem]"
              />
              <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">
                {finalFrames[0].label}
              </figcaption>
            </figure>

            {finalFrames.slice(1).map((frame, index) => (
              <figure
                key={frame.label}
                className={`group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                  index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
                }`}
              >
                <AspectImage
                  src={hydrofoilImages.hero}
                  alt={frame.label}
                  aspectRatio={imageAspectRatios.hero}
                  className="overflow-hidden rounded-[2rem]"
                />
                <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">
                  {frame.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-16 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">05 &mdash; Stats</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className={`reveal rounded-[2.5rem] border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                  index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''
                }`}
              >
                <div className="mb-6 font-display text-5xl font-semibold tracking-tighter text-[#1d1d1f] md:text-6xl">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868b]">{stat.label}</div>
              </article>
            ))}
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

        <div className="relative z-20 flex h-[100px] items-center justify-between border-t border-gray-200 bg-[#fbfbfd] px-6 text-sm font-sans text-[#86868b] pointer-events-auto md:px-12">
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
