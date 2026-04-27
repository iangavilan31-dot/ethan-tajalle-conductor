import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Concert hall palette
        concert: {
          black: '#0a0a0a',
          'black-lighter': '#1a1a1a',
          'black-border': '#2a2a2a',
          ivory: '#f5f0e8',
          'ivory-soft': '#d4cec0',
          mahogany: '#6b4423',
          'mahogany-dark': '#2a1a0f',
          gold: '#a89968',
          'gold-muted': '#8b7d5f',
          burgundy: '#5a2333',
        },
        'aged-gold': '#9d8b6e',
        'ivory': '#f5f0e8',
        'ivory-soft': '#d4cec0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
