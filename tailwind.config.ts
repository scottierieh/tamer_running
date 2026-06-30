import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // TAMER brand palette
        flame: {
          DEFAULT: "#FF4D00",
          light: "#FF7A33",
          dark: "#E03E00",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#121212",
          mute: "#1C1C1C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-fast": "marquee 12s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        dash: "dash 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
