import React, { useState } from 'react';
import Button from '../components/Button';
import { talentTabs } from '../Data/schoolData';
import send55 from '../assets/webpng/send-55.png';
import send19 from '../assets/webpng/send-19.png';
import send54 from '../assets/webpng/send-54.png';
import send20 from '../assets/webpng/send-20.png';
import send24 from '../assets/webpng/send-24.png';
import send32 from '../assets/webpng/send-32.png';
import send37 from '../assets/webpng/send-37.png';
import send38 from '../assets/webpng/send-38.png';

function DiscoverTalentsSection({ onOpenAdmission, onOpenTour }) {
  const [activeTabId, setActiveTabId] = useState('teachers');
  const activeTalent = talentTabs.find((t) => t.id === activeTabId) || talentTabs[0];

  return (
    <section className="relative overflow-hidden bg-brand-green py-20 text-white sm:py-24">
      <img src={send37} alt="" className="pointer-events-none absolute left-12 top-0 hidden w-20 lg:block opacity-40" />
      <img src={send38} alt="" className="pointer-events-none absolute right-12 top-0 hidden w-20 lg:block opacity-40" />
      <img src={send32} alt="" className="pointer-events-none absolute left-0 top-16 hidden w-16 animate-float-fast lg:block" data-fly data-speed="0.18" data-direction="-1" />
      <img src={send54} alt="" className="pointer-events-none absolute right-10 top-10 hidden w-16 animate-drift lg:block" data-fly data-speed="0.2" />
      <img src={send20} alt="" className="pointer-events-none absolute right-28 top-16 hidden w-20 animate-float-slow lg:block" data-fly data-speed="0.14" />
      <img src={send24} alt="" className="pointer-events-none absolute right-0 bottom-16 hidden w-16 lg:block opacity-40" />
      <div className="pointer-events-none absolute left-0 top-0 h-36 w-60 rounded-br-[120px] bg-brand-cream/80" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-56 rounded-tl-[120px] bg-brand-cream/80" />

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Illustration */}
        <div className="relative" data-reveal="left">
          <img src={send19} alt="" className="pointer-events-none absolute left-0 top-0 hidden w-16 animate-drift lg:block" data-fly data-speed="0.18" data-direction="-1" />
          <div className="relative mx-auto max-w-[420px] rounded-[36px] bg-white/10 p-6 backdrop-blur-sm border-2 border-white/20 shadow-2xl">
            <img
              src={send55}
              alt="Discovering child talents illustration"
              className="mx-auto w-full object-contain drop-shadow-lg"
            />
            <div className="mt-4 text-center">
              <span className="rounded-full bg-brand-yellow px-4 py-1 text-xs font-black uppercase text-brand-dark shadow-sm">
                Nurturing Natural Potential
              </span>
            </div>
          </div>
        </div>

        {/* Right Interactive Information Panel */}
        <div data-reveal="right" data-delay="120">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
            Whole-Child Development
          </span>

          <h2 className="mt-3 font-display text-4xl font-extrabold leading-none sm:text-6xl text-white">
            Discover Your Child&apos;s <span className="text-brand-yellow">Talents</span>
          </h2>

          <p className="mt-4 max-w-[620px] text-base sm:text-lg leading-7 text-white/85">
            We combine rigorous academics with creative discovery, sports stamina, and future digital skills to help every learner discover what makes them extraordinary.
          </p>

          {/* Interactive Talent Tabs */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {talentTabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-yellow text-brand-dark shadow-[0_8px_20px_rgba(244,180,0,0.35)] scale-105'
                      : 'bg-white/15 text-white hover:bg-white/25 hover:text-brand-yellow'
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Active Talent Detail Box */}
          <div className="mt-6 rounded-[28px] bg-white p-6 sm:p-7 text-slate-800 shadow-2xl border-2 border-brand-yellow/40 animate-modal-in">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-brand-green">
                {activeTalent.subtitle}
              </h3>
              <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-bold text-brand-yellow border border-brand-yellow/30">
                Pillar {talentTabs.findIndex((t) => t.id === activeTabId) + 1} of 4
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {activeTalent.desc}
            </p>

            {/* Key stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 text-center">
              {activeTalent.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-brand-cream/80 p-2.5">
                  <p className="font-display text-lg sm:text-xl font-black text-brand-green">{s.val}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Callouts */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Enroll Your Child Today
            </Button>

            <Button
              variant="soft"
              size="md"
              onClick={() => onOpenTour && onOpenTour()}
            >
              Schedule Campus Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverTalentsSection;
