"use client";
import Image from "next/image";
import {
  CreditCard,
  Banknote,
  Wallet,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import locationLottie from "../../public/images/location.json";
import { useState } from "react";

export default function Home() {
  const phoneNumber = "010-5877-4440";
  const telLink = `tel:${phoneNumber}`;
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      {/* SEO H1 - 검색엔진용 (시각적으로 숨김) */}
      <h1 className="sr-only">
        부산 출장 마사지 서비스 - 서면, 해운대, 남포동, 연산동, 김해, 양산, 기장
        전지역 30분 이내 방문, 전문 테라피스트의 고품격 힐링 케어
      </h1>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="부산 출장 마사지"
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
              {/* <h1
                className="text-center text-5xl font-light tracking-wider text-white drop-shadow-2xl sm:text-left sm:text-6xl lg:text-7xl"
                style={{ letterSpacing: "0.05em" }}
              >
                출장 마사지
              </h1> */}
              {/* <a
                href={telLink}
                aria-label={`전화하기 ${phoneNumber}`}
                className="group hover:shadow-3xl flex items-center gap-2 rounded-full bg-[var(--massage-coral-200)] px-6 py-3 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-[var(--massage-coral-300)] sm:px-8 sm:py-4 sm:text-xl"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12 sm:h-6 sm:w-6" />
                <span>{phoneNumber}</span>
              </a> */}
            </div>
          </div>

          {/* Center Text on Image */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-NanumGothic mb-6 text-4xl font-semibold tracking-wide text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              코스 문의는 편하게 전화 주세요
            </h2>
            <p className="font-NanumGothic font-base mb-10 text-xl text-white/90 drop-shadow-xl sm:text-2xl lg:text-3xl">
              고객님께 최상의 힐링 경험을 선사해드립니다
            </p>
            <a href={telLink} aria-label={`전화 문의 ${phoneNumber}`}>
              <Button
                size="lg"
                className="hover:shadow-3xl group h-auto animate-pulse bg-gradient-to-r from-[#eb5459] to-orange-200 px-10 py-6 text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:animate-none hover:bg-[var(--massage-coral-300)] sm:px-16 sm:py-8 sm:text-3xl"
              >
                {phoneNumber}
              </Button>
            </a>
          </div>

          {/* Spacer */}
          <div />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-gradient-to-b from-[var(--massage-beige-200)] via-[var(--massage-beige-300)] to-[var(--massage-coral-100)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-NanumGothic mb-12 text-center text-3xl tracking-wide sm:text-4xl">
            서비스 지역
          </h2>
          <div className="rounded-3xl bg-gradient-to-br from-[var(--massage-coral-200)] to-[var(--massage-beige-300)] p-8 shadow-2xl sm:p-12">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                {/* <MapPin className="h-12 w-12 text-[var(--massage-coral-300)] sm:h-16 sm:w-16" /> */}
                <Lottie
                  animationData={locationLottie}
                  loop={true}
                  className="h-22 w-22 sm:h-24 sm:w-24"
                />
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
                {/* <Clock className="h-7 w-7 text-[var(--massage-coral-300)] sm:h-8 sm:w-8" /> */}
                <Clock className="h-7 w-7 text-[var(--massage-coral-300)] sm:h-8 sm:w-8" />
                <span className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                  30분 이내 방문
                </span>
              </div>
            </div>
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
              <a href={telLink} aria-label={`지금 전화하기 ${phoneNumber}`}>
                <Button
                  size="lg"
                  className="hover:shadow-3xl group h-auto bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-7 text-3xl font-bold text-white shadow-2xl transition-all duration-300 hover:bg-[var(--massage-coral-200)] sm:px-20 sm:py-9 sm:text-4xl"
                >
                  {phoneNumber}
                </Button>
              </a>
              <p className="text-lg text-white/90 drop-shadow-lg sm:text-xl">
                언제든지 편하게 연락주세요
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Payment Methods Section */}
      <section className="font-NanumGothic bg-gradient-to-b from-[var(--massage-beige-200)] via-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-NanumGothic mb-12 text-center text-3xl tracking-wide sm:text-4xl">
            결제 방법
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Banknote className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                현금
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                현장 결제 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <CreditCard className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                카드
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                모든 카드 사용 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Wallet className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                계좌이체
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                편리한 이체 가능
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - 검색엔진 최적화를 위한 상세 설명 */}
      <section className="bg-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* 더보기 버튼 */}
          <div className="mb-6 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsContentExpanded(!isContentExpanded)}
              className="group gap-2 border-[var(--massage-coral-200)] bg-white/80 text-[var(--massage-brown-900)] transition-all hover:bg-[var(--massage-coral-100)] hover:shadow-md"
            >
              <span className="font-semibold">
                {isContentExpanded ? "접기" : "서비스 상세정보 보기"}
              </span>
              {isContentExpanded ? (
                <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              )}
            </Button>
          </div>

          {/* 토글 가능한 콘텐츠 - 초기 HTML에 포함되어 검색엔진이 인덱싱 가능 */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isContentExpanded
                ? "max-h-[10000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-8 text-sm leading-relaxed text-[var(--massage-brown-700)]/70 sm:text-base">
              {/* 부산 출장 마사지 */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-[var(--massage-brown-900)] sm:text-xl">
                  부산 출장 마사지 서비스 소개
                </h2>
                <p>
                  부산 출장 마사지는 바쁜 일상 속에서 편안하게 힐링을 경험하실
                  수 있는 프리미엄 케어 서비스입니다. 부산 전지역을 대상으로
                  30분 이내 신속한 방문 서비스를 제공하며, 전문 교육을 받은
                  숙련된 테라피스트들이 고객님의 피로를 풀어드립니다. 부산
                  시내는 물론 외곽 지역까지 빠르게 방문하여, 집이나 호텔에서
                  편안하게 마사지를 받으실 수 있습니다. 부산 출장 마사지는
                  현대인의 스트레스 해소와 근육 이완에 탁월한 효과를 제공합니다.
                </p>
              </div>

              {/* 서면 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  서면 출장 마사지 - 부산의 중심에서 만나는 힐링
                </h3>
                <p>
                  서면 출장 마사지는 부산의 대표적인 번화가인 서면 지역에 특화된
                  서비스입니다. 서면은 쇼핑과 업무의 중심지로 많은 분들이 피로를
                  느끼시는 지역입니다. 서면 출장 마사지 서비스는 서면역, 전포동,
                  부전동 일대를 포함하여 빠른 시간 내에 방문합니다. 서면 지역
                  호텔이나 오피스텔, 자택까지 편리하게 이용하실 수 있으며,
                  쇼핑이나 업무 후 지친 몸과 마음을 달래드립니다. 서면 출장
                  마사지는 접근성이 뛰어나 많은 고객님들께서 선호하시는
                  서비스입니다.
                </p>
              </div>

              {/* 해운대 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  해운대 출장 마사지 - 해변의 휴양지에서 누리는 프리미엄 케어
                </h3>
                <p>
                  해운대 출장 마사지는 부산의 대표 관광지이자 고급 주거 지역인
                  해운대에서 제공되는 프리미엄 서비스입니다. 해운대 해수욕장,
                  센텀시티, 마린시티 등 해운대 전지역을 커버하며, 특히 관광객과
                  비즈니스 출장객들에게 인기가 높습니다. 해운대 출장 마사지는
                  고급스러운 서비스 품질로 여행의 피로를 풀어드리고, 재방문율이
                  높은 것이 특징입니다. 해운대 지역 특급 호텔은 물론 레지던스와
                  아파트까지 방문하여 최상의 힐링 경험을 선사합니다. 해운대 출장
                  마사지로 바다의 정취와 함께 완벽한 휴식을 누리실 수 있습니다.
                </p>
              </div>

              {/* 남포동 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  남포동 출장 마사지 - 원도심의 활력을 되찾아드립니다
                </h3>
                <p>
                  남포동 출장 마사지는 부산의 전통적인 중심가인 남포동과 자갈치,
                  국제시장 일대에서 이용 가능한 서비스입니다. 남포동은
                  관광객들이 많이 찾는 명소로, 걷기 관광으로 인한 피로를
                  호텔이나 숙소에서 편안하게 풀어드립니다. 남포동 출장 마사지는
                  전통과 현대가 공존하는 지역 특성에 맞춰 다양한 코스를
                  제공하며, 합리적인 가격으로 이용하실 수 있습니다. 남포동,
                  광복동, 중앙동 등 중구 전역을 서비스 지역으로 하고 있어
                  접근성이 우수합니다. 남포동 출장 마사지로 부산의 정취를 느끼며
                  재충전하시기 바랍니다.
                </p>
              </div>

              {/* 연산동 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  연산동 출장 마사지 - 동부산의 주거 중심지에서
                </h3>
                <p>
                  연산동 출장 마사지는 동부산의 대표적인 주거 및 상업 지역인
                  연산동에서 제공되는 맞춤형 서비스입니다. 연산동은 롯데백화점과
                  지하철역을 중심으로 발전한 지역으로, 많은 직장인과 가족 단위
                  거주자들이 생활하고 있습니다. 연산동 출장 마사지는 일상의
                  피로와 스트레스를 집에서 편안하게 해소할 수 있도록
                  도와드립니다. 연산동, 거제동, 온천동 등 인근 지역까지 빠르게
                  방문하며, 늦은 시간까지 예약이 가능합니다. 연산동 출장
                  마사지로 퇴근 후 집에서 프라이빗하게 케어를 받아보세요.
                </p>
              </div>

              {/* 김해 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  김해 출장 마사지 - 부산 인접 도시의 편리한 힐링
                </h3>
                <p>
                  김해 출장 마사지는 부산과 인접한 김해시 전역에서 이용 가능한
                  프리미엄 서비스입니다. 김해는 공항이 위치한 교통의 요충지이자
                  빠르게 성장하는 도시로, 많은 분들이 출장과 업무로
                  방문하십니다. 김해 출장 마사지는 김해공항 인근 호텔은 물론
                  장유, 내외동, 삼계동 등 김해 전지역을 커버합니다. 김해 지역의
                  특성상 출장객들의 이용이 많으며, 비행이나 장거리 이동으로 인한
                  피로 회복에 탁월한 효과를 보입니다. 김해 출장 마사지로 여행과
                  업무의 피로를 확실하게 풀어보세요.
                </p>
              </div>

              {/* 기장 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  기장 출장 마사지 - 동해안의 여유로운 휴식
                </h3>
                <p>
                  기장 출장 마사지는 부산 동북부에 위치한 기장군 전역에서
                  제공되는 특별한 서비스입니다. 기장은 아름다운 해안선과
                  온천으로 유명한 휴양지로, 주말이나 휴가철에 많은 분들이
                  찾으시는 지역입니다. 기장 출장 마사지는 기장읍, 일광,
                  정관신도시 등을 포함하여 넓은 지역을 서비스하며, 리조트나
                  펜션, 자택까지 방문합니다. 관광과 휴양으로 인한 피로를
                  숙소에서 편안하게 풀 수 있어 만족도가 높습니다. 기장 출장
                  마사지는 바다와 자연 속에서 진정한 힐링을 경험하고 싶으신
                  분들께 최적의 선택입니다.
                </p>
              </div>

              {/* 양산 출장 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  양산 출장 마사지 - 울산과 부산을 잇는 편안한 서비스
                </h3>
                <p>
                  양산 출장 마사지는 부산과 울산 사이에 위치한 양산시 전역에서
                  이용하실 수 있는 전문 서비스입니다. 양산은 신도시 개발과 함께
                  급성장하고 있는 지역으로, 젊은 층과 가족 단위 거주자가
                  많습니다. 양산 출장 마사지는 양산시청, 물금, 웅상 등 주요
                  지역을 모두 포함하며, 부산대학교 양산캠퍼스 인근까지 서비스를
                  제공합니다. 통근과 육아로 지친 고객님들께 집에서 편안하게 받는
                  마사지로 활력을 되찾아드립니다. 양산 출장 마사지는 접근성과
                  서비스 품질을 모두 갖춘 최고의 선택입니다.
                </p>
              </div>

              {/* 서비스 특징 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  프리미엄 출장 마사지 서비스의 특징
                </h3>
                <p>
                  저희 출장 마사지 서비스는 고객님의 편의를 최우선으로
                  생각합니다. 전화 한 통으로 간편하게 예약하실 수 있으며, 예약
                  후 30분 이내 신속하게 방문합니다. 전문 교육을 이수한
                  테라피스트들이 고객님의 상태를 세심하게 체크하여 맞춤형 케어를
                  제공하며, 위생과 안전을 최우선으로 관리합니다. 결제는 현금,
                  카드, 계좌이체 등 다양한 방법으로 가능하여 편리하게 이용하실
                  수 있습니다. 프라이빗한 공간에서 편안하게 받는 마사지는 샵
                  방문과는 다른 특별한 경험을 선사합니다. 부산, 서면, 해운대,
                  남포동, 연산동, 김해, 기장, 양산 어디서든 최고의 힐링 서비스를
                  경험해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
