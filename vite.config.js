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
});

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Stjoo0925.github.io/" // 리포지토리 이름으로 설정
      : "/",
};
