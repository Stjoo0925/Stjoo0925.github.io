<script setup>
import { reactive } from "vue";

import Java from "@/assets/images/Java-Light.svg";
import Spring from "@/assets/images/Spring-Light.svg";
import MySQL from "@/assets/images/MySQL-Light.svg";
import Jpa from "@/assets/images/Jpa.svg";
import HTML from "@/assets/images/HTML.svg";
import CSS from "@/assets/images/CSS.svg";
import JavaScript from "@/assets/images/JavaScript.svg";
import Vue from "@/assets/images/VueJS-Light.svg";
import Git from "@/assets/images/Git.svg";
import Github from "@/assets/images/Github-Light.svg";
import Docker from "@/assets/images/Docker.svg";
import Jenkins from "@/assets/images/Jenkins-Light.svg";

const techStack = reactive([
  {
    name: "Java",
    logo: Java,
    description: "Back-end",
  },
  {
    name: "Spring",
    logo: Spring,
    description: "Back-end Framework",
  },
  {
    name: "MySQL",
    logo: MySQL,
    description: "Database",
  },
  {
    name: "JPA",
    logo: Jpa,
    description: "Data Persistence",
  },
  {
    name: "HTML",
    logo: HTML,
    description: "Markup Language",
  },
  {
    name: "CSS",
    logo: CSS,
    description: "Styling",
  },
  {
    name: "JavaScript",
    logo: JavaScript,
    description: "Front-end",
  },
  {
    name: "Vue.js",
    logo: Vue,
    description: "Front-end Framework",
  },
  {
    name: "Docker",
    logo: Docker,
    description: "Containerization",
  },
  {
    name: "Jenkins",
    logo: Jenkins,
    description: "CI/CD Automation",
  },
  {
    name: "Git",
    logo: Git,

    description: "Version Control",
  },
  {
    name: "GitHub",
    logo: Github,
    description: "Collaboration",
  },
]);
</script>

<template>
  <div class="tech-stack-container tech-stack-container-scrollable">
    <div class="title-container">
      <div class="title">기술스택</div>
      <hr class="title-line" />
      <div class="scription">끊임없이 새로운 기술을 탐구하고 배우겠습니다.</div>
    </div>
    <div class="tech-card-container">
      <div
        v-for="(tech, index) in techStack"
        :key="tech.name"
        class="tech-card animate__animated animate__jackInTheBox"
        :style="{ 'animation-delay': index * 0.1 + 's' }"
      >
        <img :src="tech.logo" :alt="tech.name" />
        <h3>{{ tech.name }}</h3>
        <p>{{ tech.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.tech-stack-container {
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

.tech-stack-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.tech-stack-container-scrollable::-webkit-scrollbar {
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

.tech-card-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
}

.tech-card {
  width: 150px;
  height: 150px;
  background-color: var(--secondary-bg-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 3px solid;
  border-color: var(--secondary-highlight-color);
}

.tech-card img {
  width: 60px;
  height: 60px;
}

.tech-card h3 {
  font-family: "goorm-sans-code";
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--font-color2);
  margin-bottom: 10px;
}

.tech-card p {
  font-family: "goorm-sans-code";
  font-size: 0.7rem;
  color: var(--font-color2);
}

/* 미디어 쿼리 추가 */
@media (max-width: 1024px) {
  .tech-card-container {
    grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  }

  .tech-card {
    width: 130px;
    height: 130px;
  }

  .tech-card h3 {
    font-size: 1rem; /* 폰트 크기 조정 */
  }

  .tech-card p {
    font-size: 0.6rem; /* 폰트 크기 조정 */
  }
}

@media (max-width: 768px) {
  .tech-card-container {
    grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개 */
  }

  .tech-card {
    width: 120px;
    height: 120px;
  }

  .tech-card h3 {
    font-size: 0.9rem; /* 폰트 크기 조정 */
  }

  .tech-card p {
    font-size: 0.6rem; /* 폰트 크기 조정 */
  }
}

@media (max-width: 480px) {
  .tech-card-container {
    grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개 */
  }

  .tech-card {
    width: 100px;
    height: 100px;
  }

  .tech-card img {
    width: 40px;
    height: 40px;
  }

  .tech-card h3 {
    font-size: 0.8rem; /* 폰트 크기 조정 */
  }

  .tech-card p {
    font-size: 0.5rem; /* 폰트 크기 조정 */
  }
}
</style>
