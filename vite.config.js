import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://youtube-backend-3-mqcv.onrender.com/api/v1'
    }
  }
})