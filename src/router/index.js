import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";
import Kiosk from "@/views/portfolio-kiosk.vue";
import Flux from "@/views/portfolio-flux.vue";
import Leafresh from "@/views/portfolio-leafresh.vue";

const routes = [
  { path: "/", component: About, meta: { transition: "fade" } },
  { path: "/tech-skills", component: TechSkills, meta: { transition: "fade" } },
  { path: "/portfolio", component: Portfolio, meta: { transition: "fade" } },
  { path: "/portfolio/kiosk", component: Kiosk, meta: { transition: "fade" } },
  { path: "/portfolio/flux", component: Flux, meta: { transition: "fade" } },
  { path: "/portfolio/leafresh", component: Leafresh, meta: { transition: "fade" } },
  { path: "/contact", component: Contact, meta: { transition: "fade" } },
];

const routeOrder = [
  "/", 
  "/tech-skills", 
  "/portfolio", 
  "/portfolio/kiosk", 
  "/portfolio/flux", 
  "/portfolio/leafresh", 
  "/contact"
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

// 이동 방향에 따른 슬라이드 효과 지정
router.beforeEach((to, from, next) => {
  const toIndex = routeOrder.indexOf(to.path);
  const fromIndex = routeOrder.indexOf(from.path);

  // 이동 방향에 따라 슬라이드 효과 설정
  if (toIndex > fromIndex) {
    to.meta.transition = "slide-left"; // 다음 페이지로 이동할 때
  } else {
    to.meta.transition = "slide-right"; // 이전 페이지로 이동할 때
  }
  next();
});

export default router;
