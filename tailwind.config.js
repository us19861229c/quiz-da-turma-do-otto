module.exports = {
  purge: [
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        livros: '#45d0c1',
        ariel3: '#24a57c',
        preto6: '#2d2d2e',
        preto5: '#595a5c',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
