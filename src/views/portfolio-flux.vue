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
  <div ref="containerRef" class="flux-project-container flux-project-container-scrollable">
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">Flux 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">
        Spring Boot & Vue.js를 이용한 전자상거래 플랫폼
      </p>
    </div>

    <!-- 뱃지 영역 -->
    <div class="badge-container">
      <!-- 첫 번째 뱃지 -->
      <img src="https://img.shields.io/badge/SpringBoot-v3.3.2-%236DB33F?style=flat&logo=spring-boot&logoColor=white" alt="SpringBoot Badge" />
      <!-- 두 번째 뱃지 -->
      <img src="https://img.shields.io/badge/Vue.js-v3.4.29-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js Badge" />
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a href="https://github.com/Flux2024" target="_blank" aria-label="GitHub">
        <img src="@/assets/images/project-github.svg" alt="GitHub Logo" class="logo" />
      </a>
      <a
        href="https://flux-front-server.vercel.app/"
        target="_blank"
        aria-label="Live Site"
      >
        <img
          src="@/assets/images/deployed-vercel.svg"
          alt="Live Site Logo"
          class="logo"
        />
      </a>
    </div>

    <!-- 프로젝트 소개 영역 -->
    <section class="project-overview">
      <h2 class="section-title">프로젝트 소개</h2>
      <p class="section-description">
        본 프로젝트는 최신 웹 기술을 활용하여 온라인 경매 웹 애플리케이션을
        개발하는 것을 목표로 합니다.<br /><br />
        백엔드는 안정성과 확장성을 갖춘 Spring 프레임워크를 활용하여
        구현되었으며,<br />
        프론트엔드는 사용자 친화적인 Vue.js 프레임워크를 사용하여
        구축되었습니다.<br /><br />
        이를 통해 사용자에게 매끄러운 경매 경험을 제공하는 것을 목표로
        합니다.<br /><br />
        목표기간 : 2024.07.15 ~ 08.07(기간연장 08.16)
      </p>
    </section>

    <!-- 기여 내역 영역 -->
    <section class="project-contributions">
      <h2 class="section-title">기여 내역</h2>
      <ul class="contributions-list">
        <li>Github Organizations구축 및 프로젝트 위키 작성</li>
        <li>프로젝트 설계 및 CI/CD 파이프라인 구축</li>
        <li>백엔드 API 개발 및 REST 설계</li>
        <li>프론트엔드 페이지 디자인 및 상태 관리 구현</li>
      </ul>
    </section>

    <!-- 주요 기능 영역 -->
    <section class="project-features">
      <h2 class="section-title">주요 기능</h2>
      <p class="section-description">-사용자페이지-</p>
      <ul class="feature-list">
        <li>상품판매 및 등록기능</li>
        <li>상품 상세보기 기능</li>
        <li>소셜 로그인 기능</li>
        <li>아티클 상세보기 기능</li>
        <li>랭킹 기능</li>
        <li>마이페이지 기능</li>
      </ul>
      <p class="section-description">-관리자페이지-</p>
      <ul class="feature-list">
        <li>회원 목록 조회 기능</li>
        <li>회원 권한 조정 기능</li>
        <li>공지사항 등록 기능</li>
        <li>아티클 등록 기능</li>
      </ul>
    </section>

    <!-- 사용 기술 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">사용 기술</h2>
      <img src="@/assets/images/flux-project/flux-stack.png" />
    </section>

    <!-- 프로젝트 이미지 영역 -->
    <section class="project-images">
      <h2 class="section-title">프로젝트 화면</h2>
      <div class="image-gallery">
        <div class="image-item">
          <img
            src="@/assets/images/flux-project/flux-main.png"
            alt="메인 페이지"
          />
          <p>메인 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/flux-project/flux-login.png"
            alt="로그인 페이지"
          />
          <p>로그인 페이지</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/flux-project/flux-announcement.png"
            alt="공지사항 페이지"
          />
          <p>공지사항 페이지</p>
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
/* 컨테이너 스타일 */
.flux-project-container {
  position: relative; /* 추가 */
  height: 100%;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--portfolio-bg-color);
}

.flux-project-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.flux-project-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
}

/* 제목 영역 스타일 */
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
  width: 250px;
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

/* 프로젝트 링크 영역 스타일 */
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

/* 주요 기능 및 사용 기술 섹션 스타일 */
.project-features,
.project-tech-stack,
.project-contributions {
  margin-bottom: 30px;
}

.feature-list,
.tech-stack-list,
.contributions-list {
  list-style-type: disc;
  padding-left: 20px;
}

.feature-list li,
.tech-stack-list li,
.contributions-list li {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color3);
  margin-bottom: 5px;
}

/* 프로젝트 이미지 영역 스타일 */
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

  .project-tech-stack img {
    width: 100%;
  }

  .back-button {
    right: 2%;
    opacity: 0.5;
  }
}
</style>
