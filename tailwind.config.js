/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'base-color': '#9FD9F6',
        'main-color': '#2365DE',
        'accent-color': '#FFFF57',
      },
      backgroundImage: {
        'tile-image': "url(/public/images/note.jpg)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

