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
        // Deep Velvety Obsidian & Warm Graphite
        space: {
          950: '#08090d',
          900: '#0d0f14',
          850: '#13161e',
          800: '#1a1e28',
          750: '#222734',
          700: '#2c3344',
        },
        // Solar Amber & Champagne Gold (replaces cold blue with luxury studio palette)
        cobalt: {
          300: '#fde68a', // Soft Champagne
          400: '#fcd34d', // Radiant Champagne Gold
          500: '#fbbf24', // Core Solar Amber Gold
          600: '#f59e0b', // Burnished Amber
          700: '#d97706', // Warm Bronze
          800: '#b45309', // Deep Bronze Shadow
          900: '#78350f', // Dark Bronze Obsidian
          950: '#2a1404', // Warm Dark Glass Tint
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        gold: {
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
        },
        cyber: {
          cyan: '#fbbf24', // Unified with radiant gold
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          violet: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.08) 1px, transparent 0)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
