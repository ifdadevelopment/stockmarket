/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        // 20s, linear, infinite (your original)
        "spin-20": "spinSlow 20s linear infinite",
      },
       backgroundImage: {
        'btn-orange': 'linear-gradient(180deg, #ff6f37, #ff603c)',
        'home-page-gradient': 'linear-gradient(200deg, #1f2127 -5.65%, #6545d7 45.63%, #27253a 97.6%)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
         openSans: ['Open Sans', 'sans-serif'],
         grotesque: ['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
        sans:['"Darker Grotesque"', "Helvetica", "Arial", "Lucida", "sans-serif"],
         publicSans: ['"Public Sans"', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
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

