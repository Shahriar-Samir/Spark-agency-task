/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        actor: ["Actor", "serif"],
        nobile: ["Nobile", "serif"],
        roboto: ["Roboto", "serif"],
        "tilt-warp": ["Tilt Warp", "serif"],
      },
      dropShadow: {
        custom: "0 4px 4px #7C7C7C",
      },
    },
  },
  plugins: [],
};
