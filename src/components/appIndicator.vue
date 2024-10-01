<template>
  <div v-if="showIndicator" class="indicator-wrapper">
    <button class="nav-button" @click="goToPrevious" :disabled="!hasPrevious">
      <img :src="Back" alt="Previous" />
    </button>

    <div class="indicator">
      <span
        v-for="(route, index) in routes"
        :key="index"
        :class="['indicator-dot', { active: isActive(route.path) }]"
      ></span>
    </div>

    <button class="nav-button" @click="goToNext" :disabled="!hasNext">
      <img :src="Forward" alt="Next" />
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import About from "@/views/about.vue";
import TechSkills from "@/views/techSkills.vue";
import Portfolio from "@/views/portfolio.vue";
import Contact from "@/views/contact.vue";

// SVG 파일을 임포트
import Forward from "@/assets/images/forward.svg";
import Back from "@/assets/images/back.svg";

// 현재 라우트 경로 가져오기
const route = useRoute();
const router = useRouter();

// 라우트 설정
const routes = [
  { path: "/", component: About },
  { path: "/tech-skills", component: TechSkills },
  { path: "/portfolio", component: Portfolio },
  { path: "/contact", component: Contact },
];

// 현재 경로와 비교하여 활성화된 페이지 판단
const isActive = (path) => route.path === path;

// 현재 페이지 인덱스 가져오기
const currentIndex = computed(() =>
  routes.findIndex((r) => r.path === route.path)
);

// 인디케이터 표시 여부 결정
const showIndicator = computed(() => currentIndex.value !== -1);

// 이전 페이지로 이동
const goToPrevious = () => {
  if (currentIndex.value > 0) {
    router.push(routes[currentIndex.value - 1].path);
  }
};

// 다음 페이지로 이동
const goToNext = () => {
  if (currentIndex.value < routes.length - 1) {
    router.push(routes[currentIndex.value + 1].path);
  }
};

// 이전 및 다음 페이지가 있는지 확인
const hasPrevious = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < routes.length - 1);
</script>

<style scoped>
.indicator-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--main-bg-color);
  padding: 5px;
}

.indicator {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  background-color: var(--font-color);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.indicator-dot.active {
  background-color: var(--secondary-bg-color); /* 활성화된 페이지의 색상 */
}

.nav-button {
  background-color: var(--main-bg-color);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-button img {
  width: 20px;
  height: 20px;
  filter: invert(100);
}

.nav-button:disabled {
  background-color: var(--main-bg-color);
}

.nav-button:disabled img {
  filter: invert(0);
}


.nav-button:not(:disabled):hover {
  background-color: var(--secondary-highlight-color);
}
</style>
