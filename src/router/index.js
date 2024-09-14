import { createRouter, createWebHistory } from "vue-router";
import Intropage from "@/views/intropage.vue";
import TechSkills from "@/views/techSkills.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Intropage,
    },
    {
      path: "/tech-skills",
      component: TechSkills,
    },
  ],
});

export default router;
