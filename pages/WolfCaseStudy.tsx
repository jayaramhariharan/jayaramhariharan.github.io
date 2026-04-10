import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

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

const WolfCaseStudy: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const nextProjects = [
    { id: 1, title: 'Viper-Z.', image: 'https://picsum.photos/seed/flightstick1/1920/1080' },
    { id: 3, title: 'Fintech.', image: 'https://picsum.photos/seed/fintech/1920/1080' }
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

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = windowHeight * 0.15;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-token-dark-green min-h-screen font-sans selection:bg-token-light-green selection:text-token-dark-green bg-[#fbfbfd]"
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
            <img
              src="https://picsum.photos/seed/wolf-hero/1920/1080"
              alt="Wolf Robot"
              className="w-full h-full object-cover opacity-70"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0"></div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full pointer-events-none">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-20 mt-4 md:mt-6 pointer-events-auto">
            <Link to="/" className="flex items-center gap-4 group text-white">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-2xl bg-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:-translate-x-2">
                <ArrowLeft size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-semibold group-hover:text-token-light-green transition-colors duration-300">Index</span>
            </Link>
            <div className="text-right text-[10px] uppercase tracking-[0.2em] font-mono text-white/70 leading-relaxed backdrop-blur-2xl bg-black/20 p-4 rounded-2xl border border-white/10">
              <span className="text-white font-semibold">Case Study 02</span><br />
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
              Wolf.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xl md:text-3xl text-white/90 font-light max-w-2xl tracking-tight leading-tight pointer-events-auto"
            >
              A combat robot cut from a single aluminium sheet.
            </motion.p>
          </div>
        </div>
      </section>

        {/* Metadata Grid */}
        <section className="px-8 md:px-16 py-24 max-w-site mx-auto reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-gray-200/60">
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Organizer</span>
                    <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Propeller Tech</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Format</span>
                    <span className="font-sans text-xl font-medium tracking-tight text-[#1d1d1f]">Combat Robotics</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Role</span>
                    <span className="font-sans text-xl font-medium tracking-tight leading-snug text-[#1d1d1f]">Design Lead<br/>Fabrication</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                        {['CAD', 'Sheet Metal', 'ESP32', '3D Printing', 'Brushless'].map((tag) => (
                            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-600 tracking-wide shadow-sm">
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
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-8 reveal">01 &mdash; The Challenge</div>
                <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight text-[#1d1d1f] reveal">
                  Single-pass<br/>fabrication.
                </h2>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-16 pt-4 lg:pt-16">
              <div className="reveal">
                <h3 className="font-sans text-2xl font-medium text-[#1d1d1f] mb-6">The Tournament</h3>
                <p className="font-sans text-xl md:text-2xl text-[#86868b] font-light leading-relaxed tracking-tight">
                  Propeller Technologies ran a combat robotics tournament. Roughly ten teams, multi-day format. Free-for-all royal rumble to open, then one-on-one elimination bouts through to the championship. One rule: <span className="text-[#1d1d1f] font-medium">last bot in the ring wins</span>.
                </p>
              </div>

              <div className="reveal delay-100">
                <h3 className="font-sans text-2xl font-medium text-[#1d1d1f] mb-6">The Constraint</h3>
                <p className="font-sans text-xl md:text-2xl text-[#86868b] font-light leading-relaxed tracking-tight">
                  No kits. No templates. I was design lead on a three-person team. We needed three brushless motors, an ESP32, a 3S LiPo, and three ESCs all packaged into a compact chassis folded from Aluminum 5052. Everything had to resolve from one flat pattern.
                </p>
              </div>

              <div className="reveal delay-200 mt-8">
                <div className="relative pl-6 md:pl-8 border-l border-gray-300">
                    <h3 className="font-mono text-xs font-medium text-gray-400 mb-4 uppercase tracking-[0.2em]">The Objective</h3>
                    <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
                      Package a spinning drum weapon, dual brushless drivetrain, and full ESP32 control system into a chassis that folds from a single aluminium sheet.
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
              "When the constraint and the performance requirement point the same direction, <span className="text-[#86868b]">you follow them.</span>"
            </p>
          </div>
        </section>

        {/* Horizontal Scroll Section - The Process */}
        <section ref={horizontalScrollRef} className="h-[200vh] relative w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] mx-auto">
          <div ref={stickyRef} className="sticky top-2 md:top-4 h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] flex flex-col justify-center overflow-hidden text-[#1d1d1f]">
            <div className="w-full px-8 md:px-16 mb-8 md:mb-12">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium">
                02 &mdash; Rejected Alternatives
              </div>
            </div>

            <motion.div ref={motionRef} style={{ x }} className="flex gap-24 px-12 md:px-20 py-12 w-max">
              {/* Step 1 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="https://picsum.photos/seed/wolf-concept1/1600/900" alt="Wedge Ramp" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Wedge Ramp.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  Low-profile forward wedge to get underneath opponents. I killed this one early. The compound angle bends need a brake press with tight tolerances. Too much fabrication risk for a single-pass build.
                </p>
              </div>

              {/* Step 2 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="https://picsum.photos/seed/wolf-concept2/1600/900" alt="Tall-wall box" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Tall-wall box.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  Maximum perimeter protection. Problem: raised centre of gravity. A bot that tips under lateral impact is a bot that loses. The fabrication constraint killed it.
                </p>
              </div>

              {/* Step 3 */}
              <div className="w-[85vw] md:w-[65vw] flex-shrink-0 flex flex-col justify-center">
                <ParallaxImg scrollProgress={scrollYProgress} direction="horizontal" src="https://picsum.photos/seed/wolf-concept3/1600/900" alt="Low rectangular chassis" className="aspect-[21/9] w-full rounded-[2rem] mb-12 group shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                </ParallaxImg>
                <h3 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">Low rectangular chassis.</h3>
                <p className="font-sans text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed tracking-tight">
                  Flat footprint. Clean fold geometry. Low centre of gravity. Short walls double as structural flanges. The whole form resolves from a single flat pattern. Mark it, cut it, fold it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Minimal List for Solutions */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-20 reveal text-left">03 &mdash; The Build</div>
            
            <div className="flex flex-col w-full reveal delay-100">
                {/* Item 1 */}
                <div className="group border-t border-black/10 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-black/30">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-blue-600 transition-colors">01</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Flat Pattern Fabrication.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-500 leading-relaxed text-lg font-light">
                            The engineering started with a flat pattern. I drew the full cut layout directly onto the aluminium: cut lines, bend radii, motor mounts, battery positions, wiring channels. Every fold served double duty.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="group border-t border-black/10 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-black/30">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-blue-600 transition-colors">02</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Drivetrain, Weapon & Electronics.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-500 leading-relaxed text-lg font-light">
                            Dual Brushless 2205 2300KV motors on 30A ESCs driving rear wheels. A custom-machined 6061 billet aluminum spinning drum with hardened steel teeth, powered by a dedicated 3536 1400KV motor and 50A ESC. ESP32-WROOM-32D controller with Flysky 2.4GHz wireless RC. 11.1V 3S LiPo through a Matek PDB.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="group border-t border-b border-black/10 py-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16 transition-colors hover:border-black/30">
                    <div className="font-mono text-sm text-gray-400 group-hover:text-blue-600 transition-colors">03</div>
                    <div className="flex-1 md:max-w-md">
                        <h3 className="font-display text-3xl font-medium tracking-tight text-[#1d1d1f]">Mid-Competition Upgrade.</h3>
                    </div>
                    <div className="flex-1">
                        <p className="font-sans text-gray-500 leading-relaxed text-lg font-light">
                            After round one, the fix was obvious. Wolf needed a surface that contacted below the opponent's centre of mass. I designed and fabricated a front-mounted wedge from remaining sheet offcuts.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 04 / MOODBOARD */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 reveal">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-6">04 &mdash; Visual Language</div>
              <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tighter text-[#1d1d1f]">Moodboard.</h2>
            </div>
            <div className="flex flex-wrap gap-3 mt-10 md:mt-0">
                {['Industrial', 'Raw', 'Brutal', 'Functional'].map(tag => (
                    <span key={tag} className="px-5 py-2.5 rounded-full border border-gray-300 text-[11px] uppercase tracking-widest font-mono text-gray-600 bg-[#e5e7eb]">
                        {tag}
                    </span>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-100">
            <ParallaxImg src="https://picsum.photos/seed/wolf-mood1/800/1000" alt="Moodboard 1" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]" />
            <ParallaxImg src="https://picsum.photos/seed/wolf-mood2/800/1000" alt="Moodboard 2" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:mt-24" />
            <ParallaxImg src="https://picsum.photos/seed/wolf-mood3/800/1000" alt="Moodboard 3" className="aspect-[4/5] rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]" />
          </div>
        </section>

        {/* Section 05 / FINAL EXECUTION */}
        <section className="py-32 md:py-48 px-8 md:px-16 max-w-site mx-auto">
          <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-20 reveal">05 &mdash; Final Execution</div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ParallaxImg src="https://picsum.photos/seed/wolf-final1/1600/1200" alt="Final front view" className="md:col-span-8 h-[80vh] group rounded-[2.5rem] reveal shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/60 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-white/40 shadow-sm pointer-events-none">01: Final front view</div>
            </ParallaxImg>
            <div className="md:col-span-4 flex flex-col gap-6">
              <ParallaxImg src="https://picsum.photos/seed/wolf-final2/800/600" alt="3/4 view" className="h-[calc(40vh-0.75rem)] group rounded-[2.5rem] reveal delay-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/60 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-white/40 shadow-sm pointer-events-none">02: 3/4 view</div>
              </ParallaxImg>
              <ParallaxImg src="https://picsum.photos/seed/wolf-final3/800/600" alt="Internal component layout" className="h-[calc(40vh-0.75rem)] group rounded-[2.5rem] reveal delay-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] font-mono bg-white/60 backdrop-blur-xl px-5 py-2.5 rounded-full text-[#1d1d1f] font-medium border border-white/40 shadow-sm pointer-events-none">03: Internals</div>
              </ParallaxImg>
            </div>
          </div>
        </section>

        {/* Section 06 / SPECIFICATIONS & METRICS */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
          <div className="w-full max-w-7xl mx-auto border-t border-gray-200 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-32 reveal">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[#1d1d1f] mb-4">Specifications</h2>
              <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-xs">
                Key metrics and technical details defining the final outcome of the project.
              </p>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9">
              <div className="flex flex-col border-t border-gray-200">
                {/* Metric 1 */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors -mx-4 px-4">
                  <div className="w-full sm:w-1/3 mb-2 sm:mb-0 pt-1">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-[0.1em]">Win Rate</div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
                    <div className="font-display font-medium text-2xl tracking-tight text-[#1d1d1f]">
                      100<span className="text-base text-gray-400 font-normal ml-1">%</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 sm:text-right pt-1">
                    <div className="font-sans font-medium text-sm text-[#1d1d1f]">6 of 6 rounds won</div>
                    <div className="text-xs text-gray-500 font-sans mt-1">Undefeated tournament run.</div>
                  </div>
                </div>
                
                {/* Metric 2 */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors -mx-4 px-4">
                  <div className="w-full sm:w-1/3 mb-2 sm:mb-0 pt-1">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-[0.1em]">Weight</div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
                    <div className="font-display font-medium text-2xl tracking-tight text-[#1d1d1f]">
                      1.3<span className="text-base text-gray-400 font-normal ml-1">kg</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 sm:text-right pt-1">
                    <div className="font-sans font-medium text-sm text-[#1d1d1f]">Optimal Distribution</div>
                    <div className="text-xs text-gray-500 font-sans mt-1">Low centre of gravity.</div>
                  </div>
                </div>
                
                {/* Metric 3 */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors -mx-4 px-4">
                  <div className="w-full sm:w-1/3 mb-2 sm:mb-0 pt-1">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-[0.1em]">Material</div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
                    <div className="font-display font-medium text-2xl tracking-tight text-[#1d1d1f]">
                      3<span className="text-base text-gray-400 font-normal ml-1">mm</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 sm:text-right pt-1">
                    <div className="font-sans font-medium text-sm text-[#1d1d1f]">Aluminum 5052 Sheet</div>
                    <div className="text-xs text-gray-500 font-sans mt-1">Single-piece fold construction.</div>
                  </div>
                </div>
                
                {/* Metric 4 */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors -mx-4 px-4">
                  <div className="w-full sm:w-1/3 mb-2 sm:mb-0 pt-1">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-[0.1em]">Awards</div>
                  </div>
                  <div className="w-full sm:w-1/3 mb-1 sm:mb-0">
                    <div className="font-display font-medium text-2xl tracking-tight text-[#1d1d1f]">
                      2
                    </div>
                  </div>
                  <div className="w-full sm:w-1/3 sm:text-right pt-1">
                    <div className="font-sans font-medium text-sm text-[#1d1d1f]">Champion & Designer</div>
                    <div className="text-xs text-gray-500 font-sans mt-1">Recognized for performance.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 07 / SYSTEM ARCHITECTURE */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-site mx-auto border-t border-gray-200/60">
          <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-16 reveal">07 &mdash; System Architecture</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal delay-100">
            <div>
              <h3 className="font-display text-4xl md:text-5xl text-[#1d1d1f] font-medium mb-6 tracking-tight">
                Electrical & Mechanical Integration
              </h3>
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                The combat robot's architecture relies on a centralized ESP32 microcontroller managing dual BLHeli ESCs for precise tank-drive kinematics. Power is distributed via a Matek PDB from a high-discharge 3S LiPo, ensuring minimal voltage sag during high-torque maneuvers.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-2 h-2 rounded-full bg-token-light-green"></div>
                  <span className="font-mono text-sm text-[#1d1d1f]">ESP32-WROOM-32D Core</span>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-2 h-2 rounded-full bg-token-light-green"></div>
                  <span className="font-mono text-sm text-[#1d1d1f]">Dual 2205 2300KV Brushless Motors</span>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-2 h-2 rounded-full bg-token-light-green"></div>
                  <span className="font-mono text-sm text-[#1d1d1f]">Flysky FS-iA6B Receiver (iBUS)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm flex items-center justify-center">
              <img 
                src="/wolf_files/combat_robot_wolf_SCHEMATIC.svg" 
                alt="System Schematic" 
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Section 08 / BILL OF MATERIALS */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-site mx-auto border-t border-gray-200/60">
          <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-16 reveal">08 &mdash; Bill of Materials</div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-32 reveal delay-100">
            <div className="md:col-span-4 lg:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-[#1d1d1f] mb-4">Component Breakdown</h2>
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-8">
                A mix of high-performance COTS drone parts and custom fabricated armor ensures the robot remains competitive while being easy to repair between matches.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Total Estimated Cost</div>
                <div className="font-display text-5xl text-[#1d1d1f] font-medium">$248<span className="text-2xl text-gray-400">.50</span></div>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-8">
              <div className="w-full border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm">
                <div className="flex border-b border-gray-200">
                  <div className="flex-1 py-4 px-6 text-sm font-mono tracking-widest uppercase bg-gray-50 text-[#1d1d1f]">
                    Electrical & Power
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
                      { name: 'Flysky FS-iA6B', desc: 'RC Receiver', cost: '$15.00' }
                    ].map((part, idx) => (
                      <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-100 group">
                        <div>
                          <div className="text-[#1d1d1f] font-medium text-lg">{part.name}</div>
                          <div className="text-gray-500 text-sm mt-1">{part.desc}</div>
                        </div>
                        <div className="font-mono text-token-dark-green">{part.cost}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex border-y border-gray-200">
                  <div className="flex-1 py-4 px-6 text-sm font-mono tracking-widest uppercase bg-gray-50 text-[#1d1d1f]">
                    Mechanical & Structural
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4">
                    {[
                      { name: 'Custom Folded Aluminum Sheet', desc: 'Main Chassis (5052)', cost: '$40.00' },
                      { name: 'Custom Fabricated Stainless Steel', desc: 'Front Impact Wedge (304)', cost: '$35.00' },
                      { name: 'RC Robot Wheel 80mm (x2)', desc: 'Rear Drive Wheels', cost: '$30.00' },
                      { name: 'Custom 3D Printed Parts', desc: 'Motor Mounts & Electronics Tray (PETG)', cost: '$11.00' },
                      { name: 'Hardware Assortment', desc: 'M3 Screws, Nuts, Shafts, Couplers', cost: '$20.50' }
                    ].map((part, idx) => (
                      <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-100 group">
                        <div>
                          <div className="text-[#1d1d1f] font-medium text-lg">{part.name}</div>
                          <div className="text-gray-500 text-sm mt-1">{part.desc}</div>
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

        {/* Section 09 / ASSEMBLY VISUAL */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-site mx-auto border-t border-gray-200/60">
          <div className="text-sm uppercase tracking-[0.2em] font-mono text-gray-400 font-medium mb-16 reveal">09 &mdash; Assembly Visual</div>
          <div className="w-full bg-white border border-gray-200 rounded-[2.5rem] p-4 md:p-8 shadow-sm reveal delay-100">
            <img 
              src="/wolf_files/combat_robot_wolf_VISUAL.png" 
              alt="Assembly Visual" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </section>

      </main>

      {/* Spacer for sticky footer */}
      <div className="h-[calc(80vh+100px)] w-full pointer-events-none bg-[#fbfbfd]"></div>

      {/* Footer / Next Case Portal */}
      <section className="sticky bottom-0 left-0 w-full bg-[#fbfbfd] z-0 flex flex-col">
        <div className="relative w-full h-[80vh] overflow-hidden group">
          {/* Background Image */}
          <motion.img 
            key={currentNextProject.id}
            initial={{ opacity: 0.5, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            src={currentNextProject.image} 
            alt="Next Project" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            referrerPolicy="no-referrer"
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
            data-cursor="nav"
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md bg-white/30 hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 group/switchbtn shadow-lg"
          >
            <ArrowRight size={24} strokeWidth={1.5} className="transition-transform duration-500 group-hover/switchbtn:translate-x-1" />
          </button>
          
          {/* Make the whole background clickable except where buttons are */}
          <Link to={`/case-study/${currentNextProject.id}`} className="absolute inset-0 z-0"></Link>
        </div>

        {/* Mini Footer */}
        <div className="relative z-20 px-6 md:px-12 h-[100px] flex justify-between items-center text-sm font-sans text-gray-500 pointer-events-auto bg-[#fbfbfd] border-t border-gray-200">
          <Link to="/" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Index</Link>
          <div className="flex gap-2 md:gap-4">
            <a href="https://www.linkedin.com/in/jayaramh" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Resume</a>
            <a href="mailto:jayaram.h1501@gmail.com" data-cursor="nav" className="hover:text-[#1d1d1f] px-5 py-2.5 rounded-full transition-colors font-medium">Email</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WolfCaseStudy;
