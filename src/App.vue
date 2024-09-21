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

// 미디어 쿼리 설정 (예: 화면 너비가 768px 미만일 때)
const mediaQuery = window.matchMedia("(max-width: 768px)");
const isMediaQueryMatched = ref(mediaQuery.matches);

// 스크롤 제스처 감지
const handleScroll = (event) => {
  if (event.deltaY > 0) {
    goNext(); // 아래로 스크롤 시 다음 페이지
  } else if (event.deltaY < 0) {
    goPrevious(); // 위로 스크롤 시 이전 페이지
  }
};

// 미디어 쿼리 변화 감지 및 이벤트 리스너 등록/해제
const handleMediaQueryChange = (e) => {
  isMediaQueryMatched.value = e.matches;
  if (isMediaQueryMatched.value) {
    window.removeEventListener("wheel", handleScroll);
  } else {
    window.addEventListener("wheel", handleScroll);
  }
};

onMounted(() => {
  // 초기 미디어 쿼리 상태에 따라 이벤트 리스너 등록
  if (!isMediaQueryMatched.value) {
    window.addEventListener("wheel", handleScroll);
  }
  // 미디어 쿼리 변화 감지 리스너 등록
  mediaQuery.addEventListener("change", handleMediaQueryChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("wheel", handleScroll);
  mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
}

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
