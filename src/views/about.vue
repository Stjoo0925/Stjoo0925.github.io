<template>
  <div class="about-container about-container-scrollable">
    <div class="about-img animate__animated animate__fadeInLeft">
      <img src="@/assets/images/profileImg.jpg" alt="Profile Image" />
    </div>
    <div class="about-content">
      <div class="about-profile">
        <div class="profile-section">
          <div class="personal-info animate__animated animate__backInUp">
            <div class="about-title">About Me</div>
            <br />
            <ul class="about-list">
              <li class="about-contents">주순태 | JOO SOON TAE</li>
              <li class="about-contents">1992.09.25</li>
              <li class="about-contents">
                항상 고민하고 방법을 찾는 개발자가 되겠습니다!
              </li>
            </ul>
          </div>
          <div class="education-info animate__animated animate__backInUp">
            <div class="about-title">Education</div>
            <br />
            <ul class="about-list">
              <li class="about-contents">
                2024.10 | 하이미디어아카데미 클라우드 기반의 자바 풀스택 수료
              </li>
              <li class="about-contents">
                2024.02 | 숭실사이버대학교 건설시스템공학과 졸업
              </li>
              <li class="about-contents">2011.02 | 서울 대원고등학교 졸업</li>
            </ul>
          </div>
        </div>

        <div class="profile-section animate__animated animate__backInUp">
          <div class="characters">
            <div class="about-title">Characters</div>
            <br />
            <!-- TagCanvas 적용할 위치 -->
            <div class="canvas-container">
              <canvas id="myCanvas"></canvas>
              <div id="tags">
                <ul>
                  <li class="canvas-contents"><a href="#">논리적인</a></li>
                  <li class="canvas-contents"><a href="#">문제해결능력</a></li>
                  <li class="canvas-contents"><a href="#">팀워크</a></li>
                  <li class="canvas-contents"><a href="#">분석적인</a></li>
                  <li class="canvas-contents"><a href="#">효율적인</a></li>
                  <li class="canvas-contents"><a href="#">책임감</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="contributions animate__animated animate__backInUp">
            <div class="about-title">Contributions</div>
            <img
              class="github-stats"
              :src="`https://github-readme-stats.vercel.app/api?username=${githubId}&theme=dark&show_icons=true`"
              alt="GitHub Stats"
            />
          </div>
        </div>
      </div>
      <!-- GitHub 잔디 그래프 추가 -->
      <div class="github-contributions animate__animated animate__backInUp">
        <div class="contributions-container">
          <img
            :src="`https://ghchart.rshah.org/383D40/${githubId}?${Date.now()}`"
            alt="GitHub Contributions Graph"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import "@/assets/js/tagcanvas.js";

const githubId = "Stjoo0925";

let timeoutId = null;

onMounted(async () => {
  await nextTick();

  const rootStyles = getComputedStyle(document.documentElement);
  const fontColor = rootStyles.getPropertyValue("--font-color2").trim();

  try {
    TagCanvas.Start("myCanvas", "tags", {
      textColour: fontColor,
      outlineColour: null,
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      textHeight: 18,
      textFont: "goorm-sans-bold",
      wheelZoom: false,
      initial: [0.1, -0.1],
    });

    const canvas = document.getElementById("myCanvas");

    canvas.addEventListener("mouseenter", () => {
      TagCanvas.SetSpeed("myCanvas", [0, 0]);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    });

    canvas.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        TagCanvas.SetSpeed("myCanvas", [0.1, -0.1]);
      }, 1000);
    });
  } catch (e) {
    console.log("TagCanvas error: ", e);
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--alert-color);
}

.about-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  background-color: var(--main-bg-color);
}

.about-container-scrollable {
  overflow-y: auto; /* 세로 스크롤 가능 */
  -ms-overflow-style: none; /* IE와 Edge에서 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
}

.about-container-scrollable::-webkit-scrollbar {
  display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
}

.about-img {
  flex: 4;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.about-img img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.intro-text {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  font-family: "goorm-sans-bold";
  color: var(--font-color2);
  margin-bottom: 30px;
}

.about-content {
  flex: 6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-section {
  display: flex;
  justify-content: space-between;
}

.personal-info,
.education-info,
.characters,
.contributions {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  background-color: var(--secondary-bg-color);
  border-radius: 8px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  border: 3px solid;
  border-color: var(--secondary-highlight-color);
}

.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.canvas-contents {
  display: none;
}

.github-contributions {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.contributions-container {
  flex: 1;
  width: 100%;
  height: 160px;
  background-color: var(--contribution-bg-color);
  border-radius: 8px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-color: var(--secondary-highlight-color);
}

.github-contributions img {
  max-width: 80%; /* 부모 요소의 크기에 맞춰 조정 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
}

h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.about-title {
  font-family: "goorm-sans-bold";
  font-size: 24px;
  margin-bottom: 5px;
  color: var(--font-color);
}

.about-list {
  list-style-type: disc;
  padding-left: 20px;
  width: 100%;
  height: 100%;
}

.about-contents {
  font-family: "goorm-sans-code";
  font-size: 14px;
  margin-bottom: 5px;
  color: var(--font-color);
}

.github-stats,
.github-contributions img {
  width: 90%; /* 원하는 크기로 설정 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
}

/* 작은 화면을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .about-container {
    display: block;
    overflow-y: auto; /* 세로 스크롤 활성화 */
  }

  .about-img,
  .about-profile {
    width: 100%; /* 가로 폭을 100%로 설정 */
    height: auto;
  }

  .about-img img {
    width: 100%; /* 이미지를 화면에 맞게 조정 */
    height: auto;
  }

  .about-content {
    display: block;
    height: auto;
  }

  .profile-section {
    display: block; /* 가로 배열을 세로로 변경 */
    width: 100%; /* 전체 폭을 차지 */
  }

  .personal-info,
  .education-info,
  .characters,
  .contributions,
  .contributions-container {
    width: 100%; /* 각각 100% 폭을 가짐 */
    margin: 0 0 30px 0;
    padding: 15px; /* 내부 패딩 축소 */
  }

  .intro-text {
    font-size: 12px; /* 글자 크기 축소 */
    margin-top: 5px;
  }

  .github-stats,
  .github-contributions img {
    width: 100%; /* 모바일에서 100%로 맞춤 */
  }
}

/* 더 작은 화면 처리 (모바일) */
@media (max-width: 480px) {
  .about-title {
    font-size: 16px; /* 제목 크기 축소 */
  }

  .about-contents {
    font-size: 12px; /* 내용 글자 크기 축소 */
  }
}
</style>
