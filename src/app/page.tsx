import Image from "next/image";

export default function Home() {
  const skills = {
    frontend: ["Vue", "React", "JavaScript", "TypeScript"],
    backend: ["Java", "Spring", "Python", "Pytorch"],
    devops: ["MySQL", "AWS EC2", "Docker", "GithubActions"],
    collaboration: ["Figma", "Git", "Github"]
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Column - Profile */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 h-full">
            {/* Profile Image - 더 작게 */}
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[220px]">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* About Me - 높이 자동 조정 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex-grow">
              <h2 className="text-lg font-bold mb-2 text-gray-800">About Me</h2>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <span className="text-xl">🎂</span> 1992. 09. 25
                </p>
                <p className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <span className="text-xl">📧</span> stjoo0925@gmail.com
                </p>
                <p className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                  <span className="text-xl">📱</span> 010-3494-3809
                </p>
                <div className="pt-3">
                  <p className="font-medium mb-2">희망 직무</p>
                  <p className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl inline-block font-medium text-indigo-600">
                    Full Stack Developer
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-medium mb-3">Links</p>
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/Stjoo0925" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <span className="text-xl">🔗</span> Github
                    </a>
                    <a 
                      href="https://velog.io/@stjoo0925/posts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <span className="text-xl">📝</span> Tech Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Introduction & History */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 h-full">
            {/* Self Introduction - 패딩 및 간격 축소 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
              <h2 className="text-lg font-bold mb-3 text-gray-800">자기소개</h2>
              <div className="space-y-4">
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium mb-2 text-indigo-600">배움을 통해 지속적인 성장을 추구합니다.</p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    신기술과 개발 트렌드를 꾸준히 탐구하며, 이를 프로젝트에 적용하는 과정에서 얻는 배움을 통해 지속적인 성장을 추구합니다. 
                    여러 프로젝트 경험을 통해 제한된 시간과 자원 속에서도 최선의 결과를 도출하는 문제 해결 능력을 키웠습니다.
                  </p>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <p className="font-medium mb-2 text-indigo-600">팀 프로젝트를 진행하며 '함께' 가치를 배웠습니다.</p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    서로 다른 배경과 경험을 가진 팀원들의 다양한 관점이 프로젝트의 완성도를 높이는 핵심 요소임을 깨달았으며, 
                    이를 통해 협업의 시너지를 극대화하는 개발자로 성장하고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 경력/학력 카드 - 패딩 축소 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
              <h2 className="text-lg font-bold mb-3 text-gray-800">경력 / 학력 / 교육</h2>
              <div className="space-y-4">
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <h3 className="font-medium text-indigo-600 mb-2">랜드마크앤코 주식회사</h3>
                  <p className="text-sm text-gray-600">2019.07 - 2023.08 (4년1개월)</p>
                  <p className="text-sm text-gray-600">토목건설업</p>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <h3 className="font-medium text-indigo-600 mb-2">숭실사이버대학교</h3>
                  <p className="text-sm text-gray-600">건설시스템공학과</p>
                  <p className="text-sm text-gray-600">2020.03 - 2024.02 / 학점 : 3.76</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 높이 조정 */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 h-full">
            {/* 교육과정 - 높이 축소 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-lg font-bold mb-2 text-gray-800">교육과정</h2>
              <div className="space-y-2">
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <h3 className="font-medium text-indigo-600 mb-1">하이미디어 아카데미</h3>
                  <p className="text-sm text-gray-600 leading-tight">클라우드 기반의 CI/CD를 활용한 풀스택 [자바, 뷰, 플러터] 개발자</p>
                  <p className="text-sm text-gray-600">2024.04 - 2024.10</p>
                </div>
                <div className="hover:translate-x-1 transition-transform duration-300">
                  <h3 className="font-medium text-indigo-600 mb-1">하이미디어 아카데미</h3>
                  <p className="text-sm text-gray-600 leading-tight">심화_생성형 AI활용 인재 양성과정(조별멘토)</p>
                  <p className="text-sm text-gray-600">2024.10 - 2024.12</p>
                </div>
              </div>
            </div>

            {/* 기술 스택 - 높이 축소 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-lg font-bold mb-2 text-gray-800">기술 스택</h2>
              <div className="space-y-3">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="hover:translate-x-1 transition-transform duration-300">
                    <h3 className="font-medium text-indigo-600 mb-1.5 capitalize">{category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg 
                            text-sm font-medium text-indigo-600 hover:from-indigo-100 hover:to-purple-100
                            transition-colors duration-300 cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}