import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* SEO H1 - 검색엔진용 (시각적으로 숨김) */}
      <h1 className="sr-only">
        부산출장안마 · 부산홈타이 - 부산 전 지역 30분 이내 방문하는 프리미엄
        출장마사지 서비스
      </h1>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="부산 출장마사지"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-between px-4 py-8 sm:px-6 sm:py-12">
          {/* Title and Phone */}
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col items-center justify-start gap-4 sm:flex-row sm:items-start">
              <div className="flex h-25 w-110 items-center justify-center">
                <Image
                  src="/images/title2.svg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="object-full"
                />
              </div>
            </div>
          </div>

          {/* Center Text on Image */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-NanumGothic mb-6 text-4xl font-semibold tracking-wide text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              코스 문의는 편하게 전화 주세요
            </h2>
            <p className="font-NanumGothic font-base mb-10 text-xl text-white/90 drop-shadow-xl sm:text-2xl lg:text-3xl">
              부산 전 지역 30분 이내 방문 가능, 고객님께 최상의 힐링 경험을
              선사해드립니다
            </p>
            <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
              <Button
                size="lg"
                className="hover:shadow-3xl group h-auto animate-pulse bg-gradient-to-r from-[#eb5459] to-orange-200 px-10 py-6 text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:animate-none hover:bg-[var(--massage-coral-300)] sm:px-16 sm:py-8 sm:text-3xl"
              >
                {PHONE_NUMBER}
              </Button>
            </a>
          </div>

          {/* Spacer */}
          <div />
        </div>
      </section>

      {/* Service Area Section */}
      <section
        aria-labelledby="service-area-heading"
        className="bg-gradient-to-b from-[var(--massage-beige-200)] via-[var(--massage-beige-300)] to-[var(--massage-coral-100)] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="service-area-heading"
            className="font-NanumGothic mb-12 text-center text-3xl tracking-wide sm:text-4xl"
          >
            서비스 지역
          </h2>
          <div className="rounded-3xl bg-gradient-to-br from-[var(--massage-coral-200)] to-[var(--massage-beige-300)] p-8 shadow-2xl sm:p-12">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                <MapPin className="h-12 w-12 text-[var(--massage-coral-300)] sm:h-16 sm:w-16" />
              </div>
              <div className="text-center">
                <p className="mb-4 text-2xl font-bold text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
                  부산 · 김해 · 기장 · 양산
                </p>
                <p className="text-xl font-semibold text-white/90 drop-shadow-md sm:text-2xl">
                  전지역
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/90 px-8 py-4 shadow-md backdrop-blur-sm">
                <Clock className="h-7 w-7 text-[var(--massage-coral-300)] sm:h-8 sm:w-8" />
                <span className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                  30분 이내 방문
                </span>
              </div>

              {/* 서비스 지역 페이지 링크 */}
              <Link href="/regions">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto gap-2 border-2 border-white bg-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[var(--massage-brown-900)] sm:px-10 sm:text-xl"
                >
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  서비스 지역 자세히 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 소개 Section - 자연스러운 서술형 안내 */}
      <section
        aria-labelledby="about-heading"
        className="px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="about-heading"
            className="font-NanumGothic mb-8 text-center text-3xl tracking-wide sm:text-4xl"
          >
            휴케어 부산 출장마사지 소개
          </h2>
          <article className="space-y-4 text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            <p>
              휴케어 부산은 바쁜 일상 속에서 편안하게 힐링을 경험하실 수 있는
              프리미엄 출장마사지 서비스입니다. 부산 전 지역 30분 이내 방문을
              목표로 신속하게 이동하며, 전문 교육을 받은 테라피스트가 고객님이
              계신 자택, 호텔, 오피스텔 어디든 찾아가 편안하게 케어해드립니다.
            </p>
            <p>
              전화 한 통이면 예약이 완료되며, 아로마, 스웨디시 등 원하시는
              코스를 선택하실 수 있습니다. 결제는 현금, 카드, 계좌이체 중 편한
              방법으로 가능합니다. 코스별 상세 안내는{" "}
              <Link
                href="/course"
                className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
              >
                코스 및 가격 안내
              </Link>{" "}
              페이지에서, 방문 가능 지역은{" "}
              <Link
                href="/regions"
                className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
              >
                서비스 지역
              </Link>{" "}
              페이지에서 확인하실 수 있습니다.
            </p>
          </article>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link
              href="/course"
              className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-semibold text-[var(--massage-brown-900)]">
                코스 및 가격 안내
              </span>
              <ArrowRight className="h-5 w-5 text-[var(--massage-coral-300)] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/regions"
              className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-semibold text-[var(--massage-brown-900)]">
                서비스 지역
              </span>
              <ArrowRight className="h-5 w-5 text-[var(--massage-coral-300)] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/guide"
              className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-semibold text-[var(--massage-brown-900)]">
                이용안내 및 FAQ
              </span>
              <ArrowRight className="h-5 w-5 text-[var(--massage-coral-300)] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Background Image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image2.png"
            alt="프리미엄 힐링 마사지"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-NanumGothic mb-6 text-3xl tracking-wide text-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
              지금 바로 문의하세요
            </h2>
            <p className="font-NanumGothic mb-10 text-xl text-white/90 drop-shadow-xl sm:text-2xl">
              편안한 힐링의 시간을 선물해드립니다
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href={PHONE_TEL_HREF} aria-label={`지금 전화하기 ${PHONE_NUMBER}`}>
                <Button
                  size="lg"
                  className="hover:shadow-3xl group h-auto bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-7 text-3xl font-bold text-white shadow-2xl transition-all duration-300 hover:bg-[var(--massage-coral-200)] sm:px-20 sm:py-9 sm:text-4xl"
                >
                  {PHONE_NUMBER}
                </Button>
              </a>
              <p className="text-lg text-white/90 drop-shadow-lg sm:text-xl">
                언제든지 편하게 연락주세요
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
