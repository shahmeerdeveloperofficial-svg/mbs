import React from 'react';
import SectionBadge from '../components/SectionBadge';
import PlaceholderImage from '../components/PlaceholderImage';
import send37 from '../assets/webpng/send-37.png';
import send24 from '../assets/webpng/send-24.png';
import send27 from '../assets/webpng/send-27.png';
import send28 from '../assets/webpng/send-28.png';
import send45 from '../assets/webpng/send-45.png';
import send47 from '../assets/webpng/send-47.png';

const courseCards = [
  {
    title: 'Junior Montessori',
    age: 'Age 2 to 4',
    badgeClass: 'bg-[#f5222d]',
    ageClass: 'text-[#ff6262]',
  },
  {
    title: 'Senior Montessori',
    age: 'Age 4 to 6',
    badgeClass: 'bg-brand-yellow',
    ageClass: 'text-brand-yellow',
  },
  {
    title: 'Advance Montessori',
    age: 'Age 6 to 8',
    badgeClass: 'bg-brand-green',
    ageClass: 'text-brand-green',
  },
];

function CoursesSection() {
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
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-green" data-reveal data-delay="180">
            Nurturing every age group with joyful milestones, hands-on discovery, and gentle
            classroom guidance.
          </p>
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
                <PlaceholderImage className="h-[260px] w-full rounded-[30px_30px_0_0]" />
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
    </section>
  );
}

export default CoursesSection;
