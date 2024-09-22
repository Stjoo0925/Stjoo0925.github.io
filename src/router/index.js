import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";
import Kiost from "@/views/portfolio-kiosk.vue";
import Flux from "@/views/portfolio-flux.vue";
import Leafresh from "@/views/portfolio-leafresh.vue";

const routes = [
  { path: "/", component: About, meta: { transition: "fade" } },
  { path: "/tech-skills", component: TechSkills, meta: { transition: "fade" } },
  { path: "/portfolio", component: Portfolio, meta: { transition: "fade" } },
  { path: "/portfolio/kiosk", component: Kiost, meta: { transition: "fade" } },
  { path: "/portfolio/flux", component: Flux, meta: { transition: "fade" } },
  {
    path: "/portfolio/leafresh",
    component: Leafresh,
    meta: { transition: "fade" },
  },
  { path: "/contact", component: Contact, meta: { transition: "fade" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
