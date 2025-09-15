import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import useAirportStore from "../../../store/airportStore";

const Filter = () => {
  const setFilter = useAirportStore((state) => state.setFilter);
  const resetFilter = useAirportStore((state) => state.resetFilter);

  const events = [
    {
      id: 1,
      desc: "해외 데이터 절약 와이파이 & ESIM 4% 할인",
      img: "/images/airport/event_img1.png",
      color: "#E3EDFF",
    },
    {
      id: 2,
      desc: "로드온 고객 여행자 보험 10% 즉시할인",
      img: "/images/airport/event_img2.png",
      color: "#E1F2F8",
    },
    {
      id: 3,
      desc: "카드사 혜 해외 항공권을 가볍게",
      img: "/images/airport/event_img3.png",
      color: "#E2E8FF",
    },
  ];

  return (
    <div className="filter-wrap">
      {/* 이벤트 슬라이드 */}
      <div className="event-modal">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} //
          navigation
          autoplay={{ delay: 3000 }}
          loop
        >
          {events.map((ev) => (
            <SwiperSlide key={ev.id}>
              <div className="event-card">
                <div className="text-box">
                  <img src={ev.img} alt={ev.title} />
                  <p className="desc">{ev.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="filter">
        {/* 경유 */}
        <div className="filtering type">
          <div className="type-title">
            <p>경유</p>
            <div className="redo" onClick={resetFilter}>
              <img
                src="../../../../public/images/hotels/search/uim_redo.svg"
                alt="초기화"
              />
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
            {[
              "전체",
              "대한항공",
              "에어서울",
              "진에어",
              "제주항공",
              "티웨이항공",
            ].map((airline) => (
              <li key={airline}>
                <button
                  onClick={() =>
                    setFilter({
                      airline: airline === "전체" ? null : airline,
                    })
                  }
                >
                  {airline}
                </button>
              </li>
            ))}
          </ul>
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
