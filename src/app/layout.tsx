import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "부산 출장 마사지 - 김해, 양산, 기장 전지역 30분 이내 방문 서비스",
  description:
    "부산, 김해, 양산, 기장 출장 마사지 서비스를 제공합니다. 30분 이내 신속 방문, 전문 테라피스트의 고품격 힐링 케어로 편안한 휴식을 경험하세요. 현금, 카드, 계좌이체 모든 결제 방법 가능합니다.",
  keywords:
    "부산 출장 마사지, 김해 출장 마사지, 양산 출장 마사지, 기장 출장 마사지, 출장 마사지 서비스, 부산 마사지, 홈케어 마사지, 힐링 마사지",
  openGraph: {
    title: "부산 출장 마사지 - 김해, 양산, 기장 전지역 30분 이내 방문",
    description:
      "부산, 김해, 양산, 기장 출장 마사지 서비스. 30분 이내 신속 방문, 전문 테라피스트의 고품격 힐링 케어를 경험하세요.",
    images: "/faviconImages/favicon.ico",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <meta
          name="naver-site-verification"
          content="c02681d6e9ab94060ddd8ff714c05fe56411d9dc"
        />
        <meta
          name="google-site-verification"
          content="-LmsuREJ0S5zNs3U4rJqf8E4khPrG2VnMn-FVueLphk"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
