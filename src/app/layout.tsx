import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://taiwelcome.vercel.app"; // 실제 배포된 도메인으로 변경 필요

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "부산 출장 마사지 - 서면, 해운대, 남포동, 연산동, 김해, 양산, 기장 전지역 24시간 30분 이내 방문 서비스",
  description:
    "OlO.5877.4440, 부산, 서면, 해운대, 동래, 남포동, 연산동, 광안리, 수영구, 김해, 양산, 부산역, 대연동, 기장, 사상, 하단, 덕천, 화명동, 정관, 센텀시티, 구서동, 범일동, 영도, 송도, 명지동, 민락동, 일광, 문현동 출장 마사지 서비스를 제공합니다. OlO.5877.4440 30분 이내 신속 방문",
  keywords:
    "출장 마사지, 부산 출장마사지, 서면, 해운대, 동래, 남포동, 연산동, 광안리, 수영구, 김해, 양산, 부산역, 대연동, 기장, 사상, 하단, 덕천, 화명동, 정관, 센텀시티, 구서동, 범일동, 영도, 송도, 명지동, 민락동, 일광, 문현동 출장 마사지 서비스를 제공합니다. OlO.5877.4440 30분 이내 신속 방문",
  authors: [{ name: "부산 프리미엄 출장 마사지" }],
  creator: "부산 프리미엄 출장 마사지",
  publisher: "부산 프리미엄 출장 마사지",
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
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "부산 출장 마사지 - 서면, 해운대, 동래, 남포동, 연산동, 광안리, 수영구, 김해, 양산, 기장 전지역 30분 이내 방문",
    description:
      "OlO.5877.4440, 부산, 서면, 해운대, 동래, 남포동, 연산동, 광안리, 수영구, 김해, 양산, 부산역, 대연동, 기장, 사상, 하단, 덕천, 화명동, 정관, 센텀시티, 구서동, 범일동, 영도, 송도, 명지동, 민락동, 일광, 문현동 출장 마사지 서비스를 제공합니다. OlO.5877.4440 30분 이내 신속 방문",
    url: siteUrl,
    siteName: "부산 출장 마사지 서비스",
    images: [
      {
        url: "/faviconImages/apple-icon-180x180.png",
        width: 180,
        height: 180,
        alt: "부산 출장 마사지 서비스",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "부산 출장 마사지 - 서면, 해운대, 남포동, 연산동, 김해, 양산, 기장 전지역",
    description:
      "30분 이내 신속 방문, 전문 테라피스트의 고품격 힐링 케어를 경험하세요.",
    images: ["/faviconImages/apple-icon-180x180.png"],
  },
  verification: {
    google: "-LmsuREJ0S5zNs3U4rJqf8E4khPrG2VnMn-FVueLphk",
    other: {
      "naver-site-verification": "c02681d6e9ab94060ddd8ff714c05fe56411d9dc",
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
    "@id": siteUrl,
    name: "부산 프리미엄 출장 마사지",
    description:
      "부산, 서면, 해운대, 남포동, 연산동, 김해, 양산, 기장 전지역 출장 마사지 서비스",
    url: siteUrl,
    telephone: "+82-10-5877-4440",
    priceRange: "₩₩",
    address: {
      "@type": "PostalAddress",
      addressLocality: "부산",
      addressRegion: "부산광역시",
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
            name: "부산 출장 마사지",
            description: "부산 전지역 30분 이내 방문 마사지 서비스",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "서면 출장 마사지",
            description: "서면 지역 전문 출장 마사지",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "해운대 출장 마사지",
            description: "해운대, 센텀시티, 마린시티 출장 마사지",
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
      </body>
    </html>
  );
}
