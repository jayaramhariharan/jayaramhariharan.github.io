import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParallaxImage from '../components/ParallaxImage';
import { getFooterProjects } from '../lib/projectSummaries';
import useScrollReveal from '../hooks/useScrollReveal';

import boatHero from '../assets1/boat/hero1.png';
import boatBottom from '../assets1/boat/bottom.png';
import boatFront from '../assets1/boat/front.png';
import boatShape from '../assets1/boat/shape.png';
import boatDraft from '../assets1/boat/draft.png';
import boatExplorations from '../assets1/boat/explorations.png';

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
    body: 'PLA floods in under 60 seconds. PETG buys time for the sealing stack to work.',
  },
  {
    title: 'Grease the shaft path.',
    body: 'Marine grease fills the annular gap first. Water has to displace the entire column before reaching the seal.',
  },
  {
    title: 'Seal the shell.',
    body: 'Post-print epoxy closes layer-line porosity. Raw FDM walls leak even when geometry looks sound.',
  },
];



const SealedRCBoatCaseStudy: React.FC = () => {
  const nextProjects = getFooterProjects(3);
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
        {/* ── Hero ── */}
        <section
          className="relative my-2 mx-auto flex h-[95vh] w-[calc(100%-1rem)] items-center justify-center overflow-hidden bg-gray-100 md:my-4 md:w-[calc(100%-2rem)]"
          style={{ clipPath: 'inset(0 round 2.5rem)' }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ParallaxImage
              src={boatHero}
              alt="Sealed RC Boat hero"
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
                Personal Build
              </div>
            </nav>

            <div className="absolute bottom-16 left-8 z-20 flex flex-col pointer-events-none md:left-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 font-display text-7xl font-semibold leading-[0.85] tracking-tighter text-white pointer-events-auto md:text-9xl lg:text-[11rem]"
              >
                Sealed.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl font-sans text-xl font-light leading-tight tracking-tight text-white/90 pointer-events-auto md:text-3xl"
              >
                Printed hull. Rotating shaft. Zero ingress.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Meta bar ── */}
        <section className="reveal mx-auto max-w-site px-8 py-24 md:px-16">
          <div className="grid grid-cols-2 gap-12 border-y border-gray-200/60 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Type</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Personal Build</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Focus</span>
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
                {['CAD', 'FDM-PETG', 'Epoxy Seal', 'Marine Grease'].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#86868b] shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ── 01: Challenge (short) ── */}
        <section className="mx-auto max-w-site px-8 py-24 md:px-16 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-5">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">
                  01 &mdash; The Problem
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Two leak paths.
                  <br />
                  One hull.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-12 pt-4 lg:col-span-7 lg:pt-16">
              <div className="reveal">
                <p className="font-sans text-xl font-light leading-relaxed tracking-tight text-[#86868b] md:text-2xl">
                  The shaft spins through the hull. The hull is printed. Both are leak paths.
                </p>
              </div>

              <div className="reveal delay-100 mt-4">
                <div className="border-l border-gray-300 pl-6 md:pl-8">
                  <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#86868b]">Objective</h3>
                  <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                    Build a sealing stack for both paths. Prove it at full throttle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Early Form Studies ── */}
        <section className="mx-auto max-w-site px-8 py-12 md:px-16">
          <div className="reveal mb-10 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">Early Form Studies</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <AspectImage
                src={boatDraft}
                alt="Draft 1"
                aspectRatio="16 / 9"
                className="overflow-hidden rounded-[2rem]"
              />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868b]">Draft 1</figcaption>
            </figure>
            <figure className="reveal delay-100 overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <AspectImage
                src={boatShape}
                alt="Draft 2"
                aspectRatio="16 / 9"
                className="overflow-hidden rounded-[2rem]"
              />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#86868b]">Draft 2</figcaption>
            </figure>
          </div>
        </section>

        {/* ── Pull quote ── */}
        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              "The material is not the waterproofing. It buys time for the sealing architecture to work."
            </p>
          </div>
        </section>

        {/* ── 02: Decision Path ── */}
        <section className="mx-auto max-w-site px-8 py-24 md:px-16 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-4">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">
                  02 &mdash; Decision Path
                </div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  Three layers.
                  <br />
                  Not one seal.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <figure className="reveal overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8">
                <AspectImage
                  src={boatFront}
                  alt="Front view"
                  aspectRatio="16 / 9"
                  className="overflow-hidden rounded-[2rem]"
                />
                <figcaption className="mt-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-[#86868b]">
                  <span className="font-mono">Front view</span>
                  <span className="font-sans text-[11px] font-medium text-[#1d1d1f]">Sealed hull assembly</span>
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

        {/* ── 03: Build Gallery ── */}
        <section className="mx-auto max-w-site px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mb-20 flex flex-col items-start justify-between md:flex-row md:items-end">
            <div>
              <div className="mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#86868b]">03 &mdash; Build</div>
              <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-7xl">Documentation.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure className="group reveal rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <AspectImage
                src={boatBottom}
                alt="Hull underside"
                aspectRatio="16 / 9"
                className="overflow-hidden rounded-[2rem]"
              />
              <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">
                Hull underside
              </figcaption>
            </figure>
            <figure className="group reveal delay-100 rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <AspectImage
                src={boatExplorations}
                alt="Form explorations"
                aspectRatio="16 / 9"
                className="overflow-hidden rounded-[2rem]"
              />
              <figcaption className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1d1d1f] shadow-sm">
                Form explorations
              </figcaption>
            </figure>
          </div>
        </section>


      </main>

      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]" />

      <section className="sticky bottom-0 left-0 z-0 flex w-full flex-col bg-[#fbfbfd]">
        <div className="group relative h-[80vh] w-full overflow-hidden">
          <img
            key={currentNextProject.id}
            src={currentNextProject.image}
            alt="Next Project"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
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
              className="mb-8 flex items-center justify-center font-display text-4xl font-semibold tracking-tighter text-white drop-shadow-lg md:text-5xl lg:text-6xl"
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
            <a href="https://www.dropbox.com/scl/fi/r8oparg6h84q7x3yytzsh/jayaram_hariharan-resume.pdf?rlkey=3c3uxr5smrp50httf6x7gc9f1&st=zx8a5fm7&dl=0" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]">
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

export default SealedRCBoatCaseStudy;
