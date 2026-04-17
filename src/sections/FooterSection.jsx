import React from 'react';
import send09 from '../assets/webpng/send-09.png';
import send12 from '../assets/webpng/send-12.png';
import send10 from '../assets/webpng/send-10.png';
import send28 from '../assets/webpng/send-28.png';
import send31 from '../assets/webpng/send-31.png';
import send80 from '../assets/webpng/send-80.png';

const footerBlocks = [
  {
    title: 'Quality Teachers',
    icon: send09,
    bg: 'bg-[#f5222d]',
  },
  {
    title: 'Best Curriculum',
    icon: send12,
    bg: 'bg-brand-yellow',
  },
  {
    title: 'Global Recognition',
    icon: send10,
    bg: 'bg-brand-green',
  },
];

function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-brand-cream pt-16">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {footerBlocks.map((block, index) => (
            <div
              key={block.title}
              className={`${block.bg} rounded-[34px] px-8 py-10 text-center text-white shadow-card transition hover:-translate-y-2`}
              data-reveal="zoom"
              data-delay={String(80 + index * 100)}
            >
              <img src={block.icon} alt={block.title} className="mx-auto h-16 w-16" />
              <h3 className="mt-6 font-display text-3xl font-bold">{block.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/90">
                Empowering children with a safe learning circle, modern activities, and caring
                guidance every day.
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.95fr_0.85fr_0.9fr_0.8fr]">
          <div data-reveal="left">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-[22px] bg-brand-green text-2xl font-black text-white shadow-soft">
                M
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-green">
                  Marching Bell School
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-slate-400">
                  Learn with joy
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-[320px] text-base leading-8 text-slate-500">
              A playful learning environment where kids grow with confidence, creativity, and
              caring guidance every day.
            </p>
          </div>

          <div data-reveal data-delay="100">
            <h3 className="font-display text-3xl font-bold text-brand-green">Contact</h3>
            <div className="mt-5 space-y-3 text-base leading-8 text-slate-500">
              <p>
                <span className="font-bold text-slate-700">Phone:</span> +92 300 1234567
              </p>
              <p>
                <span className="font-bold text-slate-700">Email:</span> info@marchingbell.edu
              </p>
              <p>
                <span className="font-bold text-slate-700">Address:</span> 12 Garden Campus
                Road, Lahore, Pakistan
              </p>
            </div>
          </div>

          <div data-reveal data-delay="180">
            <h3 className="font-display text-3xl font-bold text-brand-green">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-base font-bold text-slate-500">
              <a href="#home" className="transition hover:text-brand-green">
                Home
              </a>
              <a href="#courses" className="transition hover:text-brand-green">
                Courses
              </a>
              <a href="#location" className="transition hover:text-brand-green">
                About Us
              </a>
              <a href="#contact" className="transition hover:text-brand-green">
                Activities
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end" data-reveal="right" data-delay="260">
            <h3 className="font-display text-3xl font-bold text-brand-green">Follow Us</h3>
            <p className="mt-5 text-base leading-8 text-slate-500">
              Stay connected for updates, events, and school stories.
            </p>
            <img src={send80} alt="social icons" className="mt-5 w-40" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-center lg:flex-row lg:text-left">
          <div className="flex items-center gap-4">
            <img src={send31} alt="" className="w-20" />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
              Marching Bell School
            </p>
          </div>
          <p className="text-sm font-semibold text-slate-400">
            Copyright 2026 Marching Bell School. All rights reserved.
          </p>
        </div>
      </div>

      <img
        src={send28}
        alt=""
        className="absolute bottom-16 left-1/2 hidden w-24 -translate-x-1/2 lg:block"
      />
    </footer>
  );
}

export default FooterSection;
