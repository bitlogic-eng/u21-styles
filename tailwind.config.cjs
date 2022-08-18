/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bit-color-primary)",
        primaryTint: "var(--bit-color-primary-tint)",
        primaryShade: "var(--bit-color-primary-shade)",
        primaryContrast: "var(--bit-color-primary-shade)",
        secondary: "var(--bit-color-secondary)",
        secondaryTint: "var(--bit-color-secondary-tint)",
        secondaryShade: "var(--bit-color-secondary-shade)",
        secondaryContrast: "var(--bit-color-secondary-contrast)",
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
