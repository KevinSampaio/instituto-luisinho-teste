import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'site',
  build: {
    outDir: 'dist', // Isso criará a pasta 'dist' dentro de 'site'
  },
})
