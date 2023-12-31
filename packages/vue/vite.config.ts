import { defineConfig } from 'vite'
import { resolve } from 'path'
import libCss from 'vite-plugin-libcss';

import vue from '@vitejs/plugin-vue'

export default defineConfig({
 assetsInclude: ["./assets/**/*"],
 build: {
    cssCodesplit: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'blackgallery-vue',
      fileName: 'blackgallery'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), libCss()]
})
