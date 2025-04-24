import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/variables" as *;
      `,
      },
    },
  },
  build: {
    sourcemap: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
  },
});
