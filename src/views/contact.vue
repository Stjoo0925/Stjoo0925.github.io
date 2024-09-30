<script setup>
import { ref } from "vue";

import Gmail from "@/assets/images/Gmail.svg";
import Github from "@/assets/images/Github.svg";
import Velog from "@/assets/images/Velog.svg";
import Discord from "@/assets/images/Discord.svg";

// 연락처 정보와 소셜 링크
const contactInfo = {
  img: "https://avatars.githubusercontent.com/u/166350549?v=4",
  name: "주순태 | stjoo0925",
  email: "stjoo0925@gmail.com",
  phone: "010-3494-3809",
  socialLinks: {
    gmail: "mailto:stjoo0925@gmail.com",
    github: "https://github.com/Stjoo0925",
    velog: "https://velog.io/@stjoo0925/posts",
    discord: "https://discord.gg/8zrXwu4Cms",
  },
  socialIcons: {
    gmail: Gmail,
    github: Github,
    velog: Velog,
    discord: Discord,
  },
};

// 호버 중인 아이콘을 관리하는 상태
const activeIcon = ref("");

// 아이콘에 마우스를 올렸을 때 애니메이션을 트리거하는 함수
const hoverIcon = (icon) => {
  activeIcon.value = icon;
};
</script>

<template>
  <div class="contact-container contact-container-scrollable">
    <div class="title-container">
      <div class="title">연락처</div>
      <hr class="title-line" />
      <div class="scription">
        편하게 연락 주시면, 빠르고 친절하게 답변 드리겠습니다
      </div>
    </div>

    <!-- 카드 형식 연락처 -->
    <div class="contact-card animate__animated animate__fadeIn">
      <div class="card-body">
        <div class="card-contents">
          <img :src="contactInfo.img" alt="GIthub Profile Image" />
          <h5 class="card-title">{{ contactInfo.name }}</h5>
          <p class="card-text">
            {{ contactInfo.email }}
          </p>
          <p class="card-text">
            {{ contactInfo.phone }}
          </p>
        </div>

        <!-- 소셜 아이콘 -->
        <div class="social-icons animate__animated animate__fadeIn">
          <a
            :href="contactInfo.socialLinks.gmail"
            target="_blank"
            class="social-icon"
            @mouseover="hoverIcon('gmail')"
            @mouseleave="hoverIcon('')"
            :class="{
              'animate__animated animate__rubberBand': activeIcon === 'gmail',
            }"
          >
            <img :src="contactInfo.socialIcons.gmail" alt="Gmail" />
            <p>Gmail</p>
          </a>
          <a
            :href="contactInfo.socialLinks.github"
            target="_blank"
            class="social-icon"
            @mouseover="hoverIcon('github')"
            @mouseleave="hoverIcon('')"
            :class="{
              'animate__animated animate__rubberBand': activeIcon === 'github',
            }"
          >
            <img :src="contactInfo.socialIcons.github" alt="Github" />
            <p>Github</p>
          </a>
          <a
            :href="contactInfo.socialLinks.velog"
            target="_blank"
            class="social-icon"
            @mouseover="hoverIcon('velog')"
            @mouseleave="hoverIcon('')"
            :class="{
              'animate__animated animate__rubberBand': activeIcon === 'velog',
            }"
          >
            <img :src="contactInfo.socialIcons.velog" alt="Velog" />
            <p>Velog</p>
          </a>
          <a
            :href="contactInfo.socialLinks.discord"
            target="_blank"
            class="social-icon"
            @mouseover="hoverIcon('discord')"
            @mouseleave="hoverIcon('')"
            :class="{
              'animate__animated animate__rubberBand': activeIcon === 'discord',
            }"
          >
            <img :src="contactInfo.socialIcons.discord" alt="Discord" />
            <p>Discord</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 전역 a 태그 스타일 */
a {
  text-decoration: none;
  color: var(--font-color2);
}

.contact-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  min-height: 400px;
  max-height: 100vh;
  background-color: var(--main-bg-color);
}

.contact-container-scrollable {
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.contact-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

.contact-card {
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* 카드 내용 */
.card-contents {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--secondary-bg-color);
  border: 3px solid var(--secondary-highlight-color);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.card-contents img {
  width: 120px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid var(--secondary-highlight-color);
}

.card-title {
  font-family: "goorm-sans-bold";
  font-size: 21px;
  margin-bottom: 20px;
  color: var(--font-color2);
}

.card-text {
  font-family: "goorm-sans-code";
  font-size: 14px;
  margin-bottom: 5px;
  color: var(--font-color2);
}

/* 소셜 아이콘 */
.social-icons {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--secondary-bg-color);
  border: 3px solid var(--secondary-highlight-color);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.social-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, color 0.3s;
}

.social-icon img {
  width: 50px;
  height: 50px;
  margin: 5px;
}

.social-icon p {
  font-family: "goorm-sans-code";
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 0 !important;
  text-align: center;
  transition: transform 0.3s;
}

/* 호버 효과 */
.social-icon.animate__animated.animate__rubberBand {
  transform: scale(1.2);
}

/* 작은 화면을 위한 미디어 쿼리 */
@media screen and (max-width: 1200px) {
  .card-body {
    max-width: 1000px;
  }
}

@media screen and (max-width: 1024px) {
  .card-body {
    flex-direction: column;
    align-items: center;
  }

  .card-contents,
  .social-icons {
    width: 100%;
    max-width: 500px;
  }

  .social-icons {
    justify-content: space-around;
    gap: 10px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .title-line {
    width: 80px;
  }

  .scription {
    font-size: 0.9rem;
  }

  .card-body {
    padding: 10px;
  }

  .card-contents,
  .social-icons {
    width: 100%;
    max-width: 100%;
  }

  .social-icon img {
    width: 40px;
    height: 40px;
  }

  .social-icon p {
    font-size: 12px;
  }

  .social-icon.animate__animated.animate__rubberBand {
    transform: scale(1.1);
  }
}

@media screen and (max-width: 480px) {
  .title {
    font-size: 1.4rem;
  }

  .title-line {
    width: 60px;
  }

  .scription {
    font-size: 0.8rem;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    font-size: 12px;
  }

  .social-icon img {
    width: 30px;
    height: 30px;
  }

  .social-icon p {
    font-size: 10px;
  }

  .social-icon.animate__animated.animate__rubberBand {
    transform: scale(1);
  }
}
</style>
