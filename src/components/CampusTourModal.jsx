import React, { useState, useEffect } from 'react';
import Button from './Button';

function CampusTourModal({ isOpen, onClose, defaultCampus = 'dilfraz' }) {
  const [campus, setCampus] = useState(defaultCampus || 'dilfraz');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCampus) setCampus(defaultCampus);
  }, [defaultCampus]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm transition-all duration-300"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close campus visit booking"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition-all duration-300 hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        {!submitted ? (
          <div>
            <div className="text-center">
              <span className="inline-flex rounded-full bg-brand-yellow px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-soft">
                Schedule a Visit
              </span>
              <h2
                id="tour-modal-title"
                className="mt-4 font-display text-3xl font-extrabold text-brand-green sm:text-4xl"
              >
                Experience <span className="text-brand-yellow">Our Campuses</span>
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Walk through our lively Montessori wings, STEM labs, and sports arenas. Meet our academic mentors in person!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Campus *
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCampus('dilfraz')}
                    className={`rounded-2xl border-2 p-3 text-left transition ${
                      campus === 'dilfraz'
                        ? 'border-brand-green bg-brand-green text-white shadow-soft'
                        : 'border-brand-green/20 bg-white text-slate-700 hover:border-brand-yellow'
                    }`}
                  >
                    <p className="font-display font-bold text-sm">Dilfraz Campus</p>
                    <p className={`text-xs ${campus === 'dilfraz' ? 'text-white/80' : 'text-slate-400'}`}>
                      Garden Campus Rd, Model Town
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCampus('alriaz')}
                    className={`rounded-2xl border-2 p-3 text-left transition ${
                      campus === 'alriaz'
                        ? 'border-brand-green bg-brand-green text-white shadow-soft'
                        : 'border-brand-green/20 bg-white text-slate-700 hover:border-brand-yellow'
                    }`}
                  >
                    <p className="font-display font-bold text-sm">Al-Riaz Campus</p>
                    <p className={`text-xs ${campus === 'alriaz' ? 'text-white/80' : 'text-slate-400'}`}>
                      Canal Boulevard, Johar Town
                    </p>
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner transition focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner transition focus:border-brand-yellow focus:outline-none"
                  >
                    <option value="9:00 AM - 10:00 AM">Morning: 9:00 AM - 10:00 AM</option>
                    <option value="10:30 AM - 11:30 AM">Morning: 10:30 AM - 11:30 AM</option>
                    <option value="12:00 PM - 1:00 PM">Noon: 12:00 PM - 1:00 PM</option>
                    <option value="2:30 PM - 3:30 PM">Afternoon: 2:30 PM - 3:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Parent / Visitor Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ayesha Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0321 9876543"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 text-center">
                <Button variant="green" size="lg" className="w-full sm:w-auto" arrow>
                  Confirm Campus Visit
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center animate-modal-in">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-4xl text-white shadow-soft">
              ✓
            </div>
            <h3 className="mt-5 font-display text-3xl font-extrabold text-brand-green">
              Visit Booked Successfully!
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We look forward to welcoming you, <strong>{name}</strong>!
            </p>

            <div className="mx-auto my-5 max-w-sm rounded-2xl bg-white p-4 text-left shadow-card border border-brand-yellow/30 text-xs space-y-2">
              <p>
                <strong className="text-slate-700">Campus:</strong>{' '}
                {campus === 'dilfraz' ? 'Dilfraz Campus (Model Town)' : 'Al-Riaz Campus (Johar Town)'}
              </p>
              <p>
                <strong className="text-slate-700">Scheduled Date:</strong> {date || 'Next Working Day'}
              </p>
              <p>
                <strong className="text-slate-700">Time Slot:</strong> {timeSlot}
              </p>
              <p>
                <strong className="text-slate-700">Contact:</strong> {phone}
              </p>
            </div>

            <Button variant="primary" onClick={handleReset}>
              Done &amp; Return to Page
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CampusTourModal;
