<script setup>
import AppIndicator from "./components/appIndicator.vue";
import Header from "./components/header.vue";
import Section from "./components/section.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-section">
      <Section />
    </div>
    <div class="app-indicator">
      <AppIndicator />
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
  height: 100vh; /* 전체 높이를 100vh로 설정 */
  width: 100%;
  overflow: hidden;
  background-color: var(--main-bg-color);
}

.app-header {
  height: 8vh; /* 헤더의 높이를 지정 */
  width: 100%;
  flex-shrink: 0; /* 고정된 높이를 유지 */
}

.app-section {
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
}

.app-indicator {
  height: 5vh; /* 푸터의 높이를 지정 */
  width: 100%;
  flex-shrink: 0; /* 고정된 높이를 유지 */
}

.app-footer {
  height: 5vh; /* 푸터의 높이를 지정 */
  width: 100%;
  flex-shrink: 0; /* 고정된 높이를 유지 */
}
</style>
