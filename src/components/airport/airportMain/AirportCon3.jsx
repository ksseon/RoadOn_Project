import { IoAirplane } from 'react-icons/io5';
import { CgArrowsExchange } from 'react-icons/cg';
// import airportData from '../../../api/airportData';

const AirportCon3 = () => {
    const flight = [
        {
            id: 1,
            type: '아시아나항공',
            from: '서울',
            to: '오사카(왕복)',
            date: '09.19 ~ 09.23',
            condition: '일반석 / 성인 1명',
            price: '362,000원 ~',
            img: '/images/airport/flight_img1.png',
            icons: {
                plane: <IoAirplane />,
            },
        },
        {
            id: 2,
            type: '대한항공',
            from: '서울',
            to: '오사카(왕복)',
            date: '09.21 ~ 09.25',
            condition: '일반석 / 성인 1명',
            price: '385,000원 ~',
            img: '/images/airport/flight_img1.png',
            icons: {
                plane: <IoAirplane />,
            },
        },
        {
            id: 3,
            type: '진에어',
            from: '서울',
            to: '오사카(왕복)',
            date: '09.22 ~ 09.26',
            condition: '일반석 / 성인 1명',
            price: '298,000원 ~',
            img: '/images/airport/flight_img1.png',
            icons: {
                plane: <IoAirplane />,
            },
        },
        {
            id: 4,
            type: '제주항공',
            from: '서울',
            to: '오사카(왕복)',
            date: '09.25 ~ 09.30',
            condition: '일반석 / 성인 1명',
            price: '520,000원 ~',
            img: '/images/airport/flight_img1.png',
            icons: {
                plane: <IoAirplane />,
            },
        },
    ];
    return (
        <section className="airport-main-con airport-main-con3">
            <div className="inner">
                <h3>국내외 인기 여행지를 한눈에</h3>
                <h4>24시간 무료 취소 가능한 항공권을 안심하고 예약하세요</h4>

                <div className="promo-list">
                    {flight.map((f) => (
                        <div className="promo-card-con" key={f.id}>
                            <img src={f.img} alt={f.title} />

                            <div className="info">
                                <small className="type">
                                    <IoAirplane className="icons" /> {f.type}
                                </small>
                                <h5 className="title">
                                    {f.from} <CgArrowsExchange className="exchange-icon" /> {f.to}
                                </h5>
                            </div>

                            <div className="details">
                                <p className="date-condi">
                                    <span className="date"> {f.date}</span>
                                    <span className="condition"> {f.condition}</span>
                                </p>

                                <div className="price-box">
                                    <strong className="price">{f.price}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportCon3;
