const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#11151c',
      'navy': '#212d40',
      'lowTeal': '#387d7a',
      'midTeal': '#3ccead',
      'teal': '#47e5bc',
      'bg-gray': '#f3f4f6',
      'white': '#ffffff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
