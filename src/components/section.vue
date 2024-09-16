<script setup>
import { ref, watchEffect } from "vue";
import { useTransitionStore } from "@/stores/transitionStore"; // Pinia 스토어에서 direction 가져오기

const transitionStore = useTransitionStore(); // Pinia 스토어 사용
const transitionKey = ref(0); // 트랜지션 키를 위한 ref 생성

// direction 값 변경을 감지하여 화면을 리렌더링 (키 변경)
watchEffect(() => {
  transitionStore.direction;
  transitionKey.value++; // direction이 바뀔 때마다 key 업데이트
});
</script>

<template>
  <div class="section-container">
    <router-view v-slot="{ Component }">
      <!-- key를 동적으로 변경하여 트랜지션을 강제로 리렌더링 -->
      <transition :name="transitionStore.direction" mode="out-in">
        <component :key="transitionKey" :is="Component" />
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
