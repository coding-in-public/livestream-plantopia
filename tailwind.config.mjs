const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          md: "2rem",
        },
      },
      fontFamily: {
        serif: ["Bitter", ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        autofill: "repeat( auto-fit, minmax(250px, 1fr) )",
      },
    },
  },
  plugins: [],
};
