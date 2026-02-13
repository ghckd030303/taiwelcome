import regionData from "@/../../public/bubjung_address_data.json";

export type RegionData = {
  [province: string]: {
    [city: string]: string[];
  };
};

// JSON 데이터를 타입 안전하게 사용
const typedRegionData = regionData as RegionData;

// 지역 이름을 URL 친화적인 slug로 변환
export function toSlug(name: string): string {
  const replacements: { [key: string]: string } = {
    경상남도: "gyeongnam",
    부산광역시: "busan",
    김해시: "gimhae",
    양산시: "yangsan",
    강서구: "gangseo",
    금정구: "geumjeong",
    기장군: "gijang",
    남구: "nam",
    동구: "dong",
    동래구: "dongnae",
    부산진구: "busanjin",
    북구: "buk",
    사상구: "sasang",
    사하구: "saha",
    서구: "seo",
    수영구: "suyeong",
    연제구: "yeonje",
    영도구: "yeongdo",
    중구: "jung",
    해운대구: "haeundae",
  };

  // 주요 지역은 영문 slug 사용, 동 이름은 한글 그대로 (URL 인코딩됨)
  return replacements[name] || name;
}

// slug를 한글 이름으로 변환
export function fromSlug(slug: string): string | undefined {
  const reverseMap: { [key: string]: string } = {
    gyeongnam: "경상남도",
    busan: "부산광역시",
    gimhae: "김해시",
    yangsan: "양산시",
    gangseo: "강서구",
    geumjeong: "금정구",
    gijang: "기장군",
    nam: "남구",
    dong: "동구",
    dongnae: "동래구",
    busanjin: "부산진구",
    buk: "북구",
    sasang: "사상구",
    saha: "사하구",
    seo: "서구",
    suyeong: "수영구",
    yeonje: "연제구",
    yeongdo: "영도구",
    jung: "중구",
    haeundae: "해운대구",
  };

  // 매핑에 있으면 반환, 없으면 URL 디코딩하여 반환 (동 이름용)
  if (reverseMap[slug]) {
    return reverseMap[slug];
  }

  // 동 이름은 한글로 인코딩되어 있으므로 디코딩
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

// 모든 지역 목록 반환
export function getAllProvinces(): string[] {
  return Object.keys(typedRegionData);
}

// 특정 지역의 모든 시/구 반환
export function getCitiesByProvince(province: string): string[] {
  const provinceData = typedRegionData[province];
  return provinceData ? Object.keys(provinceData) : [];
}

// 특정 시/구의 모든 동 반환
export function getDongsByCity(province: string, city: string): string[] {
  const provinceData = typedRegionData[province];
  if (!provinceData) return [];
  return provinceData[city] || [];
}

// slug로 지역 데이터 조회
export function getProvinceBySlug(slug: string): string | undefined {
  const provinceName = fromSlug(slug);
  if (!provinceName) return undefined;
  return getAllProvinces().includes(provinceName) ? provinceName : undefined;
}

export function getCityBySlug(
  provinceSlug: string,
  citySlug: string
): { province: string; city: string } | undefined {
  const province = getProvinceBySlug(provinceSlug);
  if (!province) return undefined;

  const cityName = fromSlug(citySlug);
  if (!cityName) return undefined;

  const cities = getCitiesByProvince(province);
  return cities.includes(cityName) ? { province, city: cityName } : undefined;
}

// 간단한 표시용 이름 (도/광역시 제거)
export function getDisplayName(name: string): string {
  return name.replace("경상남도", "경남").replace("부산광역시", "부산");
}

// 모든 가능한 경로 조합 생성 (generateStaticParams용)
export function getAllRegionPaths(): Array<{
  region: string;
  city: string;
  dong: string;
}> {
  const paths: Array<{ region: string; city: string; dong: string }> = [];

  for (const province of getAllProvinces()) {
    const provinceSlug = toSlug(province);
    const cities = getCitiesByProvince(province);

    for (const city of cities) {
      const citySlug = toSlug(city);
      const dongs = getDongsByCity(province, city);

      for (const dong of dongs) {
        const dongSlug = toSlug(dong);
        paths.push({
          region: provinceSlug,
          city: citySlug,
          dong: dongSlug,
        });
      }
    }
  }

  return paths;
}

// 동네 이름 정규화 (동/면/읍 붙이기)
export function normalizeDongName(dong: string): string {
  // 이미 동/면/읍으로 끝나면 그대로 반환
  if (dong.match(/[동면읍]$/)) {
    return dong;
  }
  // 아니면 '동'을 붙임
  return `${dong}동`;
}
