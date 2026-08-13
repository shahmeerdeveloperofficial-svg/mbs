import React, { useEffect, useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import send37 from '../assets/webpng/send-37.png';
import send24 from '../assets/webpng/send-24.png';
import send27 from '../assets/webpng/send-27.png';
import send28 from '../assets/webpng/send-28.png';
import send45 from '../assets/webpng/send-45.png';
import send47 from '../assets/webpng/send-47.png';
import juniorMontessoriImage from '../assets/cicular shape-01.png';
import seniorMontessoriImage from '../assets/cicular shape-02.png';
import advanceMontessoriImage from '../assets/cicular shape-03.png';

const courseCards = [
  {
    title: 'Junior Montessori',
    age: 'Age 2 to 4',
    image: juniorMontessoriImage,
    badgeClass: 'bg-[#f5222d]',
    ageClass: 'text-[#ff6262]',
  },
  {
    title: 'Senior Montessori',
    age: 'Age 4 to 6',
    image: seniorMontessoriImage,
    badgeClass: 'bg-brand-yellow',
    ageClass: 'text-brand-yellow',
  },
  {
    title: 'Advance Montessori',
    age: 'Age 6 to 8',
    image: advanceMontessoriImage,
    badgeClass: 'bg-brand-green',
    ageClass: 'text-brand-green',
  },
];

const courseDetails = [
  ['Quran & Seerat', 'Understanding faith and learning from the life and teachings of Prophet Muhammad ﷺ in a simple, meaningful way.'],
  ['Character Building', 'Developing honesty, discipline, respect, responsibility and the qualities of a trustworthy human being.'],
  ['Personality Grooming', 'Building confidence through communication, public speaking, presentation, manners and everyday interaction.'],
  ['Life Skills', 'Teaching decision-making, problem-solving, time management, teamwork and basic financial awareness.'],
  ['Social Skills', 'Helping students communicate, cooperate, respect others and work confidently as part of a team.'],
  ['Ideology', 'Developing identity, purpose and responsibility towards faith, family, society, Pakistan and humanity.'],
  ['Academics', 'Meaningful learning in English, Urdu, Mathematics, Science, Computer Studies and other core subjects.'],
  ['Digital Skills & Online Earning', 'From Class 1 to Matric, students explore graphic design, coding, video editing, digital marketing, e-commerce, AI and freelancing.'],
  ['Early Years — Jolly Phonics', 'From one year to Kindergarten, children learn early English through Jolly Phonics, adapted to Islamic values and Pakistani culture.'],
];

function CoursesInfoModal({ onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="presentation"
    >
      <div className="modal-scroll relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 pr-4 shadow-2xl sm:p-10 sm:pr-8" role="dialog" aria-modal="true" aria-labelledby="courses-info-title">
        <button type="button" onClick={onClose} aria-label="Close courses information" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md hover:bg-brand-yellow hover:text-white">×</button>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-5 py-2 text-sm font-extrabold uppercase tracking-widest text-white">Our Learning Journey</span>
          <h2 id="courses-info-title" className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-6xl"><span className="text-brand-green">More Than</span> <span className="text-brand-yellow">Exams</span></h2>
          <p className="mt-5 leading-7 text-slate-500">At Marching Bell Schools, our learning program combines academics with Islamic values, character development, confidence, practical life skills and modern digital education.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courseDetails.map(([title, text], index) => (
            <article key={title} className="rounded-[24px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <span className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full font-display font-bold text-white ${index % 3 === 0 ? 'bg-brand-green' : index % 3 === 1 ? 'bg-brand-yellow' : 'bg-[#e4573d]'}`}>{index + 1}</span>
              <h3 className="font-display text-2xl font-bold text-brand-green">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[25px] bg-brand-green p-7 text-center text-white">
          <h3 className="font-display text-3xl font-bold">One School. A Complete Learning Journey.</h3>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-white/85">From the early years to Matric, we help every child grow into a confident, skilled, responsible and compassionate individual — ready to face the world and make a positive contribution.</p>
          <p className="mt-4 font-display text-xl font-bold text-brand-yellow">Educating Minds. Building Character. Developing Leaders.</p>
        </div>
      </div>
    </div>
  );
}

function CoursesSection() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <section id="courses" className="relative overflow-hidden py-20 sm:py-24">
      <img src={send47} alt="" className="absolute left-0 top-0 hidden w-[240px] lg:block" />
      <img src={send45} alt="" className="absolute bottom-0 right-0 hidden w-[230px] lg:block" />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal="zoom">
            <SectionBadge>Playing in Learning</SectionBadge>
          </div>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-none sm:text-6xl" data-reveal data-delay="90">
            <span className="text-brand-green">Our</span>{' '}
            <span className="text-brand-yellow">Courses</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-green" data-reveal data-delay="180">
            Preparing children for life, not just exams, through academics, Islamic values,
            character building, confidence, practical skills, and modern digital education.
          </p>
          <button
            type="button"
            onClick={() => setIsInfoOpen(true)}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 font-extrabold text-white shadow-[6px_8px_0_rgba(244,180,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-brand-yellow"
            data-reveal
            data-delay="220"
          >
            Explore Our Learning Journey <span aria-hidden="true">→</span>
          </button>
          <div className="mt-8 flex items-center justify-center gap-5" data-reveal data-delay="260">
            <img src={send24} alt="" className="w-24 animate-drift" data-fly data-speed="0.16" />
            <img src={send27} alt="" className="w-16 animate-pulse-soft" />
            <img src={send28} alt="" className="w-32" />
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {courseCards.map((course, index) => (
            <article
              key={course.title}
              className="group overflow-hidden rounded-[34px] bg-white shadow-card transition duration-300 hover:-translate-y-3 hover:shadow-soft"
              data-reveal="zoom"
              data-delay={String(120 + index * 110)}
            >
              <div className="relative p-4 pb-0">
                <img
                  src={course.image}
                  alt={`${course.title} classroom activity`}
                  className="h-[260px] w-full rounded-[30px_30px_0_0] object-contain object-center"
                />
                <div
                  className={`absolute left-1/2 top-[230px] w-[82%] -translate-x-1/2 rounded-full px-6 py-3 text-center font-display text-2xl font-bold text-white ${course.badgeClass}`}
                >
                  {course.title}
                </div>
              </div>
              <div className="px-8 pb-8 pt-14 text-center">
                <p className="text-base leading-8 text-slate-400">
                  Warm guidance, imaginative play, confidence building, and a balanced start
                  that keeps little learners excited each day.
                </p>
                <div className="mt-8 border-t-2 border-dashed border-slate-200 pt-7">
                  <p className={`font-display text-3xl font-bold ${course.ageClass}`}>{course.age}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {isInfoOpen && <CoursesInfoModal onClose={() => setIsInfoOpen(false)} />}
    </section>
  );
}

export default CoursesSection;
