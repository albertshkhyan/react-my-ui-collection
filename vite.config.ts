import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      themes: path.resolve(__dirname, './src/themes'),
      // Add other aliases as needed
    },
  },
  // Other Vite config options...
});
