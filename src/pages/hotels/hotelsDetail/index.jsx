import { useParams } from 'react-router-dom';
import '../style.scss';
import useHotelStore from '../../../store/hotelStore';

const HotelsDetail = () => {
    const { slug } = useParams(); // URL에서 slug 가져오기
    const hotels = useHotelStore((state) => state.hotels);

    // slug로 해당 호텔 찾기
    const hotel = hotels.find((h) => h.slug === slug);

    // 호텔을 찾지 못했을 때
    if (!hotel) {
        return (
            <div className="hotel-detail-error">
                <h2>호텔을 찾을 수 없습니다.</h2>
                <p>요청하신 호텔 정보가 존재하지 않습니다.</p>
            </div>
        );
    }

    return (
        <div className="hotel-detail">
            <div className="hotel-detail-header">
                <h1>{hotel.name}</h1>
                <p>{hotel.engName}</p>
                <div className="hotel-rating">
                    <span>⭐ {hotel.rate}</span>
                    <span>({hotel.reviewCount}개 리뷰)</span>
                </div>
            </div>

            <div className="hotel-detail-content">
                <div className="hotel-images">
                    {/* 호텔 이미지들 */}
                    <img src={`/images/hotels/${hotel.image[0]}`} alt={hotel.name} />
                </div>

                <div className="hotel-info-detail">
                    <div className="basic-info">
                        <h3>기본 정보</h3>
                        <p>
                            <strong>위치:</strong> {hotel.location}
                        </p>
                        <p>
                            <strong>주소:</strong> {hotel.address}
                        </p>
                        <p>
                            <strong>전화:</strong> {hotel.phone}
                        </p>
                        <p>
                            <strong>이메일:</strong> {hotel.mail}
                        </p>
                        <p>
                            <strong>숙소 유형:</strong> {hotel.type}
                        </p>
                        <p>
                            <strong>성급:</strong> {hotel.star}성급
                        </p>
                    </div>

                    <div className="description">
                        <h3>숙소 소개</h3>
                        <p>{hotel.about}</p>
                    </div>

                    <div className="landmarks">
                        <h3>주변 관광지</h3>
                        <ul>
                            {hotel.landmark.map((landmark, index) => (
                                <li key={index}>{landmark}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="services">
                        <h3>편의시설</h3>
                        <ul>
                            {hotel.service.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="policies">
                        <h3>이용안내</h3>
                        <p>
                            <strong>정책:</strong> {hotel.policies}
                        </p>
                        <p>
                            <strong>취소정책:</strong> {hotel.cancellation}
                        </p>
                    </div>

                    <div className="price-info">
                        <h3>가격 정보</h3>
                        <p className="price">
                            <span>2박, 성인 2명</span>
                            <strong>{hotel.price.toLocaleString()}원</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelsDetail;
