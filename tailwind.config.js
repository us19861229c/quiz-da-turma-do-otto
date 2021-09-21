module.exports = {
  purge: [
    './docs/index.html',
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
      },
      backgroundImage: {
        'arvores': "url('./img/FundoArvoresNuvemTransparente.png')",
        'nuvens': "url('./img/FundoNuvensTransparente.png')",
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
