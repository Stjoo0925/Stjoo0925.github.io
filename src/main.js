import "@/assets/css/reset.css";
import "@/assets/css/font.css";
import "@/assets/css/theme.css";
import "animate.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import Swal from "sweetalert2";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$swal = Swal;

app.use(pinia);
app.use(router);

app.mount("#app");
