<script setup>
import Header from "./components/header.vue";
import Section from "./components/section.vue";
import Footer from "./components/footer.vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

// 현재 라우트 정보 및 라우터 가져오기
const router = useRouter();
const route = useRoute();

// 페이지 순서에 따른 경로 배열
const pages = ["/", "/tech-skills", "/portfolio", "/contact"];
const currentPageIndex = ref(pages.indexOf(route.path));

// 라우트 변경 시 현재 페이지 인덱스 업데이트
router.afterEach((to) => {
  currentPageIndex.value = pages.indexOf(to.path);
});

// 이전 페이지로 이동
const goPrevious = () => {
  if (currentPageIndex.value > 0) {
    router.push(pages[currentPageIndex.value - 1]);
  }
};

// 다음 페이지로 이동
const goNext = () => {
  if (currentPageIndex.value < pages.length - 1) {
    router.push(pages[currentPageIndex.value + 1]);
  }
};
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>

    <div class="app-section">
      <!-- 좌측 화살표 (이전 페이지) -->
      <button
        @click="goPrevious"
        class="nav-arrow left-arrow"
        v-if="currentPageIndex > 0"
      >
        <i class="bi bi-caret-left"></i>
      </button>

      <Section />

      <!-- 우측 화살표 (다음 페이지) -->
      <button
        @click="goNext"
        class="nav-arrow right-arrow"
        v-if="currentPageIndex < pages.length - 1"
      >
        <i class="bi bi-caret-right"></i>
      </button>
    </div>

    <div class="app-footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.app-header {
  flex: 0 0 7vh;
  width: 100%;
}

.app-section {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--primary-highlight-color);
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

.nav-arrow:hover {
  color: var(--secondary-highlight-color);
}

.app-footer {
  flex: 0 0 5vh;
  width: 100%;
}

@media (max-width: 768px) {
  .nav-arrow {
    display: none;
  }
}
</style>
