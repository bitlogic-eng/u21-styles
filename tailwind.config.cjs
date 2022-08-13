/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bit-color-primary)",
        secondary: "var(--bit-color-secondary)",
        tertiary: "var(--bit-color-tertiary)",
        danger: "var(--bit-color-danger)",
        success: "var(--bit-color-success)",
        warning: "var(--bit-color-warning)",
        accent: "var(--bit-color-accent)",
      },
    },
  },
  plugins: [],
};
