import React, { useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import Button from '../components/Button';
import { campusesData } from '../Data/schoolData';

function CampusesSection({ onOpenAdmission, onOpenTour, onOpenFee }) {
  const [activeCampusId, setActiveCampusId] = useState('dilfraz');
  const activeCampus = campusesData[activeCampusId];

  return (
    <section id="campuses" className="scroll-mt-24 relative overflow-hidden bg-brand-green py-18 sm:py-22 text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge className="bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
            Campuses &amp; Facilities
          </SectionBadge>

          <h2
            className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-6xl text-white"
            data-reveal
          >
            Explore Our <span className="text-brand-yellow">Campuses</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/85 leading-7">
            Two purpose-built campuses in Lahore designed for safety, creative discovery, sports,
            and technological excellence.
          </p>

          {/* Campus Switcher Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4" data-reveal="zoom">
            {[
              { id: 'dilfraz', name: 'Dilfraz Campus', tag: 'Early Years & Primary' },
              { id: 'alriaz', name: 'Al-Riaz Campus', tag: 'Montessori to Matric & STEM' },
            ].map((camp) => {
              const isActive = activeCampusId === camp.id;
              return (
                <button
                  key={camp.id}
                  type="button"
                  onClick={() => setActiveCampusId(camp.id)}
                  aria-pressed={isActive}
                  className={`group relative overflow-hidden rounded-[26px] border-2 px-7 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-brand-yellow bg-brand-yellow text-brand-dark shadow-[0_12px_28px_rgba(0,0,0,0.25)] scale-105'
                      : 'border-white/20 bg-white/10 text-white hover:border-brand-yellow hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏫</span>
                    <div>
                      <p className="font-display text-xl font-bold leading-tight">{camp.name}</p>
                      <p className={`text-xs ${isActive ? 'text-brand-dark/80 font-bold' : 'text-white/70'}`}>
                        {camp.tag}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Campus Details Card */}
        <div
          className="mt-12 rounded-[34px] bg-white p-6 sm:p-10 text-slate-800 shadow-2xl border border-brand-yellow/30 animate-modal-in"
          key={activeCampus.id}
        >
          {/* Header Row: Campus Info & Quick Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-brand-green px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white">
                  {activeCampus.grades}
                </span>
                <span className="text-xs font-bold text-slate-400">⏰ {activeCampus.timing}</span>
              </div>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-brand-green">
                {activeCampus.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500 font-semibold flex items-center gap-1.5">
                <span>📍</span> {activeCampus.address}
              </p>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenFee}
              >
                Fee Schedule
              </Button>

              <Button
                variant="green"
                size="sm"
                onClick={() => onOpenTour && onOpenTour(activeCampus.id)}
              >
                Schedule Campus Visit
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenAdmission && onOpenAdmission('', activeCampus.id)}
                arrow
              >
                Apply for Admission
              </Button>
            </div>
          </div>

          {/* Key Campus Facilities Showcase (Clean, Spacious, Not Crowded) */}
          <div className="mt-8">
            <h4 className="font-display text-2xl font-bold text-brand-dark">
              Campus Highlights &amp; Facilities
            </h4>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {activeCampus.features.map((feat) => (
                <div
                  key={feat.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-[24px] bg-brand-cream/60 p-4 border border-brand-green/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:bg-white"
                >
                  <div>
                    <div className="h-40 w-full overflow-hidden rounded-2xl bg-slate-200">
                      <img
                        src={feat.image}
                        alt={feat.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xl">{feat.icon}</span>
                      <h5 className="font-display text-base font-bold text-brand-green leading-snug">
                        {feat.title}
                      </h5>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sections & Wings at this Campus */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <h4 className="font-display text-2xl font-bold text-brand-dark mb-4">
              Academic Sections Available at {activeCampus.name}
            </h4>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeCampus.sections.map((sec) => (
                <div
                  key={sec.name}
                  className="rounded-2xl border border-brand-green/15 p-4 bg-white shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${sec.badge}`}>
                        {sec.age}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">{sec.timing}</span>
                    </div>
                    <h5 className="mt-2 font-display text-lg font-bold text-brand-dark">{sec.name}</h5>
                    <p className="mt-1 text-xs text-slate-500 leading-5">{sec.focus}</p>
                    <p className="mt-2 text-[11px] font-semibold text-brand-green">
                      👥 Class Size: {sec.capacity}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenAdmission && onOpenAdmission(sec.name, activeCampus.id)}
                      className="text-xs font-bold text-brand-yellow hover:text-brand-green transition flex items-center gap-1"
                    >
                      <span>Register for this section</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Campus Contact Bar */}
          <div className="mt-8 rounded-2xl bg-brand-green-light p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-brand-green border border-brand-green/20">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>Direct Campus Helpdesk: {activeCampus.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>{activeCampus.email}</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenTour && onOpenTour(activeCampus.id)}
              className="rounded-full bg-brand-green px-4 py-1.5 text-white hover:bg-brand-yellow hover:text-brand-dark transition shadow-sm"
            >
              Book Campus Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusesSection;
