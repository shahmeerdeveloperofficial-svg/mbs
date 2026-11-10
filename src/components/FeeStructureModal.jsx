import React, { useEffect } from 'react';
import { feeData } from '../Data/schoolData';
import Button from './Button';

function FeeStructureModal({ isOpen, onClose, onOpenAdmission }) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-green/75 p-4 backdrop-blur-sm transition-all duration-300"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-scroll relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-brand-cream p-6 shadow-2xl sm:p-10 border-4 border-brand-yellow/30 animate-modal-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fee-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close fee schedule"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-brand-green shadow-md transition-all duration-300 hover:rotate-90 hover:bg-brand-yellow hover:text-white"
        >
          ×
        </button>

        <div className="text-center">
          <span className="inline-flex rounded-full bg-brand-yellow px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-soft">
            Fee Structure 2026 – 2027
          </span>
          <h2
            id="fee-modal-title"
            className="mt-4 font-display text-4xl font-extrabold text-brand-green sm:text-5xl"
          >
            Transparent, <span className="text-brand-yellow">Affordable Excellence</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            We provide world-class Montessori, STEM &amp; Digital education at fair, family-friendly fee schedules.
            Enjoy our limited-time <strong className="text-brand-red">Early Bird 20% Discount</strong> on registration.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {feeData.map((item) => (
            <div
              key={item.grade}
              className="flex flex-col justify-between rounded-[26px] bg-white p-6 shadow-card border border-brand-green/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold text-white ${item.badge}`}>
                    {item.age}
                  </span>
                  <span className="text-xs font-bold text-slate-400">Monthly</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold text-brand-dark">
                  {item.grade}
                </h3>

                <div className="my-4 rounded-2xl bg-brand-cream/80 p-4 border border-brand-yellow/20">
                  <p className="text-xs font-semibold text-slate-500">Monthly Tuition Fee</p>
                  <p className="font-display text-3xl font-black text-brand-green">
                    PKR {item.monthlyTuition}
                    <span className="text-xs font-normal text-slate-400">/mo</span>
                  </p>

                  <div className="mt-3 border-t border-slate-200/80 pt-2 text-xs text-slate-600 space-y-1">
                    <p className="flex justify-between">
                      <span>Admission (Regular):</span>
                      <span className="line-through text-slate-400">PKR {item.admissionFee}</span>
                    </p>
                    <p className="flex justify-between font-bold text-brand-red">
                      <span>Early Bird (20% Off):</span>
                      <span>PKR {item.earlyBirdFee}</span>
                    </p>
                    <p className="flex justify-between text-slate-500">
                      <span>Security (Refundable):</span>
                      <span>PKR {item.securityFee}</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="font-bold text-brand-green">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => {
                    onClose();
                    if (onOpenAdmission) onOpenAdmission(item.grade);
                  }}
                  arrow
                >
                  Enroll With 20% Off
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholarships & Family discount box */}
        <div className="mt-8 rounded-[24px] bg-brand-green p-6 text-white sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-display text-xl font-bold text-brand-yellow">Sibling Concession</p>
              <p className="mt-2 text-xs leading-5 text-white/85">
                15% tuition concession for the 2nd child and 25% concession for the 3rd child enrolled at Marching Bell Schools.
              </p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-yellow">Merit Scholarships</p>
              <p className="mt-2 text-xs leading-5 text-white/85">
                Up to 50% academic scholarship for students securing top grades or showing exceptional aptitude in STEM &amp; Quran recitation.
              </p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-brand-yellow">Easy Installments</p>
              <p className="mt-2 text-xs leading-5 text-white/85">
                Monthly challans payable via 1Link, mobile banking apps, Easypaisa, or at our designated campus bank branches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeStructureModal;
