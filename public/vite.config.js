import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define process env
  define: {
    'process.env': process.env
  }
})
