/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023f81",
        "accent-blue": "#1d5bbf",
        "text-gray": "#1a1a1a",
        "soft-gray": "#e9ecef",
        "soft-white": "#f4f7fa",
      },
    },
  },
  plugins: [],
};

