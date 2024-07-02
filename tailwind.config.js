/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#77915f',
        'custom-green-light': '#a3bc8a',
        'custom-green-dark': '#5a743d',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('group1-hover', '.group1:hover &');
      addVariant('group2-hover', '.group2:hover &');
    },
  ],
};