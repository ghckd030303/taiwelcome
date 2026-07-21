import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import { areaContents } from "@/lib/area-content";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "부산 핵심 지역 출장안마 안내",
  description:
    "연산동, 사상, 부산역, 덕천, 하단 등 부산 핵심 지역 출장안마 안내. 지역별 방문 범위와 이용 팁을 확인하고 전화로 예약하세요.",
  alternates: {
    canonical: `${SITE_URL}/areas`,
  },
  openGraph: {
    title: "부산 핵심 지역 출장안마 안내",
    description:
      "연산동, 사상, 부산역, 덕천, 하단 등 부산 핵심 지역별 출장안마 안내",
    url: `${SITE_URL}/areas`,
    type: "website",
  },
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "핵심 지역" }]} />

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            부산 핵심 지역 출장안마
          </h1>
          <p className="text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            지역마다 생활 패턴이 다르면 필요한 케어도 다릅니다.
            <br />
            머무시는 지역을 선택하면 방문 범위와 이용 팁을 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {areaContents.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:border-[var(--massage-coral-300)] hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full bg-[var(--massage-coral-200)] p-2.5">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[var(--massage-brown-900)]">
                  {area.name} 출장안마
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
                {area.tagline}
              </p>
              <p className="mt-2 text-xs text-[var(--massage-brown-700)]/70">
                {area.district} 전역 방문
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--massage-coral-300)]">
                자세히 보기
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--massage-brown-700)]">
          이 외 부산 전 지역과 김해, 양산도 방문합니다. 동별 상세 안내는{" "}
          <Link
            href="/region-guide"
            className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
          >
            지역별 안내
          </Link>
          를 확인하세요.
        </p>
      </section>

      <section className="bg-[var(--massage-beige-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            지역이 목록에 없어도 괜찮습니다
          </h2>
          <p className="mb-8 text-base text-[var(--massage-brown-700)] sm:text-lg">
            위치를 알려주시면 방문 가능 여부와 도착 시간을 바로 확인해드립니다.
          </p>
          <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
            <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#eb5459] to-orange-300 px-10 py-5 text-2xl font-bold text-white shadow-xl transition-all hover:shadow-2xl sm:px-14 sm:text-3xl">
              <Phone className="h-7 w-7" />
              {PHONE_NUMBER}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
