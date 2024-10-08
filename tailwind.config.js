// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      dropShadow: {
        "green-300": "0 0 10px #68d391",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
