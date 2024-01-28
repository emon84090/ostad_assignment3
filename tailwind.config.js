/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: "#F55C6E",
        titlescolor: "#000000",
        bodytextcolor: "#555555",
      },
      fontFamily: {
        spartan: ["var(--font-spartan)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
