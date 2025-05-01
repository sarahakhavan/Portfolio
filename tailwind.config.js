/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html",
        './src/**/*.{html,js,css}',],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          background: '#FDFAFA',
          primaryText: '#1E1E1E',
        },
        maxWidth: {
            prose: '76ch', // Change this value to fit your preference
        },
      },
    },
    plugins: [],
  };