import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true, 
    rollupOptions: {},
  },
  define: {
    'window.jQuery': 'jQuery',
    'window.$': 'jQuery',
  }
})
