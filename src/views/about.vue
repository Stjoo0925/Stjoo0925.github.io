<script setup>
const githubId = "Stjoo0925"; // 여기에 깃허브 아이디를 입력합니다.
</script>

<template>
  <div class="about-container about-container-scrollable">
    <div class="about-img">
      <img
        src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png"
        alt="Profile Image"
      />
      <!-- 자기소개 문구 추가 -->
      <p class="intro-text">
        안녕하세요! 백엔드 개발자를 지망하는 주순태입니다. 항상 고민하고 방법을
        찾는 개발자가 되겠습니다.
      </p>
    </div>
    <div class="about-content">
      <div class="about-profile">
        <div class="profile-section">
          <div class="personal-info">
            <div class="about-title">주순태</div>
            <br />
            <ul class="about-list">
              <li class="about-contents">생일: 1992.09.25</li>
              <li class="about-contents">전화번호: +82 010-3494-3809</li>
              <li class="about-contents">메일: stjoo0925@gmail.com</li>
              <li class="about-contents">
                Github:
                <a :href="`https://github.com/${githubId}`">깃허브링크</a>
              </li>
            </ul>
          </div>
          <div class="education-info">
            <div class="about-title">Education</div>
            <br />
            <ul class="about-list">
              <li class="about-contents">
                2024.02 숭실사이버대학교 건설시스템공학과 졸업
              </li>
              <li class="about-contents">2011.02 서울 대원고등학교 졸업</li>
            </ul>
          </div>
        </div>

        <div class="profile-section">
          <div class="characters">
            <div class="about-title">Characters</div>
            <br />
            <div class="about-contents">#논리적인 #문제해결능력 #팀워크</div>
            <div class="about-contents">#분석적인 #효율적인 #책임감</div>
          </div>
          <div class="contributions">
            <div class="about-title">Contributions</div>
            <br />
            <!-- GitHub ReadMe Stats -->
            <img
              class="github-stats"
              :src="`https://github-readme-stats.vercel.app/api?username=${githubId}&theme=dark&show_icons=true`"
              alt="GitHub Stats"
            />
          </div>
        </div>
      </div>
      <!-- GitHub 잔디 그래프 추가 -->
      <div class="github-contributions">
        <img
          :src="`https://ghchart.rshah.org/0d0d0d/${githubId}`"
          alt="GitHub Contributions Graph"
        />
      </div>
    </div>
  </div>
</template>

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
  justify-content: center;
  align-items: flex-start;
  overflow: hidden; /* 기본적으로 스크롤을 숨김 */
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
  width: 100%;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  background-color: var(--secondary-bg-color);
  border-radius: 8px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

.github-contributions {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: var(--secondary-bg-color);
  border-radius: 8px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
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
}

.about-list {
  list-style-type: disc;
  padding-left: 20px;
}

.about-contents {
  font-family: "goorm-sans-code";
  font-size: 16px;
  margin-bottom: 5px;
}

.github-stats,
.github-contributions img {
  width: 100%; /* 원하는 크기로 설정 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
}

/* 작은 화면을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .about-container {
    flex-direction: column; /* 세로 배치로 변경 */
    align-items: center;
    overflow-y: auto; /* 세로 스크롤 활성화 */
  }

  .about-img,
  .about-profile {
    flex: none; /* 플렉스 비율 해제 */
    width: 100%; /* 가로 폭을 100%로 설정 */
  }

  .about-img img {
    width: 100%; /* 이미지를 화면에 맞게 조정 */
    height: auto;
  }

  .profile-section {
    display: block; /* 가로 배열을 세로로 변경 */
    width: 100%; /* 전체 폭을 차지 */
  }

  .personal-info,
  .education-info,
  .characters,
  .contributions {
    width: 100%; /* 각각 100% 폭을 가짐 */
    margin: 0 0 30px 0;
    padding: 15px; /* 내부 패딩 축소 */
  }

  .intro-text {
    font-size: 14px; /* 글자 크기 축소 */
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
    font-size: 18px; /* 제목 크기 축소 */
  }

  .about-contents {
    font-size: 14px; /* 내용 글자 크기 축소 */
  }
}
</style>
