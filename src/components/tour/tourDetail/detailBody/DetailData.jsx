import DetailDataTab from './detailData/DetailDataTab';
import './style.scss';

const DetailData = () => {
    return (
        <section className="detail-data">
            <DetailDataTab />
            <div className="con con1 building">
                <h2>시설/서비스</h2>
                <ul className="service-wrap">
                    <li>
                        <img src="/images/icon/wifi.png" alt="wifi.png" />
                        무료 와이파이
                    </li>
                    <li>
                        <img src="/images/icon/toilet.png" alt="toilet.png" />
                        반신욕
                    </li>
                    <li>
                        <img src="/images/icon/park.png" alt="park.png" />
                        주차
                    </li>
                    <li>
                        <img src="/images/icon/suitcase-b.png" alt="suitcase-b.png" />
                        수화물 보관
                    </li>
                    <li>
                        <img src="/images/icon/wifi.png" alt="wifi.png" />
                        24시간 체크인
                    </li>
                </ul>
            </div>
            <div className="con advertice">
                <img src="/images/tour/detail/advertise.png" alt="advertise.png" />
                {/* 광고 배너 */}
            </div>
            <div className="con con2 description">
                <h2>여행 상세 정보</h2>
                <p></p>
            </div>
            <div className="con con3 location">
                <h2>숙소 위치</h2>
                <p></p>
            </div>
            <div className="con con4 reviews">
                <h2>방문자 리뷰 (12)</h2>
                <p></p>
            </div>
        </section>
    );
};

export default DetailData;
