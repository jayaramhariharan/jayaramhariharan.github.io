import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ParallaxImage from '../components/ParallaxImage';
import useScrollReveal from '../hooks/useScrollReveal';

const ParallaxImg = ({ src, alt, className, children, scrollProgress, direction = "vertical", loading = "eager" }: { src: string, alt: string, className?: string, children?: React.ReactNode, scrollProgress?: any, direction?: "vertical" | "horizontal", loading?: "lazy" | "eager" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const progress = scrollProgress || scrollYProgress;
  const y = useTransform(progress, [0, 1], ["-8%", "8%"]);
  const x = useTransform(progress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute object-cover will-change-transform ${direction === 'vertical' ? 'top-[-25%] left-0 w-full h-[150%]' : 'top-0 left-[-25%] w-[150%] h-full'}`}
        style={direction === 'vertical' ? { y } : { x }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        referrerPolicy="no-referrer"
      />
      {children}
    </div>
  );
};

const InteractiveBOM = () => {
  const [activeTab, setActiveTab] = useState<'cots' | 'custom'>('cots');

  const cotsParts = [
    { name: 'SparkFun Qwiic Pro Micro', desc: 'ATmega32U4 Microcontroller', cost: '$6.00' },
    { name: 'Analog Hall-Effect Sensor', desc: 'High-precision magnetic sensing', cost: '$2.50' },
    { name: 'Neodymium Magnets', desc: 'Diametrically magnetized', cost: '$1.00' },
    { name: 'Wiring & Connectors', desc: 'JST headers and silicone wire', cost: '$2.00' },
  ];

  const customParts = [
    { name: 'Twist Mechanism Core', desc: 'FDM 3D Printed (PLA+)', cost: '$1.50' },
    { name: 'VPC Twist Module', desc: 'Harvested from VPC unit', cost: 'Reused' },
    { name: 'Base Extension Collar', desc: 'CNC Machined Aluminum 6061', cost: 'Reused' },
  ];

  const activeParts = activeTab === 'cots' ? cotsParts : customParts;

  return (
    <div className="w-full border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('cots')}
          className={`flex-1 py-4 text-sm font-mono tracking-widest uppercase transition-colors ${activeTab === 'cots' ? 'bg-gray-50 text-[#1d1d1f]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          COTS Parts
        </button>
        <button 
          onClick={() => setActiveTab('custom')}
          className={`flex-1 py-4 text-sm font-mono tracking-widest uppercase transition-colors ${activeTab === 'custom' ? 'bg-gray-50 text-[#1d1d1f]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Custom Parts
        </button>
      </div>
      <div className="p-6 md:p-8 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            {activeParts.map((part, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-100 group">
                <div>
                  <div className="text-[#1d1d1f] font-medium text-lg">{part.name}</div>
                  <div className="text-gray-500 text-sm mt-1">{part.desc}</div>
                </div>
                <div className="font-mono text-token-dark-green">{part.cost}</div>
              </div>
            ))}
            <div className="flex justify-between items-center py-6 mt-4">
              <div className="text-gray-500 font-mono uppercase tracking-widest text-sm">Total Subsystem Cost</div>
              <div className="text-3xl font-display text-[#1d1d1f]">{activeTab === 'cots' ? '$11.50' : '$3.50'}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ViperZCaseStudy: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const nextProjects = [
    { id: 2, title: 'Wolf.', image: '/case-studies/wolf/hero.jpg' },
    { id: 3, title: 'Hydrofoil.', image: '/case-studies/hydrofoil/hero.png' }
  ];
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const currentNextProject = nextProjects[nextProjectIndex];

  const handleNextProjectSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setNextProjectIndex((prev) => (prev + 1) % nextProjects.length);
  };

  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });


  useEffect(() => {
    const updateRange = () => {
      if (stickyRef.current && motionRef.current) {
        const containerWidth = stickyRef.current.clientWidth;
        const contentWidth = motionRef.current.scrollWidth;
        setScrollRange(contentWidth - containerWidth);
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

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  useScrollReveal();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-[#1d1d1f] min-h-screen font-sans selection:bg-token-light-green selection:text-token-dark-green bg-[#fbfbfd]"
    >
      <Navbar />
      <main className="relative z-10 bg-[#fbfbfd]">
        {/* Header / Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[95vh] flex items-center justify-center w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto my-2 md:my-4 bg-gray-100 overflow-hidden"
          style={{ clipPath: "inset(0 round 2.5rem)" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ParallaxImage
              src="/case-studies/viper/home-card-latest.jpg"
              alt="Flightstick"
              className="w-full h-full"
              imgClassName="opacity-70"
              loading="eager"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0"></div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full pointer-events-none">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-20 mt-4 md:mt-6 pointer-events-auto">
            <Link to="/" className="flex items-center gap-4 group text-white">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-2xl bg-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:-translate-x-2 shadow-sm">
                <ArrowLeft size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-semibold group-hover:text-token-light-green transition-colors duration-300">Index</span>
            </Link>
            <div className="text-right text-[10px] uppercase tracking-[0.2em] font-mono text-white/70 leading-relaxed backdrop-blur-2xl bg-black/20 p-4 rounded-2xl border border-white/10 shadow-sm">
              <span className="text-white font-semibold">Case Study 01</span><br />
              Confidential
            </div>
          </nav>

          {/* Main Title */}
          <div className="absolute bottom-16 left-8 md:left-16 z-20 pointer-events-none flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-7xl md:text-9xl lg:text-[11rem] font-semibold leading-[0.85] tracking-tighter text-white mb-6 pointer-events-auto"
            >
              Viper-Z.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xl md:text-3xl text-white/90 font-light max-w-2xl tracking-tight leading-tight pointer-events-auto"
            >
              The Thrustmaster Viper grip. Right shape, right buttons. No twist axis.
            </motion.p>
          </div>
        </div>
      </section>

        {/* Metadata Grid */}
        <section className="px-8 md:px-16 py-24 max-w-site mx-auto reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-gray-200">
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Client</span>
                    <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Private Client</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Year</span>
                    <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">2023</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Role</span>
                    <span className="font-sans text-xl font-medium tracking-tight leading-snug text-[#1d1d1f]">Product Design<br/>Mechatronics</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                        {['CAD', 'C++', 'Arduino', '3D Scanning'].map((tag) => (
                            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[11px] font-medium text-gray-600 tracking-wide shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Section 01 / THE CHALLENGE */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column: Sticky Header */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-8 reveal">01 &mdash; The Challenge</div>
                <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#1d1d1f] reveal">
                  The grip was perfect.<br/>Everything around it wasn't.
                </h2>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-16 pt-4 lg:pt-16">
              <div className="reveal">
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed tracking-tight">
                  The Thrustmaster F-16C Viper is a 1:1 scale metal replica of the actual F-16 grip. Ergonomics, weight, and button layout are right. It has no twist yaw axis because the real F-16 doesn't have one either. Authentic. Also a problem for anything outside pure DCS realism.
                </p>
              </div>

              <div className="reveal delay-100">
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed tracking-tight">
                  Without a twist axis, yaw control meant separate rudder pedals ($150-$300) or remapping a hat switch. Neither is analog and neither is what the client wanted. The full upgrade path to a proper base ran $400-700 and required giving up the grip entirely.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="relative pl-6 md:pl-8 border-l border-gray-300">
                    <h3 className="font-mono text-xs font-medium text-gray-400 mb-4 uppercase tracking-[0.2em]">The Brief</h3>
                    <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                      Add the missing axis. Don't touch anything that already works.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Massive Pull Quote */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-site mx-auto overflow-hidden">
          <div className="reveal max-w-5xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl font-medium text-[#1d1d1f] tracking-tight leading-snug">
              "Keep the grip. Add the axis. Touch nothing else."
            </p>
          </div>
        </section>

        {/* Horizontal Scroll Section - The Process */}
        <section ref={horizontalScrollRef} className="h-[200vh] relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto">
          <div ref={stickyRef} className="sticky top-2 md:top-4 h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] flex flex-col justify-center overflow-hidden text-[#1d1d1f]">
            <div className="w-full px-8 md:px-16 mb-8 md:mb-12">
              <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">
                02 &mdash; The Process
              </div>
            </div>

            <motion.div ref={motionRef} style={{ x }} className="flex gap-24 px-12 md:px-20 py-12 w-max">
              {/* Step 1 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="/pics/cad-screenshot.jpg" alt="CAD screenshot" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]" loading="lazy">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Reverse Engineering.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  3D scanning gave an exact internal volume map - the grip had almost no clearance, so knowing exactly where the button PCB, shaft, and connectors lived was prerequisite to designing anything new. Output: internal volume map, stress point analysis, shaft geometry. Tool chain: 3D scan to SolidWorks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="/pics/prototype-pla-v1.jpg" alt="PLA prototype" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]" loading="lazy">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Mechanical Design.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  Harvested the VPC Constellation Alpha twist module (tested bearing geometry, known torque feel - not reinventing rotation mechanics). Designed a custom base extension collar: CNC aluminum 6061, anodized black body / red trigger / plain interior. V1 printed in PLA via FDM (Cura) to validate fit and rotation before committing to machining.
                </p>
              </div>

              {/* Step 3 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="/pics/electronics.png" alt="Electronics integration" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]" loading="lazy">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Electronics Integration.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  Dual-interface / split-brain: System 1 is the original TM electronics, untouched. System 2 is the new twist subsystem on its own USB path. Hall Effect A1324 + diametric cylinder magnet - contactless, no wear, no drift. SparkFun Qwiic Pro Micro (ATmega32U4, 33 x 18 mm) - chosen because it's small enough to fit AND has native USB HID hardware. Firmware: Arduino C++ / Joystick.h, sensor on A3 to Z-axis.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 02.5 / THE ITERATION */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left - sticky label */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-8 reveal"> -  The Iteration</div>
                <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#1d1d1f] reveal">
                  V1 tried to fit everything inside.<br/>V2 kept everything that worked.
                </h2>
              </div>
            </div>

            {/* Right - V1/V2 narrative + side-by-side images */}
            <div className="lg:col-span-7 flex flex-col gap-16 pt-4 lg:pt-16">
              <div className="reveal">
                <h3 className="font-sans text-2xl font-medium text-[#1d1d1f] mb-6">V1 - The Wrong Approach</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed tracking-tight">
                  First attempt: fit the new electronics inside the existing body. The client called it too big and bulky. Harder to open and service than the original. Button mapping couldn't be replicated. Not a retrofit. Just a bigger grip.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 reveal delay-100">
                <ParallaxImg src="/pics/v1-prototype.jpg" alt="V1 prototype" className="aspect-[4/3] rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.1)]" loading="lazy" />
                <ParallaxImg src="/pics/v2-iterations.jpg" alt="V2 iterations" className="aspect-[4/3] rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.1)]" loading="lazy" />
              </div>

              <div className="reveal delay-200">
                <h3 className="font-sans text-2xl font-medium text-[#1d1d1f] mb-6">V2 - The Correct Architecture</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed tracking-tight">
                  Complete change of approach: keep all Thrustmaster electronics exactly as-is. Add only what's missing - the twist mechanism from a VPC Constellation Alpha, integrated at the lower shaft, with a fully independent electronics path. The grip, buttons, and ergonomics are 100% unchanged. Only the missing axis is new.
                </p>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed tracking-tight mt-6">
                  Tested in PLA first. Iterated on JST connector routing and twist core tolerances. Then machined in aluminum 6061. Ghost tester: a $15 MMJoy2-based base emulator validated firmware and wiring before touching the real $300+ base.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal List for Solutions */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
            <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-20 reveal text-left">03 &mdash; The Solution</div>
            
            <div className="flex flex-col w-full reveal delay-100">
                {/* Item 1 */}
                <div className="group border-t border-gray-200 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-gray-400">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-token-dark-green transition-colors">01</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Split-Brain Architecture.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-600 leading-relaxed text-lg font-light">
                            Two independent USB devices in one grip. The original Thrustmaster PCB and the new twist subsystem never share a signal path. Adding the twist axis cannot break existing button inputs - by design, not by luck.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="group border-t border-gray-200 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-gray-400">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-token-dark-green transition-colors">02</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Hall Effect Sensing.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-600 leading-relaxed text-lg font-light">
                            Potentiometers wear. Their resistive wiper/track contact degrades into output noise, drift, and ghost inputs - a documented failure mode in the HOTAS community. The A1324 Hall Effect sensor has zero physical contact. No wear, no drift, theoretically infinite lifespan. It reads angular position via the magnetic field of a diametrically magnetized cylinder magnet that produces a clean, linear field as the twist axis rotates.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="group border-t border-b border-gray-200 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-gray-400">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-token-dark-green transition-colors">03</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Building a Ghost.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-600 leading-relaxed text-lg font-light">
                            The real Viper base costs $300+. Wiring the electronics wrong and discovering it late would mean replacing expensive hardware. The ghost tester - a second microcontroller running MMJoy2 open-source firmware - emulated the full electrical signature of the real base. Full firmware and wiring validation for $15 before touching anything expensive.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 04 / MOODBOARD */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-6">04 &mdash; Visual Language</div>
              <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f]">Moodboard.</h2>
            </div>
            <div className="flex flex-wrap gap-3 mt-10 md:mt-0">
                {['Military', 'Precision', 'Stealth', 'Ergonomic'].map(tag => (
                    <span key={tag} className="px-5 py-2.5 rounded-full border border-gray-200 text-[11px] uppercase tracking-widest font-mono text-gray-600 bg-gray-50">
                        {tag}
                    </span>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-100">
            <ParallaxImg src="/pics/cmf-swatches.png" alt="CMF swatches" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.1)]" />
            <ParallaxImg src="/pics/wireframe_drawings (1).png" alt="Wireframe drawings" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.1)] md:mt-24" />
            <ParallaxImg src="/pics/clay_model.png" alt="Clay model" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.1)]" />
          </div>
        </section>

        {/* Section 05 / FINAL EXECUTION */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-20 reveal">05 &mdash; Final Execution</div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ParallaxImg src="/pics/final-front.jpg" alt="Final front view" className="md:col-span-8 h-[80vh] group rounded-[2.5rem] reveal shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-gray-200 shadow-sm pointer-events-none">01: Final front view</div>
            </ParallaxImg>
            <div className="md:col-span-4 flex flex-col gap-6">
              <ParallaxImg src="/pics/final-quarter.jpg" alt="3/4 view" className="h-[calc(40vh-0.75rem)] group rounded-[2.5rem] reveal delay-100 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-gray-200 shadow-sm pointer-events-none">02: 3/4 view</div>
              </ParallaxImg>
              <ParallaxImg src="/pics/final-annotated.jpg" alt="Internal component layout" className="h-[calc(40vh-0.75rem)] group rounded-[2.5rem] reveal delay-200 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-gray-200 shadow-sm pointer-events-none">03: Internals</div>
              </ParallaxImg>
            </div>
          </div>
        </section>

        {/* Section 06 / THE IMPACT */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-20 reveal">06 - The Impact</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200 reveal delay-100">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 py-16 pr-0 md:pr-12">
              <span className="font-display text-6xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tighter block mb-4">$15</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 block mb-6">Electronics Cost</span>
              <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">Full twist-axis subsystem from COTS parts. The alternative upgrade path runs $300-700+.</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-gray-200 py-16 px-0 md:px-12">
              <span className="font-display text-6xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tighter block mb-4">100%</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 block mb-6">Controls Preserved</span>
              <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">Original Thrustmaster ergonomics, button layout, and PCB untouched. Zero compromise.</p>
            </div>
            <div className="py-16 pl-0 md:pl-12">
              <span className="font-display text-6xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tighter block mb-4">0</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 block mb-6">Post-Delivery Issues</span>
              <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">Shipped after full ghost-tester validation. Zero maintenance callbacks after handoff.</p>
            </div>
          </div>
        </section>

        {/* Section 07 / INTERACTIVE BOM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
          <div className="w-full max-w-7xl mx-auto border-t border-gray-200 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-32 reveal">
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-[#1d1d1f] mb-4">Bill of Materials</h2>
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                COTS electronics and 3D printed mechanics kept the subsystem cost under $15 for the prototype. The alternative upgrade path runs $300-700+.
              </p>
            </div>
            
            <div className="md:col-span-8 lg:col-span-8">
              <InteractiveBOM />
            </div>
          </div>
        </section>

      </main>

      {/* Spacer for sticky footer */}
      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]"></div>

      {/* Footer / Next Case Portal */}
      <section className="sticky bottom-0 left-0 w-full bg-[#fbfbfd] z-0 flex flex-col">
        <div className="relative w-full h-[80vh] overflow-hidden group">
          {/* Background Image */}
          <ParallaxImage
            key={currentNextProject.id}
            src={currentNextProject.image} 
            alt="Next Project" 
            className="absolute inset-0"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/10 pointer-events-none"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-8 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-sans uppercase tracking-[0.2em] text-white mb-6 font-semibold drop-shadow-md"
            >
              Next Project
            </motion.div>
            <motion.h2 
              key={`title-${currentNextProject.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter text-white mb-8 flex items-center justify-center drop-shadow-lg"
            >
              <div className="relative flex items-center transition-transform duration-500 group-hover:-translate-x-4 md:group-hover:-translate-x-6">
                <span>{currentNextProject.title}</span>
                <ArrowRight className="absolute left-full ml-4 md:ml-6 w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" strokeWidth={1.5} />
              </div>
            </motion.h2>
          </div>
          
          {/* Right Arrow for Switching */}
          <button 
            onClick={handleNextProjectSwitch}
            aria-label="Switch next project"
            data-cursor="nav"
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md bg-white/30 hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 group/switchbtn shadow-lg"
          >
            <ArrowRight size={24} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover/switchbtn:translate-x-1" />
          </button>
          
          {/* Make the whole background clickable except where buttons are */}
          <Link to={`/case-study/${currentNextProject.id}`} className="absolute inset-0 z-0"></Link>
        </div>

        {/* Mini Footer */}
        <div className="relative z-20 px-6 md:px-12 h-[100px] flex justify-between items-center text-sm font-sans text-gray-500 pointer-events-auto bg-[#fbfbfd] border-t border-gray-200">
          <Link to="/" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Index</Link>
          <div className="flex gap-2 md:gap-4">
            <a href="https://www.linkedin.com/in/jayaramh" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">LinkedIn</a>
            <a href="https://www.dropbox.com/scl/fi/23hl8s4mtt27p26u92ahh/jayaram_hariharan-resume.pdf?rlkey=krxna677qsjagszmjh7nc4owp&st=l2zyh8v0&dl=0" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Resume</a>
            <a href="mailto:jayaram.h1501@gmail.com" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Email</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ViperZCaseStudy;
