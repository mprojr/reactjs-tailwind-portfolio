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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay-2000': 'float 6s ease-in-out 2s infinite',
        'float-delay-4000': 'float 6s ease-in-out 4s infinite',
        'float-delay-6000': 'float 6s ease-in-out 6s infinite',
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