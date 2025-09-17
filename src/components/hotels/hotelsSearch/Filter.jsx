import MapModal from './MapModal';

const Filter = () => {
    return (
        <div className="filter-wrap">
            {/* 여기 onClick 걸기 - 상태관리로 클릭으로 t/f으로 관리*/}
            {/* <MapModal /> */}
            <div className="map-modal"></div>
            <div className="filter">
                <div className="filtering type">
                    <div className="type-title">
                        <p>숙소 유형</p>
                        <div className="redo">
                            <img
                                src="../../../../public/images/hotels/search/uim_redo.svg"
                                alt="초기화"
                            />
                            <span>초기화</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <span></span>전체
                        </li>
                        <li>
                            <span></span>호텔·리조트
                        </li>
                        <li>
                            <span></span>펜션
                        </li>
                        <li>
                            <span></span>게스트하우스
                        </li>
                        <li>
                            <span></span>빌라
                        </li>
                        <li>
                            <span></span>한옥
                        </li>
                        <li>
                            <span></span>캡슐호텔
                        </li>
                        <li>
                            <span></span>기타
                        </li>
                    </ul>
                </div>
                <div className="filtering star">
                    <p>성급</p>
                    <ul>
                        <li>전체</li>
                        <li>5성급</li>
                        <li>4성급</li>
                        <li>3성급</li>
                        <li>2성급</li>
                        <li>1성급</li>
                    </ul>
                </div>
                <div className="filtering price">
                    <p>가격</p>
                    <div className="price-slider"></div>
                </div>
                <div className="filtering service">
                    <p>시설/서비스</p>
                    <ul>
                        <li>무료 와이파이</li>
                        <li>조식제공</li>
                        <li>짐보관</li>
                        <li>수영장</li>
                        <li>레스토랑</li>
                        <li>반려동물</li>
                        <li>주차</li>
                        <li>오션뷰</li>
                        <li>바베큐</li>
                        <li>스파</li>
                        <li>금연실</li>
                    </ul>
                </div>
                <div className="filtering discount">
                    <p>할인</p>
                    <ul>
                        <li>
                            <span></span>
                            <p className="event">Event</p>
                            <p className="sale">특가 할인</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filter;
