import React from 'react';

function FloatingAsset({
  src,
  alt,
  className = '',
  animation = 'animate-float-slow',
  widthClass = 'w-16',
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`pointer-events-none absolute select-none ${widthClass} ${animation} ${className}`}
    />
  );
}

export default FloatingAsset;
