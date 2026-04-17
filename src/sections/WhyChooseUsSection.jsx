import React from 'react';
import SectionBadge from '../components/SectionBadge';
import send78 from '../assets/webpng/send-78.png';
import send19 from '../assets/webpng/send-19.png';
import send20 from '../assets/webpng/send-20.png';
import send32 from '../assets/webpng/send-32.png';
import send52 from '../assets/webpng/send-52.png';

const reasons = [
  {
    title: 'Quality Teachers',
    text: 'Caring mentors guide every child with patience, warmth, and confidence-building routines.',
  },
  {
    title: 'Best Curriculum',
    text: 'Balanced learning through literacy, movement, science play, and imagination-led projects.',
  },
  {
    title: 'Global Recognition',
    text: 'Children build future-ready habits through creativity, collaboration, and joyful communication.',
  },
];

function WhyChooseUsSection() {
  return (
    <section id="blog" className="relative overflow-hidden py-20 sm:py-24">
      <img src={send32} alt="" className="absolute left-0 top-16 hidden w-24 lg:block" />
      <img src={send19} alt="" className="absolute right-10 top-2 hidden w-24 animate-drift lg:block" />
      <img src={send20} alt="" className="absolute left-1/4 bottom-24 hidden w-24 lg:block" />
      <img src={send52} alt="" className="absolute left-0 bottom-0 hidden w-24 lg:block" />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionBadge className="bg-transparent px-0 py-0 text-brand-yellow shadow-none">
            Our Different
          </SectionBadge>
          <h2 className="mt-3 font-display text-5xl font-extrabold leading-none sm:text-6xl lg:text-7xl">
            <span className="text-brand-dark">Why Choose</span>{' '}
            <span className="text-brand-yellow">Us.</span>
          </h2>
          <p className="mt-8 max-w-[620px] text-lg leading-8 text-slate-400">
            Families choose us for the blend of gentle care, strong learning foundations, and a
            playful atmosphere that makes school feel like a joyful storybook.
          </p>

          <div className="mt-12 grid gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`rounded-[30px] p-6 shadow-card ${
                  index === 0
                    ? 'bg-[#ff2c2c] text-white'
                    : index === 1
                      ? 'bg-brand-yellow text-white'
                      : 'bg-brand-green text-white'
                }`}
              >
                <h3 className="font-display text-3xl font-bold">{reason.title}</h3>
                <p className="mt-3 text-base leading-8 text-white/90">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={send78} alt="Kids on book" className="mx-auto w-full max-w-[520px]" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
