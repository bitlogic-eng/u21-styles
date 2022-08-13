import { resolve } from "path";
import { defineConfig } from "vite";
// import copy from "rollup-plugin-copy";

// module.exports = defineConfig({
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "/"),
//       name: "U21StylesLib",
//     },
//   },
// });

export default defineConfig({
  base: "",

  build: {
    rollupOptions: {
      input: resolve(__dirname, "index.html"),

      output: {
        // Prevent vendor.js being created
        manualChunks: undefined,
        assetFileNames: "assets/[name].[ext]",
      },
    },
    // Prevent vendor.css being created
    cssCodeSplit: false,
    // prevent some warnings
    chunkSizeWarningLimit: 60000,
  },
});
