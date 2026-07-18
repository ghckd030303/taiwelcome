import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  PHONE_INTL,
  SITE_URL,
} from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} - 부산 맞춤형 방문 힐링 케어`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "부산, 김해, 기장, 양산 지역에서 예약 상담 후 방문하는 맞춤형 힐링 케어 서비스입니다. 아로마, 프로젝트 마사지, 스웨디시 등 컨디션에 맞는 코스를 안내합니다.",
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BUSINESS_NAME} - 부산 맞춤형 방문 힐링 케어`,
    description:
      "부산, 김해, 기장, 양산 지역에서 예약 상담 후 방문하는 맞춤형 힐링 케어를 안내합니다.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/faviconImages/apple-icon-180x180.png",
        width: 180,
        height: 180,
        alt: BUSINESS_NAME,
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} - 부산 방문 힐링 케어`,
    description:
      "전화 상담으로 코스, 지역, 시간을 확인하고 편안한 방문 케어를 예약하세요.",
    images: ["/faviconImages/apple-icon-180x180.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 구조화된 데이터 (Schema.org JSON-LD) - 지역 비즈니스
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: BUSINESS_NAME,
    description: "부산, 김해, 기장, 양산 지역 맞춤형 방문 힐링 케어 서비스",
    url: SITE_URL,
    telephone: PHONE_INTL,
    priceRange: "₩₩",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.dong,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.region,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.1796",
      longitude: "129.0756",
    },
    areaServed: [
      {
        "@type": "City",
        name: "부산",
      },
      {
        "@type": "City",
        name: "김해",
      },
      {
        "@type": "City",
        name: "양산",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "23:00",
    },
    paymentAccepted: "현금, 카드, 계좌이체",
    currenciesAccepted: "KRW",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "출장 마사지 서비스",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "아로마 마사지",
            description: "천연 에센셜 오일로 근육의 긴장을 풀어주는 힐링 케어",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "스웨디시 마사지",
            description: "혈액순환과 림프 흐름을 돕는 리드미컬한 이완 케어",
          },
        },
      ],
    },
  };

  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="/faviconImages/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/faviconImages/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/faviconImages/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/faviconImages/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/faviconImages/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/faviconImages/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/faviconImages/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/faviconImages/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/faviconImages/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/faviconImages/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/faviconImages/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/faviconImages/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/faviconImages/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/faviconImages/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/faviconImages/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진이 비즈니스 정보를 이해 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
