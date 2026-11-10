import React from 'react';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  arrow = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
    xl: 'px-9 py-4 text-lg',
  };

  const baseClass =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-display font-bold tracking-wide transition-all duration-300 ease-out active:scale-95 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none group';

  const variants = {
    primary:
      'bg-brand-yellow text-white shadow-[0_8px_18px_rgba(244,180,0,0.32)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(244,180,0,0.45)] hover:bg-brand-yellow-hover',
    green:
      'bg-brand-green text-white shadow-[0_8px_18px_rgba(15,107,62,0.25)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,107,62,0.38)] hover:bg-brand-green-dark',
    red:
      'bg-brand-red text-white shadow-[0_8px_18px_rgba(245,34,45,0.28)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(245,34,45,0.4)] hover:bg-[#d91823]',
    outline:
      'border-2 border-brand-green bg-white text-brand-green hover:-translate-y-1 hover:bg-brand-green hover:text-white shadow-[0_4px_12px_rgba(15,107,62,0.1)] hover:shadow-[0_8px_20px_rgba(15,107,62,0.2)]',
    'outline-yellow':
      'border-2 border-brand-yellow bg-white text-brand-dark hover:-translate-y-1 hover:bg-brand-yellow hover:text-white shadow-[0_4px_12px_rgba(244,180,0,0.15)] hover:shadow-[0_8px_20px_rgba(244,180,0,0.3)]',
    soft:
      'bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md hover:-translate-y-1 hover:bg-white/25 hover:ring-brand-yellow shadow-card',
    white:
      'bg-white text-brand-green shadow-card hover:-translate-y-1 hover:bg-brand-cream hover:text-brand-dark hover:shadow-soft',
  };

  return (
    <button
      className={`${baseClass} ${sizeClasses[size] || sizeClasses.md} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {/* Light sheen effect on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span
          className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      )}
    </button>
  );
}

export default Button;
