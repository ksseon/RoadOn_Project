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
                        <p>직항</p>
                    </div>
                    <div className="schedule">
                        <time>2025.11.09(일)</time>
                        <strong>12:00</strong>
                        <span>치토세 → 인천</span>
                    </div>
                </div>
            </section>

            {/* 안내사항 */}
            <section className="notice-section">
                <h2>유의 | 안내사항</h2>
                <ul>
                    <li>여권/비자 안내</li>
                    <li>여권 : 유효기간 6개월 이상 …</li>
                </ul>
            </section>

            {/* 공항 */}
            <section className="airport-section">
                <h2>청주 국제공항 출발</h2>
                <h3>삿포로 신치토세 국제공항 도착</h3>
            </section>

            {/* 일정 */}
            <section className="schedule-section">
                <h2>이후 일정 (삿포로)</h2>
                <ul>
                    <li>드라마 오프닝 배경, 인증샷 필수</li>
                    <li>흑돼지 BBQ 체험</li>
                    <li>드라마 주요 촬영지 방문</li>
                    <li>제주 자연 & 로컬 먹거리 체험</li>
                </ul>
                <div className="photo-grid">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="photo-placeholder" />
                    ))}
                </div>
            </section>

            {/* 호텔 */}
            <section className="hotel-section">
                <h2>트윈 또는 더블룸 / 2인1실</h2>
                <p>
                    트윈 또는 더블룸 / 2인1실
                    <br />※ 호텔 타입 변경은 사전요청 필수
                </p>
                <ul>
                    <li>
                        <strong>숙소</strong>: DOUBLETREE BY HILTON NARA (★★★★☆)
                    </li>
                    <li>
                        <strong>식사</strong>: 석식 - 삿포로
                    </li>
                    <li>
                        <strong>쇼핑</strong>: 현지 공항/면세점
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default DetailCon2;
