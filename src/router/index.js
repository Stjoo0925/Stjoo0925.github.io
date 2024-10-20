import { createRouter, createWebHashHistory } from "vue-router";

const Intro = () => import(/* webpackPrefetch: true */ "@/views/intro.vue");
const TechSkills = () =>
  import(/* webpackPrefetch: true */ "@/views/techSkills.vue");
const Portfolio = () =>
  import(/* webpackPrefetch: true */ "@/views/portfolio.vue");
const Contact = () => import(/* webpackPrefetch: true */ "@/views/contact.vue");
const Afterburner = () =>
  import(/* webpackPrefetch: true */ "@/views/portfolio-Afterburner.vue");
const Flux = () =>
  import(/* webpackPrefetch: true */ "@/views/portfolio-flux.vue");
const Leafresh = () =>
  import(/* webpackPrefetch: true */ "@/views/portfolio-leafresh.vue");

const routes = [
  { path: "/", component: Intro, meta: { transition: "fade" } },
  { path: "/tech-skills", component: TechSkills, meta: { transition: "fade" } },
  { path: "/portfolio", component: Portfolio, meta: { transition: "fade" } },
  { path: "/portfolio/flux", component: Flux, meta: { transition: "fade" } },
  {
    path: "/portfolio/leafresh",
    component: Leafresh,
    meta: { transition: "fade" },
  },
  {
    path: "/portfolio/Afterburner",
    component: Afterburner,
    meta: { transition: "fade" },
  },
  { path: "/contact", component: Contact, meta: { transition: "fade" } },
];

const routeOrder = [
  "/",
  "/tech-skills",
  "/portfolio",
  "/portfolio/Afterburner",
  "/portfolio/flux",
  "/portfolio/leafresh",
  "/contact",
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
