import ReserveItem from './reserveItem';
import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
const Reserve = () => {
    return (
        <section id="reserve">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">예약내역</h2>
                <p className="more">
                    더보기
                    <em>
                        <IoIosArrowForward />
                    </em>
                </p>
            </div>

            <div className="reserve-table-wrap">
                <table className="reserve-table">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>

                    <thead>
                        <tr>
                            <th scope="col">예약일</th>
                            <th scope="col">예약코드</th>
                            <th scope="col">상품명</th>
                            <th scope="col">결제 금액</th>
                            <th scope="col">인원</th>
                            <th scope="col">출발일/귀국일</th>
                            <th scope="col">여행/예약상태</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ReserveItem />
                        <ReserveItem />
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Reserve;
