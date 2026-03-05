import type { AreaType } from "./seo-templates";

/**
 * city+dong 조합을 받아 해당하는 콘텐츠 템플릿 유형을 반환합니다.
 * 명시적으로 등록되지 않은 동은 residential(기본형)을 사용합니다.
 */

const beachDongs: Record<string, string[]> = {
  해운대구: ["해운대", "중동", "좌동"],
  수영구: ["광안리", "광안", "남천", "민락"],
  서구: ["송도", "암남동"],
  사하구: ["다대", "다대포"],
  기장군: ["일광"],
};

const downtownDongs: Record<string, string[]> = {
  부산진구: ["서면", "부전", "범전", "범천"],
  중구: ["광복동", "남포", "대청동", "동광동", "보수동", "부평", "신창", "영주", "중앙", "창선"],
  동구: ["범일", "좌천", "초량", "부산역", "수정"],
};

const hotspringDongs: Record<string, string[]> = {
  동래구: ["낙민", "명륜", "명장", "복천", "사직", "수안", "안락", "온천천", "온천동", "칠산"],
};

const harborDongs: Record<string, string[]> = {
  영도구: ["남항동", "대교동", "대평동", "동삼동", "봉래동", "신선동", "영선동", "청학동", "태종대"],
  남구: ["감만", "우암", "용당", "문현"],
  강서구: ["눌차", "천성", "대항"],
};

const campusDongs: Record<string, string[]> = {
  금정구: ["구서", "장전", "부곡"],
  남구: ["대연"],
  사상구: ["주례"],
  김해: ["어방동"],
};

const newtownDongs: Record<string, string[]> = {
  강서구: ["명지"],
  기장군: ["정관"],
  김해: ["율하동", "장유", "불암동", "삼계동"],
  양산시: ["물금읍", "평산동", "유산동", "주남동"],
};

const industrialDongs: Record<string, string[]> = {
  사하구: ["신평", "장림", "구평"],
  사상구: ["감전", "학장", "어곡동"],
  강서구: ["녹산", "미음", "신호", "화전", "지사"],
};

const riversideDongs: Record<string, string[]> = {
  북구: ["화명", "금곡"],
  사상구: ["삼락", "엄궁"],
  강서구: ["대저", "강동동"],
};

const eastcoastDongs: Record<string, string[]> = {
  기장군: ["기장", "장안", "철마"],
};

const ruralGyeongnamDongs: Record<string, string[]> = {
  김해: ["대동면", "생림면", "한림면", "진례면", "주촌면", "상동면", "진영"],
  양산시: ["상북면", "하북면", "원동면", "동면"],
};

const gyeongnamcityDongs: Record<string, string[]> = {
  김해: [
    "강동", "관동동", "구산동", "내덕동", "내동", "대성동", "대청동", "동상동",
    "명법동", "무계동", "봉황동", "부곡동", "부원동", "삼문동", "삼방동", "삼정동",
    "서상동", "수가동", "신문동", "안동", "외동", "유하동", "응달동", "이동",
    "전하동", "지내동", "풍유동", "화목동", "흥동",
  ],
  양산시: [
    "교동", "남부동", "다방동", "덕계동", "매곡동", "명곡동", "명동",
    "북부동", "북정동", "산막동", "삼호동", "소주동", "신기동",
    "용당동", "주진동", "중부동", "호계동",
  ],
};

function isInMap(map: Record<string, string[]>, city: string, dong: string): boolean {
  return map[city]?.includes(dong) ?? false;
}

export function getAreaType(city: string, dong: string): AreaType {
  if (isInMap(beachDongs, city, dong)) return "beach";
  if (isInMap(downtownDongs, city, dong)) return "downtown";
  if (isInMap(hotspringDongs, city, dong)) return "hotspring";
  if (isInMap(harborDongs, city, dong)) return "harbor";
  if (isInMap(campusDongs, city, dong)) return "campus";
  if (isInMap(newtownDongs, city, dong)) return "newtown";
  if (isInMap(industrialDongs, city, dong)) return "industrial";
  if (isInMap(riversideDongs, city, dong)) return "riverside";
  if (isInMap(eastcoastDongs, city, dong)) return "eastcoast";
  if (isInMap(ruralGyeongnamDongs, city, dong)) return "ruralgyeongnam";
  if (isInMap(gyeongnamcityDongs, city, dong)) return "gyeongnamcity";
  return "residential";
}
