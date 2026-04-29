/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#151525',
          600: '#1a1a2e',
          500: '#22223a',
          400: '#2a2a45',
        },
        'accent': {
          cyan: '#00f5d4',
          blue: '#7b61ff',
          purple: '#a855f7',
          pink: '#f472b6',
          teal: '#2dd4bf',
        },
        'text': {
          primary: '#f0f0f5',
          secondary: '#a0a0b8',
          muted: '#6b6b85',
        },
        'glass': {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
