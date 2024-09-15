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
  <div>
    <Loading />
    <div v-if="!loadingStore.isLoading">포트폴리오 페이지 입니다.</div>
  </div>
</template>

<style scoped></style>
