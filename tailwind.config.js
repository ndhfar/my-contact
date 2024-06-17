/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#FF7F3E",
        customBlue: "#003285",
        customGreen: "#81A263",
        customBlack: "#373A40",
      },
    },
  },
  plugins: [],
};
