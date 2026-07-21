import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Droplets,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RegionBreadcrumb } from "@/components/region-breadcrumb";
import {
  areaContents,
  getAllAreaSlugs,
  getAreaBySlug,
} from "@/lib/area-content";
import {
  BUSINESS_NAME,
  PHONE_INTL,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  SITE_URL,
} from "@/lib/site-config";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return { title: "페이지를 찾을 수 없습니다" };
  }

  const canonicalUrl = `${SITE_URL}/areas/${area.slug}`;

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `${area.name} 출장안마`,
      `${area.name} 출장마사지`,
      `${area.district} 출장안마`,
      "부산출장안마",
      "부산홈타이",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: canonicalUrl,
      type: "website",
      locale: "ko_KR",
    },
  };
}

const steps = [
  {
    icon: Phone,
    title: "전화 예약",
    description: "현재 위치와 원하는 코스, 시간을 알려주세요.",
  },
  {
    icon: ClipboardCheck,
    title: "지역·코스 확인",
    description: "교통과 예약 현황을 확인해 도착 시간을 안내드립니다.",
  },
  {
    icon: CalendarCheck,
    title: "방문 케어",
    description: "컨디션과 선호 압을 확인한 뒤 맞춤 케어를 진행합니다.",
  },
];

const courses = [
  {
    icon: Droplets,
    name: "아로마 마사지",
    description:
      "천연 에센셜 오일로 근육의 긴장을 부드럽게 풀어주는 힐링 케어입니다.",
  },
  {
    icon: Sparkles,
    name: "스웨디시 마사지",
    description:
      "리드미컬한 압으로 혈액순환과 림프 흐름을 돕는 전문 케어입니다.",
  },
];

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/areas/${area.slug}`;
  const otherAreas = areaContents.filter((item) => item.slug !== area.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": canonicalUrl,
    name: `${area.name} 출장안마`,
    serviceType: "출장안마",
    description: area.metaDescription,
    url: canonicalUrl,
    areaServed: {
      "@type": "Place",
      name: `부산광역시 ${area.district}`,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": SITE_URL,
      name: BUSINESS_NAME,
      telephone: PHONE_INTL,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--massage-beige-200)] via-white to-[var(--massage-coral-100)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <RegionBreadcrumb
        segments={[
          { label: "핵심 지역", href: "/areas" },
          { label: `${area.name} 출장안마` },
        ]}
      />

      {/* 히어로 */}
      <section className="px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-[var(--massage-coral-200)] to-[var(--massage-coral-300)] p-5 shadow-lg">
              <MapPin className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--massage-brown-900)] sm:text-5xl">
            {area.heroTitle}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            {area.heroDescription}
          </p>

          <div className="mb-10 flex justify-center">
            <a href={PHONE_TEL_HREF} aria-label={`전화 문의 ${PHONE_NUMBER}`}>
              <Button
                size="lg"
                className="h-auto bg-gradient-to-r from-[#eb5459] to-orange-300 px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:shadow-2xl sm:px-14 sm:text-2xl"
              >
                <Phone className="mr-2 h-6 w-6" />
                {PHONE_NUMBER}
              </Button>
            </a>
          </div>

          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {area.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--massage-brown-900)] shadow-md"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-[var(--massage-coral-300)]" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 상권 소개 */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg sm:p-10">
          <h2 className="mb-6 text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            왜 {area.name} 출장안마인가
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[var(--massage-brown-700)] sm:text-lg">
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 코스 안내 */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {area.name} 방문 케어 코스
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.name}
                className="rounded-2xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[var(--massage-coral-200)] p-4">
                    <course.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[var(--massage-brown-900)]">
                  {course.name}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["60분", "90분", "120분"].map((duration) => (
              <span
                key={duration}
                className="flex items-center gap-2 rounded-full border-2 border-[var(--massage-coral-200)] bg-white px-5 py-2 font-bold text-[var(--massage-brown-900)]"
              >
                <Clock className="h-4 w-4 text-[var(--massage-coral-300)]" />
                {duration}
              </span>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-[var(--massage-brown-700)]">
            정확한 가격은 예약 상황과 옵션에 따라 달라질 수 있어 전화 상담에서
            투명하게 안내드립니다.{" "}
            <Link
              href="/course"
              className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
            >
              코스 안내 보기
            </Link>
          </p>
        </div>
      </section>

      {/* 이용 절차 */}
      <section className="bg-[var(--massage-beige-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            전화 한 통으로 시작하는 {area.name} 방문 케어
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm"
              >
                <step.icon className="mx-auto mb-3 h-7 w-7 text-[var(--massage-coral-300)]" />
                <p className="font-bold text-[var(--massage-brown-900)]">
                  {index + 1}. {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--massage-brown-700)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 커버 지역 */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {area.name} 출장안마 방문 지역
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {area.coverage.map((group) => (
              <div
                key={group}
                className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm"
              >
                <MapPin className="h-5 w-5 shrink-0 text-[var(--massage-coral-300)]" />
                <span className="font-semibold text-[var(--massage-brown-900)]">
                  {group}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--massage-brown-700)]">
            {area.district} 동별 상세 안내는{" "}
            <Link
              href={`/region-guide/busan/${area.districtSlug}`}
              className="font-semibold text-[var(--massage-coral-300)] underline underline-offset-2"
            >
              {area.district} 지역 안내
            </Link>
            에서 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* 지역 가이드 */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {area.name}에서 이렇게 이용해보세요
          </h2>
          {area.localSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-4 text-xl font-bold text-[var(--massage-brown-900)]">
                {section.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--massage-brown-700)]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--massage-beige-100)] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {area.name} 출장안마 자주 묻는 질문
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {area.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-xl border bg-white px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[var(--massage-brown-900)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[var(--massage-brown-700)] sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 다른 상권 */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            부산 다른 지역도 방문합니다
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/areas/${other.slug}`}
                className="group rounded-xl border bg-white p-5 shadow-sm transition hover:border-[var(--massage-coral-300)] hover:shadow-md"
              >
                <p className="font-bold text-[var(--massage-brown-900)]">
                  {other.name} 출장안마
                </p>
                <p className="mt-1 text-sm text-[var(--massage-brown-700)]">
                  {other.tagline}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--massage-coral-300)]">
                  자세히 보기
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-[var(--massage-brown-900)] sm:text-3xl">
            {area.name} 출장안마, 지금 상담하세요
          </h2>
          <p className="mb-8 text-base text-[var(--massage-brown-700)] sm:text-lg">
            위치와 컨디션을 알려주시면 방문 가능 시간을 바로 확인해드립니다.
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
