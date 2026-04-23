import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParallaxImage from '../components/ParallaxImage';
import useScrollReveal from '../hooks/useScrollReveal';

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
  <ParallaxImage
    src={src}
    alt={alt}
    className={className}
    imgClassName={imgClassName}
    fit="cover"
    style={{ aspectRatio }}
  />
);

const decisionPaths = [
  {
    title: 'PETG, not PLA.',
    body: 'PETG stayed as the base material because it is a safer wet-service substrate than PLA. It was not treated as a waterproof answer by itself. The material only worked as the base for the rest of the sealing stack.',
  },
  {
    title: 'Grease the shaft path.',
    body: 'RC boat builders often use shaft grease as both lubrication and a water barrier in the drive line. The shaft path uses grease in the stern tube and a seal at the penetration so the seal is supported by a longer barrier path.',
  },
  {
    title: 'Seal the shell.',
    body: 'Printed walls can seep through seams, layer gaps, and surface porosity. The shell needed a post-print epoxy sealing step because raw FDM walls can still leak even when the geometry looks sound.',
  },
];

const processFrames = [
  {
    label: '01: ingress map',
    caption: 'RC boat leaks rarely come from one place. Stuffing tubes, rudder tubes, hatch seals, and transom hardware all show up in community reports. This build only had to solve the shaft path and the printed walls.',
  },
  {
    label: '02: first failure',
    caption: 'The risky baseline is a single shaft seal and an untreated printed hull. That layout leaves both likely leak paths exposed: water can work around the rotating shaft and through the printed shell.',
  },
  {
    label: '03: structure vs sealing',
    caption: 'Parts around the shaft load path and motor mount were printed denser than non-structural covers, but density supported the hardware. It was not treated as the sealing strategy.',
  },
];

const finalFrames = [
  { label: '01: hero view', className: 'md:col-span-3' },
  { label: '02: foil geometry', className: '' },
  { label: '03: stern detail', className: '' },
  { label: '04: full assembly', className: '' },
];

const stats = [
  { value: '2', label: 'Leak Paths' },
  { value: '$207', label: 'Total BOM' },
  { value: '27', label: 'Total Parts' },
  { value: '2', label: 'Foil Servos' },
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

  useScrollReveal();

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
            <ParallaxImage
              src={hydrofoilImages.hero}
              alt="Hydrofoil boat hero render"
              className="h-full w-full"
              imgClassName="object-center opacity-90"
              loading="eager"
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
                A 3D-printed RC boat concept that treats the shaft path and the hull walls as two different leak paths, then builds a sealing stack for both.
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
                  Leaks never come
                  <br />
                  from one place.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-16 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <p className="font-sans text-xl font-light leading-relaxed tracking-tight text-[#86868b] md:text-2xl">
                  The propeller shaft had to spin through the hull. The hull could not let water in. On RC boats that problem usually spreads across stuffing tubes, rudder tubes, hatch seals, and transom hardware.
                </p>
              </div>

              <div className="reveal delay-100">
                <p className="font-sans text-xl font-light leading-relaxed tracking-tight text-[#86868b] md:text-2xl">
                  A printed hull adds one more path. It can seep through seams, layer gaps, and surface porosity. This build focuses on two likely risks: water working around the shaft path, and water moving through the printed body.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#86868b]">The Objective</h3>
                  <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                    Split the problem into the two leak paths this build is designed around, then build a layered sealing stack for both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              "The common pattern is not one bad part. It is a stack of small ingress points."
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
                  Build the stack.
                  <br />
                  Not the myth.
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
                  <span className="font-sans text-[11px] font-medium text-[#1d1d1f]">Layered sealing stack for the shaft path and the printed shell</span>
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

        <div className="relative z-20 flex h-[100px] items-center justify-between border-t border-gray-200 bg-[#fbfbfd] px-6 text-sm font-sans text-[#86868b] pointer-events-auto md:px-12">
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

export default HydrofoilBoatCaseStudy;
