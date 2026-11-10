import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import FloatingAsset from '../components/FloatingAsset';
import PlaceholderImage from '../components/PlaceholderImage';
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
  ['Activities', 'Motivate to study', send87, 'translate-y-0'],
  ['Education', 'Motivate to study', send91, '-translate-x-8'],
  ['Creativity', 'Motivate to study', send92, 'translate-x-4'],
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
    subtitle: 'Helping children become better human beings',
    text: 'Through classroom activities, discussions, teamwork and everyday situations, students practise the values that make them trustworthy and dependable.',
    points: ['Honesty and integrity', 'Discipline and self-control', 'Respect, empathy, courage and responsibility'],
    color: 'bg-[#e4573d]',
  },
  {
    title: 'Personality Grooming',
    subtitle: 'Helping every child find their confidence',
    text: 'Regular opportunities to speak, present, participate and interact help every child discover their strengths and feel comfortable expressing themselves.',
    points: ['Communication and public speaking', 'Presentation and listening skills', 'Positive body language and personal etiquette'],
    color: 'bg-brand-yellow',
  },
  {
    title: 'Life Skills',
    subtitle: 'Skills children need outside the classroom',
    text: 'Students gradually learn to think independently, make decisions and take ownership of their actions through practical, age-appropriate experiences.',
    points: ['Problem solving and decision making', 'Time management and goal setting', 'Financial awareness and basic entrepreneurship'],
    color: 'bg-[#4b9fca]',
  },
  {
    title: 'Social Skills',
    subtitle: 'Learning how to live and work with others',
    text: 'Children learn to communicate respectfully, cooperate in teams, listen to others and handle differences positively.',
    points: ['Teamwork and cooperation', 'Conflict management and leadership', 'Helping others and community participation'],
    color: 'bg-[#8a68b8]',
  },
  {
    title: 'Ideology',
    subtitle: 'Giving children a sense of purpose',
    text: 'We help students understand their identity, values and responsibilities towards their faith, Pakistan, society and the wider world.',
    points: ['Justice, fairness and respect', 'Serving society responsibly', 'Growing as open-minded global citizens'],
    color: 'bg-[#d06d38]',
  },
  {
    title: 'Academics',
    subtitle: 'Strong foundations for further learning',
    text: 'Academic learning focuses on understanding concepts, asking questions and using knowledge in practical situations rather than memorising for examinations.',
    points: ['English, Urdu and Mathematics', 'Science, Computer Science and STEM', 'Social Studies, General Knowledge and innovation'],
    color: 'bg-brand-green',
  },
];

function LearningProgramsModal({ onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-brand-cream pr-1 shadow-2xl sm:pr-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="programs-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close learning programs"
          className="sticky right-5 top-5 z-10 float-right mr-5 mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        <div className="px-6 pb-10 pt-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-brand-yellow px-5 py-2 text-sm font-extrabold text-white">
              Courses &amp; Learning Programs
            </span>
            <h2 id="programs-title" className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-6xl">
              <span className="text-brand-green">More Than a</span>{' '}
              <span className="text-brand-yellow">School Curriculum</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-500 sm:text-lg">
              At Marching Bell Schools, education prepares children for life, not only for examinations. Our seven connected domains build faith, character, confidence, practical skills and strong academic foundations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {learningDomains.map((domain) => (
              <article key={domain.title} className="rounded-[25px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className={`mb-5 inline-flex rounded-full px-4 py-2 font-display text-xl font-bold text-white ${domain.color}`}>
                  {domain.title}
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-green">{domain.subtitle}</h3>
                <p className="mt-3 leading-7 text-slate-500">{domain.text}</p>
                <ul className="mt-4 space-y-2 text-sm font-bold text-slate-600">
                  {domain.points.map((point) => <li key={point} className="flex gap-2"><span className="text-brand-yellow">✦</span>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[25px] bg-brand-green p-7 text-white shadow-card">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-yellow">From Class 1 to Matric</p>
              <h3 className="mt-2 font-display text-3xl font-bold">Digital Skills for the Future</h3>
              <p className="mt-3 leading-7 text-white/85">Digital Skills and Online Earning Skills are a compulsory part of our learning journey. Students progress from computer awareness and responsible technology use to graphic design, video editing, coding, web development, AI tools, freelancing and online business.</p>
              <p className="mt-3 font-bold text-brand-yellow">The goal is confident, responsible and opportunity-ready digital citizens.</p>
            </article>
            <article className="rounded-[25px] bg-brand-yellow p-7 text-white shadow-card">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">Age 1 to Kindergarten</p>
              <h3 className="mt-2 font-display text-3xl font-bold">Early Years Program</h3>
              <p className="mt-3 leading-7 text-white/90">Using Jolly Phonics in a cultural and Islamic context, children learn through sounds, actions, stories and interaction. The program develops listening, speaking, phonics, early reading, writing, vocabulary and a lasting love for learning.</p>
            </article>
          </div>

          <div className="mt-10 rounded-[28px] border-2 border-dashed border-brand-yellow bg-white px-6 py-8 text-center sm:px-10">
            <h3 className="font-display text-3xl font-extrabold text-brand-green">One Child. Seven Domains. One Bigger Purpose.</h3>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-500">Together, these experiences shape balanced individuals who are strong in faith, good in character, confident in personality, practical in life, positive in society, clear in purpose, strong in academics and skilled for the digital world.</p>
            <p className="mt-5 font-display text-2xl font-bold text-brand-yellow">Educating Minds. Building Character. Developing Leaders. Serving Humanity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

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
        <div className="relative z-10 pt-8 lg:pt-12" data-reveal="left">
          <FloatingAsset
            src={send7}
            alt="pencil"
            className="-left-4 top-12 hidden lg:block"
            data-fly
            data-speed="0.22"
            data-rotate="10"
            data-direction="-1"
          />
          <FloatingAsset
            src={send8}
            alt="bulb"
            className="right-14 top-8 hidden lg:block"
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
            className="mb-5 inline-flex rounded-full bg-brand-yellow px-7 py-3 text-lg font-bold text-white shadow-soft"
            data-reveal="zoom"
            data-delay="80"
          >
            20% off for early bird
          </div>
          <h1
            className="max-w-[620px] font-display text-5xl font-extrabold leading-[0.95] text-brand-yellow sm:text-6xl lg:text-7xl"
            data-reveal
            data-delay="140"
          >
            Best Education
            <span className="mt-2 block text-brand-green">For Your Kids.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-500" data-reveal data-delay="220">
            A caring learning environment where children grow with strong values,
            confidence, practical skills, and a love for learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4" data-reveal data-delay="300">
            <Button>Register Now</Button>
            <Button variant="outline" onClick={() => setIsProgramsOpen(true)} aria-haspopup="dialog">
              Know More
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3" data-reveal data-delay="360">
            <span className="h-4 w-4 rounded-full bg-brand-green" />
            <span className="h-4 w-4 rounded-full bg-[#5ca67a]" />
            <span className="h-4 w-4 rounded-full bg-[#7bc29a]" />
            <span className="h-4 w-4 rounded-full bg-[#b6e2cf]" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]" data-reveal="right" data-delay="120">
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
                data-fly
                data-speed="0.14"
                data-rotate="6"
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
      {isProgramsOpen && <LearningProgramsModal onClose={() => setIsProgramsOpen(false)} />}
    </section>
  );
}

export default HeroSection;
