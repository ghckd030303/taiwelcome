"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Phone,
  Sparkles,
  Heart,
  Droplets,
  Flame,
  CreditCard,
  Banknote,
  Wallet,
  ChevronDown,
  ChevronUp,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DongPageContentProps {
  regionSlug: string;
  citySlug: string;
  dongSlug: string;
  province: string;
  city: string;
  dong: string;
  displayProvince: string;
  fullLocation: string;
}

export function DongPageContent({
  regionSlug,
  citySlug,
  city,
  dong,
  displayProvince,
  fullLocation,
}: DongPageContentProps) {
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const phoneNumber = "010-5877-4440";
  const telLink = `tel:${phoneNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb
        segments={[
          { label: "지역안내", href: "/region-guide" },
          { label: displayProvince, href: `/region-guide/${regionSlug}` },
          { label: city, href: `/region-guide/${regionSlug}/${citySlug}` },
          { label: dong },
        ]}
      />

      {/* SEO H1 */}
      <h1 className="sr-only">
        {fullLocation} 출장 마사지 - 30분 이내 방문, 20대 전문 관리사, 아로마,
        스웨디시, 섹슈얼 케어
      </h1>

      {/* 히어로 섹션 */}
      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-[var(--massage-coral-200)] to-[var(--massage-coral-300)] p-5 shadow-lg">
              <MapPin className="h-14 w-14 text-white" />
            </div>
          </div>
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            {fullLocation}
            <br />
            <span className="text-[var(--massage-coral-300)]">출장 마사지</span>
          </h2>
          <p className="mb-8 text-center text-lg text-[var(--massage-brown-700)] sm:text-xl">
            프리미엄 힐링 케어 서비스
          </p>

          {/* CTA 버튼 */}
          <div className="mb-8 flex justify-center">
            <a href={telLink} aria-label={`전화 문의 ${phoneNumber}`}>
              <Button
                size="lg"
                className="group hover:shadow-3xl h-auto animate-pulse bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-6 text-2xl font-bold text-white shadow-2xl transition-all hover:animate-none sm:px-16 sm:py-8 sm:text-3xl"
              >
                <Phone className="mr-3 h-7 w-7 transition-transform group-hover:rotate-12" />
                {phoneNumber}
              </Button>
            </a>
          </div>

          {/* 빠른 정보 */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
              <Clock className="h-5 w-5 text-[var(--massage-coral-300)]" />
              <span className="font-semibold text-[var(--massage-brown-900)]">
                30분 이내 방문
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
              <Heart className="h-5 w-5 text-[var(--massage-coral-300)]" />
              <span className="font-semibold text-[var(--massage-brown-900)]">
                20대 전문 관리사
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 특징 섹션 */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            {dong} 프리미엄 서비스
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 아로마 마사지 */}
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4 transition-transform group-hover:scale-110">
                  <Droplets className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[var(--massage-brown-900)]">
                아로마 마사지
              </h3>
              <p className="text-center text-sm text-[var(--massage-brown-700)]">
                천연 에센셜 오일을 사용한 향기로운 힐링 케어
              </p>
            </div>

            {/* 스웨디시 마사지 */}
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-4 transition-transform group-hover:scale-110">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[var(--massage-brown-900)]">
                스웨디시 마사지
              </h3>
              <p className="text-center text-sm text-[var(--massage-brown-700)]">
                근육 이완과 혈액순환 개선에 탁월한 전문 케어
              </p>
            </div>

            {/* 섹슈얼 케어 */}
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-rose-100 to-rose-200 p-4 transition-transform group-hover:scale-110">
                  <Flame className="h-8 w-8 text-rose-600" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[var(--massage-brown-900)]">
                섹슈얼 케어
              </h3>
              <p className="text-center text-sm text-[var(--massage-brown-700)]">
                프라이빗한 공간에서의 특별한 힐링 경험
              </p>
            </div>

            {/* 20대 관리사 */}
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-4 transition-transform group-hover:scale-110">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[var(--massage-brown-900)]">
                20대 관리사
              </h3>
              <p className="text-center text-sm text-[var(--massage-brown-700)]">
                전문 교육을 받은 젊고 숙련된 테라피스트
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 결제 방법 섹션 */}
      <section className="bg-gradient-to-r from-[var(--massage-beige-200)] to-[var(--massage-coral-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            편리한 결제 방법
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Banknote className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                현금
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)]">
                현장 결제 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <CreditCard className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                카드
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)]">
                모든 카드 사용 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/90 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Wallet className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                계좌이체
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)]">
                편리한 이체 가능
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 이미지 갤러리 섹션 */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            {dong} 출장 마사지 서비스
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[400px]">
              <Image
                src="/images/image.png"
                alt={`${fullLocation} 출장 마사지 프리미엄 케어`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[400px]">
              <Image
                src="/images/image2.png"
                alt={`${fullLocation} 출장 마사지 전문 관리사`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 상세 서비스 설명 섹션 */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            {dong} 출장 마사지를 선택해야 하는 이유
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--massage-coral-100)] p-4">
                  <Shield className="h-10 w-10 text-[var(--massage-coral-300)]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--massage-brown-900)]">
                안전하고 신뢰할 수 있는 서비스
              </h3>
              <p className="text-[var(--massage-brown-700)]">
                {fullLocation} 지역에서 검증된 전문 테라피스트만 파견합니다.
                철저한 신원 확인과 교육을 거친 관리사가 방문하여 안심하고
                서비스를 받으실 수 있습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--massage-coral-100)] p-4">
                  <Users className="h-10 w-10 text-[var(--massage-coral-300)]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--massage-brown-900)]">
                경험 풍부한 전문가
              </h3>
              <p className="text-[var(--massage-brown-700)]">
                {dong} 출장 마사지는 오랜 경력의 전문 테라피스트들이 제공합니다.
                고객님의 몸 상태를 정확히 파악하여 최적의 마사지 기법을
                적용합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[var(--massage-coral-100)] p-4">
                  <CheckCircle className="h-10 w-10 text-[var(--massage-coral-300)]" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[var(--massage-brown-900)]">
                100% 만족 보장
              </h3>
              <p className="text-[var(--massage-brown-700)]">
                {fullLocation}에서 최고의 힐링 경험을 약속드립니다. 서비스에
                만족하지 못하신 경우 적극적으로 개선해드리며, 고객 만족을
                최우선으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="bg-gradient-to-b from-[var(--massage-beige-200)] to-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            {dong} 출장 마사지 자주 묻는 질문
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                {fullLocation} 출장 마사지는 어떻게 예약하나요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                {phoneNumber}로 전화주시면 즉시 예약 가능합니다. {dong} 지역은
                전화 후 30분 이내 방문이 가능하며, 원하시는 시간대를
                말씀해주시면 맞춰서 방문해드립니다. 24시간 예약 가능하며, 늦은
                시간이나 주말에도 서비스를 제공합니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                출장 마사지 비용은 얼마인가요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                {fullLocation} 출장 마사지 비용은 선택하시는 코스와 시간에 따라
                다릅니다. 기본 60분 코스부터 다양한 옵션이 있으며, 전화 상담 시
                자세한 가격을 안내해드립니다. 현금, 카드, 계좌이체 모두
                가능하며, 추가 비용 없이 투명하게 안내드립니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                {dong}에서 정말 30분 이내에 도착하나요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                네, {fullLocation} 전지역에서 30분 이내 방문을 원칙으로 합니다.
                다만 교통 상황이나 날씨에 따라 다소 지연될 수 있으며, 이 경우
                사전에 연락드립니다. 대부분의 경우 예약 후 20~30분 내에 도착하여
                서비스를 시작합니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                관리사는 어떤 분들인가요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                {dong} 출장 마사지는 20대 전문 관리사들이 서비스를 제공합니다.
                모든 테라피스트는 전문 교육을 이수하였으며, 아로마, 스웨디시 등
                다양한 마사지 기법에 능숙합니다. 친절하고 프로페셔널한 서비스로
                고객님의 만족을 최우선으로 합니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                호텔이나 오피스텔에서도 가능한가요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                물론입니다. {fullLocation} 지역의 자택, 호텔, 오피스텔, 원룸 등
                어디든 방문 가능합니다. 고객님이 편안하게 휴식할 수 있는 공간이
                있다면 어디든 서비스를 제공해드립니다. 프라이버시는 철저히
                보장됩니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                아로마 오일은 어떤 것을 사용하나요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                {dong} 아로마 마사지는 천연 에센셜 오일만을 사용합니다. 라벤더,
                유칼립투스, 로즈마리, 페퍼민트 등 다양한 오일 중에서 고객님의
                상태와 선호에 맞는 오일을 선택하여 사용합니다. 피부에 자극이
                적고 향기로운 프리미엄 오일로 최상의 힐링 경험을 제공합니다.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="rounded-lg border bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                스웨디시 마사지는 어떤 효과가 있나요?
              </AccordionTrigger>
              <AccordionContent className="text-[var(--massage-brown-700)]">
                {fullLocation} 스웨디시 마사지는 근육 긴장 완화, 혈액순환 개선,
                스트레스 해소에 매우 효과적입니다. 특히 장시간 앉아서 일하시는
                분들의 목, 어깨, 허리 통증 완화에 탁월하며, 전신의 피로를
                풀어드립니다. 부드러우면서도 깊은 압력으로 근육 깊숙이
                이완시킵니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            지금 바로 문의하세요
          </h2>
          <p className="mb-8 text-lg text-[var(--massage-brown-700)]">
            {fullLocation} 전문 테라피스트가 30분 이내 방문합니다
          </p>
          <a href={telLink} aria-label={`지금 전화하기 ${phoneNumber}`}>
            <Button
              size="lg"
              className="hover:shadow-3xl h-auto bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-7 text-3xl font-bold text-white shadow-2xl transition-all sm:px-20 sm:py-9 sm:text-4xl"
            >
              {phoneNumber}
            </Button>
          </a>
          <p className="mt-4 text-base text-[var(--massage-brown-700)]">
            24시간 예약 가능 · 언제든지 편하게 연락주세요
          </p>
        </div>
      </section>

      {/* 추가 정보 섹션 */}
      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[var(--massage-brown-900)] sm:text-4xl">
            {dong} 출장 마사지 이용 안내
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/90 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)]">
                📍 서비스 지역
              </h3>
              <p className="mb-3 text-[var(--massage-brown-700)]">
                {fullLocation} 전지역 출장 가능
              </p>
              <p className="text-sm text-[var(--massage-brown-700)]">
                자택, 호텔, 오피스텔, 원룸 등 고객님이 편안한 모든 장소에
                방문합니다. {city} 내 다른 지역도 서비스 가능하니 문의해주세요.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)]">
                ⏰ 영업 시간
              </h3>
              <p className="mb-3 text-[var(--massage-brown-700)]">
                오전 00시 ~ 오후 24시 (연중무휴)
              </p>
              <p className="text-sm text-[var(--massage-brown-700)]">
                주말, 공휴일에도 정상 운영됩니다. 늦은 시간 예약도 가능하니
                편하신 시간에 연락주세요.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)]">
                💳 결제 방법
              </h3>
              <p className="mb-3 text-[var(--massage-brown-700)]">
                현금, 카드, 계좌이체 모두 가능
              </p>
              <p className="text-sm text-[var(--massage-brown-700)]">
                서비스 완료 후 결제하시면 됩니다. 모든 카드 사용 가능하며,
                영수증 발급도 가능합니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)]">
                🎯 이용 방법
              </h3>
              <p className="mb-3 text-[var(--massage-brown-700)]">
                1. 전화 예약 → 2. 빠른 방문 → 3. 서비스 제공
              </p>
              <p className="text-sm text-[var(--massage-brown-700)]">
                간단한 전화 한 통으로 예약 완료. {dong} 지역은 30분 이내 방문
                가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO 콘텐츠 섹션 */}
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

          {/* 토글 가능한 SEO 콘텐츠 */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isContentExpanded
                ? "max-h-[10000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-8 text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
              {/* 지역 소개 */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--massage-brown-900)] sm:text-xl">
                  {fullLocation} 출장 마사지 서비스
                </h3>
                <p>
                  {fullLocation} 지역에서 최고의 출장 마사지 서비스를
                  제공합니다. {dong}은(는) {city}의 대표적인 지역으로, 많은
                  고객님들이 일상의 피로와 스트레스로 지쳐 있습니다. 저희는{" "}
                  {fullLocation} 전지역을 대상으로 30분 이내에 신속하게
                  방문하여, 고객님의 집이나 호텔에서 편안하게 프리미엄 마사지
                  서비스를 받으실 수 있도록 도와드립니다.
                </p>
              </div>

              {/* 아로마 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 아로마 마사지 - 향기로운 힐링
                </h3>
                <p>
                  {fullLocation} 아로마 마사지는 천연 에센셜 오일을 사용하여
                  심신의 안정과 이완을 돕는 프리미엄 케어입니다. {dong}
                  지역에서 아로마 마사지를 받으시면, 라벤더, 유칼립투스,
                  로즈마리 등 다양한 향의 오일 중 고객님의 상태와 선호에 맞는
                  오일을 선택하여 맞춤형 서비스를 제공해드립니다. 아로마테라피는
                  후각을 통해 뇌를 자극하여 스트레스 해소, 불안 완화, 수면 개선
                  등에 탁월한 효과가 있으며, {fullLocation}에서 편안하게 받으실
                  수 있습니다.
                </p>
              </div>

              {/* 스웨디시 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 스웨디시 마사지 - 근육 이완의 정석
                </h3>
                <p>
                  {fullLocation} 스웨디시 마사지는 서양 마사지의 대표적인
                  기법으로, 근육의 긴장을 풀고 혈액순환을 촉진하는 데 매우
                  효과적입니다. {dong} 지역의 직장인, 학생, 주부 등 모든
                  분들께서 일상생활과 업무로 인해 쌓인 근육의 피로를 스웨디시
                  마사지로 풀어보실 수 있습니다. 전문 테라피스트가 고객님의 몸
                  상태를 체크하여 적절한 강도로 마사지를 진행하며, 특히 어깨,
                  목, 허리 등 통증이 심한 부위를 집중적으로 케어해드립니다.{" "}
                  {fullLocation} 스웨디시 마사지로 새로운 활력을 되찾으세요.
                </p>
              </div>

              {/* 섹슈얼 케어 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 섹슈얼 케어 - 프라이빗 힐링
                </h3>
                <p>
                  {fullLocation} 섹슈얼 케어 마사지는 프라이빗한 공간에서
                  제공되는 특별한 힐링 서비스입니다. {dong} 지역 고객님들께
                  심신의 긴장을 완전히 풀고 편안한 휴식을 취하실 수 있도록
                  세심한 케어를 제공합니다. 모든 서비스는 고객님의 프라이버시를
                  최우선으로 하며, 안전하고 청결한 환경에서 진행됩니다.{" "}
                  {fullLocation}에서 일상의 스트레스를 잊고 진정한 힐링을
                  경험해보세요.
                </p>
              </div>

              {/* 20대 관리사 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 20대 전문 관리사 - 젊고 숙련된 테라피스트
                </h3>
                <p>
                  {fullLocation} 출장 마사지 서비스는 20대 젊고 아름다운 전문
                  관리사들이 직접 방문하여 서비스를 제공합니다. {dong} 지역
                  고객님들께서는 젊은 테라피스트의 활기차고 세심한 손길로 피로를
                  풀어보실 수 있습니다. 모든 관리사는 전문 교육을 이수하였으며,
                  고객 응대 및 마사지 기술에 있어 높은 수준을 자랑합니다. 친절한
                  서비스와 프로페셔널한 기술을 동시에 경험하실 수 있는{" "}
                  {fullLocation} 출장 마사지를 이용해보세요.
                </p>
              </div>

              {/* 서비스 이용 안내 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 출장 마사지 이용 방법
                </h3>
                <p>
                  {fullLocation} 출장 마사지 예약은 매우 간단합니다. 전화 한
                  통으로 손쉽게 예약하실 수 있으며, 예약 후 30분 이내에 {dong}{" "}
                  고객님께서 원하시는 장소로 방문해드립니다. 자택, 호텔,
                  오피스텔 등 어디든 가능하며, 개인 공간에서 편안하게 서비스를
                  받으실 수 있습니다. 결제는 현금, 카드, 계좌이체 등 다양한
                  방법으로 가능하여 편리하게 이용하실 수 있습니다.{" "}
                  {fullLocation}
                  고객님들의 만족을 위해 항상 최선을 다하겠습니다.
                </p>
              </div>

              {/* 서비스 특징 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 출장 마사지의 장점
                </h3>
                <p>
                  {fullLocation} 출장 마사지의 가장 큰 장점은 고객님께서
                  이동하지 않고 편안한 공간에서 서비스를 받으실 수 있다는
                  점입니다. {dong}
                  지역은 교통이 혼잡하거나 주차가 어려운 경우가 많아, 마사지
                  샵을 방문하는 것이 번거로울 수 있습니다. 저희 출장 마사지
                  서비스를 이용하시면 그런 불편함 없이 집에서 편안하게 힐링을
                  즐기실 수 있습니다. 또한, 프라이빗한 공간에서 받는 마사지는
                  더욱 깊은 휴식과 안정감을 선사합니다. {fullLocation} 출장
                  마사지로 특별한 힐링 경험을 만들어보세요.
                </p>
              </div>

              {/* 출장 마사지 vs 일반 마사지 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 출장 마사지가 특별한 이유
                </h3>
                <p>
                  일반 마사지 샵과 달리 {fullLocation} 출장 마사지는 고객님의
                  공간에서 진행되기 때문에 이동 시간과 번거로움이 없습니다. 대기
                  시간도 없으며, 예약 시간에 정확히 방문하여 즉시 서비스를
                  시작합니다. {dong} 지역 고객님들께서는 샤워 후 바로 휴식을
                  취하실 수 있으며, 마사지 후에도 외출 준비 없이 편안하게 쉬실
                  수 있습니다. 출장 마사지는 시간과 에너지를 절약하면서도 최고
                  품질의 마사지를 받을 수 있는 현명한 선택입니다.
                </p>
              </div>

              {/* 마사지 효과 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 마사지의 건강 효과
                </h3>
                <p>
                  {fullLocation} 마사지는 단순한 휴식을 넘어 건강 증진에도 큰
                  도움이 됩니다. 정기적인 마사지는 혈액순환 개선, 면역력 강화,
                  스트레스 호르몬 감소, 수면의 질 향상 등 다양한 긍정적 효과를
                  가져옵니다. 특히 {dong} 지역처럼 바쁜 도시 생활을 하시는
                  분들께는 주기적인 마사지가 건강 관리에 필수적입니다. 출장
                  마사지를 통해 편리하게 건강을 챙기세요. 근육통, 두통, 만성
                  피로 등의 증상이 있으신 분들께 특히 추천드립니다.
                </p>
              </div>

              {/* 고객 후기 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 고객님들의 만족 후기
                </h3>
                <p>
                  {fullLocation} 출장 마사지를 이용하신 고객님들께서 가장 많이
                  말씀하시는 것은 &ldquo;편리함&rdquo;과 &ldquo;전문성&rdquo;입니다. {dong} 지역
                  고객님들은 집에서 편안하게 받는 서비스에 매우 만족하시며,
                  관리사의 숙련된 기술과 친절한 응대에 높은 평가를 주십니다.
                  특히 아로마 마사지와 스웨디시 마사지의 효과에 대해 많은 분들이
                  재예약을 하십니다. 출장 마사지 한 번 경험하시면 일반 마사지
                  샵으로 다시 돌아가기 어렵다는 후기가 많습니다. {fullLocation}
                  주민 여러분의 건강과 휴식을 책임지겠습니다.
                </p>
              </div>

              {/* 예약 팁 */}
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[var(--massage-brown-900)] sm:text-lg">
                  {dong} 출장 마사지 예약 팁
                </h3>
                <p>
                  {fullLocation} 출장 마사지를 예약하실 때는 원하시는 마사지
                  종류와 시간대를 미리 생각해두시면 좋습니다. 아로마 마사지는
                  휴식과 안정에, 스웨디시 마사지는 근육 이완에 효과적입니다.
                  {dong} 지역은 인기가 많아 주말이나 저녁 시간대는 예약이 빠르게
                  마감될 수 있으니 미리 예약하시는 것을 추천드립니다. 첫 이용
                  고객님께는 특별 할인 혜택도 있으니 전화 시 꼭 말씀해주세요.
                  출장 마사지 전에는 가벼운 샤워를 하시면 더욱 효과가 좋으며,
                  마사지 후에는 충분한 수분 섭취를 권장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
