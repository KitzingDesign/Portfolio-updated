import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      cache: true,
      cacheLocation: "node_modules/.cache/image-optimizer",
      jpeg: { quality: 80 }, // Lower quality = smaller files
      png: { quality: 80 },
      webp: { lossless: false }, // Lossy WebP for smaller sizes
    }),
  ],
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
