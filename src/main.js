import reset from "@/assets/css/reset.css";
import font from "@/assets/css/font.css";

import Swal from "sweetalert2";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.config.globalProperties.$swal = Swal;

app.use(createPinia());
app.use(router);

app.mount("#app");
