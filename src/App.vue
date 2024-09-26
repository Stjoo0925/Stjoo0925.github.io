<script setup>
import Indicator from "./components/indicator.vue";
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
    <Indicator />
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
  background-color: var(--main-bg-color);
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
