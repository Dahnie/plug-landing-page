module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#092C4C",
        white: "#fff",
        linkYellow: "#E2B93B",
        secondaryGray: "#B7B3B3",
      },
      fontFamily: {
        body: ["Montserrat"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}