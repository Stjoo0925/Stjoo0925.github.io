<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="portfolio-container portfolio-container-scrollable">
    <div class="title-container">
      <div class="title">포트폴리오</div>
      <hr class="title-line" />
      <div class="scription">작업한 프로젝트 현황</div>
    </div>
    <div class="portfolio-grid animate__animated animate__fadeInUp">
      <!-- 첫 번째 프로젝트 카드 -->
      <div class="portfolio-card" @click="navigateTo('/portfolio/flux')">
        <!-- 기술 뱃지를 추가하고 카드 내용의 위로 이동 -->
        <div class="portfolio-badges">
          <span class="badge">Spring</span>
          <span class="badge">Vue.js</span>
          <span class="badge">MySQL</span>
          <span class="badge">JPA</span>
        </div>
        <img
          src="@/assets/images/background/flux-project.png"
          alt="Flux project"
          class="portfolio-image"
        />
        <div class="portfolio-info">
          <h5>Flux Project</h5>
          <p>
            스프링프레임워크와 뷰프레임워크를 이용한 전자상거래 플랫폼 프로젝트
          </p>
        </div>
      </div>
      <!-- 두 번째 프로젝트 카드 -->
      <div class="portfolio-card" @click="navigateTo('/portfolio/leafresh')">
        <!-- 기술 뱃지를 추가하고 카드 내용의 위로 이동 -->
        <div class="portfolio-badges">
          <span class="badge">Spring</span>
          <span class="badge">Vue.js</span>
          <span class="badge">MySQL</span>
          <span class="badge">JPA</span>
        </div>
        <img
          src="@/assets/images/background/leafresh-project.png"
          alt="Leafresh project"
          class="portfolio-image"
        />
        <div class="portfolio-info">
          <h5>Leafresh Project</h5>
          <p>
            스프링프레임워크와 뷰프레임워크를 이용한 SNS 스타일의 원예일지
            플랫폼 프로젝트
          </p>
        </div>
      </div>
      <!-- 세 번째 프로젝트 카드 -->
      <div class="portfolio-card" @click="navigateTo('/portfolio/Afterburner')">
        <!-- 기술 뱃지를 카드 내용의 위로 이동 -->
        <div class="portfolio-badges">
          <span class="badge">React</span>
          <span class="badge">Tailwindcss</span>
          <span class="badge">Redux</span>
          <span class="badge">Supabase</span>
        </div>
        <img
          src="@/assets/images/background/Afterburner-project.png"
          alt="Vue.js Project"
          class="portfolio-image"
        />
        <div class="portfolio-info">
          <h5>Afterburner</h5>
          <p>React와 Supabase를 이용한 프로젝트 설명사이트</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 50px;
  box-sizing: border-box;
  background-color: var(--main-bg-color);
}

.portfolio-container-scrollable {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.portfolio-container-scrollable::-webkit-scrollbar {
  display: none;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-family: "goorm-sans-bold";
  font-size: 2rem;
  color: var(--font-color2);
  text-shadow: 1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black,
    -1px -1px 0 black;
}

.title-line {
  width: 100px;
  height: 2px;
  background-color: black;
  border: none;
  margin: 10px auto;
}

.scription {
  font-family: "goorm-sans-bold";
  font-size: 1rem;
  color: var(--font-color2);
  text-shadow: 1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black,
    -1px -1px 0 black;
}

/* 포트폴리오 그리드 스타일 */
.portfolio-grid {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.portfolio-card {
  position: relative; /* 상대 위치 설정 */
  width: 300px;
  background-color: var(--header-footer-color);
  border: 3px solid var(--secondary-highlight-color);
  border-radius: 10px;
  overflow: visible; /* 뱃지가 카드 밖으로 나올 수 있도록 */
  cursor: pointer;
  transition: transform 0.3s;
}

.portfolio-card:hover {
  transform: translateY(-10px);
}

.portfolio-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

.portfolio-info {
  min-height: 130px;
  padding: 15px;
}

.portfolio-info h5 {
  font-family: "goorm-sans-bold";
  font-size: 1.5rem;
  color: var(--font-color);
  margin-bottom: 10px;
  text-align: center;
}

.portfolio-info p {
  font-family: "goorm-sans-code";
  font-size: 0.8rem;
  color: var(--font-color);
  line-height: 1.4;
}

/* 기술 뱃지 스타일 */
.portfolio-badges {
  display: none; /* 기본적으로 숨김 처리 */
  position: absolute;
  top: -60px; /* 카드 위로 배치 */
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  text-align: center;
  z-index: 1;
}

.badge {
  display: inline-block;
  background-color: var(--header-footer-color);
  color: var(--font-color);
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px 5px 0 0;
  font-size: 0.8rem;
}

/* 카드 호버 시 기술 뱃지 표시 및 애니메이션 효과 */
.portfolio-card:hover .portfolio-badges {
  display: flex;
  flex-direction: row;
  animation: fadeInDown 0.3s ease forwards;
}

/* 애니메이션 키프레임 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -10px); /* 위쪽에서 시작 */
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0); /* 원래 위치 */
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: flex-start;
  }

  .portfolio-card {
    width: 90%;
    max-width: 350px;
    height: auto;
    background-color: var(--header-footer-color);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .portfolio-image {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
  }

  .portfolio-info {
    padding: 10px;
    min-height: 0 !important;
  }

  .portfolio-info h5 {
    font-size: 1.2rem;
    margin: 0 !important;
  }

  .portfolio-info p {
    display: none;
  }

  .title {
    font-size: 1.8rem;
  }

  .title-line {
    width: 80px;
  }

  .scription {
    font-size: 0.9rem;
  }

  /* 모바일에서 기술 뱃지 숨기기 */
  .portfolio-badges {
    display: none !important;
  }
}

/* 화면이 480px 이하일 때 적용 */
@media (max-width: 480px) {
  .portfolio-card {
    width: 100%;
    max-width: 100%;
    margin: 0 10px;
  }

  .portfolio-image {
    max-height: 150px;
  }

  .portfolio-info {
    padding: 10px;
    min-height: 0 !important;
  }

  .portfolio-info h5 {
    font-size: 1rem;
    margin: 0 !important;
  }

  .portfolio-info p {
    display: none;
  }

  .title {
    font-size: 1.5rem;
  }

  .title-line {
    width: 60px;
  }

  .scription {
    font-size: 0.8rem;
  }

  /* 모바일에서 기술 뱃지 숨기기 */
  .portfolio-badges {
    display: none !important;
  }
}
</style>
