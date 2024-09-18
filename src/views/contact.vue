<script setup>
import { ref } from "vue";

import Gmail from "@/assets/images/Gmail.svg";
import Github from "@/assets/images/Github.svg";
import Velog from "@/assets/images/Velog.svg";
import Discord from "@/assets/images/Discord.svg";

// 연락처 정보와 소셜 링크
const contactInfo = {
  name: "주순태",
  email: "stjoo0925@gmail.com",
  phone: "+82-10-3494-3809",
  socialLinks: {
    gmail: "mailto:stjoo0925@mail.com",
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
        연락을 주시면 최대한 빠른 답신을 드리겠습니다.
      </div>
    </div>

    <!-- 카드 형식 연락처 -->
    <div class="contact-card animate__animated animate__backInUp">
      <div class="card-body">
        <div class="card-contents">
          <h5 class="card-title">{{ contactInfo.name }}</h5>
          <p class="card-text">
            <strong>이메일:</strong> {{ contactInfo.email }}
          </p>
          <p class="card-text">
            <strong>전화번호:</strong> {{ contactInfo.phone }}
          </p>
        </div>

        <!-- 소셜 아이콘 -->
        <div class="social-icons animate__animated animate__backInUp">
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
            <img :src="contactInfo.socialIcons.gmail" />
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
            <img :src="contactInfo.socialIcons.github" />
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
            <img :src="contactInfo.socialIcons.velog" />
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
            <img :src="contactInfo.socialIcons.discord" />
            <p>Discord</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--font-color2);
}

.contact-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
}

.contact-container-scrollable {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.contact-container-scrollable::-webkit-scrollbar {
  display: none;
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

/* 카드 형식 연락처 스타일 */
.contact-card {
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 300px;
  padding: 20px;
  border-radius: 10px;
}

.card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
}

.card-contents {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.card-title {
  font-family: "goorm-sans-bold";
  font-size: 21px;
  margin-bottom: 10px;
}

.card-text {
  font-family: "goorm-sans-code";
  font-size: 14px;
  margin-bottom: 5px;
}

.social-icons {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.social-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.3s, fill 0.3s;
}

.social-icon img {
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  color: var(--font-color2);
  margin: 5px;
}

.social-icon p {
  font-family: "goorm-sans-code";
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
  transition: filter 0.3s;
}

/* 미디어 쿼리 - 화면이 768px 이하일 때 적용 */
@media screen and (max-width: 768px) {
  .contact-card {
    max-height: none; /* 높이 제한 해제 */
    padding: 10px;
  }

  .card-body {
    flex-direction: column; /* 수직 레이아웃으로 변경 */
  }

  .card-contents {
    margin: 5px;
    padding: 5px;
  }

  .card-title {
    font-size: 18px; /* 제목 크기 줄이기 */
  }

  .card-text {
    font-size: 12px; /* 텍스트 크기 줄이기 */
  }

  .social-icons {
    flex-direction: row; /* 아이콘을 수직으로 나열 */
  }

  .social-icon img {
    width: 40px; /* 아이콘 크기 줄이기 */
    height: 40px;
  }

  .social-icon p {
    font-size: 12px; /* 아이콘 텍스트 크기 줄이기 */
  }
}

/* 미디어 쿼리 - 화면이 480px 이하일 때 적용 */
@media screen and (max-width: 480px) {
  .title {
    font-size: 1.4rem; /* 제목 크기 더 줄이기 */
  }

  .card-title {
    font-size: 16px; /* 제목 크기 더 줄이기 */
  }

  .card-text {
    font-size: 10px; /* 텍스트 크기 더 줄이기 */
  }

  .social-icon img {
    width: 30px; /* 아이콘 크기 더 줄이기 */
    height: 30px;
  }

  .social-icon p {
    font-size: 10px; /* 아이콘 텍스트 크기 더 줄이기 */
  }
}
</style>
