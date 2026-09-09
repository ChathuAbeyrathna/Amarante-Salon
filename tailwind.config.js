/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2EAE0",
        paper2: "#EBE0D2",
        ink: "#241B18",
        inksoft: "#4B403A",
        bordeaux: "#5B1A2E",
        bordeauxdeep: "#3E1120",
        gold: "#A9834F",
        goldlight: "#CBAA78",
        blush: "#E9D3C8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};
