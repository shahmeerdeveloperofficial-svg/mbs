import React, { useEffect } from 'react';
import Button from './Button';

function ActivityDetailModal({ activity, onClose, onOpenAdmission }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (activity) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activity, onClose]);

  if (!activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm transition-all duration-300"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="activity-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close activity details"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition-all duration-300 hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        <span
          className={`inline-flex rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-soft ${activity.badgeClass}`}
        >
          {activity.category}
        </span>

        <h2
          id="activity-modal-title"
          className="mt-4 font-display text-3xl font-extrabold text-brand-green sm:text-4xl"
        >
          {activity.title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-slate-600">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm border border-brand-green/10">
            🎯 Target: {activity.age}
          </span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm border border-brand-green/10">
            ⏰ Schedule: {activity.timing}
          </span>
        </div>

        <p className="mt-5 text-base leading-7 text-slate-600">{activity.desc}</p>

        <div className="mt-6 rounded-2xl bg-white p-5 shadow-card border border-brand-yellow/30">
          <h3 className="font-display text-lg font-bold text-brand-green">Program Highlights &amp; Skills</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {activity.highlights.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="text-brand-yellow font-extrabold">✦</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              if (onOpenAdmission) onOpenAdmission();
            }}
            arrow
          >
            Enroll in This Activity
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetailModal;
