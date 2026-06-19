import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:     { DEFAULT: '#070A10', 2: '#0C111B' },
        panel:  { DEFAULT: '#101724', 2: '#141D2D' },
        txt:    '#EAF1F9',
        muted:  '#94A2B6',
        dim:    '#63718A',
        cyan:   { DEFAULT: '#2BC4DE', 2: '#13A7C2' },
        blue:   '#3D7BFF',
        violet: '#7C6BF0',
        green:  '#37D9A0',
        // Product accents
        clerque:   '#7C8DF5',
        sariassist: '#E8A24E',
        altspace:  '#7B5BD1',
        scatto:    '#E0573B',
        everafter: '#5E9E7E',
        sangguni:  '#5B8BF0',
        steady:    '#37D9A0',
        locatr:    '#2BC4DE',
        konek:     '#3D7BFF',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans:    ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
    },
  },
  plugins: [],
};

export default config;
