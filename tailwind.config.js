const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1424px",
        xl: "1424px",
        "2xl": "1424px",
      }
    },
    screens: {
      'xss': {'max': '315px'},
      'xs': {'max': '414px'},
      'mdd': {'max': '899px'},
      'md': {'max':'780px'},
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        "17/20": '85%'
      },
      height: {
        "17/20": "85%"
      }
    },
  },
  plugins: [],
}
