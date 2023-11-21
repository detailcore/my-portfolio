import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/components/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FF6464',
      secondry: '#00A8CC',
      dark: '#21243D',
      light: '#8695A4',
      gray: {
        50: '#f9fafb',
        100: 'f3f4f6',
        200: 'e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
    },
  },
  plugins: [],
}
