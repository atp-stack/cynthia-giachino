/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#A2783A',   // buttons, headings, rules, wordmark
          deep: '#8C6529',      // shadowed / pressed gold
          light: '#C9A45C',     // decorative accents, hairlines
        },
        ink: {
          DEFAULT: '#2E323B',   // primary dark headings ("Stories of")
          soft: '#4A4A4A',      // body copy
          navy: '#1F2A3D',      // wheel labels / deep serif
        },
        lavender: {
          bg: '#EAE6F2',        // About-section watercolor wash base
          soft: '#CAD0DF',      // top-of-hero fade
          mist: '#DCD8E8',
        },
        cream: '#F1EFEC',       // Her Books / section base
        'footer-purple': '#7E7F9F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wordmark: '0.18em',
        nav: '0.16em',
        button: '0.22em',
        eyebrow: '0.28em',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}
