import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';
import PlaceholderImage from '../components/PlaceholderImage';
import send42 from '../assets/webpng/send-42.png';
import send60 from '../assets/webpng/send-60.png';
import send65 from '../assets/webpng/send-65.png';
import send76 from '../assets/webpng/send-76.png';
import send82 from '../assets/webpng/send-82.png';

const aboutSlides = [
  {
    title: 'Growing bright minds through care, wonder, and everyday discovery.',
    description:
      'Marching Bell School creates a warm environment where every child feels seen, celebrated, and inspired to explore new skills with confidence.',
  },
  {
    title: 'Helping little learners build confidence through playful school stories.',
    description:
      'Our classrooms blend creativity, comfort, and guided discovery so children learn with curiosity and enjoy each moment of their day.',
  },
  {
    title: 'Creating a joyful space where imagination and learning grow together.',
    description:
      'We support each child with caring teachers, hands-on activities, and gentle routines that turn learning into a memorable adventure.',
  },
];

function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + aboutSlides.length) % aboutSlides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % aboutSlides.length);
  };

  return (
    <section id="location" className="relative overflow-hidden py-20 sm:py-24">
      <img src={send82} alt="" className="absolute left-8 top-10 hidden w-20 lg:block" />
      <img src={send82} alt="" className="absolute right-8 top-10 hidden w-20 lg:block" />

      <button
        type="button"
        aria-label="Previous about slide"
        onClick={previousSlide}
        className="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-slate-200/80 transition hover:scale-110 lg:grid"
        data-reveal="left"
      >
        <img src={send60} alt="" className="w-8 rotate-180" />
      </button>

      <button
        type="button"
        aria-label="Next about slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-slate-200/80 transition hover:scale-110 lg:grid"
        data-reveal="right"
      >
        <img src={send60} alt="" className="w-8" />
      </button>

      <div className="section-shell">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {aboutSlides.map((slide, index) => (
              <div
                key={index}
                className="grid w-full shrink-0 items-center gap-14 lg:grid-cols-[1fr_1.05fr]"
              >
                <div data-reveal="left">
                  <SectionBadge className="tracking-[0.45em]">About Us</SectionBadge>
                  <h2 className="mt-8 max-w-[530px] font-display text-5xl font-extrabold leading-tight text-brand-green sm:text-6xl">
                  {slide.title}
                  </h2>
                  <p className="mt-6 max-w-[540px] text-lg leading-8 text-slate-500">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button>Register Now</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-[580px]" data-reveal="right" data-delay="120">
                  <img
                    src={send76}
                    alt=""
                    className="absolute inset-0 h-full w-full animate-swing object-contain"
                  />
                  <div className="relative mx-auto h-[330px] w-[82%] translate-y-8 sm:h-[420px]">
                    <PlaceholderImage className="h-full w-full rounded-[26px]" />
                  </div>
                  <img
                    src={send42}
                    alt=""
                    className="absolute -left-4 bottom-10 w-24 animate-drift"
                    data-fly
                    data-speed="0.18"
                    data-direction="-1"
                  />
                  <img
                    src={send65}
                    alt=""
                    className="absolute left-1/2 top-8 w-24 -translate-x-1/2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
