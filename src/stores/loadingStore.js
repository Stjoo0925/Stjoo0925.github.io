import { defineStore } from "pinia";
import { ref } from "vue";

// 트랜지션 방향을 관리하는 스토어
export const useTransitionStore = defineStore("transition", () => {
  const direction = ref("slide-left");

  const setDirection = (newDirection) => {
    direction.value = newDirection;
  };

  return { direction, setDirection };
});
