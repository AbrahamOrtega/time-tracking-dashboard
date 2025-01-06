import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        // Primary

        blue: "#5847eb",
        lightOrange: "#ff8c66", //Work
        softBlue: "#56c2e6", //Play
        lightRed: "#ff5c7c", //Study
        limeGreen: "#4acf81", //Exercise
        violet: "#7536d3", //Social
        softYellow: "#f1c65b", //Self Care

        // Neutral
        veryDarkBlue: "#0f1424",
        darkBlue: "#1c1f4a",
        desaturatedBlue: "#6f76c8",
        paleBlue: "#bdc1ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
