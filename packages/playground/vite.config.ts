import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      include: [/\.vue/],
      dirs: './src/components',
      dts: './src/components.d.ts'
    })
  ]
})