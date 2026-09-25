import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  publicDir: "public",
  base: "./",
  build: {
    outDir: "mobile-www",
    emptyOutDir: true,
    rollupOptions: {
      input: fileURLToPath(new URL("./mobile.html", import.meta.url)),
    },
  },
});
