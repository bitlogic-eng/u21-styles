const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  // remove safelist if not want to export tailwind class
  safelist: [
    {
      pattern: /^(bg|text|p|m|flex|grid|justify|content)+/,
    },
    // |border|shadow|placeholder|outline|ring|rounded|p|m|px|py
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "var(--bit-color-primary)",
          tint: "var(--bit-color-primary-tint)",
          shade: "var(--bit-color-primary-shade)",
          contrast: "var(--bit-color-primary-contrast)",
        },
        secondary: {
          base: "var(--bit-color-secondary)",
          tint: "var(--bit-color-secondary-tint)",
          shade: "var(--bit-color-secondary-shade)",
          contrast: "var(--bit-color-secondary-contrast)",
        },
        tertiary: {
          base: "var(--bit-color-tertiary)",
          tint: "var(--bit-color-tertiary-tint)",
          shade: "var(--bit-color-tertiary-shade)",
          contrast: "var(--bit-color-tertiary-contrast)",
        },
        danger: {
          base: "var(--bit-color-danger)",
          tint: "var(--bit-color-danger-tint)",
          shade: "var(--bit-color-danger-shade)",
          contrast: "var(--bit-color-danger-contrast)",
        },
        success: {
          base: "var(--bit-color-success)",
          tint: "var(--bit-color-success-tint)",
          shade: "var(--bit-color-success-shade)",
          contrast: "var(--bit-color-success-contrast)",
        },
        warning: {
          base: "var(--bit-color-warning)",
          tint: "var(--bit-color-warning-tint)",
          shade: "var(--bit-color-warning-shade)",
          contrast: "var(--bit-color-warning-contrast)",
        },
        accent: {
          base: "var(--bit-color-accent)",
          tint: "var(--bit-color-accent-tint)",
          shade: "var(--bit-color-accent-shade)",
          contrast: "var(--bit-color-accent-contrast)",
        },
        neutral: {
          base: "var(--bit-color-neutral)",
          tint: "var(--bit-color-neutral-tint)",
          shade: "var(--bit-color-neutral-shade)",
          contrast: "var(--bit-color-neutral-contrast)",
        },
      },
    },
  },
  plugins: [],
};
