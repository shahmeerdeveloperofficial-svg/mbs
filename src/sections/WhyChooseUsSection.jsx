import React from 'react';
import SectionBadge from '../components/SectionBadge';
import Button from '../components/Button';
import send78 from '../assets/webpng/send-78.png';
import send19 from '../assets/webpng/send-19.png';
import send20 from '../assets/webpng/send-20.png';
import send32 from '../assets/webpng/send-32.png';
import send52 from '../assets/webpng/send-52.png';

const reasons = [
  {
    title: 'Certified & Caring Mentors',
    text: 'Experienced teachers trained in early childhood psychology and Jolly Phonics guide children with warmth and patience.',
    accent: 'bg-[#f5222d] text-white',
    icon: '👩‍🏫',
  },
  {
    title: 'Holistic 7-Domain Curriculum',
    text: 'A balanced blend of faith, character, leadership, practical life skills, STEM inquiry, and high academic standards.',
    accent: 'bg-brand-yellow text-brand-dark',
    icon: '🌱',
  },
  {
    title: 'Digital & AI Skills from Class 1',
    text: 'Children learn digital literacy, Canva designing, Scratch coding, and practical online skills for the 21st century.',
    accent: 'bg-brand-green text-white',
    icon: '💻',
  },
  {
    title: 'Safe, Monitored & Caring Campuses',
    text: '24/7 CCTV surveillance, air-conditioned smart classrooms, filtered drinking water, and safe school van transport.',
    accent: 'bg-[#1976d2] text-white',
    icon: '🛡️',
  },
];

function WhyChooseUsSection({ onOpenAdmission, onOpenTour, onOpenFee }) {
  return (
    <section id="why-us" className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20">
      <img src={send32} alt="" className="pointer-events-none absolute left-0 top-16 hidden w-20 lg:block opacity-40" data-fly data-speed="0.16" data-direction="-1" />
      <img src={send19} alt="" className="pointer-events-none absolute right-10 top-2 hidden w-20 animate-drift lg:block opacity-40" data-fly data-speed="0.2" />
      <img src={send20} alt="" className="pointer-events-none absolute left-1/4 bottom-24 hidden w-20 lg:block opacity-40" data-fly data-speed="0.12" />
      <img src={send52} alt="" className="pointer-events-none absolute left-0 bottom-0 hidden w-20 lg:block opacity-40" data-fly data-speed="0.14" data-direction="-1" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal="left">
          <SectionBadge>The Marching Bell Advantage</SectionBadge>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl text-brand-dark">
            Why Parents <span className="text-brand-green">Choose</span>{' '}
            <span className="text-brand-yellow">Us.</span>
          </h2>
          <p className="mt-6 max-w-[620px] text-base sm:text-lg leading-8 text-slate-600">
            Families trust Marching Bell Schools for the seamless harmony between strong Islamic roots, conceptual modern education, and a joyful atmosphere where every child is seen, heard, and cherished.
          </p>

          {/* Reasons List */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`rounded-[26px] p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${reason.accent}`}
                data-reveal="zoom"
                data-delay={String(100 + index * 80)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{reason.icon}</span>
                  <h3 className="font-display text-xl font-bold leading-tight">{reason.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 opacity-90">{reason.text}</p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Enroll Your Child
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={onOpenTour}
            >
              Book a Campus Visit
            </Button>

            <Button
              variant="green"
              size="md"
              onClick={onOpenFee}
            >
              Fee Structure
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative" data-reveal="right" data-delay="140">
          <div className="relative mx-auto w-full max-w-[480px]">
            <img
              src={send78}
              alt="Kids learning and reading joyfully"
              className="mx-auto w-full max-w-[480px] drop-shadow-xl"
            />
            {/* Overlay Trust Pill */}
            <div className="absolute -bottom-4 right-4 rounded-2xl bg-white p-4 shadow-soft border-2 border-brand-yellow max-w-[240px]">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white font-bold">★</span>
                <div>
                  <p className="font-display text-base font-extrabold text-brand-dark">100% Satisfaction</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Over 98% parent recommendation rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
