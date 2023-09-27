import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
    proxy: {
        '/api': 'http://localhost:3000', // 将以 /api 开头的请求代理到 http://localhost:8080
    },
  plugins: [
      vue(),
      AutoImport({
          imports:['vue'],
          resolvers: [ElementPlusResolver()],
      }),
      Components({
          resolvers: [ElementPlusResolver()],
      }),
  ],
});
