import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DongPageContent } from "./dong-page-content";
import {
  getAllRegionPaths,
  getProvinceBySlug,
  getCityBySlug,
  fromSlug,
  getDisplayName,
} from "@/lib/region-data";
import { getDongDescription } from "@/lib/dong-descriptions";
import { SITE_URL } from "@/lib/site-config";

interface DongPageProps {
  params: Promise<{
    region: string;
    city: string;
    dong: string;
  }>;
}

export async function generateMetadata({
  params,
}: DongPageProps): Promise<Metadata> {
  const { region: regionSlug, city: citySlug, dong: dongSlug } = await params;

  const province = getProvinceBySlug(regionSlug);
  const cityResult = getCityBySlug(regionSlug, citySlug);
  const dong = fromSlug(dongSlug);

  if (!province || !cityResult || !dong) {
    return {
      title: "페이지를 찾을 수 없습니다",
    };
  }

  const { city } = cityResult;
  const displayProvince = getDisplayName(province);
  const fullLocation = `${displayProvince} ${city} ${dong}`;

  const canonicalUrl = `${SITE_URL}/region-guide/${regionSlug}/${citySlug}/${dongSlug}`;

  return {
    title: `${fullLocation} 출장 마사지 - 30분 이내 방문`,
    description: `${fullLocation} 출장 마사지 서비스. 30분 이내 신속 방문, 전문 테라피스트의 아로마, 스웨디시 맞춤 케어를 경험해보세요.`,
    keywords: [
      `${fullLocation} 출장마사지`,
      `${city} ${dong} 마사지`,
      `${dong} 출장마사지`,
      "아로마 마사지",
      "스웨디시 마사지",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${fullLocation} 출장 마사지 - 30분 이내 방문`,
      description: `${fullLocation} 전문 테라피스트가 직접 방문하는 아로마, 스웨디시 맞춤 케어`,
      url: canonicalUrl,
      type: "website",
      locale: "ko_KR",
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllRegionPaths();
  return paths;
}

export default async function DongPage({ params }: DongPageProps) {
  const { region: regionSlug, city: citySlug, dong: dongSlug } = await params;

  const province = getProvinceBySlug(regionSlug);
  const cityResult = getCityBySlug(regionSlug, citySlug);
  const dong = fromSlug(dongSlug);

  if (!province || !cityResult || !dong) {
    notFound();
  }

  const { city } = cityResult;
  const displayProvince = getDisplayName(province);
  const fullLocation = `${displayProvince} ${city} ${dong}`;
  const dongDescription = getDongDescription(city, dong);

  return (
    <DongPageContent
      regionSlug={regionSlug}
      citySlug={citySlug}
      dongSlug={dongSlug}
      province={province}
      city={city}
      dong={dong}
      displayProvince={displayProvince}
      fullLocation={fullLocation}
      dongDescription={dongDescription}
    />
  );
}


