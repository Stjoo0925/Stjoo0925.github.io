<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMounted = ref(false);
const isScrollTopVisible = ref(false);
const containerRef = ref(null); // 컨테이너 참조

const goBack = () => {
  router.back();
};

const scrollToTop = () => {
  if (containerRef.value) {
    containerRef.value.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  if (containerRef.value) {
    isScrollTopVisible.value = containerRef.value.scrollTop > 100;
  }
};

onMounted(() => {
  isMounted.value = true;
  if (containerRef.value) {
    containerRef.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div ref="containerRef" class="kiosk-project-container kiosk-project-container-scrollable">
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">키오스크 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">Vue.js를 활용한 햄버거 키오스크</p>
    </div>

    <!-- 뱃지 영역 -->
    <div class="badge-container">
      <!-- 첫 번째 뱃지 -->
      <img src="https://img.shields.io/badge/Vue.js-v3.4.21-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js Badge" />
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a
        href="https://github.com/Stjoo0925/Vue-project"
        target="_blank"
        aria-label="GitHub"
      >
        <img src="@/assets/images/project-github.svg" alt="Github Logo" class="logo" />
      </a>
      <a
        href="https://burgerkiosk.vercel.app/"
        target="_blank"
        aria-label="Vercel"
      >
        <img src="@/assets/images/deployed-vercel.svg" alt="Vercel Logo" class="logo" />
      </a>
    </div>

    <!-- 프로젝트 소개 영역 -->
    <section class="project-overview">
      <h2 class="section-title">프로젝트 소개</h2>
      <p class="section-description">
        이 프로젝트는 Vue.js를 기반으로 제작된 햄버거 키오스크 시스템입니다.<br />
        사용자들이 키오스크를 통해 메뉴를 선택하고 주문을 진행할 수 있도록
        구성되었으며, 사용자 친화적인 UI와 다양한 기능을 제공합니다.<br /><br />
        목표기간 : 24.05.23 - 06.12
      </p>
    </section>

    <!-- 기여 내역 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">기여 내역</h2>
      <ul class="tech-stack-list">
        <li>페이지 디자인 및 상태관리 & Api통신 파트 담당</li>
        <li>24.05.28 : Footer 레이아웃 완성</li>
        <li>24.05.29 : 메인메뉴 레이아웃 완성</li>
        <li>24.05.30 : 리드미 이미지 추가</li>
        <li>24.05.31 : json data 추가</li>
        <li>24.06.05 : Vue 메인메뉴 파트 변환 및 기능 완성</li>
        <li>24.06.06 : 메인메뉴 기능 추가 및 CSS 작업</li>
        <li>24.06.07 : 메인메뉴 기능 완성</li>
        <li>24.06.09 : 디렉토리 정리 및 코드 정리</li>
        <li>24.09.22 : 배포버전을 위한 로컬데이터로 변환</li>
      </ul>
    </section>

    <!-- 주요 기능 영역 -->
    <section class="project-features">
      <h2 class="section-title">주요 기능</h2>
      <ul class="feature-list">
        <li>메뉴 선택 및 주문 기능</li>
        <li>실시간 주문 내역 확인 및 수정</li>
        <li>다양한 세트 메뉴 구성 옵션</li>
        <li>장바구니 기능을 통한 주문 편의성 제공</li>
      </ul>
    </section>

    <!-- 사용 기술 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">사용 기술</h2>
      <ul class="tech-stack-list">
        <li>Vue.js - 프론트엔드 프레임워크</li>
        <li>Pinia - 상태 관리</li>
        <li>Axios - API 통신</li>
      </ul>
    </section>

    <!-- 프로젝트 이미지 영역 -->
    <section class="project-images">
      <h2 class="section-title">프로젝트 화면</h2>
      <div class="image-gallery">
        <div class="image-item">
          <img
            src="@/assets/images/vue-project/kiosk-main.png"
            alt="키오스크 메인 화면"
          />
          <p>메인 화면</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/vue-project/kiosk-order.png"
            alt="키오스크 주문 화면"
          />
          <p>주문 화면</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/vue-project/kiosk-payment.png"
            alt="키오스크 결제 화면"
          />
          <p>결제 화면</p>
        </div>
      </div>
    </section>

    <!-- 뒤로가기 버튼 -->
    <button v-if="isMounted" class="back-button" @click="goBack">
      <i class="bi bi-x-lg"></i>
    </button>

    <!-- 페이지 상단 이동 버튼 -->
    <button
      v-show="isScrollTopVisible"
      class="scroll-top-button"
      @click="scrollToTop"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<style scoped>
.kiosk-project-container {
  position: relative; /* 추가 */
  height: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--portfolio-bg-color);
}

.kiosk-project-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.kiosk-project-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
}

.title-container {
  text-align: center;
  margin-bottom: 30px;
}

.project-title {
  font-size: 2.5rem;
  font-family: "goorm-sans-bold";
  color: var(--font-color3);
}

.title-line {
  width: 300px;
  height: 2px;
  background-color: var(--font-color3);
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
}

.project-subtitle {
  font-family: "goorm-sans-code";
  font-size: 1.2rem;
  color: var(--font-color3);
  margin-bottom: 40px;
}

.badge-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.badge-container img {
  margin-left: 5px;
  margin-right: 5px;
}

/* 섹션 타이틀 스타일 */
.section-title {
  font-size: 1.8rem;
  font-family: "goorm-sans-bold";
  color: var(--font-color3);
  margin-bottom: 15px;
}

.section-description {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color3);
  line-height: 1.6;
}

.project-links {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 30px;
}

.project-links a {
  margin-right: 15px;
  font-size: 32px;
  color: #333;
  text-decoration: none;
}

.logo {
  width: 100%;
  height: 50px;
  vertical-align: middle;
}

.project-features,
.project-tech-stack {
  margin-bottom: 30px;
}

.feature-list,
.tech-stack-list {
  list-style-type: disc;
  padding-left: 20px;
}

.feature-list li,
.tech-stack-list li {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color3);
  margin-bottom: 5px;
}

.project-images {
  margin-top: 20px;
}

.image-gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  flex: 1 1 calc(33% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item img {
  width: 100%;
  height: 200px; /* 모든 이미지를 높이 200px로 설정 */
  border: 3px solid var(--header-footer-color);
  object-fit: cover; /* 이미지 비율을 유지하면서 영역에 맞게 잘라냄 */
  border-radius: 5px;
  margin-bottom: 5px;
}

.image-item p {
  font-family: "goorm-sans-code";
  font-size: 0.9rem;
  color: var(--font-color3);
}

/* 뒤로가기 버튼 스타일 */
.back-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: var(--secondary-highlight-color);
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.back-button i {
  margin-right: 5px;
}

/* 호버 효과 */
.back-button:hover {
  background-color: var(--secondary-bg-color); /* 호버 시 배경색 변경 */
}

.bi {
  margin: 0 !important;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.scroll-top-button {
  position: fixed;
  bottom: 60px;
  right: 20px;
  padding: 10px 15px;
  background-color: var(--secondary-highlight-color);
  color: var(--font-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s ease;
  animation: blink 2s infinite; /* 깜박이는 애니메이션 추가 */
}

.scroll-top-button:hover {
  opacity: 1;
  background-color: var(--secondary-bg-color);
}

.scroll-top-button i {
  font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
  .image-gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  .back-button {
    right: 2%;
    opacity: 0.5;
  }
}
</style>
