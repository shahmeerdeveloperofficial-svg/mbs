import React, { useState } from 'react';
import Button from '../components/Button';
import marchingBellLogo from '../assets/marching-bell-logo.png';
import marchingBellWordmark from '../assets/marching-bell-wordmark.png';
import send63 from '../assets/webpng/send-63.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Campuses', href: '#campuses' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Activities', href: '#activities' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Fee Structure', href: '#fee' },
];

function Navbar({ onOpenAdmission, onOpenTour, onOpenFee }) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, href) => {
    if (href === '#fee') {
      e.preventDefault();
      if (onOpenFee) onOpenFee();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-brand-green/10 bg-brand-cream/95 backdrop-blur-lg transition-all duration-300">
      {/* Decorative top-left corner accent */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[65px] w-[70px] lg:block opacity-75">
        <svg
          viewBox="0 0 120 95"
          className="h-full w-full drop-shadow-sm"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H105 C102 18 95 32 82 48 C65 68 40 82 0 95 Z"
            fill="#0f6b3e"
          />
          <path
            d="M0 88 C36 76 60 62 76 44 C88 30 94 16 97 0"
            fill="none"
            stroke="#f4b400"
            strokeWidth="3"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="section-shell flex min-h-[96px] sm:min-h-[106px] items-center justify-between gap-3 py-2">
        {/* Official Marching Bell Schools Complete Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative z-20 flex shrink-0 items-center py-1 group lg:ml-1"
          title="Marching Bell Schools - Educating The Souls"
        >
          <img
            src={marchingBellLogo}
            alt="Marching Bell Schools - Educating The Souls"
            className="h-20 sm:h-[88px] lg:h-[96px] w-auto max-w-[170px] sm:max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          />
        </a>

        {/* Desktop Header Area (Two Rows: Top = Authentic Wordmark with Bell in B + Glass Shade; Bottom = Buttons) */}
        <div className="hidden lg:flex flex-1 flex-col justify-center gap-1.5 ml-2 xl:ml-5">
          {/* Top Row: Authentic Logo Wordmark (With Bell in B) inside Glass Shade centered directly above buttons */}
          <div className="relative flex w-full items-center justify-center">
            <div className="glass-pill inline-flex items-center px-6 py-2 rounded-2xl shadow-[0_4px_20px_rgba(15,107,62,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={marchingBellWordmark}
                alt="Marching Bell Schools - Educating The Souls"
                className="h-10 sm:h-12 xl:h-14 w-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Quick contact / admission status indicator on top right */}
            <div className="hidden 2xl:flex absolute right-0 items-center gap-3 text-xs font-semibold text-slate-600 bg-white/40 px-3.5 py-1.5 rounded-full border border-white/60 shadow-sm">
              <span className="flex items-center gap-1.5 text-brand-green font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Admissions Open 2026-27
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-bold">📞 0300-8488339 / 0300-8488332</span>
            </div>
          </div>

          {/* Bottom Row: Navigation Buttons & Action Buttons (Unchanged & fully functional) */}
          <div className="flex items-center justify-between gap-2 pt-0.5">
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-0.5 xl:gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative rounded-full px-3 py-1.5 text-[13px] xl:text-sm font-bold text-slate-700 transition duration-300 hover:bg-brand-yellow/15 hover:text-brand-green whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right CTA Buttons */}
            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenFee}
                className="text-xs font-bold text-brand-green underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow transition px-1"
              >
                Fee Details
              </button>

              <Button
                variant="green"
                size="sm"
                onClick={onOpenTour}
                className="shadow-sm !py-1.5 !px-3 xl:!px-4 text-xs xl:text-sm"
              >
                Book Visit
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenAdmission && onOpenAdmission()}
                arrow
                className="!py-1.5 !px-3.5 xl:!px-4 text-xs xl:text-sm"
              >
                Apply Online
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile View: Authentic Wordmark Pill (Centered) + Hamburger Button */}
        <div className="flex flex-1 items-center justify-center mx-2 lg:hidden">
          <div className="glass-pill px-3 py-1.5 rounded-xl truncate max-w-[210px] sm:max-w-none">
            <img
              src={marchingBellWordmark}
              alt="Marching Bell Schools - Educating The Souls"
              className="h-7 sm:h-8 w-auto object-contain mx-auto"
            />
          </div>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-yellow/20 text-brand-green transition hover:bg-brand-yellow shrink-0 lg:hidden"
          onClick={() => setOpen((val) => !val)}
          aria-label="Toggle navigation menu"
        >
          <img src={send63} alt="menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-brand-green/10 bg-brand-cream/98 px-5 py-6 shadow-xl lg:hidden animate-modal-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-2.5 text-base font-bold text-slate-800 transition hover:bg-brand-yellow/20 hover:text-brand-green"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3 pt-3 border-t border-brand-green/15">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setOpen(false);
                  if (onOpenAdmission) onOpenAdmission();
                }}
                arrow
              >
                Apply for Admission (20% Off)
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setOpen(false);
                  if (onOpenTour) onOpenTour();
                }}
              >
                Schedule Campus Tour
              </Button>

              <Button
                variant="green"
                size="md"
                onClick={() => {
                  setOpen(false);
                  if (onOpenFee) onOpenFee();
                }}
              >
                View Transparent Fee Schedule
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
