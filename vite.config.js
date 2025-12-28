import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/In-house-System/' // ⚠️ 必須與 GitHub Repo 名稱相同
})
