import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  SITE_URL,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "부산 방문 힐링 케어 예약 상담",
  description:
    "SOLO-BS 출장 부산, 김해, 기장, 양산 지역의 방문 힐링 케어 예약 상담을 안내합니다. 지역, 코스, 시간을 전화로 확인하세요.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "솔로BS 부산 방문 힐링 케어",
    description:
      "부산, 김해, 기장, 양산 지역에서 전화 상담 후 방문 케어를 예약할 수 있습니다.",
    url: SITE_URL,
    type: "website",
  },
};

const serviceHighlights = [
  {
    icon: MapPin,
    title: "부산 중심 지역",
    description: "부산, 김해, 기장, 양산 주요 지역 상담 가능",
  },
  {
    icon: Clock,
    title: "상황별 방문 안내",
    description: "교통과 예약 현황을 확인한 뒤 예상 방문 시간을 안내",
  },
  {
    icon: ShieldCheck,
    title: "상담 기반 배정",
    description: "컨디션, 지역, 선호 압을 확인하고 코스를 조율",
  },
];

const reviews = [
  {
    rating: 5,
    body: "예약 과정이 간편했고 문의에도 친절하게 답변해 주셨습니다. 마사지 강도도 세심하게 조절해 주셔서 만족했습니다.",
  },
  {
    rating: 5,
    body: "약속한 시간에 맞춰 방문해 주셨고, 전반적으로 서비스가 깔끔하고 편안했습니다.",
  },
  {
    rating: 5,
    body: "장시간 업무로 어깨와 목이 많이 뭉쳐 있었는데 관리 후 한결 가벼워졌습니다.",
  },
  {
    rating: 4,
    body: "처음 이용해서 걱정했지만 안내가 친절했고, 편안한 분위기에서 받을 수 있었습니다.",
  },
  {
    rating: 5,
    body: "원하는 부위를 미리 확인한 뒤 집중적으로 관리해 주셔서 좋았습니다.",
  },
  {
    rating: 4,
    body: "출장 중 숙소에서 편하게 이용할 수 있어 유용했습니다. 응대도 정중했습니다.",
  },
  {
    rating: 5,
    body: "마사지 압이 적당했고 중간중간 불편한 부분이 없는지 확인해 주셨습니다.",
  },
  {
    rating: 5,
    body: "예약부터 방문까지 진행이 원활했습니다. 피로가 많이 풀려 다음에도 이용하고 싶습니다.",
  },
  {
    rating: 5,
    body: "위생과 준비 상태가 깔끔했고, 전문적으로 관리해 주시는 느낌을 받았습니다.",
  },
  {
    rating: 4,
    body: "늦은 시간에도 친절하게 상담해 주셨고, 시간 내내 차분하고 편안하게 진행되었습니다.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bs3.png"
            alt="부산 방문 힐링 케어 상담"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,18,13,0.88),rgba(47,29,20,0.58),rgba(117,69,32,0.18))]" />
        </div>

        <div className="relative z-10 flex min-h-[78vh] flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-4 text-sm font-semibold text-[var(--massage-coral-100)] uppercase">
              Busan mobile care reservation
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white drop-shadow-xl sm:text-5xl lg:text-6xl">
              {BUSINESS_NAME}
              <span className="mt-3 block text-2xl font-medium text-white/90 sm:text-3xl">
                부산 방문 힐링 케어 예약 상담
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/88 sm:text-xl sm:leading-8">
              부산, 김해, 기장, 양산 지역에서 코스와 방문 가능 시간을 전화로
              확인합니다. <br />
              아로마, 스웨디시 등 컨디션에 맞는 케어를 상담 후 안내드립니다.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
                <Button
                  size="lg"
                  className="h-14 gap-2 rounded-lg bg-[var(--massage-coral-300)] px-7 text-lg font-bold text-white shadow-xl hover:bg-[var(--massage-coral-200)]"
                >
                  <Phone className="h-5 w-5" />
                  {PHONE_NUMBER}
                </Button>
              </a>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-lg border-white/60 bg-white/10 px-7 text-lg font-semibold text-white backdrop-blur hover:bg-white hover:text-[var(--massage-brown-900)]"
              >
                <Link href="/regions">
                  지역 확인
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="service-area-heading"
        className="bg-[var(--massage-beige-100)] px-4 py-14 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[var(--massage-beige-300)] bg-white p-6 shadow-sm"
              >
                <item.icon className="mb-4 h-8 w-8 text-[var(--massage-coral-300)]" />
                <h2
                  id={
                    item.title === "부산 중심 지역"
                      ? "service-area-heading"
                      : undefined
                  }
                  className="text-xl font-bold text-[var(--massage-brown-900)]"
                >
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--massage-brown-700)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-heading"
        className="px-4 py-16 sm:px-6 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-4xl"
            >
              예약 전 확인을 꼼꼼하게 진행합니다
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-[var(--massage-brown-700)] sm:text-lg">
              <p>
                {BUSINESS_NAME}은 지역, 시간, 코스, 방문 지역를 먼저 확인한 뒤
                가능한 예약 조건을 안내하는 방문 힐링 케어 상담 사이트입니다.
                같은 지역이라도 교통 상황과 기존 예약에 따라 도착 시간은 달라질
                수 있어 전화 상담으로 정확히 조율합니다.
              </p>
              <p>
                코스 정보는{" "}
                <Link
                  href="/course"
                  className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
                >
                  코스 및 가격 안내
                </Link>
                에서, 상세 방문 지역은{" "}
                <Link
                  href="/regions"
                  className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
                >
                  서비스 지역
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/booking"
                className="group flex h-16 items-center justify-between rounded-lg border bg-white px-5 text-sm font-semibold text-[var(--massage-brown-900)] shadow-sm transition hover:border-[var(--massage-coral-300)]"
              >
                예약 상담
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/course"
                className="group flex h-16 items-center justify-between rounded-lg border bg-white px-5 text-sm font-semibold text-[var(--massage-brown-900)] shadow-sm transition hover:border-[var(--massage-coral-300)]"
              >
                코스 안내
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/region-guide"
                className="group flex h-16 items-center justify-between rounded-lg border bg-white px-5 text-sm font-semibold text-[var(--massage-brown-900)] shadow-sm transition hover:border-[var(--massage-coral-300)]"
              >
                지역별 안내
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/bs1.png"
              alt="방문 케어 상담 이미지"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--massage-brown-900)] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--massage-coral-100)] uppercase">
              Customer reviews
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              실제 이용 후기
            </h2>
            <p className="mt-5 text-base leading-7 text-white/78">
              예약 상담, 방문 시간, 위생 상태, 마사지 강도 조절에 대해 전달받은
              후기를 정리했습니다.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {reviews.map((review, index) => (
              <article
                key={review.body}
                className="rounded-lg border border-white/15 bg-white/8 p-5"
              >
                <div
                  className="mb-3 flex items-center gap-1"
                  aria-label={`평점 ${review.rating}점`}
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={
                        starIndex < review.rating
                          ? "h-4 w-4 fill-[var(--massage-coral-100)] text-[var(--massage-coral-100)]"
                          : "h-4 w-4 text-white/25"
                      }
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-white/70">
                    {review.rating}.0
                  </span>
                </div>
                <p className="text-sm leading-6 text-white/88">{review.body}</p>
                <p className="mt-4 text-xs font-semibold text-white/45">
                  이용 후기 {String(index + 1).padStart(2, "0")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            상담은 전화로 바로 진행됩니다
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <Phone className="mx-auto mb-3 h-7 w-7 text-[var(--massage-coral-300)]" />
              <p className="font-bold text-[var(--massage-brown-900)]">
                1. 전화 상담
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <ClipboardCheck className="mx-auto mb-3 h-7 w-7 text-[var(--massage-coral-300)]" />
              <p className="font-bold text-[var(--massage-brown-900)]">
                2. 지역·코스 확인
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <CalendarCheck className="mx-auto mb-3 h-7 w-7 text-[var(--massage-coral-300)]" />
              <p className="font-bold text-[var(--massage-brown-900)]">
                3. 방문 시간 조율
              </p>
            </div>
          </div>
          <a
            href={PHONE_TEL_HREF}
            aria-label={`지금 전화하기 ${PHONE_NUMBER}`}
            className="mt-10 inline-flex"
          >
            <Button
              size="lg"
              className="h-16 gap-2 rounded-lg bg-[var(--massage-coral-300)] px-9 text-2xl font-bold text-white shadow-xl hover:bg-[var(--massage-coral-200)]"
            >
              <Phone className="h-6 w-6" />
              {PHONE_NUMBER}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
