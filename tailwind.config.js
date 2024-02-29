/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#03103D',
      'secondary': '#0087FF',
      'danger': '#e3342f',
     }),

     extend: {
      boxShadow: {
        'sha1': '-5px -5px 10px 0px #6336E4 inset, 2px 2px 6px 0px #A78DF0 inset, 5px 5px 10px 0px rgba(108, 106, 213, 0.25)',
        'sha2': '-5px -5px 10px 0px #DFE3EF inset, 2px 2px 6px 0px #EEF1F9 inset, 5px 5px 10px 0px rgba(108, 106, 212, 0.25)',
        'sha3': '0px 4px 6px -1px rgba(13, 16, 45, 0.10), 0px 2px 4px -2px rgba(13, 16, 45, 0.10)',
      }
    },

    fontFamily: {
      'font1': ['DM Sans'],
      'font2': ['Inter'],
     },

      backgroundImage: {
       'img1': "url('p1.png')",
      }

  },
  plugins: [],
}

