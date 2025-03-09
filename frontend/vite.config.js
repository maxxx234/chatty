import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   outDir:  'D:/chat-app/frontend/dist',
   input: 'index.html'
})
