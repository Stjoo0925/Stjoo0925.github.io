<script setup>

</script>

<template>
    <div class="about-container about-container-scrollable">
        <div class="title-container">
            <div class="title">자기소개서</div>
            <hr class="title-line" />
        </div>

        <div class="script-container">
            <p>
                저는 효율적이고 체계적인 개발을 목표로 하는 개발자 주순태입니다. <br><br>

                다양한 프로젝트 경험을 통해 백엔드와 프론트엔드 개발 모두에 대한 깊은 이해를 쌓았으며,<br>
                팀 내에서 기획부터 배포까지 전체 프로젝트 라이프사이클을 경험하며 문제 해결 능력을 길러왔습니다.<br>
                최근 진행한 프로젝트에서는 5명의 팀과 함께 기획, 설계, 개발 및 배포까지의 전 과정을 담당했습니다.<br><br>

                저는 주로 프로젝트 설계와 CI/CD 파이프라인 구축을 담당하며, Jenkins와 Docker를 활용한 자동화 배포 시스템을 성공적으로 구축했습니다.<br> 
                이 과정을 통해 서버와 애플리케이션 간의 통신과 데이터 흐름을 이해하는 능력을 배양했으며,<br>
                이를 통해 효율적인 배포 환경을 마련하는 데 기여했습니다.<br><br>

                또한 NGINX를 이용한 DNS 설정 및 SSL 인증서 설치 경험은 저의 기술적 역량을 더욱 강화해 주었습니다.<br> 
                이전 프로젝트에서 겪었던 보안 인증 문제를 해결하며, 보안성 높은 배포 환경을 성공적으로 구축할 수 있었습니다.<br> 
                이 경험은 서버 보안의 중요성을 깊이 인식하게 되었으며, 향후 프로젝트에서 더욱 신뢰할 수 있는 시스템을 구축하는 데 필요한 기반이 되었습니다.<br><br>

                프론트엔드 개발에 있어서도 저는 Vue.js와 Pinia를 활용하여 상태 관리를 효율적으로 구현하고, 사용자 친화적인 페이지 디자인을 맡았습니다.<br> 
                특히 API 통신을 통한 데이터 처리 경험을 통해 백엔드와 프론트엔드를 유기적으로 연결하는 방법을 학습하며,<br> 
                클라이언트와 서버 간의 데이터 흐름을 최적화할 수 있었습니다.<br><br>

                이 모든 경험은 제가 문제를 분석하고, 해결책을 찾아내며, 최적의 방법으로 구현해 내는 개발자로 성장하게 해 주었습니다.<br><br>

                백엔드와 프론트엔드 모두에서 유연하고 신속한 대응 능력을 갖추었으며, 각 시스템의 특성에 맞는 솔루션을 제시할 수 있는 역량을 키웠습니다.<br>
                앞으로도 저는 꾸준한 학습과 다양한 기술을 활용하여 더욱 발전하는 개발자가 되겠습니다.<br><br>

                특히 프로젝트 설계, API 개발, CI/CD 구축 등의 강점을 기반으로 더욱 완성도 높은 시스템을 설계하고, 팀의 성공에 기여하는 개발자가 되기 위해 노력할 것입니다.
            </p>
        </div>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 0 !important;
}
.about-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
    text-shadow: 
        1px 1px 0 black, 
        -1px 1px 0 black, 
        1px -1px 0 black, 
        -1px -1px 0 black;
}

.title-line {
    width: 100px;
    height: 2px;
    background-color: black;
    border: none;
    margin: 0 auto;
    margin-bottom: 10px;
  
}

.script-container {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--secondary-bg-color);
    border: 3px solid var(--secondary-highlight-color);
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.script-container p {
    font-family: "goorm-sans-bold";
    font-size: 1rem;
    color: var(--font-color2);
}
</style>