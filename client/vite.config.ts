import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite' // <-- REMOVE THIS LINE

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss() // <-- REMOVE THIS LINE
  ],
})