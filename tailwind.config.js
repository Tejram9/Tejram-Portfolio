/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep Black & Sophisticated Studio Obsidian
        space: {
          950: '#030305', // Deepest void background
          900: '#07070d', // Obsidian section base
          850: '#0d0e17', // Studio glass panel
          800: '#141624', // Elevated surface
          750: '#1d2033', // Subtle hairline borders
          700: '#282c46', // Distinctive interactive borders
        },
        // Vibrant Purple Spectrum (Primary Creative Accent)
        purple: {
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#2e1065',
        },
        // Electric Blue / Cyber Cyan (Systems & Interconnection)
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          blue: '#3b82f6',
          indigo: '#6366f1',
          950: '#082f49',
        },
        // Selective Solar Orange / Amber (High-Priority Highlights & Telemetry)
        accent: {
          orange: '#f97316',
          amber: '#fb923c',
          fire: '#ea580c',
          glow: 'rgba(249, 115, 22, 0.4)',
        },
        cyber: {
          purple: '#a855f7',
          cyan: '#38bdf8',
          blue: '#3b82f6',
          orange: '#f97316',
          emerald: '#10b981',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.08) 1px, transparent 0)',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.15) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
