import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/contact.vue";
import { ref } from "vue";

// 트랜지션 방향을 저장하는 변수 (전역)
export const direction = ref("slide-left");

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

// 라우터 가드를 사용해 트랜지션 방향 결정
router.beforeEach((to, from, next) => {
  const routesOrder = ["/", "/tech-skills", "/portfolio", "/contact"];
  const fromIndex = routesOrder.indexOf(from.path);
  const toIndex = routesOrder.indexOf(to.path);

  // 이동 경로에 따라 트랜지션 방향 설정
  if (toIndex > fromIndex) {
    direction.value = "slide-left";
  } else {
    direction.value = "slide-right";
  }

  next();
});

export default router;
