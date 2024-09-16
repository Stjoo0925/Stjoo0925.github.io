import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 배포 설정
  base:
    process.env.NODE_ENV === "production"
      ? "/Stjoo0925.github.io/" // 리포지토리 이름에 맞게 설정
      : "/",
  build: {
    outDir: "docs", // 빌드 결과물을 docs 폴더에 저장
  },
});
