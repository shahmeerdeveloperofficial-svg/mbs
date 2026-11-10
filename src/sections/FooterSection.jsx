import React from 'react';
import Button from '../components/Button';
import marchingBellLogo from '../assets/marching-bell-logo.png';
import send09 from '../assets/webpng/send-09.png';
import send12 from '../assets/webpng/send-12.png';
import send10 from '../assets/webpng/send-10.png';
import send28 from '../assets/webpng/send-28.png';
import send31 from '../assets/webpng/send-31.png';
import send80 from '../assets/webpng/send-80.png';

const footerBlocks = [
  {
    title: 'Certified Mentors',
    desc: 'Empowering children with patience, child-centered guidance, and Montessori excellence every single day.',
    icon: send09,
    bg: 'bg-[#f5222d]',
  },
  {
    title: 'Jolly Phonics & STEM',
    desc: 'Integrated curriculum blending early phonics mastery, conceptual mathematics, and digital skills.',
    icon: send12,
    bg: 'bg-brand-yellow text-brand-dark',
  },
  {
    title: 'Faith & Islamic Character',
    desc: 'Nurturing confident, polite, and compassionate individuals grounded in Seerat and moral values.',
    icon: send10,
    bg: 'bg-brand-green',
  },
];

function FooterSection({ onOpenAdmission, onOpenTour, onOpenFee }) {
  return (
    <footer className="relative overflow-hidden bg-brand-cream pt-16 border-t border-brand-green/15">
      <div className="section-shell">
        {/* Top 3 Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {footerBlocks.map((block, index) => (
            <div
              key={block.title}
              className={`${block.bg} rounded-[32px] px-8 py-9 text-center text-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
              data-reveal="zoom"
              data-delay={String(80 + index * 100)}
            >
              <img src={block.icon} alt={block.title} className="mx-auto h-14 w-14 object-contain" />
              <h3 className="mt-5 font-display text-2xl font-bold">{block.title}</h3>
              <p className="mt-2 text-xs leading-6 opacity-90">{block.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Footer Links & Campus Information */}
        <div className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          {/* Brand Info */}
          <div data-reveal="left">
            <div className="flex items-center gap-3">
              <img
                src={marchingBellLogo}
                alt="Marching Bell Schools - Educating The Souls"
                className="h-24 sm:h-28 w-auto object-contain drop-shadow-md"
              />
            </div>

            <p className="mt-5 max-w-[340px] text-xs sm:text-sm leading-6 text-slate-600">
              A premier educational system nurturing faith, character, leadership, and 21st-century digital competencies from early years to Matric.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenAdmission && onOpenAdmission()}
                arrow
              >
                Apply Online (20% Off)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenTour}
              >
                Campus Tour
              </Button>
            </div>
          </div>

          {/* Dilfraz Campus Contact */}
          <div data-reveal data-delay="100">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🏫</span>
              <h4 className="font-display text-xl font-bold text-brand-green">Dilfraz Campus</h4>
            </div>
            <p className="mt-1 text-xs font-bold text-brand-yellow">Early Years &amp; Primary Section</p>
            <div className="mt-3 space-y-2 text-xs text-slate-600">
              <p>📍 14-B Garden Campus Road, Model Town, Lahore</p>
              <p>📞 +92 300 4567891</p>
              <p>✉️ dilfraz@marchingbell.edu.pk</p>
              <p>⏰ 7:45 AM – 1:15 PM</p>
            </div>
          </div>

          {/* Al-Riaz Campus Contact */}
          <div data-reveal data-delay="180">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🏫</span>
              <h4 className="font-display text-xl font-bold text-brand-green">Al-Riaz Campus</h4>
            </div>
            <p className="mt-1 text-xs font-bold text-brand-yellow">Montessori to Matric (Science/IT)</p>
            <div className="mt-3 space-y-2 text-xs text-slate-600">
              <p>📍 88-C Main Canal Boulevard, Johar Town, Lahore</p>
              <p>📞 +92 300 9876543</p>
              <p>✉️ alriaz@marchingbell.edu.pk</p>
              <p>⏰ 7:45 AM – 2:00 PM</p>
            </div>
          </div>

          {/* Quick Links & Admissions */}
          <div data-reveal="right" data-delay="260">
            <h4 className="font-display text-xl font-bold text-brand-green">Admissions &amp; Help</h4>
            <div className="mt-4 flex flex-col gap-2 text-xs font-bold text-slate-600">
              <button
                type="button"
                onClick={onOpenFee}
                className="text-left hover:text-brand-green transition"
              >
                → Fee Structure 2026–2027
              </button>
              <button
                type="button"
                onClick={() => onOpenAdmission && onOpenAdmission()}
                className="text-left hover:text-brand-green transition"
              >
                → Early Bird 20% Discount Form
              </button>
              <button
                type="button"
                onClick={onOpenTour}
                className="text-left hover:text-brand-green transition"
              >
                → Book Physical Campus Visit
              </button>
              <a href="#courses" className="hover:text-brand-green transition">
                → Montessori &amp; Matric Programs
              </a>
              <a href="#activities" className="hover:text-brand-green transition">
                → STEM &amp; Sports Clubs
              </a>
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase text-slate-400">Connect With Us</p>
              <img src={send80} alt="Social media handles" className="mt-2 w-36 opacity-85 hover:opacity-100 transition" />
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-center text-xs font-semibold text-slate-500 sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <img src={send31} alt="" className="w-16 opacity-70" />
            <p className="font-bold text-slate-700">Marching Bell Schools System • Pakistan</p>
          </div>
          <p>© 2026 Marching Bell Schools. All Rights Reserved. Designed with Excellence.</p>
        </div>
      </div>

      <img
        src={send28}
        alt=""
        className="pointer-events-none absolute bottom-8 left-1/2 hidden w-20 -translate-x-1/2 lg:block opacity-50"
      />
    </footer>
  );
}

export default FooterSection;
