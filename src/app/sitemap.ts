import { MetadataRoute } from "next";
import {
  getAllProvinces,
  getCitiesByProvince,
  getDongsByCity,
  toSlug,
} from "@/lib/region-data";
import { getAllAreaSlugs } from "@/lib/area-content";
import { getAllBlogSlugs } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/course`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/regions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/region-guide`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 핵심 상권 페이지 (SEO 최우선 대상)
  for (const areaSlug of getAllAreaSlugs()) {
    routes.push({
      url: `${baseUrl}/areas/${areaSlug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // 블로그 글
  for (const blogSlug of getAllBlogSlugs()) {
    routes.push({
      url: `${baseUrl}/blog/${blogSlug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // URL 경로 세그먼트 퍼센트 인코딩 (한글 등 비ASCII 처리)
  const enc = (s: string) => encodeURIComponent(s);

  // 모든 지역 페이지 추가
  for (const province of getAllProvinces()) {
    const provinceSlug = toSlug(province);

    // 지역 메인 페이지 (경남, 부산)
    routes.push({
      url: `${baseUrl}/region-guide/${enc(provinceSlug)}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const cities = getCitiesByProvince(province);

    for (const city of cities) {
      const citySlug = toSlug(city);

      // 시/구 페이지
      routes.push({
        url: `${baseUrl}/region-guide/${enc(provinceSlug)}/${enc(citySlug)}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      });

      const dongs = getDongsByCity(province, city);

      for (const dong of dongs) {
        const dongSlug = toSlug(dong);

        // 최종 동 페이지 (SEO 최적화 대상)
        routes.push({
          url: `${baseUrl}/region-guide/${enc(provinceSlug)}/${enc(citySlug)}/${enc(dongSlug)}`,
          lastModified: currentDate,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }
  }

  return routes;
}

