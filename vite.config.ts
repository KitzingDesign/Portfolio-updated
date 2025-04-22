import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Remove the '/*' from the alias
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/variables" as *;
        `, // Use explicit path instead of alias
      },
    },
  },
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 1000,
  },
});
