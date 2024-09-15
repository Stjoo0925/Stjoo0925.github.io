import { defineStore } from "pinia";
import { ref } from "vue";

export const useTransitionStore = defineStore("transition", () => {
  const direction = ref("slide-left");

  const setDirection = (newDirection) => {
    direction.value = newDirection;
  };

  return { direction, setDirection };
});
