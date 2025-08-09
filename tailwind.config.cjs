/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#e5e7eb",
        muted: "#9ca3af",
        bg: "#0f172a",
        panel: "#111827",
        accent: "#60a5fa",
        accent2: "#a78bfa"
      }
    },
  },
  plugins: [],
};
