import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/movies",
  css: {
    modules: false,  // Disable if you’re not using CSS Modules
  },
  build: {
    outDir: 'dist',  // Specify the output directory
    rollupOptions: {
      input: {
        main: 'src/main.jsx',  // Adjust according to your entry file
      },
    },
  }
});