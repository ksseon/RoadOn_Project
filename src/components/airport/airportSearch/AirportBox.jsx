import "./style.scss";
import useAirportStore from "../../../store/airportStore";
import { useNavigate } from "react-router-dom";

const AirportBox = ({ airportId }) => {
  const getAirportById = useAirportStore((state) => state.getAirportById);
  const airport = getAirportById(airportId);
  const navigate = useNavigate();

  if (!airport) {
    return <div>항공권 정보를 찾을 수 없습니다.</div>;
  }

  const handleAirportClick = () => {
    navigate(`/airports/${airport.slug}`);
  };

  return (
    <div
      className="airport-box"
      onClick={handleAirportClick}
      style={{ cursor: "pointer" }}
    >
      {/* 항공사 */}
      <div className="airline">
        <div className="logo">
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
        <p className="date">{airport.departureDate}</p>
        <p className="time">{airport.departureTime}</p>
        <p className="airport">{airport.departureAirport}</p>
      </div>

      {/* 비행 정보 */}
      <div className="airport-info">
        <div className="timeline">
          <p className="duration">{airport.duration}</p>
          <img
            src="../../../../public/images/airport/timeline.png"
            className="timeline-img"
          />
          <p className="direct">{airport.direct ? "직항" : "경유"}</p>
        </div>
      </div>

      {/* 도착 */}
      <div className="arrival">
        <p className="date">{airport.arrivalDate}</p>
        <p className="time">{airport.arrivalTime}</p>
        <p className="airport">{airport.arrivalAirport}</p>
      </div>

      {/* 가격 */}
      <div className="price">
        <p>{airport.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default AirportBox;
