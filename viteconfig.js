import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/animal/index.html"),
        product: resolve(__dirname, "src/animal_pages/index.html"),
        listing: resolve(__dirname, "src/animal-list/index.html"),
      },
    },
  },
});