const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
      disc: 'disc',
      decimal: 'decimal',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'body': ['sans-serif'],
    },
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
    },
    colors: {
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
};
