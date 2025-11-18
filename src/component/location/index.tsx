import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>이룸웨딩컨벤션</b> 검색
            <br />
            → 지하 추차장 이용(하객 2시간 무료)
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            - 5,6호선 <b>공덕역 8번 출구</b>
            <br />
            - 5호선 <b>마포역 3번 출구</b>
            <br />
            - 경의선, 공항철도 <b>공덕역 9번 출구</b>
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            [간선] 160, 260, 463, 600
            <br />
            [지선] 7013A, 7013B, 7016, 7611, 7613
            <br />
            [급행] 8601, 2500, 8600
            <br />
            [공항버스] 6015, 6021, 6702
            <br />
            → <b>마포역</b> 하차(도보 5분)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
