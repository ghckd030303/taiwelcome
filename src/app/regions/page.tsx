import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Clock } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  getAllProvinces,
  getCitiesByProvince,
  getDongsByCity,
  toSlug,
  getDisplayName,
} from "@/lib/region-data";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "서비스 지역 안내",
  description:
    "부산 전 지역 30분 이내 방문 가능한 출장 마사지 서비스 지역입니다. 원하시는 지역을 선택하시면 상세 안내로 이동합니다.",
  alternates: {
    canonical: `${SITE_URL}/regions`,
  },
  openGraph: {
    title: "서비스 지역 안내",
    description: "부산 전 지역 30분 이내 방문 가능한 출장 마사지 서비스 지역",
    url: `${SITE_URL}/regions`,
    type: "website",
  },
};

export default function RegionsPage() {
  const provinces = getAllProvinces();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "서비스 지역" }]} />

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            서비스 지역 안내
          </h1>
          <p className="mb-2 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            부산 전 지역 30분 이내 방문이 가능합니다
          </p>
          <p className="text-base text-[var(--massage-brown-600)]">
            원하시는 지역을 선택하시면 상세 안내로 이동합니다
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 shadow-md">
              <Clock className="h-5 w-5 text-[var(--massage-coral-300)]" />
              <span className="font-semibold text-[var(--massage-brown-900)]">
                30분 이내 방문
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          {provinces.map((province) => {
            const provinceSlug = toSlug(province);
            const displayProvince = getDisplayName(province);
            const cities = getCitiesByProvince(province);

            return (
              <article key={province}>
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

                <div className="space-y-8">
                  {cities.map((city) => {
                    const citySlug = toSlug(city);
                    const dongs = getDongsByCity(province, city);

                    return (
                      <div
                        key={city}
                        className="rounded-2xl border border-[var(--massage-beige-300)] bg-white p-6 shadow-sm sm:p-8"
                      >
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-lg font-semibold text-[var(--massage-brown-900)] sm:text-xl">
            원하시는 지역이 없으신가요?
          </p>
          <p className="mb-6 text-[var(--massage-brown-700)]">
            전화 주시면 방문 가능 여부를 바로 안내해드립니다
          </p>
          <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
            <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#eb5459] to-orange-300 px-10 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:shadow-2xl sm:px-14 sm:text-3xl">
              {PHONE_NUMBER}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
