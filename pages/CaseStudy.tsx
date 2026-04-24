import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import Navbar from '../components/Navbar';
import { areCaseStudiesUnlocked } from '../lib/caseStudyAccess';

const ViperZCaseStudy = React.lazy(() => import('./ViperZCaseStudy'));
const WolfCaseStudy = React.lazy(() => import('./WolfCaseStudy'));
const SealedRCBoatCaseStudy = React.lazy(() => import('./HydrofoilBoatCaseStudy'));

const DefaultCaseStudy: React.FC<{ project: Project }> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#fbfbfd] min-h-screen" ref={containerRef}>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-site mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-token-text-gray hover:text-token-dark-green transition-colors font-sans mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-token-dark-green mb-6 tracking-tighter">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.details?.techStack?.map((tag: string) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-sans text-token-text-gray">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[50vh] md:h-[70vh] w-full rounded-2xl overflow-hidden mb-20 bg-gray-100">
          <motion.img 
            style={{ y }}
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-[120%] object-cover origin-top"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 md:pl-8 border-l border-gray-300 mb-16">
            <h3 className="font-mono text-xs font-medium text-gray-400 mb-4 uppercase tracking-[0.2em]">The Objective</h3>
            <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-[#1d1d1f] tracking-tight">
              {project.description}
            </p>
          </div>
          
          {project.details ? (
            <div className="space-y-12">
              {[
                ['Challenge', project.details.challenge],
                ['Solution', project.details.solution],
                ['Outcome', project.details.outcome],
              ].map(([label, copy]) => (
                copy ? (
                  <section key={label} className="border-t border-gray-200 pt-8">
                    <h3 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{label}</h3>
                    <div className="space-y-5">
                      {copy.split('\n\n').map((paragraph) => (
                        <p key={paragraph} className="font-sans text-lg font-light leading-relaxed text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ) : null
              ))}
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

const LockedCaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Navbar />
      <main className="px-6 md:px-12 pt-32 pb-20 max-w-site mx-auto">
        <div className="max-w-3xl">
          <Link to="/" className="inline-flex items-center text-token-text-gray hover:text-token-dark-green transition-colors font-sans mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-token-dark-green mb-6 tracking-tighter">
            Case studies are locked on the live site.
          </h1>
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#1d1d1f] max-w-2xl">
            These pages are still in progress, so they stay available on localhost only for now.
          </p>
        </div>
      </main>
    </div>
  );
};

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!areCaseStudiesUnlocked()) {
    return <LockedCaseStudies />;
  }

  if (id === '1') {
    // ViperZ has its own custom page
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#fbfbfd]" />}>
        <ViperZCaseStudy />
      </React.Suspense>
    );
  }

  if (id === '2') {
    // Wolf has its own custom page
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#fbfbfd]" />}>
        <WolfCaseStudy />
      </React.Suspense>
    );
  }

  if (id === '3') {
    // Sealed RC Boat has its own custom page
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#fbfbfd]" />}>
        <SealedRCBoatCaseStudy />
      </React.Suspense>
    );
  }

  const project = PROJECTS.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-token-light-bg">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-token-dark-green mb-4 tracking-tighter">Project Not Found</h1>
          <Link to="/" className="text-token-light-green hover:underline font-sans">Return Home</Link>
        </div>
      </div>
    );
  }

  return <DefaultCaseStudy project={project} />;
};

export default CaseStudy;
