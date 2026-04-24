import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParallaxImage from '../components/ParallaxImage';
import { getFooterProjects } from '../lib/projectSummaries';
import useScrollReveal from '../hooks/useScrollReveal';
import CopyEmailButton from '../components/CopyEmailButton';
import flightstickCloseup from '../assets1/flightstick/closeup.png';
import flightstickWireframe from '../assets1/flightstick/wireframe.png';
import flightstickExploded from '../assets1/flightstick/exploded.png';
import flightstickElectronics from '../assets1/flightstick/electronics.png';
import flightstickUsb1 from '../assets1/flightstick/USB (1).png';
import flightstickUsb2 from '../assets1/flightstick/USB (2).png';
import flightstickFull from '../assets1/flightstick/full.png';
import flightstickLastSection1 from '../assets1/flightstick/last_section (1).png';
import flightstickLastSection2 from '../assets1/flightstick/last_section (2).png';

const ParallaxImg = ({
  src,
  alt,
  className,
  children,
  scrollProgress,
  direction = 'vertical',
  loading = 'eager',
  fit = 'cover',
  imgClassName,
  intensity = 8,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  scrollProgress?: any;
  direction?: 'vertical' | 'horizontal';
  loading?: 'lazy' | 'eager';
  fit?: 'cover' | 'contain';
  imgClassName?: string;
  intensity?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const progress = scrollProgress || scrollYProgress;
  const travel = `${intensity}%`;
  const y = useTransform(progress, [0, 1], [`-${travel}`, travel]);
  const x = useTransform(progress, [0, 1], [`-${travel}`, travel]);
  const isContain = fit === 'contain';
  const sizing =
    direction === 'vertical'
      ? isContain
        ? 'inset-0 h-full w-full'
        : 'top-[-25%] left-0 h-[150%] w-full'
      : isContain
        ? 'inset-0 h-full w-full'
        : 'top-0 left-[-25%] h-full w-[150%]';

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute ${isContain ? 'object-contain' : 'object-cover'} ${sizing} ${imgClassName ?? ''}`.trim()}
        style={direction === 'vertical' ? { y } : { x }}
        whileHover={{ scale: isContain ? 1.015 : 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        referrerPolicy="no-referrer"
      />
      {children}
    </div>
  );
};

const ViperZCaseStudy: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const nextProjects = getFooterProjects(1);
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const currentNextProject = nextProjects[nextProjectIndex];

  const handleNextProjectSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setNextProjectIndex((prev) => (prev + 1) % nextProjects.length);
  };

  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateRange = () => {
      if (stickyRef.current && motionRef.current) {
        const containerWidth = stickyRef.current.clientWidth;
        const contentWidth = motionRef.current.scrollWidth;
        setScrollRange(Math.max(contentWidth - containerWidth, 0));
      }
    };

    updateRange();
    const timeoutId = setTimeout(updateRange, 100);
    window.addEventListener('resize', updateRange);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateRange);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ['0px', `-${scrollRange}px`]);

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
        <section className="relative isolate my-2 mx-auto flex h-[95vh] w-[calc(100%-1rem)] items-center justify-center overflow-hidden rounded-[2.5rem] bg-gray-100 md:my-4 md:w-[calc(100%-2rem)]">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ParallaxImage
              src={flightstickCloseup}
              alt="Flightstick twist-axis retrofit closeup"
              className="h-full w-full"
              imgClassName="opacity-75"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>

          <div className="relative z-10 h-full w-full pointer-events-none">
            <nav className="absolute top-0 left-0 z-20 mt-4 flex w-full items-start justify-between p-6 pointer-events-auto md:mt-6 md:p-8">
              <Link to="/" className="group flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-2xl transition-all duration-300 group-hover:-translate-x-2 group-hover:bg-white group-hover:text-black">
                  <ArrowLeft size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-token-light-green">
                  Index
                </span>
              </Link>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 shadow-sm backdrop-blur-2xl">
                <span className="font-semibold text-white">Case Study 01</span>
                <br />
                Confidential
              </div>
            </nav>

            <div className="pointer-events-none absolute bottom-16 left-8 z-20 flex max-w-4xl flex-col md:left-16">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 font-display text-5xl font-semibold leading-[0.94] tracking-tighter text-white pointer-events-auto md:text-7xl lg:text-[7.25rem]"
              >
                Flightstick Twist Axis
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl font-sans text-lg font-light leading-snug tracking-tight text-white/90 pointer-events-auto md:text-2xl"
              >
                Added yaw to a premium flight grip without pushing the client toward pedals or a full hardware swap.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="reveal mx-auto max-w-site px-8 py-24 md:px-16">
          <div className="grid grid-cols-2 gap-12 border-y border-gray-200 py-16 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Client</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Private Client</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Year</span>
              <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">2023</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Role</span>
              <span className="font-sans text-xl font-medium leading-snug tracking-tight text-[#1d1d1f]">
                Product Design
                <br />
                Mechatronics
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {['CAD', '3D Scanning', 'Electromechanical Integration', 'CNC Machining'].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] font-medium tracking-wide text-gray-600 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-5">
              <div className="sticky top-32">
                <div className="reveal mb-8 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">01 &mdash; The Challenge</div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
                  The grip was worth keeping.
                  <br />
                  The missing yaw wasn&apos;t.
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-12 pt-4 lg:col-span-7 lg:pt-16">
              <p className="reveal font-sans text-xl font-light leading-relaxed tracking-tight text-gray-600 md:text-2xl">
                The client already had the grip they wanted. What it lacked was analog yaw.
              </p>
              <p className="reveal delay-100 font-sans text-xl font-light leading-relaxed tracking-tight text-gray-600 md:text-2xl">
                That usually means pedals, remaps, or replacing more hardware than the problem justifies.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site overflow-hidden px-8 py-24 md:px-16 md:py-32">
          <div className="reveal mx-auto max-w-5xl text-center">
            <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-400">The Brief</div>
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-[#1d1d1f] md:text-4xl">
              <span className="block">keep the grip</span>
              <span className="mt-2 block">add yaw without pedals or full replacement</span>
            </p>
          </div>
        </section>

        <section ref={horizontalScrollRef} className="relative mx-auto h-[240vh] w-[calc(100%-1rem)] md:w-[calc(100%-2rem)]">
          <div ref={stickyRef} className="sticky top-2 flex h-[calc(100vh-1rem)] flex-col justify-center overflow-hidden text-[#1d1d1f] md:top-4 md:h-[calc(100vh-2rem)]">
            <div className="mb-8 w-full px-8 md:mb-12 md:px-16">
              <div className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">02 &mdash; The Process</div>
            </div>

            <motion.div ref={motionRef} style={{ x }} className="flex w-max gap-12 px-8 py-10 md:gap-16 md:px-16 md:py-12">
              <div className="flex w-[86vw] max-w-[27rem] flex-shrink-0 flex-col justify-center md:w-[36rem] md:max-w-none">
                <ParallaxImg
                  scrollProgress={scrollYProgress}
                  direction="horizontal"
                  src={flightstickWireframe}
                  alt="Wireframe view of the grip"
                  className="mb-6 aspect-[5/4] w-full rounded-[1.75rem] border border-gray-200 bg-[#f5f5f7] shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
                  loading="lazy"
                  fit="cover"
                  intensity={0}
                  imgClassName="object-center"
                />
                <h3 className="mb-3 font-display text-[1.5rem] font-semibold tracking-tight text-[#1d1d1f] md:text-[1.9rem]">Reverse Engineering.</h3>
                <p className="max-w-[20rem] font-sans text-[13px] font-light leading-relaxed tracking-tight text-gray-600 md:text-[15px]">
                  Scanned the grip first. Needed the fit map before changing anything.
                </p>
              </div>

              <div className="flex w-[86vw] max-w-[27rem] flex-shrink-0 flex-col justify-center md:w-[36rem] md:max-w-none">
                <ParallaxImg
                  scrollProgress={scrollYProgress}
                  direction="horizontal"
                  src={flightstickUsb1}
                  alt="Independent USB path detail"
                  className="mb-6 aspect-[5/4] w-full rounded-[1.75rem] border border-gray-200 bg-[#f5f5f7] shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
                  loading="lazy"
                  fit="cover"
                  intensity={0}
                  imgClassName="object-center"
                />
                <h3 className="mb-3 font-display text-[1.5rem] font-semibold tracking-tight text-[#1d1d1f] md:text-[1.9rem]">Mechanical Layout.</h3>
                <p className="max-w-[20rem] font-sans text-[13px] font-light leading-relaxed tracking-tight text-gray-600 md:text-[15px]">
                  Routed the added path through the base and kept the lower-shaft package compact.
                </p>
              </div>

              <div className="flex w-[86vw] max-w-[27rem] flex-shrink-0 flex-col justify-center md:w-[36rem] md:max-w-none">
                <ParallaxImg
                  scrollProgress={scrollYProgress}
                  direction="horizontal"
                  src={flightstickElectronics}
                  alt="System integration layout"
                  className="mb-6 aspect-[5/4] w-full rounded-[1.75rem] border border-gray-200 bg-[#f5f5f7] shadow-[0_18px_36px_rgba(0,0,0,0.06)]"
                  loading="lazy"
                  fit="cover"
                  intensity={0}
                  imgClassName="object-center"
                />
                <h3 className="mb-3 font-display text-[1.5rem] font-semibold tracking-tight text-[#1d1d1f] md:text-[1.9rem]">System Integration.</h3>
                <p className="max-w-[20rem] font-sans text-[13px] font-light leading-relaxed tracking-tight text-gray-600 md:text-[15px]">
                  Kept the added axis on its own USB path. Easier to package and test.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="relative lg:col-span-5">
              <div className="sticky top-32">
                <div className="reveal mb-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">03 &mdash; Iteration</div>
                <h2 className="reveal font-display text-4xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">What changed.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-4 lg:col-span-7 lg:grid-cols-2 lg:pt-16">
              <article className="reveal rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">V1</div>
                <h3 className="mb-5 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">Too much inside the body.</h3>
                <ul className="list-disc space-y-3 pl-5 font-sans text-base font-light leading-relaxed text-gray-600">
                  <li>Packed too much inside the grip body.</li>
                  <li>Ended up bulkier and harder to service.</li>
                </ul>
              </article>

              <article className="reveal delay-100 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">V2</div>
                <h3 className="mb-5 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">Base-first retrofit.</h3>
                <ul className="list-disc space-y-3 pl-5 font-sans text-base font-light leading-relaxed text-gray-600">
                  <li>Moved the new work to the base interface.</li>
                  <li>Cut the job down to rotation, sensing, and routing.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-10 text-left font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">04 &mdash; Materials</div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <article className="reveal rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 md:p-7">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Original Grip</div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">Zinc alloy.</h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-gray-600 md:text-base">
                Original Thrustmaster grip body in zinc alloy.
              </p>
            </article>

            <article className="reveal delay-100 rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 md:p-7">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Prototype</div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">PLA.</h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-gray-600 md:text-base">
                Cheap to print, fast to reprint when clearances were off.
              </p>
            </article>

            <article className="reveal delay-200 rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 md:p-7">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Final Build</div>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-[#1d1d1f]">6061-T6.</h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-gray-600 md:text-base">
                Aluminium 6061-T6, anodized black. Easy to machine, right weight for the job. The finish matches the original and hides the joint.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 pb-32 md:px-16 md:pb-40">
          <figure className="reveal mx-auto w-full max-w-[52rem] overflow-hidden rounded-[2.5rem] border border-gray-200/40 bg-[#f5f5f7] p-3 shadow-[0_14px_32px_rgba(0,0,0,0.05)] md:p-4">
            <ParallaxImg
              src={flightstickUsb2}
              alt="Connector routing detail"
              className="aspect-[3/2] rounded-[2rem] bg-[#f5f5f7]"
              fit="contain"
              intensity={0}
              imgClassName="object-center p-2 md:p-3"
            />
          </figure>
          <div className="reveal mx-auto mt-6 max-w-[52rem] md:mt-8">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm md:p-6">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400">Material + CMF</div>
              <p className="mt-3 max-w-2xl font-sans text-sm font-light leading-relaxed tracking-tight text-gray-600 md:text-base">
                Machined in 6061-T6 aluminum and finished in black anodize so the retrofit keeps the same visual weight, sheen, and seam language as the original grip.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-20 text-left font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">05 &mdash; The Solution</div>

          <div className="reveal delay-100 flex w-full flex-col">
            <div className="group flex flex-col gap-8 border-t border-gray-200 py-12 transition-colors hover:border-gray-400 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-token-dark-green">01</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Add Only the Missing Axis.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg font-light leading-relaxed text-gray-600">
                  The retrofit added yaw at the lower shaft instead of replacing the grip.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-gray-200 py-12 transition-colors hover:border-gray-400 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-token-dark-green">02</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Contactless Yaw Sensing.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg font-light leading-relaxed text-gray-600">
                  A Hall sensor reads the twist without the wear that shows up in cheaper yaw controls.
                </p>
              </div>
            </div>

            <div className="group flex flex-col gap-8 border-t border-b border-gray-200 py-12 transition-colors hover:border-gray-400 md:flex-row md:items-start md:gap-16">
              <div className="font-mono text-sm text-gray-400 transition-colors group-hover:text-token-dark-green">03</div>
              <div className="flex-1 md:max-w-md">
                <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Validate Before Risk.</h3>
              </div>
              <div className="flex-1">
                <p className="font-sans text-lg font-light leading-relaxed text-gray-600">
                  The emulator closed the biggest risk early and kept the expensive hardware out of the first test loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-16 max-w-3xl">
            <div className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">06 &mdash; Final Assembly</div>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-6xl">Final assembly.</h2>
            <p className="font-sans text-lg font-light leading-relaxed tracking-tight text-gray-600 md:text-xl">
              The shipped version stayed compact at the base and readable as a finished product.
            </p>
          </div>

          <div className="mx-auto grid max-w-[68rem] grid-cols-1 items-stretch justify-items-center gap-8 md:grid-cols-2 md:gap-10">
            <figure className="group reveal flex h-full w-full max-w-[31rem] flex-col rounded-[2.25rem] border border-gray-200/70 bg-white p-5 shadow-[0_16px_36px_rgb(0,0,0,0.06)] md:p-6">
              <div className="flex h-[29rem] items-center justify-center rounded-[1.75rem] bg-[#f5f5f7] md:h-[36rem]">
                <ParallaxImg
                  src={flightstickFull}
                  alt="Final assembly view"
                  className="h-full aspect-[1/2] rounded-[1.5rem] bg-[#f5f5f7]"
                  fit="contain"
                  intensity={0}
                  imgClassName="p-4 md:p-5"
                />
              </div>
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">01: Final assembly</figcaption>
            </figure>

            <figure className="group reveal delay-100 flex h-full w-full max-w-[31rem] flex-col rounded-[2.25rem] border border-gray-200/70 bg-white p-5 shadow-[0_16px_36px_rgb(0,0,0,0.06)] md:p-6">
              <div className="flex h-[29rem] items-center justify-center rounded-[1.75rem] bg-[#f5f5f7] md:h-[36rem]">
                <ParallaxImg
                  src={flightstickExploded}
                  alt="Exploded mechanical layout of the retrofit"
                  className="h-full aspect-[3/4] rounded-[1.5rem] bg-[#f5f5f7]"
                  fit="contain"
                  intensity={0}
                  imgClassName="p-4 md:p-5"
                />
              </div>
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">02: Exploded layout</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-site border-t border-gray-200 px-8 py-32 md:px-16 md:py-40">
          <div className="reveal mb-12 max-w-3xl">
            <div className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">07 &mdash; Improved Design</div>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f] md:text-6xl">Cleaner next version.</h2>
          </div>

          <div className="mx-auto grid max-w-[68rem] grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10">
            <figure className="group reveal w-full max-w-[31rem] rounded-[2.25rem] border border-gray-200/70 bg-white p-5 shadow-[0_16px_36px_rgb(0,0,0,0.06)] md:p-6">
              <ParallaxImg
                src={flightstickLastSection1}
                alt="Improved design view one"
                className="aspect-[4/5] rounded-[1.75rem] bg-[#f5f5f7]"
                fit="contain"
                intensity={0}
                imgClassName="p-5 md:p-7"
              />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">Improved design / view 01</figcaption>
            </figure>

            <figure className="group reveal delay-100 w-full max-w-[31rem] rounded-[2.25rem] border border-gray-200/70 bg-white p-5 shadow-[0_16px_36px_rgb(0,0,0,0.06)] md:p-6">
              <ParallaxImg
                src={flightstickLastSection2}
                alt="Improved design view two"
                className="aspect-[4/5] rounded-[1.75rem] bg-[#f5f5f7]"
                fit="contain"
                intensity={0}
                imgClassName="p-5 md:p-7"
              />
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">Improved design / view 02</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-site px-8 py-24 md:px-16 md:py-28">
          <div className="reveal mb-14 font-mono text-sm font-medium uppercase tracking-[0.2em] text-gray-400">08 &mdash; The Impact</div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr] md:gap-6">
            <article className="reveal rounded-[2rem] border border-[#dbe7d6] bg-[#edf5ea] p-8 text-[#1d1d1f] shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:p-10">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">Validation</div>
              <div className="mt-4 font-display text-6xl font-semibold tracking-tighter text-token-dark-green md:text-7xl">$15</div>
              <p className="mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-gray-700 md:text-lg">
                Emulator validated the full electrical interface before touching $300+ production hardware.
              </p>
            </article>

            <article className="reveal delay-100 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_10px_24px_rgba(0,0,0,0.05)] md:p-10">
              <div className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Outcome</div>
              <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-4xl">
                Added yaw without the bigger upgrade path.
              </h3>
              <ul className="mt-6 space-y-3 font-sans text-sm font-light leading-relaxed text-gray-600 md:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-token-dark-green" />
                  <span>Kept the grip instead of forcing a full hardware swap.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-token-dark-green" />
                  <span>Moved yaw into the grip, so pedals were no longer required.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]" />

      <section className="sticky bottom-0 left-0 z-0 flex w-full flex-col bg-[#fbfbfd]">
        <div className="group relative h-[80vh] w-full overflow-hidden">
          <img
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

        <div className="pointer-events-auto relative z-20 flex h-[100px] items-center justify-between border-t border-gray-200 bg-[#fbfbfd] px-6 text-sm font-sans text-gray-500 md:px-12">
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
            <CopyEmailButton className="rounded-full px-5 py-2.5 font-medium transition-colors hover:text-[#1d1d1f]" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ViperZCaseStudy;
