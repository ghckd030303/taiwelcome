import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  getProvinceBySlug,
  getCitiesByProvince,
  toSlug,
  getDisplayName,
} from "@/lib/region-data";
import { cn } from "@/lib/utils";

interface RegionPageProps {
  params: Promise<{
    region: string;
  }>;
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const province = getProvinceBySlug(regionSlug);

  if (!province) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const displayName = getDisplayName(province);
  const cities = getCitiesByProvince(province);
  const cityNames = cities.slice(0, 5).join(", ");

  return {
    title: `${displayName} 출장 마사지 - 전지역 30분 이내 방문 | ${cityNames}`,
    description: `${displayName} 전지역 출장 마사지 서비스. ${cityNames} 등 모든 지역에서 30분 이내 신속 방문. 20대 전문 관리사의 아로마, 스웨디시 마사지.`,
    keywords: [
      `${displayName} 출장마사지`,
      ...cities.map((city) => `${city} 마사지`),
      "아로마 마사지",
      "스웨디시 마사지",
      "출장 관리사",
    ],
    openGraph: {
      title: `${displayName} 출장 마사지 - 전지역 서비스`,
      description: `${displayName} ${cityNames} 등 전지역 30분 이내 방문`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ region: "gyeongnam" }, { region: "busan" }];
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region: regionSlug } = await params;
  const province = getProvinceBySlug(regionSlug);

  if (!province) {
    notFound();
  }

  const displayName = getDisplayName(province);
  const cities = getCitiesByProvince(province);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb
        segments={[
          { label: "지역안내", href: "/region-guide" },
          { label: displayName },
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
            {displayName} 출장 마사지
          </h1>
          <p className="mb-8 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            서비스를 받으실 시/구를 선택해주세요
            <br />
            모든 지역 30분 이내 방문 가능합니다
          </p>
        </div>
      </section>

      {/* 시/구 선택 그리드 */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
              지역 선택
            </h2>
            <p className="mt-2 text-[var(--massage-brown-700)]">
              총 {cities.length}개 지역 서비스 가능
            </p>
          </div>

          <div
            className={cn(
              "gap-4",
              cities.length < 4
                ? "flex flex-wrap justify-center"
                : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            )}
          >
            {cities.map((city) => {
              const citySlug = toSlug(city);
              return (
                <Button
                  key={city}
                  variant="outline"
                  className="h-auto w-full flex-col gap-2 border-2 border-[var(--massage-coral-200)] bg-white py-6 text-base font-semibold transition-all hover:scale-105 hover:border-[var(--massage-coral-300)] hover:bg-[var(--massage-coral-100)] hover:shadow-lg sm:text-lg"
                  asChild
                >
                  <Link href={`/region-guide/${regionSlug}/${citySlug}`}>
                    <MapPin className="h-5 w-5 text-[var(--massage-coral-300)]" />
                    <span className="text-[var(--massage-brown-900)]">
                      {city.replace("창원시 ", "")}
                    </span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 서비스 특징 */}
      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {displayName} 전지역 동일한 프리미엄 서비스
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/90 p-6 text-center backdrop-blur-sm">
              <p className="mb-2 text-xl font-bold text-[var(--massage-coral-300)]">
                30분
              </p>
              <p className="text-sm font-semibold text-[var(--massage-brown-900)]">
                이내 방문
              </p>
            </div>
            <div className="rounded-xl bg-white/90 p-6 text-center backdrop-blur-sm">
              <p className="mb-2 text-xl font-bold text-[var(--massage-coral-300)]">
                20대
              </p>
              <p className="text-sm font-semibold text-[var(--massage-brown-900)]">
                전문 관리사
              </p>
            </div>
            <div className="rounded-xl bg-white/90 p-6 text-center backdrop-blur-sm">
              <p className="mb-2 text-xl font-bold text-[var(--massage-coral-300)]">
                아로마
              </p>
              <p className="text-sm font-semibold text-[var(--massage-brown-900)]">
                스웨디시
              </p>
            </div>
            <div className="rounded-xl bg-white/90 p-6 text-center backdrop-blur-sm">
              <p className="mb-2 text-xl font-bold text-[var(--massage-coral-300)]">
                24시간
              </p>
              <p className="text-sm font-semibold text-[var(--massage-brown-900)]">
                예약 가능
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
