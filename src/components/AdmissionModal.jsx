import React, { useState, useEffect } from 'react';
import Button from './Button';

function AdmissionModal({ isOpen, onClose, initialGrade = '', initialCampus = 'dilfraz' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    grade: initialGrade || 'Junior Montessori',
    campus: initialCampus || 'dilfraz',
    parentName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    if (initialGrade) setFormData((prev) => ({ ...prev, grade: initialGrade }));
    if (initialCampus) setFormData((prev) => ({ ...prev, campus: initialCampus }));
  }, [initialGrade, initialCampus]);

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
    const generatedId = `MBS-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
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
        className="modal-scroll relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close admission form"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition-all duration-300 hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        {!submitted ? (
          <div>
            <div className="text-center">
              <span className="inline-flex rounded-full bg-brand-yellow px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-soft">
                Admissions Open 2026 – 2027
              </span>
              <h2
                id="admission-modal-title"
                className="mt-4 font-display text-3xl font-extrabold text-brand-green sm:text-4xl"
              >
                Online Registration <span className="text-brand-yellow">&amp; Inquiry</span>
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Join the Marching Bell Schools family. Fill in the details below to claim your{' '}
                <strong className="text-brand-red">Early Bird 20% Fee Concession</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Child&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ibrahim Faisal"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Age / Date of Birth *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4.5 Years / 15-Mar-2022"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Applying for Grade *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  >
                    <option value="Junior Montessori">Junior Montessori (Age 2.5 - 4)</option>
                    <option value="Senior Montessori">Senior Montessori (Age 4 - 6)</option>
                    <option value="Advance Montessori">Advance Montessori (Age 6 - 7.5)</option>
                    <option value="Primary (Grades 1-5)">Primary Section (Grades 1-5)</option>
                    <option value="Middle (Grades 6-8)">Middle Section (Grades 6-8)</option>
                    <option value="High (Matric - Science/CS)">High Section (Matric - Science/CS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Campus *
                  </label>
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  >
                    <option value="dilfraz">Dilfraz Campus (Model Town / Garden)</option>
                    <option value="alriaz">Al-Riaz Campus (Canal / Johar Town)</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Faisal Mahmood"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Mobile / WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Any questions or notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about previous school or any questions regarding school transport, timings, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="mt-1.5 w-full rounded-2xl border-2 border-brand-green/15 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-inner transition focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
                />
              </div>

              <div className="rounded-2xl border-2 border-dashed border-brand-yellow bg-brand-yellow-light/50 p-3 text-center text-xs font-bold text-slate-700">
                🎉 <span className="text-brand-green">Early Bird Benefit:</span> 20% discount on
                Admission Fee + Free Jolly Phonics Starter Kit upon early registration!
              </div>

              <div className="pt-2 text-center">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" arrow>
                  Submit Registration Form
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
              Registration Received!
            </h3>
            <p className="mt-2 text-base text-slate-600">
              Thank you, <strong>{formData.parentName}</strong>. We have registered{' '}
              <strong>{formData.studentName}</strong> for{' '}
              <strong>{formData.grade}</strong> at our{' '}
              <strong>
                {formData.campus === 'dilfraz' ? 'Dilfraz Campus' : 'Al-Riaz Campus'}
              </strong>
              .
            </p>

            <div className="mx-auto my-6 max-w-sm rounded-2xl bg-white p-4 shadow-card border border-brand-yellow/30">
              <p className="text-xs uppercase font-extrabold text-slate-400">Your Inquiry Reference ID</p>
              <p className="mt-1 font-display text-2xl font-black text-brand-yellow">{appId}</p>
              <p className="mt-2 text-xs text-slate-500">
                Our Admission Officer will call you at <strong>{formData.phone}</strong> within 24 hours to schedule the friendly student assessment and campus tour.
              </p>
            </div>

            <Button variant="green" onClick={handleReset}>
              Close &amp; Continue Browsing
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdmissionModal;
