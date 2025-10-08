/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
         openSans: ['Open Sans', 'sans-serif'],
         grotesque: ['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
        sans:['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        menu:"var(--color-menucolor)",
      },
    },
  },
  plugins: [],
}

