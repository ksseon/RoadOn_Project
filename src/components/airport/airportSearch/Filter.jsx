import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useMemo } from "react";
import useAirportStore from "../../../store/airportStore";

const PriceSlider = () => {
  const airports = useAirportStore((s) => s.airports);
  const { priceMin, priceMax } = useAirportStore((s) => s.filters);
  const setPriceRange = useAirportStore((s) => s.setPriceRange);

  // 절대 최소/최대 가격
  const { absMin, absMax } = useMemo(() => {
    const min = Math.min(...airports.map((a) => a.price));
    const max = Math.max(...airports.map((a) => a.price));
    return { absMin: min, absMax: max };
  }, [airports]);

  const step = 1000;
  const toPercent = (v) => ((v - absMin) / (absMax - absMin)) * 100;

  const handleMin = (e) => {
    const v = Math.min(Number(e.target.value), priceMax - step);
    setPriceRange(v, priceMax);
  };
  const handleMax = (e) => {
    const v = Math.max(Number(e.target.value), priceMin + step);
    setPriceRange(priceMin, v);
  };

  const mid = (priceMin + priceMax) / 2;
  const fillStyle = {
    left: `${toPercent(priceMin)}%`,
    right: `${100 - toPercent(priceMax)}%`,
  };
  const tooltipStyle = { left: `${toPercent(mid)}%` };

  const fmt = (n) => n.toLocaleString();

  return (
    <div className="price-slider">
      <div className="ranges">
        <div className="base-track" />
        <div className="track-fill" style={fillStyle} />
        <input
          type="range"
          min={absMin}
          max={absMax}
          step={step}
          value={priceMin}
          onChange={handleMin}
        />
        <input
          type="range"
          min={absMin}
          max={absMax}
          step={step}
          value={priceMax}
          onChange={handleMax}
        />
        <div className="price-tooltip" style={tooltipStyle}>
          {fmt(priceMin)}원 ~ {fmt(priceMax)}원
        </div>
      </div>

      <p className="desc">
        출발일자 기준 최저 금액 <strong>{fmt(priceMin)}원</strong> 부터
      </p>
      <p className="desc">
        출발일자 기준 최고 금액 <strong>{fmt(priceMax)}원</strong> 까지
      </p>
    </div>
  );
};

const Filter = () => {
  const { setFilter, resetFilter } = useAirportStore((s) => ({
    setFilter: s.setFilter,
    resetFilter: s.resetFilter,
  }));

  const events = [
    {
      id: 1,
      desc: "해외 데이터 절약 와이파이 & ESIM 4% 할인",
      img: "/images/airport/event_img1.png",
    },
    {
      id: 2,
      desc: "로드온 고객 여행자 보험 10% 즉시할인",
      img: "/images/airport/event_img2.png",
    },
    {
      id: 3,
      desc: "카드사 혜 해외 항공권을 가볍게",
      img: "/images/airport/event_img3.png",
    },
  ];

  const airlines = [
    "전체",
    "대한항공",
    "에어서울",
    "진에어",
    "제주항공",
    "티웨이항공",
  ];

  return (
    <div className="filter-wrap">
      {/* 이벤트 슬라이드 */}
      <div className="event-modal">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          loop
        >
          {events.map((ev) => (
            <SwiperSlide key={ev.id}>
              <div className="event-card">
                <div className="text-box">
                  <img src={ev.img} alt="" />
                  <p className="desc">{ev.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 경유 */}
      <div className="filter">
        <div className="filtering type">
          <div className="type-title">
            <p>경유</p>
            <div className="redo" onClick={resetFilter}>
              <img src="/images/hotels/search/uim_redo.svg" alt="초기화" />
              <span>초기화</span>
            </div>
          </div>
          <ul>
            <li>
              <input
                type="checkbox"
                id="direct"
                onChange={(e) =>
                  setFilter({ direct: e.target.checked ? true : null })
                }
              />
              <label htmlFor="direct">
                <strong>직항</strong>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="transfer"
                onChange={(e) =>
                  setFilter({ direct: e.target.checked ? false : null })
                }
              />
              <label htmlFor="transfer">
                <strong>경유</strong>
              </label>
            </li>
          </ul>
        </div>

        {/* 항공사 */}
        <div className="filtering star">
          <p>항공사</p>
          <ul>
            {airlines.map((airline) => (
              <li key={airline}>
                <button
                  onClick={() =>
                    setFilter({ airline: airline === "전체" ? null : airline })
                  }
                >
                  {airline}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 가격 */}
        <div className="filtering price">
          <p>가격</p>
          <PriceSlider />
        </div>

        {/* 무료 수화물 */}
        <div className="filtering discount">
          <p>무료 수화물</p>
          <ul>
            <li>
              <input
                type="checkbox"
                id="baggage"
                onChange={(e) =>
                  setFilter({ baggage: e.target.checked ? "포함" : null })
                }
              />
              <label htmlFor="baggage">
                <strong>포함</strong>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
