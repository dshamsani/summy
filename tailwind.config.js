/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        page: "20px",
      },
      spacing: {
        desktop: "1350px",
        minHeight: "calc(100vh - 170px)",
      },
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        secondaryText: "var(--secondaryText)",
        secondaryBg: "var(--secondaryBg)",
        darker: "var(--darker)",
        border: "var(--border)",
        grayText: "var(--grayText)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fade: "fadeIn .3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
