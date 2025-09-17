// src/components/hotels/hotelsSearch/AirportBox.jsx
import airportListData from '../../../api/airportListData';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const AirportBox = ({ flightId, itemData }) => {
    const navigate = useNavigate();
    const flight = (flightId != null && airportListData.find((f) => f.id === flightId)) || itemData;

    if (!flight) return null;

    const handleClick = () => {
        // 슬러그가 있으면 상세 페이지로 이동, 없으면 아무 동작 안함
        if (flight.slug) navigate(`/flights/${flight.slug}`);
    };

    return (
        <div
            className="hotel-box airport-box"
            onClick={handleClick}
            style={{ cursor: flight.slug ? 'pointer' : 'default' }}
        >
            <div className="hotel-image">
                {/* 항공사는 로고를 사용 */}
                <img
                    src={flight.logo || '/images/airport/default-airline.png'}
                    alt={flight.airline}
                />
                <span className="heart"></span>
            </div>

            <div className="hotel-info">
                <div className="info-top">
                    <div className="top-title">
                        <span>{flight.airline}</span>
                        <h4>
                            {flight.flightNo} · {flight.departureAirport} → {flight.arrivalAirport}
                        </h4>
                    </div>
                    <div className="rate">
                        <span>
                            {flight.departureTime} → {flight.arrivalTime}
                        </span>
                    </div>
                </div>

                <div className="info-bottom">
                    <div className="bottom-location">
                        <img src="/images/hotels/search/map_pin.svg" alt="" />
                        <span>
                            {flight.duration} {flight.direct ? '(직항)' : ''}
                        </span>
                    </div>
                    <div className="bottom-price">
                        <span>{flight.baggage ? '수화물 포함' : '수화물 미포함'}</span>
                        <strong>{(flight.price ?? 0).toLocaleString()}원</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirportBox;
