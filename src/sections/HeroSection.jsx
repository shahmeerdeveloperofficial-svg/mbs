import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import FloatingAsset from '../components/FloatingAsset';
import page1HeroImg from '../assets/Page 1.jpg';
import seend1 from '../assets/webpng/seend-01.png';
import seend10 from '../assets/webpng/seend-10.png';
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
  ['Activities', 'Story-led active play', send87, 'translate-y-0'],
  ['Education', 'Concept over memorization', send91, '-translate-x-8'],
  ['Creativity', 'Digital & Artistic skills', send92, 'translate-x-4'],
];

const learningDomains = [
  {
    title: 'Quran & Seerat',
    subtitle: 'Learning faith through understanding and practice',
    text: 'Age-appropriate Quran learning and Seerat help children connect Islamic teachings with everyday life. We nurture manners, honesty, kindness, patience, responsibility and respect for parents, teachers and elders.',
    points: ['Islamic manners and values', 'The life and character of Prophet Muhammad ﷺ', 'Applying faith in daily behaviour'],
    color: 'bg-brand-green',
  },
  {
    title: 'Character Building',
    subtitle: 'Helping children become dependable human beings',
    text: 'Through classroom activities, discussions, teamwork and everyday situations, students practise the values that make them trustworthy and responsible leaders.',
    points: ['Honesty and integrity', 'Discipline and self-control', 'Respect, empathy, courage and responsibility'],
    color: 'bg-[#e4573d]',
  },
  {
    title: 'Personality Grooming',
    subtitle: 'Helping every child find their confident voice',
    text: 'Regular opportunities to speak, present, participate and interact help every child discover their strengths and feel comfortable expressing themselves without fear.',
    points: ['Communication and public speaking', 'Presentation and listening skills', 'Positive body language and personal etiquette'],
    color: 'bg-brand-yellow',
  },
  {
    title: 'Life Skills',
    subtitle: 'Skills children need outside the classroom',
    text: 'Students gradually learn to think independently, make decisions and take ownership of their actions through practical, age-appropriate experiences.',
    points: ['Problem solving and decision making', 'Time management and goal setting', 'Financial awareness and basic entrepreneurship'],
    color: 'bg-[#1976d2]',
  },
  {
    title: 'Social Skills',
    subtitle: 'Learning how to live and cooperate with others',
    text: 'Children learn to communicate respectfully, cooperate in teams, listen to others and handle differences positively with empathy and brotherhood.',
    points: ['Teamwork and cooperation', 'Conflict management and leadership', 'Helping others and community participation'],
    color: 'bg-[#8a68b8]',
  },
  {
    title: 'Ideology',
    subtitle: 'Giving children a noble sense of purpose',
    text: 'We help students understand their identity, values and responsibilities towards their faith, Pakistan, society and the wider global community.',
    points: ['Justice, fairness and respect', 'Serving society responsibly', 'Growing as open-minded global citizens'],
    color: 'bg-[#d06d38]',
  },
  {
    title: 'Academics',
    subtitle: 'Deep conceptual foundations for lifetime learning',
    text: 'Academic learning focuses on understanding concepts, asking questions and using knowledge in practical situations rather than memorising for examinations.',
    points: ['English, Urdu and Mathematics', 'Science, Computer Science and STEM', 'Social Studies, General Knowledge and innovation'],
    color: 'bg-brand-green',
  },
];

function LearningProgramsModal({ onClose, onOpenAdmission }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-brand-cream pr-1 shadow-2xl sm:pr-4 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="programs-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close learning programs"
          className="sticky right-5 top-5 z-10 float-right mr-5 mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        <div className="px-6 pb-10 pt-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-brand-yellow px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-soft">
              Child Holistic Development Plan (CHD)
            </span>
            <h2 id="programs-title" className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-6xl">
              <span className="text-brand-green">Child Holistic</span>{' '}
              <span className="text-brand-yellow">Development Plan</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              At Marching Bell Schools, education prepares children for life, not only for examinations. Our seven connected domains of the <strong>Child Holistic Development Plan (CHD)</strong> build faith, character, confidence, practical skills and strong academic foundations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {learningDomains.map((domain) => (
              <article
                key={domain.title}
                className="rounded-[26px] bg-white p-6 shadow-card border border-brand-green/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className={`mb-4 inline-flex rounded-full px-4 py-1.5 font-display text-lg font-bold text-white ${domain.color}`}>
                  {domain.title}
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-green">{domain.subtitle}</h3>
                <p className="mt-3 leading-7 text-sm text-slate-600">{domain.text}</p>
                <ul className="mt-4 space-y-2 text-xs font-bold text-slate-600">
                  {domain.points.map((point) => (
                    <li key={point} className="flex gap-2 items-center">
                      <span className="text-brand-yellow font-extrabold">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[26px] bg-brand-green p-7 text-white shadow-card">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow">
                From Class 1 to Matric
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold">Digital Skills for the Future</h3>
              <p className="mt-3 leading-7 text-sm text-white/90">
                Digital Skills and Online Earning Skills are a compulsory part of our learning journey. Students progress from computer awareness and responsible technology use to graphic design, video editing, coding, web development, AI tools, freelancing and online business.
              </p>
              <p className="mt-3 font-bold text-brand-yellow text-sm">
                The goal is confident, responsible and opportunity-ready digital citizens.
              </p>
            </article>

            <article className="rounded-[26px] bg-brand-yellow p-7 text-white shadow-card">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-green">
                Age 2.5 to Kindergarten
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold">Early Years Jolly Phonics Program</h3>
              <p className="mt-3 leading-7 text-sm text-white/95">
                Using Jolly Phonics in a cultural and Islamic context, children learn through sounds, actions, stories and interaction. The program develops listening, speaking, phonics, early reading, writing, vocabulary and a lasting love for learning.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-[28px] border-2 border-dashed border-brand-yellow bg-white px-6 py-8 text-center sm:px-10">
            <h3 className="font-display text-3xl font-extrabold text-brand-green">
              One Child. Seven Domains. One Bigger Purpose.
            </h3>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-sm text-slate-500">
              Together, these experiences shape balanced individuals who are strong in faith, good in character, confident in personality, practical in life, positive in society, clear in purpose, strong in academics and skilled for the digital world.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  onClose();
                  if (onOpenAdmission) onOpenAdmission();
                }}
                arrow
              >
                Enroll In Our Programs
              </Button>
              <Button variant="outline" size="md" onClick={onClose}>
                Back to Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onOpenAdmission, onOpenTour, onOpenFee }) {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden pb-14 pt-4 sm:pb-18 lg:pb-20 lg:pt-6"
    >
      <img src={seend2} alt="" className="pointer-events-none absolute right-10 top-4 hidden w-[220px] lg:block opacity-60" />
      <img
        src={send94}
        alt=""
        className="pointer-events-none absolute bottom-2 left-1/2 hidden w-[150px] -translate-x-1/2 lg:block opacity-40"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column: Hero Content */}
        <div className="relative z-10 pt-4 lg:pt-8" data-reveal="left">
          <FloatingAsset
            src={send7}
            alt="pencil"
            className="-left-4 top-10 hidden lg:block"
            data-fly
            data-speed="0.22"
            data-rotate="10"
            data-direction="-1"
          />
          <FloatingAsset
            src={send8}
            alt="bulb"
            className="right-14 top-4 hidden lg:block"
            animation="animate-float-fast"
            data-fly
            data-speed="0.18"
            data-rotate="8"
          />
          <FloatingAsset
            src={seend9}
            alt="book"
            className="-left-8 bottom-28 hidden lg:block"
            animation="animate-drift"
            data-fly
            data-speed="0.16"
            data-direction="-1"
          />

          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition-transform hover:scale-105"
            data-reveal="zoom"
            data-delay="80"
          >
            <span>🎉</span>
            <span>Admissions Open 2026–27 • 20% Early Bird Discount</span>
          </div>

          <h1
            className="max-w-[620px] font-display text-5xl font-extrabold leading-[0.98] text-brand-dark sm:text-6xl lg:text-7xl"
            data-reveal
            data-delay="140"
          >
            Best Education
            <span className="mt-2 block text-brand-green">
              For Your Kids<span className="text-brand-yellow">.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-600" data-reveal data-delay="220">
            A caring, values-first learning environment combining <strong className="text-brand-green">Montessori excellence</strong>,{' '}
            <strong className="text-brand-yellow">Jolly Phonics</strong>, <strong className="text-brand-dark">Quran &amp; Seerat</strong>, and{' '}
            <strong className="text-brand-green">Future Digital Skills</strong> from Class 1 to Matric.
          </p>

          {/* Action Buttons Row */}
          <div className="mt-9 flex flex-wrap items-center gap-4" data-reveal data-delay="300">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Register Now (20% Off)
            </Button>

            {/* "Explore CHD" button with Interactive Hover Popup for Child Holistic Development Plan */}
            <div className="relative inline-block group">
              <Button
                variant="green"
                size="lg"
                onClick={() => setIsProgramsOpen(true)}
                aria-haspopup="dialog"
                className="!bg-[#0f6b3e] text-white hover:!bg-brand-yellow hover:text-brand-dark"
              >
                Explore CHD
              </Button>

              {/* Attractive Animated Hover Popup */}
              <div
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                role="tooltip"
              >
                <div className="relative rounded-2xl bg-gradient-to-r from-brand-dark via-[#0d4f2e] to-brand-green px-5 py-3 text-center text-white shadow-hover border-2 border-brand-yellow whitespace-nowrap backdrop-blur-md">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-brand-yellow text-base animate-pulse">✨</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-brand-yellow tracking-wide drop-shadow-sm">
                      Child Holistic Development Plan
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-white/90 mt-0.5">
                    7 Integrated Domains of Faith, Character &amp; Knowledge
                  </p>

                  {/* Sharp downward pointer arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-[#0d4f2e]" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[9px] border-transparent border-t-brand-yellow -z-10" />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenFee}
              className="text-sm font-extrabold text-brand-green hover:text-brand-yellow transition underline decoration-2 underline-offset-4 ml-1"
            >
              Fee Structure →
            </button>
          </div>

          {/* Key School Stats Bar */}
          <div
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-green/15 pt-6"
            data-reveal
            data-delay="360"
          >
            <div>
              <p className="font-display text-3xl font-black text-brand-green">1,500+</p>
              <p className="text-xs font-bold text-slate-500">Happy Learners</p>
            </div>
            <div>
              <p className="font-display text-3xl font-black text-brand-yellow">2</p>
              <p className="text-xs font-bold text-slate-500">Modern Campuses</p>
            </div>
            <div>
              <p className="font-display text-3xl font-black text-brand-green">15:1</p>
              <p className="text-xs font-bold text-slate-500">Student:Teacher</p>
            </div>
            <div>
              <p className="font-display text-3xl font-black text-[#e4573d]">100%</p>
              <p className="text-xs font-bold text-slate-500">Board Excellence</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Real School Photo */}
        <div className="relative mx-auto w-full max-w-[600px]" data-reveal="right" data-delay="120">
          <img
            src={seend10}
            alt=""
            className="pointer-events-none absolute -bottom-5 left-0 hidden w-[540px] max-w-full animate-pulse-soft lg:block"
          />

          <div className="relative mx-auto max-w-[520px]">
            {/* Organic Background Illustrator Shape */}
            <img src={seend1} alt="" className="mx-auto w-full animate-drift" />

            {/* REAL SCHOOL PHOTO */}
            <div className="absolute inset-[11%] overflow-hidden rounded-[42%_58%_55%_45%/45%_39%_61%_55%] shadow-hover border-4 border-white">
              <img
                src={page1HeroImg}
                alt="Marching Bell School students drawing: Dream, Learn, Grow, Succeed"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-green/20 via-transparent to-transparent" />
            </div>

            {/* Floating Tag over image */}
            <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2.5 shadow-soft border border-brand-yellow backdrop-blur-sm transition-transform hover:scale-105">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-sm text-white">★</span>
              <div>
                <p className="text-xs font-black text-brand-dark leading-tight">Hands-on Learning</p>
                <p className="text-[10px] font-bold text-slate-500">Dream • Learn • Grow • Succeed</p>
              </div>
            </div>
          </div>

          {/* Floating Feature Rings */}
          <div className="absolute right-0 top-6 grid gap-5 sm:right-2">
            {heroFeatureBubbles.map(([title, text, icon, offset]) => (
              <div
                key={title}
                className={`story-ring hidden h-32 w-32 flex-col items-center justify-center rounded-full bg-brand-yellow text-center text-white shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-hover lg:flex ${offset}`}
                data-fly
                data-speed="0.14"
                data-rotate="6"
              >
                <img src={icon} alt={title} className="mb-2 h-7 w-7 object-contain" />
                <p className="font-display text-xl font-black leading-none">{title}</p>
                <p className="mt-1 px-3 text-[10px] font-bold leading-tight opacity-90">{text}</p>
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

      {isProgramsOpen && (
        <LearningProgramsModal
          onClose={() => setIsProgramsOpen(false)}
          onOpenAdmission={onOpenAdmission}
        />
      )}
    </section>
  );
}

export default HeroSection;
