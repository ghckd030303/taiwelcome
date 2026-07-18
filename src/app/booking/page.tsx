import type { Metadata } from "next";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "예약 상담",
  description:
    "부산, 김해, 기장, 양산 방문 힐링 케어 예약 상담 안내입니다. 지역, 희망 시간, 코스를 전화로 확인합니다.",
  alternates: {
    canonical: `${SITE_URL}/booking`,
  },
  openGraph: {
    title: "예약 상담",
    description: "방문 지역, 희망 시간, 코스를 전화로 확인하는 예약 상담 안내",
    url: `${SITE_URL}/booking`,
    type: "website",
  },
};

const checklist = [
  {
    icon: MapPin,
    title: "방문 지역",
    body: "부산, 김해, 기장, 양산 내 정확한 동/읍/면과 방문 지역를 확인합니다.",
  },
  {
    icon: Clock,
    title: "희망 시간",
    body: "현재 예약 상황과 이동 시간을 확인해 가능한 방문 시간을 안내합니다.",
  },
  {
    icon: ShieldCheck,
    title: "컨디션",
    body: "선호 압, 불편한 부위, 코스 선택에 필요한 기본 사항을 상담합니다.",
  },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[var(--massage-beige-50)]">
      <RegionBreadcrumb segments={[{ label: "예약 상담" }]} />

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase text-[var(--massage-coral-300)]">
              Reservation call
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
              전화 상담으로 예약 조건을 확인합니다
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--massage-brown-700)]">
              방문 케어는 지역과 시간에 따라 가능 여부가 달라질 수 있습니다.
              전화로 위치, 희망 시간, 코스를 알려주시면 가능한 조건을 바로
              안내드립니다.
            </p>
            <a
              href={PHONE_TEL_HREF}
              aria-label={`전화 문의 ${PHONE_NUMBER}`}
              className="mt-8 inline-flex"
            >
              <Button className="h-16 gap-2 rounded-lg bg-[var(--massage-coral-300)] px-9 text-2xl font-bold text-white hover:bg-[var(--massage-coral-200)]">
                <Phone className="h-6 w-6" />
                {PHONE_NUMBER}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {checklist.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[var(--massage-beige-300)] bg-white p-6 shadow-sm"
            >
              <item.icon className="mb-4 h-8 w-8 text-[var(--massage-coral-300)]" />
              <h2 className="text-xl font-bold text-[var(--massage-brown-900)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--massage-brown-700)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
