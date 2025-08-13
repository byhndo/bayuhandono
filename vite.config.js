import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
import fs from 'fs'

export default defineConfig({
  base: '/',
  plugins: [vue(),           
     {
      name: 'copy-index-to-404',
      closeBundle() {
        fs.copyFileSync('dist/index.html', 'dist/404.html')
      }
     }      
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  build: {
    sourcemap: true, 
    rollupOptions: {},
  },
  define: {
    'window.jQuery': 'jQuery',
    'window.$': 'jQuery',
  }
})
