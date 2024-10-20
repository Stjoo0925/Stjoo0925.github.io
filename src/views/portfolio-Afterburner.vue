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
  <div
    ref="containerRef"
    class="kiosk-project-container kiosk-project-container-scrollable"
  >
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">Afterburner 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">
        React와 Supabase를 이용한 프로젝트 설명사이트
      </p>
    </div>

    <!-- 뱃지 영역 -->
    <div class="badge-container">
      <!-- 첫 번째 뱃지 -->
      <img
        src="https://img.shields.io/badge/React-v18.3.1-61DAFB?logo=react&logoColor=white"
        alt="React Badge"
      />
      <img
        src="https://img.shields.io/badge/Redux-v9.1.2-764ABC?logo=redux&logoColor=white"
        alt="Redux Badge"
      />
      <img
        src="https://img.shields.io/badge/ESLint-v9.12.0-4B32C3?logo=eslint&logoColor=white"
        alt="ESLint Badge"
      />
      <img
        src="https://img.shields.io/badge/TailwindCSS-v3.4.13-38B2AC?logo=tailwindcss&logoColor=white"
        alt="TailwindCSS Badge"
      />
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a
        href="https://github.com/Afterburner2024/Afterburner-Front"
        target="_blank"
        aria-label="GitHub"
      >
        <img
          src="@/assets/images/project-github.svg"
          alt="Github Logo"
          class="logo"
        />
      </a>
      <a
        href="https://burgerkiosk.vercel.app/"
        target="_blank"
        aria-label="Vercel"
      >
        <img
          src="@/assets/images/deployed-netlify.svg"
          alt="Vercel Logo"
          class="logo"
        />
      </a>
    </div>

    <!-- 프로젝트 소개 영역 -->
    <section class="project-overview">
      <h2 class="section-title">프로젝트 소개</h2>
      <p class="section-description">
        우리 웹 페이지는 사용자 친화적인 UI와 관리 편의성을 중점으로
        개발되었습니다.<br />
        프론트엔드에서는 React를 기반으로 하여 빠른 렌더링과 컴포넌트 재사용성을
        극대화하였으며,<br />
        TailwindCss를 통해 반응형 웹디자인을 구현하였으며,<br />
        Redux를 통해 전역 상태 관리를 효율적으로 처리하고 있습니다.<br />
        또한, Supabase를 활용해 실시간 데이터 동기화와 통신을 원활하게 처리하여
        데이터의 즉각적인 반영이 가능하도록 설계하였습니다.<br />
        목표기간 : 24.10.14 - 10.20
      </p>
    </section>

    <!-- 기여 내역 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">기여 내역</h2>
      <ul class="tech-stack-list">
        <li>웹페이지 전체 디자인 및 코드설계 Supabase연결 및 배포</li>
        <li>소개 페이지</li>
        <li>기능 페이지</li>
        <li>리뷰 페이지</li>
        <li>서포트 페이지</li>
        <li>팀소개 페이지</li>
      </ul>
    </section>

    <!-- 주요 기능 영역 -->
    <section class="project-features">
      <h2 class="section-title">주요 기능</h2>
      <ul class="feature-list">
        <li>메일보내기</li>
        <li>프로젝트 및 팀원 링크</li>
      </ul>
    </section>

    <!-- 사용 기술 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">사용 기술</h2>
      <ul class="tech-stack-list">
        <li>React - 프론트엔드 프레임워크</li>
        <li>Redux - 상태 관리</li>
        <li>TailwindCSS - css 프레임워크</li>
        <li>Supabase - 데이터베이스</li>
      </ul>
    </section>

    <!-- 프로젝트 이미지 영역 -->
    <section class="project-images">
      <h2 class="section-title">프로젝트 화면</h2>
      <div class="image-gallery">
        <div class="image-item">
          <img
            src="@/assets/images/afterburner-project/afterburner-main.png"
            alt="키오스크 메인 화면"
          />
          <p>메인 화면</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/afterburner-project/afterburner-function.png"
            alt="키오스크 주문 화면"
          />
          <p>기능 소개 화면</p>
        </div>
        <div class="image-item">
          <img
            src="@/assets/images/afterburner-project/afterburner-team.png"
            alt="키오스크 결제 화면"
          />
          <p>팀 소개 화면</p>
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
  width: 400px;
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
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
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
