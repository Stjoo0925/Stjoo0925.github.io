import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";
import { useTransitionStore } from "@/stores/transitionStore"; // Pinia 스토어 가져오기

const routes = [
  { path: "/", component: About },
  { path: "/tech-skills", component: TechSkills },
  { path: "/portfolio", component: Portfolio },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 라우트 변화 시 Pinia 스토어에서 방향 설정
router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;

  const transitionStore = useTransitionStore(); // Pinia 스토어 사용
  transitionStore.setDirection(
    toDepth < fromDepth ? "slide-right" : "slide-left"
  );
});

export default router;
