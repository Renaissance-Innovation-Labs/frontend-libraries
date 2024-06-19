/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderRightColor: 'transparent' },
        },
        curve: {
          from: { strokeDashoffset: 326.56 },
          to: { strokeDashoffset: 55 },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slightFade: {
          '0%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        typing: 'typing 4s steps(32) infinite',
        fadeIn: 'fadeIn 4s',
        slightFade: 'slightFade 1s',
      },
    },
  },
  plugins: [],
};
