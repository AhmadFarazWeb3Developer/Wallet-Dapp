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
        custom: "0 4px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [daisyui], // Use daisyui directly
};

export default config;
