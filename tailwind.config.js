/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
        colors: {
            'dark-magenta': '#502050',
            'soft-pink': '#ee68a4',
            'dark-grayish-magenta': '#937b92',
            'light-grayish-magenta': '#f7f2f7'
        },
        fontFamily: {
            'league-spartan': ['League Spartan'],
        }
    },
  },
  plugins: [],
};
