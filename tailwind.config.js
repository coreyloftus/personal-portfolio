/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "se-bg-red": "rgb(62, 28, 36)",
        "se-text-primary": "rgb(247, 247, 247)",
        "se-text-secondary": "rgb(242, 158, 158)",
        "se-text-callout": "rgb(220 38 38)",
        "theater-bg-teal": "rgb(17 78 74)",
        "theater-text-primary": "rgb(247, 247, 247)",
        "theater-text-secondary": "rgb(132, 206, 200)",
        "theater-text-callout": "rgb(234 179 8)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
