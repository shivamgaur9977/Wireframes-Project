import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // allows network access
    port: process.env.PORT || 5173, // or the port you need
  },
  plugins: [react()],
})
