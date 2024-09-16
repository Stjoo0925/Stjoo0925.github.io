import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";

const routes = [
  { path: "/", component: About, meta: { transition: "fade" } },
  { path: "/tech-skills", component: TechSkills, meta: { transition: "fade" } },
  { path: "/portfolio", component: Portfolio, meta: { transition: "fade" } },
  { path: "/contact", component: Contact, meta: { transition: "fade" } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
