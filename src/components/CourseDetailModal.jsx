import React, { useEffect } from 'react';
import Button from './Button';

function CourseDetailModal({ course, onClose, onOpenAdmission }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (course) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm transition-all duration-300"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close course details"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition-all duration-300 hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200">
          {course.image && (
            <img
              src={course.image}
              alt={course.title}
              className="h-32 w-32 rounded-3xl object-cover shadow-soft border-2 border-brand-yellow/40 shrink-0"
            />
          )}
          <div>
            <span
              className={`inline-block rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider text-white ${course.badgeClass || 'bg-brand-green'}`}
            >
              {course.age}
            </span>
            <h2 id="course-modal-title" className="mt-2 font-display text-3xl font-extrabold text-brand-green sm:text-4xl">
              {course.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 font-semibold">
              Marching Bell Schools Comprehensive Learning Stream
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-dark">About This Educational Stage</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {course.detailedDesc ||
                'Designed to ignite curiosity, self-confidence, and conceptual clarity. Our child-centered learning combines Jolly Phonics, hands-on sensory exploration, Islamic ethics, and creative expression in a loving environment.'}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-card border border-brand-green/10">
              <h4 className="font-display text-base font-bold text-brand-green">Core Learning Focus</h4>
              <ul className="mt-3 space-y-2 text-xs font-semibold text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-extrabold">✦</span>
                  <span>Jolly Phonics &amp; Early Reading Comprehension</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-extrabold">✦</span>
                  <span>Montessori Math &amp; Spatial Reasoning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-extrabold">✦</span>
                  <span>Conversational English &amp; Urdu Eloquence</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-extrabold">✦</span>
                  <span>Quranic Duas, Seerat Stories &amp; Daily Etiquettes</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-card border border-brand-green/10">
              <h4 className="font-display text-base font-bold text-brand-yellow">Key Developmental Benefits</h4>
              <ul className="mt-3 space-y-2 text-xs font-semibold text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-brand-green font-extrabold">✓</span>
                  <span>Fine motor dexterity &amp; sensory coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-green font-extrabold">✓</span>
                  <span>Emotional resilience &amp; respectful collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-green font-extrabold">✓</span>
                  <span>Independent problem solving without exam stress</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-green font-extrabold">✓</span>
                  <span>Early digital and logical thinking foundations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-yellow-light/60 p-4 border border-brand-yellow/30 text-xs text-slate-700">
            <strong>Typical Day:</strong> Morning Assembly &amp; Duas → Circle Time &amp; Vocabulary → Montessori Shelf Exploration → Snack &amp; Hygiene Routine → Phonics Reading → Creative Arts &amp; Outdoor Play.
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <Button variant="outline" size="sm" onClick={onClose}>
            Back to Courses
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              if (onOpenAdmission) onOpenAdmission(course.title);
            }}
            arrow
          >
            Apply for {course.title}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailModal;
