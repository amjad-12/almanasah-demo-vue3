import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgSpritePlugin from "vite-plugin-svg-sprite-component"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
