module.exports = {
    theme: {
        extend: {
            fontFamily: {
                oswald: ['var(--font-oswald)', 'sans-serif'], // for titles/headings
                roboto: ['var(--font-roboto)', 'sans-serif'],     // for paragraph text
                playwrite: ['var(--font-playwrite)', 'sans-serif'],     // for paragraph text
                lexend: ['var(--font-lexend)', 'sans-serif'],     // for paragraph text
            },
      animation: {
        "loop-scroll": "loop-scrool 50s linear infinite",
        'scroll-up': 'scrollUp 20s linear infinite',

      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to : { transform: 'translateX(-100%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
}


