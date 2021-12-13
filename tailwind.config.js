module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: "#092C4C",
        white: "#fff",
        linkYellow: "#E2B93B",
        secondaryGray: "#B7B3B3",
        primaryGray: "#f7f8f9",
        shapesGray: "#E5E5E5",
        shapesBlue: "#405a72",
      },
      fontFamily: {
        body: ["Montserrat"]
      },
      spacing: {
        cardWidth: "150px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}