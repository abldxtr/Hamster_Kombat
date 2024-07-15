import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%": { opacity: "1", transform: "translateY(0px)" },
          "100%": { opacity: "0", transform: "translateY(-150px)" },
        },
      },
      animation: {
        blink: "blink 1000ms infinite",
        float: "float 1000ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
