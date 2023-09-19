/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#343B64",
        white: "#fff",
        darkBlue: "#223053",
        secondary: {
          100: "#e2e2d5",
          200: "#AF27B3",
        },
      },
      width: {
        min20: "calc(80% - 20px)",
      },
    },
  },
  plugins: [],
};
