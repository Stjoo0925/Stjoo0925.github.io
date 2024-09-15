<script setup>
import { useTransitionStore } from "@/stores/transitionStore";

// Pinia 스토어에서 direction 참조
const transitionStore = useTransitionStore();
</script>

<template>
  <div class="section-container">
    <!-- v-slot을 사용하여 Component를 가져온 후 transition에 적용 -->
    <router-view v-slot="{ Component }">
      <transition :name="transitionStore.direction" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.section-container {
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 좌측으로 슬라이드 애니메이션 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}

/* 우측으로 슬라이드 애니메이션 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
