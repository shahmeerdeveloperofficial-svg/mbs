import React, { useMemo, useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import Button from '../components/Button';
import { messages } from '../Data/pro';
import aboutEllipse from '../assets/about_ellipse.png';
import aboutEllipseOne from '../assets/about_ellipse_one.png';
import aboutRocket from '../assets/about_rocket.png';
import homework from '../assets/homework.png';
import graduation from '../assets/graduation.png';
import messageYellow from '../assets/message_yellow.png';
import ownerBg from '../assets/owner_bg.png';
import ownerEllipse from '../assets/owner_ellipse.png';

const leadershipPillars = [
  {
    icon: '🎯',
    title: 'Character & Faith First',
    desc: 'Deep moral anchoring in Seerat-un-Nabi ﷺ, truthfulness, and civic compassion.',
  },
  {
    icon: '💡',
    title: 'Conceptual Mastery',
    desc: 'Moving past rote memorization toward critical thinking, inquiry, and practical life skills.',
  },
  {
    icon: '🚀',
    title: 'Digital Empowerment',
    desc: 'Equipping every student with AI tools, coding, design, and digital literacy from Class 1.',
  },
];

function AboutSection({ onOpenAdmission, onOpenTour }) {
  const messageKeys = useMemo(() => Object.keys(messages), []);
  const [activeMessage, setActiveMessage] = useState(messageKeys[0]);
  const activeData = messages[activeMessage];
  const [isVisionOpen, setIsVisionOpen] = useState(false);

  return (
    <section
      id="leadership"
      className="scroll-mt-24 relative overflow-hidden bg-[#06693A] py-16 sm:py-20"
    >
      <img
        src={aboutEllipse}
        alt=""
        className="pointer-events-none absolute right-0 top-0 hidden w-44 opacity-80 lg:block"
      />
      <img
        src={aboutEllipseOne}
        alt=""
        className="pointer-events-none absolute left-0 top-48 hidden w-40 opacity-70 lg:block"
      />
      <img
        src={aboutRocket}
        alt=""
        className="pointer-events-none absolute right-12 top-6 hidden w-20 animate-float-slow lg:block"
      />
      <img
        src={homework}
        alt=""
        className="pointer-events-none absolute left-4 top-12 hidden w-24 animate-drift lg:block"
      />
      <img
        src={graduation}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden w-28 animate-float-fast lg:block"
      />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div data-reveal="zoom">
            <SectionBadge className="bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
              Leadership &amp; Vision
            </SectionBadge>
          </div>

          <h2
            className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#F4B400] sm:text-5xl lg:text-6xl"
            data-reveal
            data-delay="90"
          >
            <span className="underline decoration-[#F4B400] decoration-[5px] underline-offset-8">
              Our Leadership Messages
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
            Meet the visionary educators guiding Marching Bell Schools toward academic excellence,
            Islamic character, and technological innovation.
          </p>

          {/* Interactive Leadership Selection Tabs */}
          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
            data-reveal
            data-delay="160"
          >
            {messageKeys.map((key) => {
              const isActive = activeMessage === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveMessage(key)}
                  className={`rounded-full px-5 py-2.5 font-display text-sm sm:text-base font-bold transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'bg-[#F4B400] text-brand-dark shadow-[0_8px_20px_rgba(244,180,0,0.35)] scale-105'
                      : 'bg-white/15 text-white hover:bg-white/25 hover:text-brand-yellow'
                  }`}
                >
                  {key === 'Chairman'
                    ? "Chairman's Message"
                    : key === 'Director'
                      ? 'Academic Director'
                      : key === 'Co-Director'
                        ? 'IT Director'
                      : key === 'QMS'
                        ? 'Director QMS'
                      : `${key}'s Message`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Presentation Card */}
        <div
          className="mt-10 grid gap-10 rounded-[38px] bg-white px-6 py-8 shadow-card sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-12 lg:py-10 border-2 border-brand-yellow/30 animate-modal-in"
          key={activeMessage}
        >
          <div>
            <span className="inline-block rounded-full bg-brand-cream px-3 py-1 text-xs font-black uppercase tracking-wider text-brand-green border border-brand-green/15">
              {activeData.subtitle || 'Leadership Guidance'}
            </span>

            <h3 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-[#0b2d4c] sm:text-4xl">
              {activeData.title}
            </h3>

            <p className="mt-4 max-w-4xl text-base sm:text-lg leading-8 text-slate-600">
              {activeData.description}
            </p>

            <div className="mt-7 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#06693A]">
                  {activeData.owner}
                </p>
                <p className="mt-0.5 text-sm font-bold text-slate-500">
                  {activeData.designation} • Marching Bell Schools
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsVisionOpen(true)}
                >
                  Full Vision 2026
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenAdmission && onOpenAdmission()}
                  arrow
                >
                  Join Our School
                </Button>
              </div>
            </div>
          </div>

          {/* Portrait Container */}
          <div className="flex justify-center lg:justify-end">
            <div className="message-orbit relative h-[270px] w-[270px] sm:h-[310px] sm:w-[310px]">
              <img
                src={ownerBg}
                alt=""
                className="absolute inset-[18px] h-[calc(100%-36px)] w-[calc(100%-36px)] object-contain"
              />
              <img
                src={ownerEllipse}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />

              {activeData.image ? (
                <img
                  src={activeData.image}
                  alt={activeData.owner}
                  className="absolute inset-[30px] h-[calc(100%-60px)] w-[calc(100%-60px)] rounded-full object-cover object-[center_20%] shadow-md border-4 border-white"
                />
              ) : (
                <div className="absolute inset-[32px] flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-brand-cream to-white text-center shadow-inner border-4 border-brand-green/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-white font-display text-2xl font-black shadow-sm">
                    {activeData.owner.charAt(0)}
                  </div>
                  <p className="mt-2 font-display text-base font-extrabold text-brand-dark px-3">
                    {activeData.owner}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
                    {activeData.designation}
                  </p>
                </div>
              )}

              <img
                src={messageYellow}
                alt=""
                className="message-orbit-dot absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* 3 Core Leadership Pillars Row - fills the space with valuable institutional identity */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3" data-reveal="zoom" data-delay="200">
          {leadershipPillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h4 className="font-display text-lg font-bold text-brand-yellow">{p.title}</h4>
              </div>
              <p className="mt-2 text-xs leading-5 text-white/85">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Vision Modal */}
      {isVisionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(e) => e.target === e.currentTarget && setIsVisionOpen(false)}
        >
          <div
            className="modal-scroll relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in text-slate-800"
            role="dialog"
          >
            <button
              type="button"
              onClick={() => setIsVisionOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md hover:bg-brand-yellow hover:text-white"
            >
              ×
            </button>

            <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-black uppercase text-white">
              Institutional Roadmap
            </span>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-brand-green">
              Marching Bell Schools 2026–2030 Vision
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Under the strategic stewardship of <strong>Rana Umer Riaz</strong> and our executive council, Marching Bell Schools is committed to delivering a balanced tripartite education:
              </p>
              <ul className="space-y-2 font-semibold">
                <li className="flex items-start gap-2">
                  <span className="text-brand-green font-bold">1. Spiritual &amp; Ethical Anchor:</span> Daily Quran, authentic Seerat-un-Nabi ﷺ, and character habits that safeguard modesty, truthfulness, and civic responsibility.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-yellow font-bold">2. International Academic Standards:</span> Concept-driven Cambridge-Oxford pedagogical techniques, Jolly Phonics early literacy, and BISE distinction tracking.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1976d2] font-bold">3. Future Digital Capability:</span> Early coding, artificial intelligence literacy, and practical digital enterprise from Grade 1 to Matric.
                </li>
              </ul>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="green" size="sm" onClick={() => setIsVisionOpen(false)}>
                Close Vision Statement
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutSection;
