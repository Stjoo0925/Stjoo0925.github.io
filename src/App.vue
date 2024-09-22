<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./components/header.vue";
import Section from "./components/section.vue";
import Footer from "./components/footer.vue";

const router = useRouter();
const route = useRoute();

// 미디어 쿼리 설정 (예: 화면 너비가 768px 미만일 때)
const mediaQuery = window.matchMedia("(max-width: 768px)");
const isMediaQueryMatched = ref(mediaQuery.matches);

// 만약 다른 기능을 추가하고 싶다면 여기에 작성
// 현재 스크롤 네비게이션과 관련된 기능은 제거됨
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-section">
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
