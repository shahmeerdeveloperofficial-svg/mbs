import React, { useState } from 'react';
import SectionBadge from '../components/SectionBadge';
import Button from '../components/Button';
import ActivityDetailModal from '../components/ActivityDetailModal';
import { extraActivitiesData } from '../Data/schoolData';
import send24 from '../assets/webpng/send-24.png';
import send37 from '../assets/webpng/send-37.png';
import send38 from '../assets/webpng/send-38.png';
import seend7 from '../assets/webpng/seend-07.png';
import send47 from '../assets/webpng/send-47.png';
import send39 from '../assets/webpng/send-39.png';

function ActivitiesSection({ onOpenAdmission }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'Creative Expression', label: 'Creative Arts' },
    { id: 'Science & Technology', label: 'STEM & Robotics' },
    { id: 'Physical Well-being', label: 'Sports & Athletics' },
    { id: 'Faith & Morals', label: 'Quran & Values' },
    { id: 'Personality Grooming', label: 'Public Speaking' },
    { id: 'Future Skills', label: 'Digital Hub' },
  ];

  const filteredActivities =
    filterCategory === 'all'
      ? extraActivitiesData
      : extraActivitiesData.filter((a) => a.category === filterCategory);

  return (
    <section id="activities" className="scroll-mt-24 relative overflow-hidden py-16 sm:py-20 bg-brand-cream">
      <img src={send47} alt="" className="pointer-events-none absolute left-0 top-0 hidden w-[240px] lg:block opacity-35" />
      <img src={send39} alt="" className="pointer-events-none absolute bottom-0 right-0 hidden w-[250px] lg:block opacity-35" />
      <img src={send37} alt="" className="pointer-events-none absolute left-14 top-0 hidden w-20 lg:block" />
      <img src={send38} alt="" className="pointer-events-none absolute right-20 top-0 hidden w-20 lg:block" />

      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal="zoom">
            <SectionBadge>Extracurricular &amp; Life Skills</SectionBadge>
          </div>
          <h2
            className="mt-4 font-display text-4xl font-extrabold leading-none sm:text-6xl text-brand-dark"
            data-reveal
            data-delay="80"
          >
            <span className="text-brand-green">Enriching</span>{' '}
            <span className="text-brand-yellow">Kids Activities</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-slate-600 leading-7" data-reveal>
            Education thrives beyond the whiteboard. Our clubs, sports, and creative labs foster
            physical agility, teamwork, public speaking, and a love for joyful exploration.
          </p>

          {/* Category filter pills - interactive and filling the header nicely */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2" data-reveal data-delay="140">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilterCategory(c.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                  filterCategory === c.id
                    ? 'bg-brand-green text-white shadow-soft scale-105'
                    : 'bg-white text-slate-600 border border-brand-green/15 hover:border-brand-yellow hover:text-brand-green'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, filled grid */}
        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.title}
              className="group flex flex-col justify-between rounded-[30px] bg-white p-6 shadow-card border border-brand-green/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
              data-reveal="zoom"
              data-delay={String(80 + index * 60)}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider text-white ${activity.badgeClass}`}
                  >
                    {activity.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{activity.age}</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                  {activity.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 line-clamp-3">
                  {activity.desc}
                </p>

                {/* Highlights tags */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  {activity.highlights.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="text-brand-yellow font-extrabold">✦</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(activity)}
                  className="text-xs font-bold text-brand-green hover:text-brand-yellow transition flex items-center gap-1"
                >
                  <span>Activity Details</span>
                  <span>→</span>
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  className="text-xs px-4 py-2"
                  onClick={() => setSelectedActivity(activity)}
                >
                  Explore Club
                </Button>
              </div>
            </div>
          ))}

          {/* Floating assets */}
          <img
            src={seend7}
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 hidden w-20 -translate-x-1/2 -translate-y-1/2 animate-drift lg:block opacity-70"
            data-fly
            data-speed="0.12"
          />
          <img
            src={send24}
            alt=""
            className="pointer-events-none absolute -left-8 bottom-4 hidden w-20 animate-drift lg:block"
            data-fly
            data-speed="0.16"
            data-direction="-1"
          />
        </div>

        {/* Extracurricular Highlights Banner - completely eliminates any empty space */}
        <div
          className="mt-12 rounded-[28px] bg-gradient-to-r from-brand-dark via-[#0f5431] to-brand-green p-6 sm:p-8 text-white shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
          data-reveal="zoom"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl">🏆</span>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-brand-yellow">
                Annual Competitions &amp; Galas
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
                Inter-Campus Sports &amp; Science Exhibition
              </h3>
              <p className="mt-1 text-xs text-white/85 max-w-xl">
                Every child participates in at least two enrichment clubs per term. Nurturing leadership, healthy sportsmanship, and lifelong confidence!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenAdmission && onOpenAdmission()}
              arrow
            >
              Enroll Your Child
            </Button>
          </div>
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onOpenAdmission={onOpenAdmission}
        />
      )}
    </section>
  );
}

export default ActivitiesSection;
