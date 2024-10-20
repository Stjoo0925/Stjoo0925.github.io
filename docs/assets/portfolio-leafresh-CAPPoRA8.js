import{_ as n,u as p,r as s,o as m,a as g,b as l,c as o,d as u,e,f as h,w as b,v as _}from"./index-DZ46orGB.js";import{_ as k,a as L}from"./deployed-vercel-B_pRYMXw.js";const j="/assets/leafresh-architecture-CTu8TUKV.png",S="/assets/leafresh-stack-kFCaR8Cw.png",B="/assets/leafresh-main-BwDeyWKW.png",C="/assets/leafresh-login-CLNnfs60.png",w="/assets/leafresh-feed-J02Z2g0-.png",y="/assets/leafresh-market-B5LxoNaJ.png",N="/assets/leafresh-profile-DQC2cutu.png",T="/assets/leafresh-chat-R8NwOYyW.png",V={__name:"portfolio-leafresh",setup(x){const r=p(),c=s(!1),d=s(!1),a=s(null),f=()=>{r.back()},v=()=>{a.value&&a.value.scrollTo({top:0,behavior:"smooth"})},i=()=>{a.value&&(d.value=a.value.scrollTop>100)};return m(()=>{c.value=!0,a.value&&a.value.addEventListener("scroll",i)}),g(()=>{a.value&&a.value.removeEventListener("scroll",i)}),(D,t)=>(l(),o("div",{ref_key:"containerRef",ref:a,class:"flux-project-container flux-project-container-scrollable"},[t[2]||(t[2]=u('<div class="title-container" data-v-8f49c06d><h1 class="project-title" data-v-8f49c06d>Leafresh 프로젝트</h1><hr class="title-line" data-v-8f49c06d><p class="project-subtitle" data-v-8f49c06d> Spring Boot &amp; Vue.js를 이용한 SNS스타일 원예일지 플랫폼 </p></div><div class="badge-container" data-v-8f49c06d><img src="https://img.shields.io/badge/SpringBoot-v3.3.3-%236DB33F?style=flat&amp;logo=spring-boot&amp;logoColor=white" alt="SpringBoot Badge" data-v-8f49c06d><img src="https://img.shields.io/badge/Vue.js-v3.4.29-4FC08D?style=flat&amp;logo=vue.js&amp;logoColor=white" alt="Vue.js Badge" data-v-8f49c06d><img src="https://img.shields.io/badge/Flutter-v3.24.1-02569B?style=flat&amp;logo=flutter&amp;logoColor=white" alt="Flutter Badge" data-v-8f49c06d></div><div class="project-links" data-v-8f49c06d><a href="https://github.com/Leafresh-2024" target="_blank" aria-label="GitHub" data-v-8f49c06d><img src="'+k+'" alt="GitHub Logo" class="logo" data-v-8f49c06d></a><a href="https://leafresh-frontend-nine.vercel.app/community" target="_blank" aria-label="Live Site" data-v-8f49c06d><img src="'+L+'" alt="Live Site Logo" class="logo" data-v-8f49c06d></a></div><section class="project-overview" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>프로젝트 소개</h2><p class="section-description" data-v-8f49c06d> 1. 체계적인 원예 관리<br data-v-8f49c06d> Leafresh는 당신의 원예 활동을 효과적으로 기록하고 관리할 수 있도록 도와줍니다.<br data-v-8f49c06d> 식물의 성장 단계, 물주기, 비료 사용 등 모든 세부 사항을 체계적으로 기록할 수 있어, 더 나은 원예 결과를 얻을 수 있습니다.<br data-v-8f49c06d> 식물별로 일지를 작성해 언제든지 참고할 수 있어, 보다 과학적이고 효율적인 원예 관리를 할 수 있습니다.<br data-v-8f49c06d><br data-v-8f49c06d> 2. 커뮤니티의 지식 공유<br data-v-8f49c06d> Leafresh의 커뮤니티는 전 세계의 원예 애호가들이 모여 서로의 경험과 지식을 공유하는 공간입니다.<br data-v-8f49c06d> 초보자부터 전문가까지 다양한 사용자가 활발하게 활동하고 있으며, 문제 해결부터 새로운 아이디어까지 다양한 주제로 소통할 수 있습니다.<br data-v-8f49c06d> 커뮤니티의 도움을 받아 식물의 문제를 해결하거나 새로운 원예 트렌드를 발견할 수 있습니다.<br data-v-8f49c06d><br data-v-8f49c06d> 3. 실시간 채팅을 통한 식물분양<br data-v-8f49c06d> Leafresh는 실시간 채팅 기능을 통해 식물 애호가들이 직접 식물을 분양하고 교환할 수 있는 플랫폼을 제공합니다. <br data-v-8f49c06d> 사용자는 자신이 키우는 식물을 다른 사용자에게 분양하거나 새로운 식물을 얻을 수 있으며,<br data-v-8f49c06d> 실시간으로 소통하면서 분양 조건과 정보를 공유할 수 있습니다. <br data-v-8f49c06d> 이를 통해 더욱 쉽게 다양한 식물을 접하고, 원예 생활을 확장할 수 있습니다.<br data-v-8f49c06d><br data-v-8f49c06d> Leafresh는 단순한 원예 도구를 넘어, 당신의 원예 생활을 더 즐겁고 성공적으로 만들어 줄 완벽한 동반자입니다.<br data-v-8f49c06d><br data-v-8f49c06d> 목표기간 : 2024.08.23 ~ 10.02 </p></section><section class="project-contributions" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>기여 내역</h2><ul class="contributions-list" data-v-8f49c06d><li data-v-8f49c06d>Github Organizations구축 및 프로젝트 위키 작성</li><li data-v-8f49c06d>프로젝트 설계 및 CI/CD 파이프라인 구축</li><li data-v-8f49c06d>백엔드 DNS설정 및 SSL인증서 적용</li><li data-v-8f49c06d>백엔드 API 개발 및 REST 설계</li><li data-v-8f49c06d>오픈API를 이용한 지역별 날씨조회 기능</li><li data-v-8f49c06d>프론트엔드 페이지 디자인 및 상태 관리 구현</li></ul></section><section class="project-features" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>주요 기능</h2><ul class="feature-list" data-v-8f49c06d><li data-v-8f49c06d>원예 관리 기능</li><li data-v-8f49c06d>피드 기능</li><li data-v-8f49c06d>반려 식물 관리</li><li data-v-8f49c06d>식물 분양 및 채팅 기능</li><li data-v-8f49c06d>회원 가입 및 로그인 기능</li></ul></section><section class="project-tech-stack" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>아키텍쳐</h2><img src="'+j+'" data-v-8f49c06d></section><section class="project-tech-stack" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>사용 기술</h2><img src="'+S+'" data-v-8f49c06d></section><section class="project-images" data-v-8f49c06d><h2 class="section-title" data-v-8f49c06d>프로젝트 화면</h2><div class="image-gallery" data-v-8f49c06d><div class="image-item" data-v-8f49c06d><img src="'+B+'" alt="메인 페이지" data-v-8f49c06d><p data-v-8f49c06d>메인 페이지</p></div><div class="image-item" data-v-8f49c06d><img src="'+C+'" alt="로그인 페이지" data-v-8f49c06d><p data-v-8f49c06d>로그인 페이지</p></div><div class="image-item" data-v-8f49c06d><img src="'+w+'" alt="피드 페이지" data-v-8f49c06d><p data-v-8f49c06d>피드 페이지</p></div><div class="image-item" data-v-8f49c06d><img src="'+y+'" alt="마켓 페이지" data-v-8f49c06d><p data-v-8f49c06d>마켓 페이지</p></div><div class="image-item" data-v-8f49c06d><img src="'+N+'" alt="프로필 페이지" data-v-8f49c06d><p data-v-8f49c06d>프로필 페이지</p></div><div class="image-item" data-v-8f49c06d><img src="'+T+'" alt="채팅 페이지" data-v-8f49c06d><p data-v-8f49c06d>채팅 페이지</p></div></div></section>',9)),c.value?(l(),o("button",{key:0,class:"back-button",onClick:f},t[0]||(t[0]=[e("i",{class:"bi bi-x-lg"},null,-1)]))):h("",!0),b(e("button",{class:"scroll-top-button",onClick:v},t[1]||(t[1]=[e("i",{class:"bi bi-arrow-up"},null,-1)]),512),[[_,d.value]])],512))}},E=n(V,[["__scopeId","data-v-8f49c06d"]]);export{E as default};
