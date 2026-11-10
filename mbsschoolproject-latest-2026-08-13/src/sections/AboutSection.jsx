import React, { useMemo, useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import { messages } from '../Data/pro';
import aboutEllipse from '../assets/about_ellipse.png';
import aboutEllipseOne from '../assets/about_ellipse_one.png';
import aboutRocket from '../assets/about_rocket.png';
import homework from '../assets/homework.png';
import graduation from '../assets/graduation.png';
import messageYellow from '../assets/message_yellow.png';
import ownerBg from '../assets/owner_bg.png';
import ownerEllipse from '../assets/owner_ellipse.png';

function AboutSection() {
  const messageKeys = useMemo(() => Object.keys(messages), []);
  const [activeMessage, setActiveMessage] = useState(messageKeys[0]);
  const activeData = messages[activeMessage];

  return (
    <section
      id="leadership-messages"
      className="relative overflow-hidden bg-[#06693A] py-20 sm:py-24"
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
            <SectionBadge className="bg-transparent px-0 py-0 text-base normal-case tracking-normal text-red-600 shadow-none">
              Message
            </SectionBadge>
          </div>

          <h2
            className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#F4B400] sm:text-5xl lg:text-7xl"
            data-reveal
            data-delay="90"
          >
            <span className="underline decoration-[#F4B400] decoration-[6px] underline-offset-8">
              Our Leadership Messages
            </span>
          </h2>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            data-reveal
            data-delay="180"
          >
            {messageKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveMessage(key)}
                className={`rounded-full px-6 py-4 font-body text-base font-bold transition duration-300 sm:min-w-[210px] sm:text-lg ${
                  activeMessage === key
                    ? 'bg-[#F4B400] text-[#F8F4E3] shadow-soft'
                    : 'bg-[#7FBC8C] text-white hover:bg-[#72b380]'
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
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid gap-10 rounded-[38px] bg-white px-6 py-8 shadow-card sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-12 lg:py-12"
          data-reveal="zoom"
          data-delay="260"
        >
          <div>
            <h2
              className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-[#1a237e] sm:text-4xl lg:text-5xl"
            >
              {activeData.title}
            </h2>
            {activeData.subtitle && (
              <h3 className="mt-4 font-display text-2xl font-extrabold text-[#0F6B3E] sm:text-3xl">
                {activeData.subtitle}
              </h3>
            )}
            <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-600">
              {activeData.description}
            </p>
            <p className="mt-8 font-display text-3xl font-extrabold text-red-600 sm:text-4xl">
              {activeData.owner}
            </p>
            <p className="mt-2 text-xl font-semibold text-slate-700">
              {activeData.designation}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="message-orbit relative h-[290px] w-[290px] sm:h-[340px] sm:w-[340px]">
              <img
                src={ownerBg}
                alt=""
                className="absolute inset-[24px] h-[calc(100%-48px)] w-[calc(100%-48px)] object-contain"
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
                  className="absolute inset-[36px] h-[calc(100%-72px)] w-[calc(100%-72px)] rounded-full object-cover object-[center_22%]"
                />
              ) : (
                <div className="absolute inset-[48px] flex items-center justify-center rounded-full bg-[#f6f9ff] text-center shadow-inner">
                  <div>
                    <p className="font-display text-4xl font-extrabold text-[#1b1d79]">
                      {activeMessage}
                    </p>
                    <p className="mx-auto mt-3 max-w-[180px] text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                      Image not provided
                    </p>
                  </div>
                </div>
              )}

              <img
                src={messageYellow}
                alt=""
                className="message-orbit-dot absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
