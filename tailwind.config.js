/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4ae835",
          "secondary": "#757575", // used as nav default color
          "accent": "#ce2f44",
          "neutral": "#191721",
          "base-100": "#FFFFFF",
          "info": "#6EB0F2",
          "success": "#25DA73",
          "warning": "#A67907",
          "error": "#FC685A",
          "nav-item": "#757575",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}