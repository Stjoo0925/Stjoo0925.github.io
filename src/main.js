import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import "@/assets/css/theme.css";

import Swal from "sweetalert2";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$swal = Swal;

app.use(pinia);
app.use(router);

app.mount("#app");
