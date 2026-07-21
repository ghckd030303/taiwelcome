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
    default: `부산출장안마 · 부산홈타이 24시 | ${BUSINESS_NAME}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "부산출장안마 전문 휴케어 부산. 연산동, 사상, 부산역, 덕천, 하단 등 부산 전 지역 30분 이내 방문. 전문 테라피스트의 아로마, 스웨디시 홈타이 케어를 전화로 예약하세요.",
  keywords: [
    "부산출장안마",
    "부산홈타이",
    "부산출장마사지",
    "연산동 출장안마",
    "사상 출장안마",
    "부산역 출장안마",
    "덕천 출장안마",
    "하단 출장안마",
  ],
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
    title: `부산출장안마 · 부산홈타이 24시 | ${BUSINESS_NAME}`,
    description:
      "연산동, 사상, 부산역, 덕천, 하단 등 부산 전 지역 30분 이내 방문하는 출장안마 서비스. 전문 테라피스트의 맞춤형 홈타이 케어를 경험해보세요.",
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
    title: `부산출장안마 24시 | ${BUSINESS_NAME}`,
    description:
      "30분 이내 신속 방문, 전문 테라피스트의 부산 출장안마·홈타이 케어를 경험하세요.",
    images: ["/faviconImages/apple-icon-180x180.png"],
  },
  verification: {
    google: "-LmsuREJ0S5zNs3U4rJqf8E4khPrG2VnMn-FVueLphk",
    other: {
      "naver-site-verification": "0d022f1d592ba616fae0f90d75035df962584c5d",
    },
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
    description:
      "부산 전 지역 30분 이내 방문 가능한 프리미엄 출장마사지 서비스",
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
      name: "출장마사지 서비스",
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
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* 지역 SEO geo 태그 (부산, KR) */}
        <meta name="geo.region" content="KR-26" />
        <meta name="geo.placename" content="부산광역시" />
        <meta name="geo.position" content="35.1796;129.0756" />
        <meta name="ICBM" content="35.1796, 129.0756" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
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
