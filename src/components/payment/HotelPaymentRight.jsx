import './style.scss';

const HotelPaymentRight = ({ hotel, selectedRoom }) => {
    return (
        <div className="pay payment-right">
            <div className="res-title">
                <div className="ht-img">
                    {/*props 호텔 썸네일*/}
                    <img src={`/images/hotels/detail/hotelsList/${hotel.image[0]}`} alt="" />
                </div>
                <div className="text">
                    <span>
                        {hotel.type} {hotel.star}
                    </span>
                    <span>{hotel.name}</span>
                    <span>{selectedRoom.name}</span>
                </div>
            </div>
            <div className="res-prices">
                <ul className="price total">
                    <li>
                        <b>요금 합계</b>
                        <b>{/*props .. 합계 함수 사용*/}462,540원</b>
                    </li>
                    <li>
                        <span>{/*props*/}객실 1개 X 1박</span>
                        <span>{/*props*/}462,540원</span>
                    </li>
                </ul>
                <ul className="price discount">
                    <li>
                        <b>할인 혜택</b>
                        <b>{/*props*/}-11,800원</b>
                    </li>
                    <li>
                        <span>상품 및 쿠폰 할인</span>
                        <span>{/*props*/}-11,800원</span>
                    </li>
                    <li>
                        <span>포인트 사용</span>
                        <span>{/*props*/}-0원</span>
                    </li>
                </ul>
                <p>
                    <strong>총액</strong>
                    <strong>{/*props - 계산 함수*/}450,760원</strong>
                </p>
            </div>
            <p className="assent">
                <span></span>개인정보 처리 및 이용약관에 동의합니다.
            </p>
            <button>450,760{/*props*/}원 결제하기</button>
        </div>
    );
};

export default HotelPaymentRight;
