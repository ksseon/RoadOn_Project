import "./style.scss";
import useAirportStore from "../../../store/airportStore";

const AirportBox = ({ airportId }) => {
  const getAirportById = useAirportStore((state) => state.getAirportById);
  const filters = useAirportStore((state) => state.filters);
  const airport = getAirportById(airportId);

  if (!airport) return <div>항공권 정보를 찾을 수 없습니다.</div>;

  // ✅ 날짜 포맷 함수
  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "short",
        })
      : "";

  let departureDate = "";
  let arrivalDate = "";

  if (filters.mode === "roundtrip") {
    departureDate = formatDate(filters.dates?.[0]);
    arrivalDate = formatDate(filters.dates?.[1]);
  } else if (filters.mode === "oneway") {
    departureDate = formatDate(filters.dates?.[0]);
  }

  return (
    <section className="airport-box">
      {/* 항공사 */}
      <div className="airline">
        <div className="flight-logo">
          {airport.logo ? (
            <img src={airport.logo} alt={airport.airline} />
          ) : (
            <span className="placeholder" />
          )}
        </div>
        <div className="info">
          <p className="name">{airport.airline}</p>
          <p className="code">{airport.flightNo}</p>
        </div>
      </div>

      {/* 출발 */}
      <div className="departure">
        <p className="date">{departureDate}</p>
        <p className="time">{airport.departureTime}</p>
        <p className="airport">{airport.departureAirport}</p>
      </div>

      {/* 비행 정보 */}
      <div className="airport-info">
        <div className="timeline">
          <p className="duration">{airport.duration}</p>
          <img
            src="/images/airport/timeline.png"
            className="timeline-img"
            alt="timeline"
          />
          <p className="direct">{airport.direct ? "직항" : "경유"}</p>
        </div>
      </div>

      {/* 도착 */}
      <div className="arrival">
        <p className="date">{arrivalDate}</p>
        <p className="time">{airport.arrivalTime}</p>
        <p className="airport">{airport.arrivalAirport}</p>
      </div>

      {/* 가격 */}
      <div className="price">
        <p>{airport.price.toLocaleString()}원</p>
      </div>
    </section>
  );
};

export default AirportBox;
