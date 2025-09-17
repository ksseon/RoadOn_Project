import { useNavigate } from 'react-router-dom';

const DetailRight = ({ hotel, selectedRoom }) => {
    const navigate = useNavigate();

    const handleReservation = () => {
        const reservationData = {
            hotel: hotel,
            selectedRoom: selectedRoom,
            productType: 'hotel',
        };

        // navigate('/hotels/payment', {
        //     state: reservationData,
        // });
        navigate('/payment', {
            state: reservationData,
        });
    };

    return (
        <div className="detail-right">
            <section className="detail-side">
                <div className="box-head">
                    <div className="box-thum">
                        <img
                            src={`/images/hotels/detail/roomOptions/${selectedRoom.image[0]}`}
                            alt=""
                        />
                    </div>
                    <div className="box-select">
                        <strong>{selectedRoom.name}</strong>
                        <span className="party">
                            기준 {selectedRoom.party}인 / 최대 {selectedRoom.party}인
                        </span>
                    </div>
                </div>
                <p className="per-day">
                    {selectedRoom.price.toLocaleString()}원 / <span>박</span>
                </p>
                <div className="box-option">
                    <div className="res-prices">
                        <ul className="total">
                            <li>
                                <span>{/*props*/}숙박 기간(2박)</span>
                                <span>{/*props*/}2월 24일~2월 27일</span>
                            </li>
                            <li>
                                <span>인원</span>
                                <span>{/*props*/}성인 2명</span>
                            </li>
                            <li>
                                <span>객실 요금</span>
                                <span>{selectedRoom.price.toLocaleString()}원</span>
                            </li>
                        </ul>

                        <div className="total-wrap">
                            <strong>총액</strong>
                            <em>{selectedRoom.price.toLocaleString()}원</em>
                        </div>
                    </div>
                </div>
                <div className="btn-wrap">
                    <button className="button large o reserve" onClick={handleReservation}>
                        예약하기
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DetailRight;
