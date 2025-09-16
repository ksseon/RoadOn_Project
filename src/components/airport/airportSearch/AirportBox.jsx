import "./style.scss";
import useAirportStore from "../../../store/airportStore";

const AirportBox = ({ airportId }) => {
  const getAirportById = useAirportStore((state) => state.getAirportById);
  const filters = useAirportStore((state) => state.filters);
  const airport = getAirportById(airportId);

  if (!airport) return <div>항공권 정보를 찾을 수 없습니다.</div>;

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "short",
        })
      : "";

  // 날짜 정의
  let segments = [];
  if (filters.mode === "roundtrip") {
    segments = [
      {
        departureDate: formatDate(filters.dates?.[0]),
        arrivalDate: formatDate(filters.dates?.[0]),
        departureAirport: airport.departureAirport,
        arrivalAirport: airport.arrivalAirport,
      },
      {
        departureDate: formatDate(filters.dates?.[1]),
        arrivalDate: formatDate(filters.dates?.[1]),
        departureAirport: airport.arrivalAirport,
        arrivalAirport: airport.departureAirport,
      },
    ];
  } else if (filters.mode === "oneway") {
    segments = [
      {
        departureDate: formatDate(filters.dates?.[0]),
        arrivalDate: formatDate(filters.dates?.[0]),
        departureAirport: airport.departureAirport,
        arrivalAirport: airport.arrivalAirport,
      },
    ];
  } else if (filters.mode === "multicity") {
    segments =
      filters.segments?.map((seg) => ({
        departureDate: formatDate(seg.date),
        arrivalDate: formatDate(seg.date),
        departureAirport: seg.from,
        arrivalAirport: seg.to,
      })) || [];
  }

  return (
    <section className={`airport-box ${filters.mode}`}>
      {segments.map((seg, i) => (
        <div className="flight-row" key={i}>
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
            <p className="date">{seg.departureDate}</p>
            <p className="time">{airport.departureTime}</p>
            <p className="airport">{seg.departureAirport}</p>
          </div>

          {/* 비행 정보 */}
          <div className="airport-info">
            <p className="duration">{airport.duration}</p>
            <img
              src="/images/airport/timeline.png"
              className="timeline-img"
              alt="timeline"
            />
            <p className="direct">{airport.direct ? "직항" : "경유"}</p>
          </div>

          {/* 도착 */}
          <div className="arrival">
            <p className="date">{seg.arrivalDate}</p>
            <p className="time">{airport.arrivalTime}</p>
            <p className="airport">{seg.arrivalAirport}</p>
          </div>

          {/* 가격 → 마지막 줄에만 표시 */}
          {i === segments.length - 1 && (
            <div className="price">
              <p>{airport.price.toLocaleString()}원</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default AirportBox;
