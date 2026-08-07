import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'





// git add .
// git commit -m "AddedFiles"
// git push
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
