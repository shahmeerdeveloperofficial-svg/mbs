import React from 'react';
import SectionBadge from '../components/SectionBadge';
import send24 from '../assets/webpng/send-24.png';
import send37 from '../assets/webpng/send-37.png';
import send38 from '../assets/webpng/send-38.png';
import seend25 from '../assets/webpng/seend-25.png';
import seend26 from '../assets/webpng/seend-26.png';
import seend27 from '../assets/webpng/seend-27.png';
import seend28 from '../assets/webpng/seend-28.png';
import seend7 from '../assets/webpng/seend-07.png';
import send47 from '../assets/webpng/send-47.png';
import send39 from '../assets/webpng/send-39.png';

const activities = [
  { title: 'Creative Activities', icon: seend28, accent: 'bg-[#ff6f6f]' },
  { title: 'Table Games', icon: seend26, accent: 'bg-brand-green' },
  { title: 'Water Games', icon: seend25, accent: 'bg-[#1da1f2]' },
  { title: 'Sport Activities', icon: seend27, accent: 'bg-brand-yellow' },
];

function ActivitiesSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <img src={send47} alt="" className="absolute left-0 top-0 hidden w-[240px] lg:block" />
      <img src={send39} alt="" className="absolute bottom-0 right-0 hidden w-[260px] lg:block" />
      <img src={send37} alt="" className="absolute left-14 top-0 hidden w-24 lg:block" />
      <img src={send38} alt="" className="absolute right-20 top-0 hidden w-24 lg:block" />

      <div className="section-shell">
        <div className="text-center">
          <div data-reveal="zoom">
            <SectionBadge>Things For Kids</SectionBadge>
          </div>
          <h2 className="mt-6 font-display text-5xl font-extrabold sm:text-6xl" data-reveal data-delay="100">
            <span className="text-brand-green">Kids</span>{' '}
            <span className="text-brand-yellow">Activities</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group flex items-start gap-6 rounded-[34px] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-2"
              data-reveal={index % 2 === 0 ? 'left' : 'right'}
              data-delay={String(120 + index * 100)}
            >
              <div
                className={`grid h-16 w-16 shrink-0 place-items-center rounded-full ${activity.accent} shadow-soft`}
              >
                <img src={activity.icon} alt={activity.title} className="h-11 w-11" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-slate-800">{activity.title}</h3>
                <p className="mt-3 max-w-[340px] text-base leading-8 text-slate-500">
                  Story-led teamwork, sensory fun, and active play designed to spark confidence
                  and big smiles.
                </p>
              </div>
              {index === 0 && (
                <img
                  src={send24}
                  alt=""
                  className="absolute -left-6 bottom-8 hidden w-24 animate-drift lg:block"
                  data-fly
                  data-speed="0.16"
                  data-direction="-1"
                />
              )}
            </div>
          ))}

          <img
            src={seend7}
            alt=""
            className="absolute left-1/2 top-1/2 hidden w-24 -translate-x-1/2 -translate-y-1/2 animate-drift lg:block"
            data-fly
            data-speed="0.12"
          />
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
