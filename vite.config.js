import path from "path";
import { defineConfig } from "vite";

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "/main.js"),
      name: "U21StylesLib",
    },
  },
});
