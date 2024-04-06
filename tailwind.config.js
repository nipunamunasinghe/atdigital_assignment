/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1200px",
      lg: "1440px",
      xl: "1536px",
    },
    extend: {
      colors: {
        "custom-green": "#4DCA79",
        "custom-blue": "#1CBDDD",
        "custom-purple": "#6B3CC9",
        "custom-orange": "#F28D35",
      },
    },
  },
  plugins: [],
};
