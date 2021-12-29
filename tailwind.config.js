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
      'xss': {'max': '335px'},
      'xs': {'max': '330px'},
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
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')"
      },
    },
  },
  plugins: [],
}
