<script setup>
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
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
}

.app-footer {
  flex: 0 0 5vh;
  width: 100%;
}
</style>
