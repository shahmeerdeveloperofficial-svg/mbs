import React, { useState } from 'react';
import send63 from '../assets/webpng/send-63.png';

const navItems = ['Home', 'Courses', 'Location', 'Contact', 'Blog'];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-brand-green/10 bg-brand-cream/95 backdrop-blur-lg">
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[230px] w-[300px] lg:block">
        <svg
          viewBox="0 0 300 230"
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H258 V18 C256 36 252 48 245 60 C228 91 191 108 147 111 C97 114 49 123 0 141 Z"
            fill="#0f6b3e"
          />
          <path
            d="M0 151 C48 133 97 124 149 121 C193 118 230 101 248 70 C258 54 263 38 264 6"
            fill="none"
            stroke="#f4b400"
            strokeWidth="3"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-2 hidden h-16 w-48 -translate-x-1/2 bg-[radial-gradient(circle,_rgba(15,107,62,0.18)_1.5px,_transparent_1.5px)] bg-[length:10px_10px] opacity-40 lg:block" />

      <div className="section-shell flex min-h-[88px] items-center justify-between gap-4">
        <div className="hidden min-w-[150px] lg:block" />

        <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`rounded-full px-5 py-2 text-[15px] font-semibold tracking-[0.01em] transition duration-300 ${
                index === 0
                  ? 'bg-brand-green/8 text-brand-green'
                  : 'text-slate-600 hover:bg-brand-yellow/10 hover:text-brand-green'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden w-[280px] lg:block" />

        <button
          className="grid h-12 w-12 place-items-center rounded-full bg-brand-yellow/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <img src={send63} alt="menu" className="w-7" />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 hidden h-[64px] w-[min(280px,calc(50vw-20px))] -translate-y-1/2 items-center justify-center rounded-l-[26px] bg-brand-green px-10 text-sm font-medium text-white lg:flex">
        <a href="#signup" className="transition hover:text-brand-yellow">
          Sign up
        </a>
        <a href="#login" className="ml-8 transition hover:text-brand-yellow">
          Log in
        </a>
      </div>

      {open && (
        <div className="border-t border-brand-green/10 bg-brand-cream lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-bold text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2 text-center">
              <a
                href="#signup"
                className="flex-1 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white"
              >
                Sign up
              </a>
              <a
                href="#login"
                className="flex-1 rounded-full border-2 border-brand-green px-5 py-3 text-sm font-bold text-brand-green"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
