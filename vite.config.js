import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({  
  // envPrefix: "VITE_APP_",
  plugins: [
    react(),
    // envCompatible()
  ],
  define: {
    "process.env.REACT_APP_WEBSITE_URL": JSON.stringify(process.env.REACT_APP_WEBSITE_URL),
    "process.env.REACT_APP_API_KEY": JSON.stringify(process.env.REACT_APP_API_KEY)
  }
})
