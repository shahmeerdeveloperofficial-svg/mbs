import React from 'react';

function SectionBadge({ children, className = '' }) {
  return (
    <div
      className={`inline-flex rounded-full bg-brand-yellow px-6 py-2 text-sm font-bold uppercase tracking-[0.28em] text-white shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionBadge;
