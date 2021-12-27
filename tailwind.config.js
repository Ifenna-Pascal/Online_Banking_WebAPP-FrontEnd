const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xss': {'max': '315px'},
      'xs': {'max': '414px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
