/**
 * 사이트 전역 설정값
 * 도메인, 상호명, 연락처, 소재지 등 여러 페이지에서 공통으로 참조하는 값을 한 곳에서 관리합니다.
 */
export const SITE_URL = "https://solo-bs.site";

export const BUSINESS_NAME = "SOLO-BS 출장 부산";

export const PHONE_NUMBER = "010-7744-9904";
export const PHONE_TEL_HREF = `tel:${PHONE_NUMBER.replace(/-/g, "")}`;
export const PHONE_INTL = "+82-10-7744-9904";

export const BUSINESS_ADDRESS = {
  region: "부산광역시",
  city: "부산진구",
  dong: "전포동",
  full: "부산광역시 부산진구 전포동",
} as const;

/** 옛 Vercel 기본 도메인 목록 (301 리다이렉트 대상) */
export const LEGACY_DOMAINS = ["solobs.vercel.app"] as const;
