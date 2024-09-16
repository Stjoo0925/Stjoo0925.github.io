import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import "@/assets/css/theme.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// 프로덕션 모드에서 Vue Devtools 비활성화
if (process.env.NODE_ENV === "production") {
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = null;
  }
}

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$swal = Swal;
app.config.devtools = false; // 추가적으로 Devtools 비활성화

app.use(pinia);
app.use(router);

app.mount("#app");
