import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#05070A',
          secondary: '#0B0F14',
          tertiary: '#111827',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#475569',
          faint: '#2D3748',
        },
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          subtle: 'rgba(255,255,255,0.04)',
          strong: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.06', letterSpacing: '-0.04em', fontWeight: '600' }],
        'section': ['42px', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '600' }],
        'subsection': ['32px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #22D3EE, #3B82F6, #8B5CF6)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
