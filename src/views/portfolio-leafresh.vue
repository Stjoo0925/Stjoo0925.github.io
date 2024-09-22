<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="flux-project-container flux-project-container-scrollable">
    <!-- 제목 영역 -->
    <div class="title-container">
      <h1 class="project-title">Leafresh 프로젝트</h1>
      <hr class="title-line" />
      <p class="project-subtitle">
        Spring Boot & Vue.js를 이용한 SNS스타일 원예일지 플랫폼
      </p>
    </div>

    <!-- 아이콘 링크 영역 -->
    <div class="project-links">
      <a
        href="https://github.com/Leafresh-2024"
        target="_blank"
        aria-label="GitHub"
      >
        <img src="@/assets/images/github.svg" alt="GitHub Logo" class="logo" />
      </a>
      <a
        href="https://leafresh-frontend-nine.vercel.app/community"
        target="_blank"
        aria-label="Live Site"
      >
        <img
          src="@/assets/images/vercel.svg"
          alt="Live Site Logo"
          class="logo"
        />
      </a>
    </div>

    <!-- 프로젝트 소개 영역 -->
    <section class="project-overview">
      <h2 class="section-title">프로젝트 소개</h2>
      <p class="section-description">
        1. 체계적인 원예 관리<br />
        Leafresh는 당신의 원예 활동을 효과적으로 기록하고 관리할 수 있도록
        도와줍니다.<br />
        식물의 성장 단계, 물주기, 비료 사용 등 모든 세부 사항을 체계적으로
        기록할 수 있어, 더 나은 원예 결과를 얻을 수 있습니다.<br />
        식물별로 일지를 작성해 언제든지 참고할 수 있어, 보다 과학적이고 효율적인
        원예 관리를 할 수 있습니다.<br /><br />
        2. 커뮤니티의 지식 공유<br />
        Leafresh의 커뮤니티는 전 세계의 원예 애호가들이 모여 서로의 경험과
        지식을 공유하는 공간입니다.<br />
        초보자부터 전문가까지 다양한 사용자가 활발하게 활동하고 있으며, 문제
        해결부터 새로운 아이디어까지 다양한 주제로 소통할 수 있습니다.<br />
        커뮤니티의 도움을 받아 식물의 문제를 해결하거나 새로운 원예 트렌드를
        발견할 수 있습니다.<br /><br />
        3. 맞춤형 원예 조언 제공<br />
        Leafresh는 사용자의 식물 종류와 지역 기후에 따라 맞춤형 원예 조언을
        제공합니다.<br />
        이를 통해 각 식물의 최적 성장 조건을 이해하고, 더 건강한 식물을 키울 수
        있습니다.<br />
        또한, 특정 상황에 맞는 알림과 팁을 제공해 원예 초보자들도 쉽게 따라할 수
        있습니다.<br /><br />
        Leafresh는 단순한 원예 도구를 넘어, 당신의 원예 생활을 더 즐겁고
        성공적으로 만들어 줄 완벽한 동반자입니다.<br /><br />
        목표기간 : 2024.08.23 ~ 09.30
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

    <!-- 아키텍쳐 영역 -->
    <section class="project-tech-stack">
      <h2 class="section-title">아키텍쳐</h2>
      <img src="@/assets/images/flux-project/flux-stack.png" />
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
    <button class="back-button" @click="goBack">
      <i class="bi bi-arrow-return-left"></i>
    </button>
  </div>
</template>

<style scoped>
/* 컨테이너 스타일 */
.flux-project-container {
  height: 100%;
  padding: 20px;
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

/* 섹션 타이틀 스타일 */
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

/* 프로젝트 링크 영역 스타일 */
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
  color: var(--font-color);
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
</style>
