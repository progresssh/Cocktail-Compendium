/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3333CC',
          50: '#A1A1E8',
          100: '#9595E4',
          200: '#7C7CDE',
          300: '#6464D8',
          400: '#4B4BD2',
          500: '#3333CC',
          600: '#242484',
          700: '#23238B',
          800: '#1B1B6A',
          900: '#121249',
        },
        secondary: {
          DEFAULT: '#5C03E2',
          500: '#5C03E2',
          600: '#3F0B8E',
        },
        success: {
          DEFAULT: '#00a71c',
          500: '#00a71c',
          600: '#008116',
        },
        info: {
          DEFAULT: '#33CCCC',
          500: '#33CCCC',
          600: '#15a09c',
        },
        warning: {
          DEFAULT: '#ffb217',
          500: '#ffb217',
          600: '#e28b00',
        },
        danger: {
          DEFAULT: '#C10000',
          500: '#C10000',
          600: '#A30000',
        },
        transparent: 'transparent',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
