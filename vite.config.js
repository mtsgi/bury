const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      formats: ["es", "cjs", "umd"],
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "Bury",
      fileName: 'bury',
    },
  },
});
