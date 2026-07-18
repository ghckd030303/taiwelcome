import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck, MapPinned } from "lucide-react";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PHONE_NUMBER, PHONE_TEL_HREF, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "이용 안내 및 FAQ",
  description:
    "출장 마사지 예약 방법, 결제, 방문 지역, 위생 관리 등 자주 묻는 질문을 안내합니다. 전화 한 통으로 간편하게 예약하세요.",
  alternates: {
    canonical: `${SITE_URL}/guide`,
  },
  openGraph: {
    title: "이용 안내 및 FAQ",
    description: "출장 마사지 예약 방법과 자주 묻는 질문 안내",
    url: `${SITE_URL}/guide`,
    type: "website",
  },
};

const steps = [
  {
    icon: Phone,
    title: "전화 예약",
    description: "전화 한 통으로 원하시는 코스와 방문 장소를 알려주세요.",
  },
  {
    icon: Clock,
    title: "신속한 방문",
    description: "부산 전 지역 30분 이내 방문을 목표로 신속하게 이동합니다.",
  },
  {
    icon: ShieldCheck,
    title: "안전한 케어",
    description: "위생과 안전을 최우선으로 관리하는 전문 테라피스트가 서비스를 제공합니다.",
  },
];

const faqs = [
  {
    question: "예약은 어떻게 하나요?",
    answer: `전화(${PHONE_NUMBER})로 원하시는 코스와 방문 장소, 시간을 말씀해주시면 바로 예약이 진행됩니다. 별도의 앱 설치나 회원가입 없이 간편하게 이용하실 수 있습니다.`,
  },
  {
    question: "부산 전 지역 방문이 가능한가요?",
    answer:
      "네, 부산 전 지역 30분 이내 방문이 가능합니다. 자세한 지역별 안내는 서비스 지역 페이지에서 확인하실 수 있으며, 서비스 가능 여부가 궁금하시면 전화로 문의해주세요.",
  },
  {
    question: "결제는 어떤 방식으로 하나요?",
    answer:
      "현금, 카드, 계좌이체 모두 가능합니다. 서비스가 끝난 후 결제하시면 되며, 카드 결제 시 영수증 발급도 가능합니다.",
  },
  {
    question: "위생과 안전 관리는 어떻게 이루어지나요?",
    answer:
      "모든 테라피스트는 위생 교육을 이수하였으며, 방문 시마다 청결한 도구와 리넨을 사용합니다. 고객님의 프라이버시와 안전을 최우선으로 관리하고 있습니다.",
  },
  {
    question: "예약을 변경하거나 취소할 수 있나요?",
    answer:
      "방문 전 전화로 미리 알려주시면 일정 변경이나 취소가 가능합니다. 테라피스트가 이동 중인 경우에는 상황에 따라 조율해드리니 최대한 빠르게 연락 주세요.",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <RegionBreadcrumb segments={[{ label: "이용 안내 및 FAQ" }]} />

      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            이용 안내 및 FAQ
          </h1>
          <p className="text-lg text-[var(--massage-brown-700)] sm:text-xl">
            처음 이용하시는 분들을 위한 안내입니다
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            이용 방법
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--massage-coral-200)] text-lg font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="mb-3 flex justify-center">
                  <step.icon className="h-7 w-7 text-[var(--massage-coral-300)]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--massage-brown-900)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--massage-brown-700)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            자주 묻는 질문
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-lg border bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[var(--massage-brown-900)] hover:text-[var(--massage-coral-300)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--massage-brown-700)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center">
            <MapPinned className="h-10 w-10 text-[var(--massage-coral-300)]" />
          </div>
          <p className="mb-6 text-lg text-[var(--massage-brown-700)] sm:text-xl">
            더 궁금하신 점이 있으시면 편하게 전화 주세요
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
