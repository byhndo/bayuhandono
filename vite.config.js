import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 

export default defineConfig({
  base: '/byh/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  build: {
    sourcemap: true, 
  },
  define: {
    'window.jQuery': 'jQuery',
    'window.$': 'jQuery',
  }
})
