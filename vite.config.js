const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "Bury",
      fileName: (format) => `bury.${format}.js`,
    },
  },
});
