import { defineConfig } from "vite";
import path, { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "./src",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@pages/modals": path.resolve(__dirname, "src/pages/modals"),
    },
  },
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        homePage: resolve(__dirname, "src/pages/home/home.html"),
        galleryPage: resolve(__dirname, "src/pages/contact/contact.html"),
        aboutPage: resolve(__dirname, "src/pages/find-us/find-us.html"),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "assets/**/*", // Chemin depuis ./src (car root: "./src")
          dest: "assets",
        },
      ],
    }),
  ],
});
