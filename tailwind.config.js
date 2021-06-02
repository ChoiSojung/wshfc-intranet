module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          450:'#669900'
        },
        red: {
          350: '#FF9900',
          450: '#990033'
        },
        blue: {
          350: '#006699',
          450: '#003366'
        },
        gray: {
          450: '#D4D4D4'
        },
        yellow: {
          450: '#FFFFCC'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
