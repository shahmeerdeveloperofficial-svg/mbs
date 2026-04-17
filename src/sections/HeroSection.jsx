import React from 'react';
import Button from '../components/Button';
import FloatingAsset from '../components/FloatingAsset';
import PlaceholderImage from '../components/PlaceholderImage';
import seend10 from '../assets/webpng/seend-10.png';
import seend1 from '../assets/webpng/seend-01.png';
import seend2 from '../assets/webpng/seend-02.png';
import send7 from '../assets/webpng/send-07.png';
import send8 from '../assets/webpng/send-08.png';
import seend9 from '../assets/webpng/seend-09.png';
import send13 from '../assets/webpng/send-13.png';
import send14 from '../assets/webpng/send-14.png';
import send87 from '../assets/webpng/send-87.png';
import send91 from '../assets/webpng/send-91.png';
import send92 from '../assets/webpng/send-92.png';
import send94 from '../assets/webpng/send-94.png';

const heroFeatureBubbles = [
  ['Activities', 'Motivate to study', send87, 'translate-y-0'],
  ['Education', 'Motivate to study', send91, '-translate-x-8'],
  ['Creativity', 'Motivate to study', send92, 'translate-x-4'],
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-8 sm:pb-24 lg:pb-28 lg:pt-10"
    >
      <img src={seend2} alt="" className="absolute right-10 top-4 hidden w-[220px] lg:block" />
      <img
        src={send94}
        alt=""
        className="absolute bottom-2 left-1/2 hidden w-[150px] -translate-x-1/2 lg:block"
      />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 pt-8 lg:pt-12">
          <FloatingAsset src={send7} alt="pencil" className="-left-4 top-12 hidden lg:block" />
          <FloatingAsset
            src={send8}
            alt="bulb"
            className="right-14 top-8 hidden lg:block"
            animation="animate-float-fast"
          />
          <FloatingAsset
            src={seend9}
            alt="book"
            className="-left-8 bottom-28 hidden lg:block"
            animation="animate-drift"
          />

          <div className="mb-5 inline-flex rounded-full bg-brand-yellow px-7 py-3 text-lg font-bold text-white shadow-soft">
            20% off for early bird
          </div>
          <h1 className="max-w-[620px] font-display text-5xl font-extrabold leading-[0.95] text-brand-yellow sm:text-6xl lg:text-7xl">
            Best Education
            <span className="mt-2 block text-brand-green">For Your Kids.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-500">
            A playful, story-driven learning experience where curiosity grows through
            creativity, confidence, and cheerful classroom adventures.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Register Now</Button>
            <Button variant="outline">Know More</Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-4 w-4 rounded-full bg-brand-green" />
            <span className="h-4 w-4 rounded-full bg-[#5ca67a]" />
            <span className="h-4 w-4 rounded-full bg-[#7bc29a]" />
            <span className="h-4 w-4 rounded-full bg-[#b6e2cf]" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <img
            src={seend10}
            alt=""
            className="absolute -bottom-5 left-0 hidden w-[540px] max-w-full animate-pulse-soft lg:block"
          />
          <div className="relative mx-auto max-w-[540px]">
            <img src={seend1} alt="" className="mx-auto w-full animate-drift" />
            <div className="absolute inset-[10%] overflow-hidden rounded-[42%_58%_55%_45%/45%_39%_61%_55%]">
              <PlaceholderImage className="h-full w-full" rounded="rounded-none" />
            </div>
          </div>

          <div className="absolute right-0 top-10 grid gap-6 sm:right-2">
            {heroFeatureBubbles.map(([title, text, icon, offset]) => (
              <div
                key={title}
                className={`story-ring hidden h-36 w-36 flex-col items-center justify-center rounded-full bg-brand-yellow text-center text-white shadow-soft lg:flex ${offset}`}
              >
                <img src={icon} alt={title} className="mb-3 h-8 w-8" />
                <p className="font-display text-2xl font-bold leading-none">{title}</p>
                <p className="mt-1 px-4 text-xs">{text}</p>
              </div>
            ))}
          </div>

          <FloatingAsset
            src={send13}
            alt="bag"
            className="left-8 top-16 hidden lg:block"
            animation="animate-drift"
          />
          <FloatingAsset
            src={send14}
            alt="ruler"
            className="left-4 bottom-16 hidden lg:block"
            animation="animate-swing"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
