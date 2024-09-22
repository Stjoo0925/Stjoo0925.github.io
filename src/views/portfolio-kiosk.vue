<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="kiosk-project-container kiosk-project-container-scrollable">
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">키오스크 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">Vue.js를 활용한 햄버거 키오스크</p>
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a
        href="https://github.com/Stjoo0925/Vue-project"
        target="_blank"
        aria-label="GitHub"
      >
        <img src="@/assets/images/github.svg" alt="Github Logo" class="logo" />
      </a>
      <a
        href="https://burgerkiosk.vercel.app/"
        target="_blank"
        aria-label="Vercel"
      >
        <img src="@/assets/images/vercel.svg" alt="Vercel Logo" class="logo" />
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
    <button class="back-button" @click="goBack">
      <i class="bi bi-arrow-return-left"></i>
    </button>
  </div>
</template>

<style scoped>
.kiosk-project-container {
  height: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
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
  color: var(--font-color);
}

.title-line {
  width: 100px;
  height: 2px;
  background-color: var(--font-color);
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
}

.project-subtitle {
  font-family: "goorm-sans-code";
  font-size: 1.2rem;
  color: var(--font-color);
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.8rem;
  font-family: "goorm-sans-bold";
  color: var(--font-color);
  margin-bottom: 15px;
}

.section-description {
  font-family: "goorm-sans-code";
  font-size: 1rem;
  color: var(--font-color);
  line-height: 1.6;
}

.project-links {
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
  width: 32px;
  height: 32px;
  vertical-align: middle;
  filter: invert(1);
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
  color: var(--font-color);
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
  border: 3px solid var(--secondary-highlight-color);
  object-fit: cover; /* 이미지 비율을 유지하면서 영역에 맞게 잘라냄 */
  border-radius: 5px;
  margin-bottom: 5px;
}

.image-item p {
  font-family: "goorm-sans-code";
  font-size: 0.9rem;
  color: var(--font-color);
}

/* 뒤로가기 버튼 스타일 */
.back-button {
  position: fixed;
  top: 15%;
  right: 40px;
  transform: translateY(-50%);
  padding: 10px 15px;
  background-color: var(--secondary-highlight-color);
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
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
</style>
