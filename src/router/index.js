import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: About,
    },
    {
      path: "/tech-skills",
      component: TechSkills,
    },
    {
      path: "/portfolio",
      component: Portfolio,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});

export default router;
