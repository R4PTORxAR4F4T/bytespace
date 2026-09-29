import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003be2",
        lime: "#d4fb20",
        ink: "#242528",
        violet: "#300b6a",
        gray: { 50: "#f5f5f6", 100: "#e5e6e8", 200: "#ced0d3", 400: "#82868e", 700: "#4b4c53" },
        muted: "#4f4f4f",
        soft: "#888888",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
        logo: ["'Clash Display'", "var(--font-poppins)", "sans-serif"],
      },
      maxWidth: { container: "1200px" },
    },
  },
  plugins: [],
};
export default config;
