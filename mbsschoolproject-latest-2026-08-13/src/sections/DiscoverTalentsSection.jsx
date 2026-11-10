import React from 'react';
import Button from '../components/Button';
import send55 from '../assets/webpng/send-55.png';
import send19 from '../assets/webpng/send-19.png';
import send54 from '../assets/webpng/send-54.png';
import send20 from '../assets/webpng/send-20.png';
import send24 from '../assets/webpng/send-24.png';
import send32 from '../assets/webpng/send-32.png';
import send37 from '../assets/webpng/send-37.png';
import send38 from '../assets/webpng/send-38.png';

function DiscoverTalentsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-20 text-white sm:py-24">
      <img src={send37} alt="" className="absolute left-12 top-0 hidden w-24 lg:block" />
      <img src={send38} alt="" className="absolute right-12 top-0 hidden w-24 lg:block" />
      <img src={send32} alt="" className="absolute left-0 top-16 hidden w-20 animate-float-fast lg:block" data-fly data-speed="0.18" data-direction="-1" />
      <img src={send54} alt="" className="absolute right-10 top-10 hidden w-20 animate-drift lg:block" data-fly data-speed="0.2" />
      <img src={send20} alt="" className="absolute right-28 top-16 hidden w-24 animate-float-slow lg:block" data-fly data-speed="0.14" />
      <img src={send24} alt="" className="absolute right-0 bottom-16 hidden w-20 lg:block" />
      <div className="absolute left-0 top-0 h-36 w-60 rounded-br-[120px] bg-brand-cream" />
      <div className="absolute bottom-0 right-0 h-32 w-56 rounded-tl-[120px] bg-brand-cream" />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative" data-reveal="left">
          <img src={send19} alt="" className="absolute left-0 top-0 hidden w-20 animate-drift lg:block" data-fly data-speed="0.18" data-direction="-1" />
          <img src={send55} alt="Discover talents illustration" className="mx-auto w-full max-w-[430px]" />
        </div>

        <div data-reveal="right" data-delay="120">
          <h2 className="font-display text-5xl font-extrabold leading-none sm:text-6xl lg:text-7xl">
            Discover Talents
          </h2>
          <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/80">
            We combine academics, creative expression, and active experiences to help each
            child uncover strengths in a way that feels magical and memorable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" className="px-7 py-3 text-brand-green shadow-none">
              Expert Professionals
            </Button>
            <Button variant="soft">Personalized Classes</Button>
            <Button variant="soft">Sport Activities</Button>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-full border border-brand-yellow px-10 py-3 text-lg text-white transition hover:bg-brand-yellow/10"
            >
              www.yourwebsite.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscoverTalentsSection;
