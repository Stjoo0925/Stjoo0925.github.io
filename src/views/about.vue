<script setup>
import { onMounted } from "vue";
import { useLoadingStore } from "../stores/loadingStore";
import Loading from "@/components/loading.vue";

const loadingStore = useLoadingStore();

onMounted(() => {
  loadingStore.startLoading();
  setTimeout(() => {
    loadingStore.stopLoading();
  }, 500);
});
</script>

<template>
  <div class="about-container">
    <Loading />
    <div v-if="!loadingStore.isLoading">자기소개 페이지 입니다.</div>
  </div>
</template>

<style scoped>
.about-container {
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
}
</style>
