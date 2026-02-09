import { MetadataRoute } from "next";
import {
  getAllProvinces,
  getCitiesByProvince,
  getDongsByCity,
  toSlug,
} from "@/lib/region-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taiwelcome.vercel.app"; // 실제 도메인으로 변경 필요
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/region-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // 모든 지역 페이지 추가
  for (const province of getAllProvinces()) {
    const provinceSlug = toSlug(province);

    // 지역 메인 페이지 (경남, 부산)
    routes.push({
      url: `${baseUrl}/region-guide/${provinceSlug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const cities = getCitiesByProvince(province);

    for (const city of cities) {
      const citySlug = toSlug(city);

      // 시/구 페이지
      routes.push({
        url: `${baseUrl}/region-guide/${provinceSlug}/${citySlug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      });

      const dongs = getDongsByCity(province, city);

      for (const dong of dongs) {
        const dongSlug = toSlug(dong);

        // 최종 동 페이지 (SEO 최적화 대상)
        routes.push({
          url: `${baseUrl}/region-guide/${provinceSlug}/${citySlug}/${dongSlug}`,
          lastModified: currentDate,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return routes;
}

