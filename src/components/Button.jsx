import React from 'react';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-300';

  const variants = {
    primary:
      'bg-brand-yellow text-white shadow-[6px_8px_0_rgba(15,107,62,0.15)] hover:-translate-y-1 hover:shadow-[10px_14px_0_rgba(15,107,62,0.18)]',
    outline:
      'border-2 border-brand-yellow bg-white text-brand-green hover:-translate-y-1 hover:bg-brand-yellow/10',
    green:
      'bg-brand-green text-white shadow-[6px_8px_0_rgba(244,180,0,0.16)] hover:-translate-y-1',
    soft:
      'bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/20',
  };

  return (
    <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
