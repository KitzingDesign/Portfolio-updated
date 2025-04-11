import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Maps `@/` to `src/`
      "@components": path.resolve(__dirname, "./src/components"), // Optional extra aliases
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase", // Converts SCSS class `btn-primary` to `btnPrimary` in JS
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables" as *;
          @use "@/styles/mixins" as *;
        `, // Globally injects SCSS variables/mixins
      },
    },
  },
  // Optional optimizations:
  build: {
    minify: "terser", // Smaller bundle size
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning (in kB)
  },
});
