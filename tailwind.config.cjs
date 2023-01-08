/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'form-3D': `0 0 0 1px grey inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
        0 4px 0 0 grey, 0 5px 0 1px rgba(0, 0, 0, 0.4),
        0 4px 8px 1px rgba(0, 0, 0, 0.6)`,
        'form-3D-hover': `0 0 0 1px grey inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
        0 4px 0 0 grey, 0 5px 0 1px rgba(0, 0, 0, 0.4),
        0 4px 8px 3px rgba(0, 0, 0, 0.6)`,
      }
    },
  },
  plugins: [],
}