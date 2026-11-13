/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#090B08',
        lime: {
          acid: '#D5FF00',
          dim: '#B8E000',
          pale: '#E8FF66',
        },
        offwhite: '#F3F1E8',
        charcoal: '#1A1C18',
        olive: '#3D4038',
        softgrey: '#8A8C85',
        smoke: '#C4C6BF',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-hero': 'clamp(4rem, 12vw, 11rem)',
        'fluid-xl': 'clamp(2.5rem, 6vw, 6rem)',
        'fluid-lg': 'clamp(1.8rem, 4vw, 3.5rem)',
        'fluid-md': 'clamp(1.2rem, 2.5vw, 2rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        display: '-0.02em',
        wide: '0.08em',
        widest: '0.2em',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
