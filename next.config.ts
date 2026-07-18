import type { NextConfig } from "next";
import { LEGACY_DOMAINS, SITE_URL } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  async redirects() {
    const destination = `${SITE_URL}/:path*`;

    return [
      // 옛 Vercel 기본 도메인으로 들어오는 모든 트래픽을 정식 도메인으로 301 영구 이동
      ...LEGACY_DOMAINS.map((domain) => ({
        source: "/:path*",
        has: [
          {
            type: "host" as const,
            value: domain,
          },
        ],
        destination,
        permanent: true,
      })),
      // 지역 목록 페이지 통합: /all-regions → /regions
      {
        source: "/all-regions",
        destination: "/regions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
