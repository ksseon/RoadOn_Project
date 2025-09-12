const DetailCon2 = () => {
    return (
        <div className="description-wrap">
            {/* 헤더 */}
            <header className="itinerary-header">
                <div className="txt-wrap">
                    <p>1일차</p>
                    <p>2025/09/25(목)</p>
                    <p>인천 → 치토세</p>
                </div>
                <p className="notice">
                    * 여행의 모든 일정은 유동젓이며 항공편 출도착 및 현지 교통사정에 의해 임의로
                    변경될 수 있습니다.
                </p>
            </header>

            {/* 항공편 */}
            <section className="flight-info">
                <div className="flight-card">
                    <div className="airline">
                        <div className="thumbs">
                            <img src="" alt="" />
                        </div>
                        <p>
                            에어부산 <span>BX1064</span>
                        </p>
                    </div>
                    <div className="schedule">
                        <time>2025.11.05(수) </time>
                        <strong>15:00</strong>
                        <span>인천 국제공항 - 터미널 2</span>
                    </div>
                    <div className="air-type">
                        <p>2시간 25분</p>
                        <div className="line-wrap">
                            <div className="circle"></div>
                            <div className="line"></div>
                            <div className="circle"></div>
                        </div>
                        <p>직항</p>
                    </div>
                    <div className="schedule">
                        <time>2025.11.09(일)</time>
                        <strong>12:00</strong>
                        <span>나리타 국제공항 - 터미널1</span>
                    </div>
                </div>
            </section>

            {/* 안내사항 */}
            <div className="section-wrap">
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

                {/* 공항 */}
                <section className="airport-section point">
                    <h2>청주 국제공항</h2>
                    <h2>청주 국제공항 출발</h2>
                </section>
                <section className="airport-section point">
                    <h2>삿포로 신치토세 국제공항</h2>
                    <h3>신치토세 국제공항 도착</h3>
                </section>

                {/* 일정 */}
                <section className="schedule-section point">
                    <h2>이호테우 해변 (말등대)</h2>
                    <em>청주 국제공항 출발</em>
                    <ul>
                        <li>드라마 오프닝 배경, 인증샷 필수</li>
                        <li>
                            흑돼지 BBQ , 드라마 주요 촬영지 100% 방문 + 제주 자연 & 로컬 먹거리 체험{' '}
                        </li>
                    </ul>
                    <div className="photo-wrap">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="photo-placeholder" />
                        ))}
                    </div>
                </section>

                {/* 호텔 */}
                <section className="hotel-section point point-end">
                    <h2>트윈 또는 더블룸 / 2인1실</h2>
                    <p>
                        트윈 또는 더블룸/2인1실
                        <br />● 룸타입 변경을 희망하시는 고객님께 드리는 안내 ●
                        <br />- 기존 룸타입을 변경하시는 고객님께서는 사전요청을 하셔야 하고 반드시
                        룸 체크 후 결정을 해 주시길 바랍니다.
                        <br />- 3인실(트리플룸) 불가한 호텔의 경우, 트윈(더블)1방+싱글1방 2방
                        사용해주셔야 합니다. (싱글차지 발생)
                    </p>
                    <ul className="tabs">
                        <li>
                            <span className="img-wrap">
                                <img src="/images/icon/building.png" alt="building.png" />
                            </span>
                            <strong>
                                예정호텔
                                <em>DOUBLETREE BY HILTON NAHA(4성급★★★★) 외 3개</em>
                            </strong>
                        </li>
                        <li>
                            <span className="img-wrap">
                                <img src="/images/icon/fork-spoon.png" alt="fork-spoon.png" />
                            </span>
                            <strong>
                                식사
                                <em>석식 &minus; 사시미정</em>
                            </strong>
                        </li>
                        <li>
                            <span className="img-wrap">
                                <img src="/images/icon/bus.png" alt="bus.png" />
                            </span>
                            <strong>
                                현지교통
                                <em>대형버스 행사인원에 따라 행사차량이 변경될 수 있습니다.</em>
                            </strong>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default DetailCon2;
