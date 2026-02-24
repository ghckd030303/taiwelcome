import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  getAllProvinces,
  getCitiesByProvince,
  getDongsByCity,
  toSlug,
  getDisplayName,
} from "@/lib/region-data";

export const metadata: Metadata = {
  title: "전체 지역 목록 - 부산 경남 출장 마사지 서비스",
  description:
    "부산·경남 전체 지역 출장 마사지 서비스 목록. 부산진구, 해운대구, 김해시, 양산시 등 모든 동/읍/면까지 30분 이내 방문. 지역별 상세 안내 바로 확인.",
  keywords: [
    "부산 출장마사지 전체지역",
    "경남 출장마사지 전체지역",
    "부산 동별 마사지",
    "김해 동별 마사지",
    "양산 동별 마사지",
    "출장마사지 지역목록",
  ],
  openGraph: {
    title: "전체 지역 목록 - 부산 경남 출장 마사지",
    description:
      "부산·경남 전체 지역 출장 마사지 서비스 목록. 모든 동까지 30분 이내 방문.",
    type: "website",
  },
};

export default function AllRegionsPage() {
  const provinces = getAllProvinces();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "전체 지역 목록" }]} />

      {/* 헤더 섹션 */}
      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            전체 지역 목록
          </h1>
          <p className="mb-2 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            부산·경남 전지역 출장 마사지 서비스
          </p>
          <p className="text-base text-[var(--massage-brown-600)]">
            원하시는 지역을 선택하시면 상세 안내로 이동합니다
          </p>
        </div>
      </section>

      {/* 지역 목록 섹션 */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          {provinces.map((province) => {
            const provinceSlug = toSlug(province);
            const displayProvince = getDisplayName(province);
            const cities = getCitiesByProvince(province);

            return (
              <div key={province}>
                {/* 광역시/도 헤더 */}
                <div className="mb-6 flex items-center gap-3">
                  <Link
                    href={`/region-guide/${provinceSlug}`}
                    className="group flex items-center gap-2"
                  >
                    <h2 className="text-3xl font-bold text-[var(--massage-brown-900)] transition-colors group-hover:text-[var(--massage-coral-300)] sm:text-4xl">
                      {displayProvince}
                    </h2>
                    <ChevronRight className="h-7 w-7 text-[var(--massage-coral-200)] transition-colors group-hover:text-[var(--massage-coral-300)]" />
                  </Link>
                </div>

                {/* 시/구 목록 */}
                <div className="space-y-8">
                  {cities.map((city) => {
                    const citySlug = toSlug(city);
                    const dongs = getDongsByCity(province, city);

                    return (
                      <div
                        key={city}
                        className="rounded-2xl border border-[var(--massage-beige-300)] bg-white p-6 shadow-sm sm:p-8"
                      >
                        {/* 시/구 헤더 */}
                        <Link
                          href={`/region-guide/${provinceSlug}/${citySlug}`}
                          className="group mb-4 flex items-center gap-2"
                        >
                          <MapPin className="h-5 w-5 text-[var(--massage-coral-200)] transition-colors group-hover:text-[var(--massage-coral-300)]" />
                          <h3 className="text-xl font-bold text-[var(--massage-brown-900)] transition-colors group-hover:text-[var(--massage-coral-300)] sm:text-2xl">
                            {city.replace("창원시 ", "")}
                          </h3>
                          <span className="ml-1 text-sm text-[var(--massage-brown-500)]">
                            ({dongs.length}개 지역)
                          </span>
                          <ChevronRight className="h-4 w-4 text-[var(--massage-coral-200)] transition-colors group-hover:text-[var(--massage-coral-300)]" />
                        </Link>

                        {/* 동/읍/면 목록 */}
                        <div className="flex flex-wrap gap-2">
                          {dongs.map((dong) => {
                            const dongSlug = toSlug(dong);
                            return (
                              <Link
                                key={dong}
                                href={`/region-guide/${provinceSlug}/${citySlug}/${dongSlug}`}
                                className="rounded-full border border-[var(--massage-coral-200)] bg-[var(--massage-beige-100)] px-3 py-1.5 text-sm font-medium text-[var(--massage-brown-800)] transition-all hover:border-[var(--massage-coral-300)] hover:bg-[var(--massage-coral-100)] hover:text-[var(--massage-brown-900)] hover:shadow-sm"
                              >
                                {dong}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-lg font-semibold text-[var(--massage-brown-900)] sm:text-xl">
            원하시는 지역이 없으신가요?
          </p>
          <p className="mb-6 text-[var(--massage-brown-700)]">
            전화 주시면 방문 가능 여부를 바로 안내해드립니다
          </p>
          <a href="tel:010-5877-4440">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#eb5459] to-orange-300 px-10 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:shadow-2xl sm:px-14 sm:text-3xl">
              010-5877-4440
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
