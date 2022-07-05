// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#f7fafc",
        "blue-less": "#6415ff",
        "blue-more": "#3c0d99",
        "t-dark": "#243e63",
        "24px": "24px",
      },
      minWidth: {
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%",
        "1/6": "30%",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
