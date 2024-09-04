import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CuidadoPet/',
  plugins: [react()],
  build: {
    publicDir: 'public',
    assetsInclude: ['public/**/*'],
    copyPublicDir: true,
  },
})