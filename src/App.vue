<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./components/header.vue";
import Section from "./components/section.vue";
import Footer from "./components/footer.vue";
import { useTransitionStore } from "@/stores/transitionStore";

// Pinia 스토어 사용
const transitionStore = useTransitionStore();

const router = useRouter();
const route = useRoute();

// 페이지 순서에 따른 경로 배열
const pages = ["/", "/tech-skills", "/portfolio", "/contact"];
const currentPageIndex = ref(pages.indexOf(route.path));

// 초기 경로가 pages 배열에 없을 경우 기본 경로로 이동
if (currentPageIndex.value === -1) {
  router.push(pages[0]); // 기본 경로로 이동
}

// 라우트 경로 변화 감지 후 인덱스 업데이트
watch(
  () => route.path,
  (newPath) => {
    const newIndex = pages.indexOf(newPath);
    if (newIndex !== -1) {
      currentPageIndex.value = newIndex;
    } else {
      router.push(pages[0]); // 잘못된 경로일 경우 기본 경로로 이동
    }
  }
);

// 이전 페이지로 이동
const goPrevious = () => {
  if (currentPageIndex.value > 0) {
    const prevPageIndex = currentPageIndex.value - 1;
    // 슬라이드 방향을 'slide-right'로 설정 (이전 페이지로 이동하므로)
    transitionStore.setDirection("slide-right");
    router.push(pages[prevPageIndex]).catch((err) => {
      console.error("Navigation error:", err);
    });
  }
};

// 다음 페이지로 이동
const goNext = () => {
  if (currentPageIndex.value < pages.length - 1) {
    const nextPageIndex = currentPageIndex.value + 1;
    // 슬라이드 방향을 'slide-left'로 설정 (다음 페이지로 이동하므로)
    transitionStore.setDirection("slide-left");
    router.push(pages[nextPageIndex]).catch((err) => {
      console.error("Navigation error:", err);
    });
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

      <!-- Section 컴포넌트는 스토어를 통해 direction을 참조 -->
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
</style>
