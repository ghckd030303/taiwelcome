import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  getCityBySlug,
  getDongsByCity,
  toSlug,
  getDisplayName,
  getAllProvinces,
  getCitiesByProvince,
} from "@/lib/region-data";

interface CityPageProps {
  params: Promise<{
    region: string;
    city: string;
  }>;
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { region: regionSlug, city: citySlug } = await params;
  const result = getCityBySlug(regionSlug, citySlug);

  if (!result) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const { province, city } = result;
  const displayProvince = getDisplayName(province);
  const dongs = getDongsByCity(province, city);
  const dongNames = dongs.slice(0, 5).join(", ");

  return {
    title: `${city} 출장 마사지 - ${displayProvince} | 30분 이내 방문`,
    description: `${city} ${dongNames} 등 전지역 출장 마사지 서비스. 30분 이내 신속 방문, 20대 전문 관리사의 아로마, 스웨디시, 섹슈얼 케어 마사지.`,
    keywords: [
      `${city} 출장마사지`,
      `${city} 마사지`,
      ...dongs.slice(0, 10).map((dong) => `${city} ${dong} 마사지`),
      "아로마 마사지",
      "스웨디시 마사지",
      "섹슈얼 마사지",
    ],
    openGraph: {
      title: `${city} 출장 마사지 - 전지역 서비스`,
      description: `${city} 전지역 30분 이내 방문. 전문 관리사 프리미엄 케어`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const params: Array<{ region: string; city: string }> = [];

  for (const province of getAllProvinces()) {
    const provinceSlug = toSlug(province);
    const cities = getCitiesByProvince(province);

    for (const city of cities) {
      const citySlug = toSlug(city);
      params.push({
        region: provinceSlug,
        city: citySlug,
      });
    }
  }

  return params;
}

export default async function CityPage({ params }: CityPageProps) {
  const { region: regionSlug, city: citySlug } = await params;
  const result = getCityBySlug(regionSlug, citySlug);

  if (!result) {
    notFound();
  }

  const { province, city } = result;
  const displayProvince = getDisplayName(province);
  const dongs = getDongsByCity(province, city);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb
        segments={[
          { label: "지역안내", href: "/region-guide" },
          { label: displayProvince, href: `/region-guide/${regionSlug}` },
          { label: city },
        ]}
      />

      {/* 헤더 섹션 */}
      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            {city} 출장 마사지
          </h1>
          <p className="mb-8 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            서비스를 받으실 동/읍/면을 선택해주세요
            <br />
            {city} 전지역 30분 이내 방문합니다
          </p>
        </div>
      </section>

      {/* 동/읍/면 선택 그리드 */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
              세부 지역 선택
            </h2>
            <p className="mt-2 text-[var(--massage-brown-700)]">
              {city} 총 {dongs.length}개 지역 서비스 가능
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {dongs.map((dong) => {
              const dongSlug = toSlug(dong);
              return (
                <Button
                  key={dong}
                  variant="outline"
                  className="h-auto w-full flex-col gap-2 border-2 border-[var(--massage-coral-200)] bg-white py-5 text-sm font-semibold transition-all hover:scale-105 hover:border-[var(--massage-coral-300)] hover:bg-[var(--massage-coral-100)] hover:shadow-lg sm:text-base"
                  asChild
                >
                  <Link href={`/region-guide/${regionSlug}/${citySlug}/${dongSlug}`}>
                    <MapPin className="h-4 w-4 text-[var(--massage-coral-300)]" />
                    <span className="text-[var(--massage-brown-900)]">
                      {dong}
                    </span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {city} 전지역 프리미엄 서비스
          </h2>
          <p className="mb-8 text-lg text-[var(--massage-brown-700)]">
            30분 이내 방문 · 20대 전문 관리사 · 아로마/스웨디시 마사지
          </p>
          <a href="tel:010-5877-4440">
            <Button
              size="lg"
              className="h-auto bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-6 text-2xl font-bold text-white shadow-xl transition-all hover:shadow-2xl sm:px-16 sm:py-8 sm:text-3xl"
            >
              010-5877-4440
            </Button>
          </a>
          <p className="mt-4 text-sm text-[var(--massage-brown-700)]">
            지금 바로 전화 주시면 30분 이내 방문해드립니다
          </p>
        </div>
      </section>
    </div>
  );
}

