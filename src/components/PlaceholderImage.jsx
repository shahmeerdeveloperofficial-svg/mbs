import React from 'react';

function PlaceholderImage({ className = '', rounded = 'rounded-[34px]', innerClassName = '' }) {
  return (
    <div className={`relative overflow-hidden bg-brand-green/10 ${rounded} ${className}`}>
      <div
        className={`hero-orb absolute inset-0 bg-checker opacity-80 ${innerClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-brand-green/10" />
    </div>
  );
}

export default PlaceholderImage;
