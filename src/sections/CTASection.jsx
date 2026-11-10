import React, { useState } from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';
import page2Img from '../assets/Page 2.png';
import page3Img from '../assets/Page 3.png';
import send24 from '../assets/webpng/send-24.png';
import send42 from '../assets/webpng/send-42.png';
import send44 from '../assets/webpng/send-44.png';
import send48 from '../assets/webpng/send-48.png';
import send57 from '../assets/webpng/send-57.png';

function CTASection({ onOpenAdmission, onOpenTour }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadProspectus = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section className="relative overflow-hidden py-18 sm:py-24 bg-brand-cream/50">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Left Column: Heading and CTAs */}
        <div data-reveal="left">
          <SectionBadge>Admissions 2026–2027 Open</SectionBadge>
          <h2 className="mt-5 max-w-[560px] font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-brand-dark">
            <span className="text-brand-green">Guide The Young</span>
            <span className="mt-2 block text-brand-yellow">Generation to Success.</span>
          </h2>
          <p className="mt-6 max-w-[540px] text-base sm:text-lg leading-8 text-slate-600">
            Guiding children with noble Islamic values, practical life skills, and modern concepts so they face life with confidence and compassion.
            <span className="mt-3 block font-bold text-brand-green">
              Limited seats available for Pre-Nursery to Matric across both campuses.
            </span>
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Enroll Online (20% Off)
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenTour && onOpenTour()}
            >
              Book Campus Tour
            </Button>

            <button
              type="button"
              onClick={handleDownloadProspectus}
              className="text-xs font-bold text-slate-500 hover:text-brand-green transition flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>📥</span>
              <span>{downloaded ? '✓ Prospectus Downloaded!' : 'Download Prospectus (PDF)'}</span>
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs font-bold text-slate-500">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">✓</span>
            <span>Early Bird 20% Fee Waiver</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">✓</span>
            <span>Sibling Concessions</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white text-[10px]">✓</span>
            <span>Free Phonics Starter Kit</span>
          </div>
        </div>

        {/* Right Column: Visual Photo Gallery (Replaces Checkerboard) */}
        <div className="relative min-h-[380px] sm:min-h-[440px]" data-reveal="right" data-delay="120">
          <img src={send24} alt="" className="pointer-events-none absolute left-14 top-1/2 hidden w-20 animate-drift lg:block" data-fly data-speed="0.16" data-direction="-1" />
          <img src={send42} alt="" className="pointer-events-none absolute left-8 top-0 hidden w-20 animate-float-slow lg:block" data-fly data-speed="0.18" />
          <img src={send44} alt="" className="pointer-events-none absolute bottom-0 right-14 hidden w-12 animate-swing lg:block" data-fly data-speed="0.14" />
          <img src={send48} alt="" className="pointer-events-none absolute left-0 bottom-6 hidden w-20 lg:block opacity-60" />
          <img src={send57} alt="" className="pointer-events-none absolute left-2 top-4 hidden w-16 lg:block opacity-60" />

          {/* Photo Card 1: Science Experiment */}
          <div className="absolute right-8 top-2 h-[220px] w-[62%] sm:h-[250px] sm:w-[58%] rotate-[6deg] rounded-[28px] bg-white p-3 shadow-hover border-4 border-white transition-transform duration-500 hover:rotate-0 hover:scale-105 z-10">
            <img
              src={page2Img}
              alt="Marching Bell School science experiment & practical activity"
              className="h-full w-full rounded-[22px] object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand-green px-3 py-1 text-[11px] font-black uppercase text-white shadow-sm">
              🔬 Practical STEM Lab
            </span>
          </div>

          {/* Photo Card 2: Montessori Shelf & Materials */}
          <div className="absolute bottom-2 left-8 h-[220px] w-[62%] sm:h-[250px] sm:w-[58%] -rotate-[6deg] rounded-[28px] bg-white p-3 shadow-hover border-4 border-white transition-transform duration-500 hover:rotate-0 hover:scale-105 z-20">
            <img
              src={page3Img}
              alt="Montessori learning shelf with sensory blocks and educational tools"
              className="h-full w-full rounded-[22px] object-cover"
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-black uppercase text-brand-dark shadow-sm">
              🧸 Montessori Apparatus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
