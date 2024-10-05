import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#100A34",
        customBlue: "#24a0ed", // Add your custom color here
      },
      boxShadow: {
        custom: "2px 2px 50px 4px rgba(148,108,148,0.4)",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [daisyui], // Use daisyui directly
};

export default config;
