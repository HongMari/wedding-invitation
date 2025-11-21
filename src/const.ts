import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-03-15 12:30", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [15]

export const LOCATION = "이룸웨딩컨벤션 5층 웨딩홀"
export const LOCATION_ADDRESS = "서울 마포구 마포대로 78"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.949787848373, 37.5418967410602]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 20322273

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 13717401

export const BRIDE_FULLNAME = "홍마리"
export const BRIDE_FIRSTNAME = "마리"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "홍광준"
export const BRIDE_MOTHER = "박영인"
export const BRIDE_PARENTS_ACCOUNT = "국민은행 48552588110091 (신부 측 부모님)";
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-2814-3864",
    account: "우리은행 31931292102001",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-6247-3864",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-3006-3864",
  },
    {
    relation: "신부 측 부모님",
    name: `${BRIDE_FATHER} · ${BRIDE_MOTHER}`,
   account: BRIDE_PARENTS_ACCOUNT, 
  },
]

export const GROOM_FULLNAME = "김경준"
export const GROOM_FIRSTNAME = "경준"
export const GROOM_TITLE = "차남"
export const GROOM_FATHER = "김영실"
export const GROOM_MOTHER = "양명임"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-2030-7342",
    account: "우리은행 1002252931110",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "신한은행 000000000000",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "국민은행 000000000000",
  },
]
