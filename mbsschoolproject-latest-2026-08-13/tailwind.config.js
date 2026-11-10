/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0f6b3e',
          yellow: '#f4b400',
          dark: '#0b2d4c',
          cream: '#fff9ef',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 107, 62, 0.12)',
        card: '0 15px 40px rgba(16, 24, 40, 0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(14px, -10px, 0)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.95' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
      animation: {
        'float-slow': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.2s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        swing: 'swing 5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3.6s ease-in-out infinite',
      },
      backgroundImage: {
        checker:
          'linear-gradient(45deg, rgba(15,107,62,0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(15,107,62,0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(15,107,62,0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(15,107,62,0.08) 75%)',
      },
    },
  },
  plugins: [],
};
