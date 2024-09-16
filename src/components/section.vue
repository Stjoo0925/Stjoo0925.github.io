<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="section-container">
    <router-view v-slot="{ Component }">
      <transition :name="$route.meta.transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.section-container {
  height: 100%;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 35px;
  box-sizing: border-box;
}

/* 페이드인/페이드아웃 CSS 애니메이션 정의 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
