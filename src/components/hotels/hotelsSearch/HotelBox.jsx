import '../style.scss';

const HotelBox = () => {
    return (
        <div className="hotel-box">
            <div className="hotel-image">
                <span className="heart"></span>
            </div>
            <div className="hotel-info">
                <div className="info-top">
                    <div className="top-title">
                        <span>{/*예시*/}호텔 3성급</span>
                        <h4>그랜드 하얏트 제주</h4>
                    </div>
                    <div className="rate"></div>
                </div>
                <div className="info-bottom">
                    <div className="bottom-location">
                        <img src="../../../public/images/hotels/search/map_pin.svg" alt="" />
                        <span>서귀포시, 제주</span>
                    </div>
                    <div className="bottom-price">
                        <span>2박, 성인 2명</span>
                        <strong>326,480원</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBox;
