import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Port for Vite, different from NestJS
  },
  build: {
    outDir: 'dist', // Output directory for production builds
    rollupOptions: {
      input: {
        main: './src/entry-client.tsx', // Entry point for Vite
      },
    },
  },
})
