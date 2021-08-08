module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          'very-pale': 'hsl(225, 100%, 98%)',
          pale: 'hsl(225, 100%, 94%)',
          bright: 'hsl(245, 75%, 52%)',
          desaturated: 'hsl(224, 23%, 55%)',
          dark: 'hsl(223, 47%, 23%)',
        }
      },
      fontFamily: {
        'red-hat-display': 'Red Hat Display, sans-serif',
      },
      backgroundImage: {
        mobile: "url('./images/pattern-background-mobile.svg')",
        desktop: "url('./images/pattern-background-desktop.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
