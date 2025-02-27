/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': '#FCEDD8', // HEX: FCEDD8
        'yellow': '#FFD464',     // HEX: FFD464
        'soft-red': '#FF5E5E',   // HEX: FF5E5E
        'coral': '#E23C64',      // HEX: E23C64
        'dark-red': '#B0183D',   // HEX: B0183D
      },
    },
  },
  plugins: [],
};
