import type { Metadata } from "next";
import { Droplets, Sparkles, Clock, Banknote, CreditCard, Wallet } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "코스 및 가격 안내",
  description:
    "아로마, 스웨디시 등 출장 마사지 코스와 이용 시간별 안내입니다. 정확한 가격은 전화 상담 시 투명하게 안내해드립니다.",
  alternates: {
    canonical: `${SITE_URL}/course`,
  },
  openGraph: {
    title: "코스 및 가격 안내",
    description: "아로마, 스웨디시 등 출장 마사지 코스와 이용 시간별 안내",
    url: `${SITE_URL}/course`,
    type: "website",
  },
};

const courses = [
  {
    icon: Droplets,
    name: "아로마 마사지",
    description:
      "천연 에센셜 오일로 근육의 긴장을 부드럽게 풀어주는 힐링 케어입니다. 향기를 통한 심리적 안정과 깊은 이완을 동시에 경험할 수 있습니다.",
  },
  {
    icon: Sparkles,
    name: "스웨디시 마사지",
    description:
      "리드미컬한 압으로 혈액순환과 림프 흐름을 돕는 전문 케어입니다. 장시간 앉아서 생기는 목, 어깨, 허리 피로 회복에 효과적입니다.",
  },
];

const durations = ["60분", "90분", "120분"];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "코스 및 가격 안내" }]} />

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            코스 및 가격 안내
          </h1>
          <p className="text-lg text-[var(--massage-brown-700)] sm:text-xl">
            고객님의 컨디션에 맞는 코스를 선택하시면
            <br />
            전문 테라피스트가 맞춤 케어를 제공해드립니다
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            케어 코스 소개
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.name}
                className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold text-[var(--massage-brown-900)]">
                  {course.name}
                </h3>
                <p className="text-center text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            이용 시간
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {durations.map((duration) => (
              <div
                key={duration}
                className="flex flex-col items-center gap-2 rounded-2xl border-2 border-[var(--massage-coral-200)] bg-white p-6 text-center shadow-sm"
              >
                <Clock className="h-6 w-6 text-[var(--massage-coral-300)]" />
                <span className="text-xl font-bold text-[var(--massage-brown-900)]">
                  {duration}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--massage-brown-700)] sm:text-base">
            코스별 정확한 가격은 예약 상황과 옵션에 따라 달라질 수 있어
            전화 상담을 통해 투명하게 안내해드립니다.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--massage-beige-200)] to-[var(--massage-coral-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            결제 방법
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-sm">
              <Banknote className="mb-3 h-8 w-8 text-[var(--massage-coral-300)]" />
              <p className="font-semibold text-[var(--massage-brown-900)]">현금</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-sm">
              <CreditCard className="mb-3 h-8 w-8 text-[var(--massage-coral-300)]" />
              <p className="font-semibold text-[var(--massage-brown-900)]">카드</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-6 shadow-sm">
              <Wallet className="mb-3 h-8 w-8 text-[var(--massage-coral-300)]" />
              <p className="font-semibold text-[var(--massage-brown-900)]">계좌이체</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            정확한 코스 문의는 전화로 편하게 물어보세요
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
