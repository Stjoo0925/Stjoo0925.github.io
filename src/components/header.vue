<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const isMenuOpen = ref(false);
const isHovered = ref(false); // 로고 hover 상태 저장
const router = useRouter();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  const menu = document.querySelector(".nav-menu");
  const hamburgerButton = document.querySelector(".hamburger-btn");

  if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

router.beforeEach(() => {
  isMenuOpen.value = false;
  return true;
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header class="header-container">
    <RouterLink to="/">
      <div class="logo">
        <i class="bi bi-lightning-charge-fill header-img"></i>
        <div class="header-title">JooSoonTae | Portfolio</div>
      </div>
    </RouterLink>

    <!-- 햄버거 버튼 (모바일용) -->
    <button class="hamburger-btn" @click="toggleMenu">
      <i class="bi bi-list"></i>
    </button>

    <!-- 네비게이션 메뉴 -->
    <nav class="nav-menu" :class="{ 'is-open': isMenuOpen }">
      <ul>
        <li><router-link to="/" exact>About</router-link></li>
        <li><router-link to="/tech-skills">TechSkills</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration-line: none;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-footer-color);
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.hamburger-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--font-color);
  cursor: pointer;
}

.hamburger-btn.is-open i {
  color: var(--primary-highlight-color);
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.header-img {
  width: 24px;
  height: auto;
  margin-right: 10px;
  transition: color 0.3s ease;
  color: var(--font-color);
}

.header-title {
  font-family: "goorm-sans-bold", sans-serif;
  font-size: 24px;
  margin: 0;
  color: var(--font-color);
  transition: color 0.3s ease;
}

/* 기본적으로 데스크탑에서는 메뉴가 보여야 함 */
.nav-menu {
  display: flex;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  font-family: "goorm-sans-bold";
  text-decoration: none;
  color: var(--font-color);
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu li a:hover {
  color: var(--primary-highlight-color);
}

/* 활성화된 링크에 적용될 스타일 */
.nav-menu li a.router-link-active {
  color: var(--primary-highlight-color);
  border-bottom: 2px solid var(--primary-highlight-color);
}

/* 모바일 화면일 때 햄버거 메뉴 적용 */
@media (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 0; /* top을 0으로 변경 */
    right: 0;
    background-color: var(--header-footer-color);
    width: 100%;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transform: translateY(-100%); /* 기본적으로 메뉴를 숨김 */
    transition: transform 0.5s ease, max-height 0.5s ease;
    z-index: 10;
  }

  .nav-menu.is-open {
    transform: translateY(0); /* 메뉴가 열릴 때 */
    max-height: 600px; /* 원하는 높이 지정 */
  }

  .hamburger-btn {
    display: block; /* 모바일에서만 햄버거 버튼 보임 */
  }

  .nav-menu ul {
    flex-direction: column;
    margin-bottom: 10px;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu li a {
    font-size: 14px;
    width: 100%;
    text-align: left;
    padding: 10px;
  }

  .nav-menu li a.router-link-active {
    border-bottom: none;
  }
}
</style>
