/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#77915f',
        'custom-green-light': '#a3bc8a',
      }
    }
  },
  plugins: [],
}
