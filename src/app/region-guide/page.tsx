import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";

export const metadata: Metadata = {
  title: "지역안내 - 부산 경남 출장 마사지 서비스 | 전지역 30분 이내 방문",
  description:
    "부산, 경남 전지역 출장 마사지 서비스 안내. 서면, 해운대, 김해, 양산, 창원 등 모든 지역에서 30분 이내 신속 방문. 전문 테라피스트의 프리미엄 케어 서비스.",
  keywords: [
    "부산 출장마사지",
    "경남 출장마사지",
    "서면 마사지",
    "해운대 마사지",
    "김해 마사지",
    "양산 마사지",
    "창원 마사지",
    "지역별 마사지",
  ],
  openGraph: {
    title: "지역안내 - 부산 경남 출장 마사지 서비스",
    description:
      "부산, 경남 전지역 출장 마사지 서비스 안내. 30분 이내 신속 방문.",
    type: "website",
  },
};

export default function RegionGuidePage() {
  const regions = [
    {
      slug: "gyeongnam",
      name: "경남",
      fullName: "경상남도",
      description: "김해, 양산, 창원 등",
      areas: ["김해시", "양산시", "창원시"],
    },
    {
      slug: "busan",
      name: "부산",
      fullName: "부산광역시",
      description: "해운대, 서면, 남포동 등",
      areas: ["해운대구", "부산진구", "중구"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "지역안내" }]} />

      {/* 헤더 섹션 */}
      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            지역별 출장 마사지 안내
          </h1>
          <p className="mb-8 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            고객님이 계신 지역을 선택해주세요
            <br />
            모든 지역에서 30분 이내 신속하게 방문해드립니다
          </p>
        </div>
      </section>

      {/* 지역 선택 섹션 */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {regions.map((region) => (
              <Link key={region.slug} href={`/region-guide/${region.slug}`}>
                <div className="group cursor-pointer rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-[var(--massage-brown-900)] group-hover:text-[var(--massage-coral-300)]">
                        {region.name}
                      </h2>
                      <p className="text-sm text-[var(--massage-brown-600)]">
                        {region.fullName}
                      </p>
                    </div>
                    <MapPin className="h-8 w-8 text-[var(--massage-coral-200)] transition-colors group-hover:text-[var(--massage-coral-300)]" />
                  </div>
                  <p className="mb-4 text-base text-[var(--massage-brown-700)]">
                    {region.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {region.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[var(--massage-beige-200)] px-3 py-1 text-sm text-[var(--massage-brown-700)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-[var(--massage-coral-200)] to-[var(--massage-coral-300)] text-white transition-all hover:from-[var(--massage-coral-300)] hover:to-[var(--massage-coral-200)]"
                    size="lg"
                  >
                    {region.name} 지역 보기
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 안내 섹션 */}
      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            전 지역 공통 서비스
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold text-[var(--massage-brown-900)]">
                30분 이내 방문
              </p>
              <p className="mt-2 text-sm text-[var(--massage-brown-700)]">
                신속한 서비스
              </p>
            </div>
            <div className="rounded-xl bg-white/80 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold text-[var(--massage-brown-900)]">
                전문 테라피스트
              </p>
              <p className="mt-2 text-sm text-[var(--massage-brown-700)]">
                20대 관리사
              </p>
            </div>
            <div className="rounded-xl bg-white/80 p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold text-[var(--massage-brown-900)]">
                다양한 결제
              </p>
              <p className="mt-2 text-sm text-[var(--massage-brown-700)]">
                현금/카드/계좌이체
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

