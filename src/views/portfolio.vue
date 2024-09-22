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
      <div class="scription">작업한 프로젝트 현황입니다</div>
    </div>
    <div class="portfolio-silde">
      <!-- 자동 슬라이드 기능을 추가 -->
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-theme="dark"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            data-bs-interval="3000"
            @click="navigateTo('/portfolio/kiosk')"
            style="cursor: pointer"
          >
            <img
              src="@/assets/images/background/vue-project.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Vue.js Project</h5>
              <p>Vue.js를 이용한 햄버거 키오스크 프로젝트</p>
            </div>
          </div>
          <div
            class="carousel-item"
            data-bs-interval="3000"
            @click="navigateTo('/portfolio/flux')"
            style="cursor: pointer"
          >
            <img
              src="@/assets/images/background/flux-project.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Flux project</h5>
              <p>
                스프링프레임워크와 뷰프레임워크를 이용한 전자상거래플랫폼
                프로젝트
              </p>
            </div>
          </div>
          <div
            class="carousel-item"
            data-bs-interval="3000"
            @click="navigateTo('/portfolio/leafresh')"
            style="cursor: pointer"
          >
            <img
              src="@/assets/images/background/leafresh-project.png"
              class="d-block w-100"
              alt="..."
              style="object-fit: cover"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Leafresh project</h5>
              <p>
                스프링프레임워크와 뷰프레임워크를 이용한 SNS스타일의
                원예일지플랫폼 프로젝트
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
}

.portfolio-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.portfolio-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "goorm-sans-bold";
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: var(--font-color2);
}

.title-line {
  width: 100px;
  height: 2px;
  background-color: var(--font-color2);
  border: none;
  margin: 0 auto;
  margin-bottom: 10px;
}

.scription {
  font-family: "goorm-sans-bold";
  font-size: 0.8rem;
  margin-bottom: 5px;
  color: var(--font-color2);
}

.portfolio-silde {
  max-width: 1000px;
  width: 100%;
  height: auto;
}

.carousel-caption h5 {
  font-family: "goorm-sans-bold";
  font-size: 1.2rem;
  color: var(--font-color);
  background-color: var(--header-footer-color);
  padding: 0.2em 0.5em;
  border-radius: 5px;
}

.carousel-caption p {
  font-family: "goorm-sans-code";
  font-size: 0.8rem;
  color: var(--font-color);
  background-color: var(--header-footer-color);
  padding: 0.2em 0.5em;
  border-radius: 5px;
}
</style>
