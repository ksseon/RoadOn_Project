import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Filter = () => {
  const events = [
    {
      text: "해외에서 데이터 절약! 와이파이 & ESIM 4%할인",
      img: "/images/airport/flighticon_1.png",
      bgColor: "#e1f2f8",
    },
    {
      text: "RoadOn 고객 여행자 보험 10% 즉시할인",
      img: "/images/airport/flighticon_2.png",
      bgColor: "#e3edff",
    },
    {
      text: "카드사 혜택 해외 항공권을 가볍게",
      img: "/images/airport/flighticon_3.png",
      bgColor: "#e2e8ff",
    },
  ];

  return (
    <div className="filter-wrap">
      {/* 여기 onClick 걸기 - 상태관리로 클릭으로 t/f으로 관리*/}

      {/* 이벤트 슬라이드 */}
      <div className="event-modal">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1} // 한 번에 하나씩만 보이게
          loop={true} // 무한 루프
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3초마다 자동 넘김
          navigation // 좌우 화살표 버튼
        >
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="event-card"
                style={{ backgroundColor: event.bgColor }}
              >
                <p>{event.text}</p>
                <img src={event.img} alt={`event-${idx + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="filter">
        <div className="filtering type">
          <div className="type-title">
            <p>경유</p>
            <div className="redo">
              <img
                src="../../../../public/images/hotels/search/uim_redo.svg"
                alt="초기화"
              />
              <span>초기화</span>
            </div>
          </div>
          <ul>
            <li>
              <span></span>직항
            </li>
            <li>
              <span></span>1회 경유
            </li>
          </ul>
        </div>
        <div className="filtering star">
          <p>항공사</p>
          <ul>
            <li>전체</li>
            <li>대한항공</li>
            <li>에어서울</li>
            <li>진에어</li>
            <li>제주항공</li>
            <li>티웨이항공</li>
          </ul>
        </div>
        <div className="filtering price">
          <p>가격</p>
          <div className="price-slider"></div>
        </div>
        <div className="filtering service">
          <p>좌석선택</p>
          <ul>
            <li>일반석</li>
            <li>프리미엄 일반석</li>
            <li>비즈니스석</li>
            <li>일등석</li>
          </ul>
        </div>
        <div className="filtering discount">
          <p>여행 및 수화물</p>
          <ul>
            <li>
              <span></span>
              <strong>취소 수수료 없음</strong>
            </li>
            <li>
              <span></span>
              <strong>좌석 선택 옵션 포함</strong>
            </li>
            <li>
              <span></span>
              <strong>기내 수화물 포함</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
