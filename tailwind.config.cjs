/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0B3D2E',
        leaf: '#2E8B57',
        sand: '#F3EDE2',
        sky: '#D9F0FF',
        dusk: '#132A13',
      },
      fontFamily: {
        display: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 12px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
