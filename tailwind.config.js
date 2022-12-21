/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
  
      },
      colors: {
        'primary': '#F56E00',

        'secondary': '#FAB10D',
        'overlay-opacity': "rgba(0,0,0,.85)",
        'text-black': "rgb(34, 28, 26)",
        'text-color': "#CBB7A7",
        'footer': '#1D1F22'
      },
      fontSize: {
        'h1': '3.815rem',
        'h2': "3.052em",
        'h3':'2.441rem',
        'h4': '1.953rem',
        'h5': '1.563rem',
        'h6': '1.25rem', 
        'h7': '1rem',
        'h8': '0.707rem',
        'p': '1.0rem',

        'h1s': '1.953rem',
        'h2s': '1.563rem',
        'h3s': '1.25rem', 
        'h4s': '1rem',
        'h5s': '0.707rem',
        'h6s': '0.707rem',

        'ps': '0.5656rem',
      },

      spacing: {
        '8': "0.5rem",
        '16': "1rem",
        '32': '2.0rem',
        '24': '1.5rem',
        '40': '2.5rem',
        '48': '3.0rem',
        '64': '4.0rem',
        '96': '6rem',
        '104': '6.5rem',
        '112': '7rem',
        '128': '8.0rem',
        '144': '7rem',
        '160': '10rem',
        '256': '16.0rem'
      }
    },
  },
  plugins: [],
}