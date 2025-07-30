
import defineConfig from "tailwindcss"

export default defineConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Update with your Next.js folder structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example primary color
        secondary: "#F59E0B", // Example secondary color
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif","poppins"], // Custom font
      },
      spacing: {
        128: "32rem", // Custom spacing (for example, for larger margins/padding)
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out", // Example animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
})

