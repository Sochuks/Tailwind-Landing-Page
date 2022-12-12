/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        PaleRed: 'hsl(13, 100%, 96%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayBlue: 'hsl(227, 12%, 61%)',
        Darkblue: 'hsl(223, 12%, 13%)',
        LightGray: 'hsl(0, 0%, 98%)',

        primaryCol: 'hsla(234, 100%, 66%, 1)',
        secCol: 'hsla(232, 100%, 74%, 1)',
        thirdCol: 'hsla(227, 100%, 80%, 1)',
        fourCol: 'hsla(218, 100%, 87%, 1)',
        fiveCol: 'hsla(184, 100%, 94%, 1)',
      }
    },
  },
  plugins: [],
}
