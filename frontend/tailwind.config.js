/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        floatZoom: {
          "0%": {
            transform: "scale(1) translateY(0)",
          },
          "50%": {
            transform: "scale(1.08) translateY(-12px)",
          },
          "100%": {
            transform: "scale(1) translateY(0)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 10px rgba(239,68,68,0.6))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(59,130,246,0.8))",
          },
        },
      },
      animation: {
        floatZoom: "floatZoom 8s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
