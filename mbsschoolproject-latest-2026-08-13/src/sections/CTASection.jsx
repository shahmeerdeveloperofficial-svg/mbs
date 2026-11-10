import React from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';
import PlaceholderImage from '../components/PlaceholderImage';
import send24 from '../assets/webpng/send-24.png';
import send42 from '../assets/webpng/send-42.png';
import send44 from '../assets/webpng/send-44.png';
import send76 from '../assets/webpng/send-76.png';
import send48 from '../assets/webpng/send-48.png';
import send57 from '../assets/webpng/send-57.png';

function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div data-reveal="left">
          <SectionBadge>About Our School</SectionBadge>
          <h2 className="mt-8 max-w-[560px] font-display text-5xl font-extrabold leading-tight sm:text-6xl">
            <span className="text-brand-green">Guide The Young</span>
            <span className="mt-2 block text-brand-yellow">Generation to Success</span>
          </h2>
          <p className="mt-6 max-w-[540px] text-lg leading-8 text-slate-500">
            Guiding the young generation with the right values, knowledge and skills to face
            life with confidence.
            <span className="mt-4 block">
              Helping every child discover their potential, build a bright future and make a
              positive difference in the world.
            </span>
          </p>
          <div className="mt-10">
            <Button className="px-10">Subscribe Now</Button>
          </div>
        </div>

        <div className="relative min-h-[420px]" data-reveal="right" data-delay="120">
          <img src={send24} alt="" className="absolute left-16 top-1/2 hidden w-24 animate-drift lg:block" data-fly data-speed="0.16" data-direction="-1" />
          <img src={send42} alt="" className="absolute left-10 top-2 hidden w-24 animate-float-slow lg:block" data-fly data-speed="0.18" />
          <img src={send44} alt="" className="absolute bottom-0 right-16 hidden w-14 animate-swing lg:block" data-fly data-speed="0.14" />
          <img src={send48} alt="" className="absolute left-0 bottom-8 hidden w-24 lg:block" />
          <img src={send57} alt="" className="absolute left-2 top-6 hidden w-20 lg:block" />

          <div className="absolute right-12 top-4 h-[220px] w-[58%] rotate-[8deg]">
            <img src={send76} alt="" className="absolute inset-0 h-full w-full object-contain" />
            <div className="absolute inset-[10%]">
              <PlaceholderImage className="h-full w-full rounded-[28px]" />
            </div>
          </div>
          <div className="absolute bottom-0 right-4 h-[240px] w-[62%] -rotate-[8deg]">
            <img src={send76} alt="" className="absolute inset-0 h-full w-full object-contain" />
            <div className="absolute inset-[10%]">
              <PlaceholderImage className="h-full w-full rounded-[28px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
