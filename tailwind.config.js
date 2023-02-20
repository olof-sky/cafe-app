module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1900px",
        },
      },
      colors: {
        indigo: "#5c6ac4",
        blue: "#007ace",
        "bright-red": "#C70000",
        red: "#680000",
        "medium-red": "#440000",
        "dark-red": "#220000",
        grey: "#141414",
        yellow: "#FFEDAD",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "8rem",
      },
      fontFamily: {
        header: "Estonia",
        subHeader: "Josefin slab",
        default: [
          "Josefin sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
