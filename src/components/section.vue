<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <div class="section-container">
    <RouterView />
  </div>
</template>
<style scoped>
.section-container {
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: var(--main-bg-color);
}
</style>
