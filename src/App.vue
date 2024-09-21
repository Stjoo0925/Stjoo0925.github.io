<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./components/header.vue";
import Section from "./components/section.vue";
import Footer from "./components/footer.vue";

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
    router.push(pages[prevPageIndex]).catch((err) => {
      console.error("Navigation error:", err);
    });
  }
};

// 다음 페이지로 이동
const goNext = () => {
  if (currentPageIndex.value < pages.length - 1) {
    const nextPageIndex = currentPageIndex.value + 1;
    router.push(pages[nextPageIndex]).catch((err) => {
      console.error("Navigation error:", err);
    });
  }
};

// 스크롤 제스처 감지
const handleScroll = (event) => {
  if (event.deltaY > 0) {
    goNext(); // 아래로 스크롤 시 다음 페이지
  } else if (event.deltaY < 0) {
    goPrevious(); // 위로 스크롤 시 이전 페이지
  }
};

// 모바일 스와이프 제스처 감지
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event) => {
  touchStartX = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipeGesture();
};

const handleSwipeGesture = () => {
  if (touchEndX < touchStartX) {
    goNext(); // 왼쪽에서 오른쪽으로 스와이프: 다음 페이지
  }
  if (touchEndX > touchStartX) {
    goPrevious(); // 오른쪽에서 왼쪽으로 스와이프: 이전 페이지
  }
};

// 이벤트 리스너 등록 및 해제
onMounted(() => {
  window.addEventListener("wheel", handleScroll); // 스크롤 이벤트 감지
  window.addEventListener("touchstart", handleTouchStart); // 터치 시작 감지
  window.addEventListener("touchend", handleTouchEnd); // 터치 종료 감지
});

onBeforeUnmount(() => {
  window.removeEventListener("wheel", handleScroll);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchend", handleTouchEnd);
});
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>

    <div class="app-section">
      <!-- Section 컴포넌트는 스토어를 통해 direction을 참조 -->
      <Section />
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
  overflow: hidden;
}https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png

.app-header {
  height: 8vh; /* 헤더의 높이를 명확하게 지정 */
  width: 100%;
}

.app-section {
  position: relative;
  height: 87vh; /* 섹션의 높이를 명확하게 지정 */
  width: 100%;
  overflow: hidden;
}

.app-footer {
  height: 5vh; /* 푸터의 높이를 명확하게 지정 */
  width: 100%;
}
</style>
