const DetailCon2 = ({ tourData }) => {
    if (!tourData) {
        return (
            <div className="description-wrap">
                <p>여행 정보를 불러오는 중...</p>
            </div>
        );
    }

    const { itinerary = [], flight_info, date, duration } = tourData;

    // 첫 번째 날 데이터 (헤더용)
    const firstDay = itinerary[0];

    return (
        <div className="description-wrap">
            {/* 헤더 */}
            <header className="itinerary-header">
                <div className="txt-wrap">
                    <p>1일차</p>
                    <p>{date || '2025/09/25(목)'}</p>
                    <p>{firstDay?.tours?.[0]?.place || '출발지 → 도착지'}</p>
                </div>
                <p className="notice">
                    * 여행의 모든 일정은 유동적이며 항공편 출도착 및 현지 교통사정에 의해 임의로
                    변경될 수 있습니다.
                </p>
            </header>

            {/* 항공편 정보 */}
            {flight_info && (
                <section className="flight-info">
                    <div className="flight-card">
                        <div className="airline">
                            <div className="thumbs">
                                <img src="/images/icon/icon-plane.png" alt="airline" />
                            </div>
                            <p>
                                {flight_info.departure?.airline || 'KTX'}
                                <span>{flight_info.departure?.flight_number || ''}</span>
                            </p>
                        </div>
                        <div className="schedule">
                            <time>{date}</time>
                            <strong>{flight_info.departure?.time_start || '09:00'}</strong>
                            <span>{flight_info.departure?.airport_start || '출발지'}</span>
                        </div>
                        <div className="air-type">
                            <p>{flight_info.departure?.duration || '3시간'}</p>
                            <div className="line-wrap">
                                <div className="circle"></div>
                                <div className="line"></div>
                                <div className="circle"></div>
                            </div>
                            <p>직항</p>
                        </div>
                        <div className="schedule">
                            <time>{date}</time>
                            <strong>{flight_info.departure?.time_end || '12:00'}</strong>
                            <span>{flight_info.departure?.airport_end || '도착지'}</span>
                        </div>
                    </div>
                </section>
            )}

            {/* 일정별 상세 정보 */}
            <div className="section-wrap">
                {/* 안내사항 */}
                <section className="notice-section point">
                    <h2>유의 | 안내사항</h2>
                    <ul>
                        <li>여행 입국시 관련 안내</li>
                        <li>여권/비자</li>
                        <li>
                            <span>-여권 : 유효기간 6개월 이상 ...</span>
                        </li>
                    </ul>
                    <p>더보기</p>
                </section>

                {/* 각 일정별 세부 정보 */}
                {itinerary.map((day, dayIndex) => (
                    <div key={dayIndex}>
                        {/* 공항/교통 정보 */}
                        {day.tours?.slice(0, 2).map((tour, tourIndex) => (
                            <section key={tourIndex} className="airport-section point">
                                <h2>{tour.place}</h2>
                                <h3>{tour.desc}</h3>
                            </section>
                        ))}

                        {/* 주요 관광지 */}
                        {day.tours?.slice(2).map((tour, tourIndex) => (
                            <section key={`tour-${tourIndex}`} className="schedule-section point">
                                <h2>{tour.place}</h2>
                                <em>{tour.desc}</em>
                                <ul>
                                    <li>{tour.desc}</li>
                                </ul>
                                <div className="photo-wrap">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="photo-placeholder" />
                                    ))}
                                </div>
                            </section>
                        ))}

                        {/* 호텔 정보 */}
                        {day.hotel?.name && (
                            <section className="hotel-section point point-end">
                                <h2>{day.hotel.room_type}</h2>
                                <p>
                                    {day.hotel.room_type}
                                    <br />● 룸타입 변경을 희망하시는 고객님께 드리는 안내 ●
                                    <br />- 기존 룸타입을 변경하시는 고객님께서는 사전요청을 하셔야
                                    하고 반드시 룸 체크 후 결정을 해 주시길 바랍니다.
                                    <br />- 3인실(트리플룸) 불가한 호텔의 경우,
                                    트윈(더블)1방+싱글1방 2방 사용해주셔야 합니다. (싱글차지 발생)
                                </p>
                                <ul className="tabs">
                                    <li>
                                        <span className="img-wrap">
                                            <img
                                                src="/images/icon/building.png"
                                                alt="building.png"
                                            />
                                        </span>
                                        <strong>
                                            예정호텔
                                            <em>
                                                {day.hotel.name} {day.hotel.desc}
                                            </em>
                                        </strong>
                                    </li>
                                    <li>
                                        <span className="img-wrap">
                                            <img
                                                src="/images/icon/fork-spoon.png"
                                                alt="fork-spoon.png"
                                            />
                                        </span>
                                        <strong>
                                            식사
                                            <em>현지 특선 요리</em>
                                        </strong>
                                    </li>
                                    <li>
                                        <span className="img-wrap">
                                            <img src="/images/icon/bus.png" alt="bus.png" />
                                        </span>
                                        <strong>
                                            현지교통
                                            <em>
                                                대형버스 행사인원에 따라 행사차량이 변경될 수
                                                있습니다.
                                            </em>
                                        </strong>
                                    </li>
                                </ul>
                            </section>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailCon2;
