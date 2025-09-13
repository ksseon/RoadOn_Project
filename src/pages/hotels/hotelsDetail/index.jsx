import { useParams } from 'react-router-dom';
import '../style.scss';
import useHotelStore from '../../../store/hotelStore';
import DetailThum from '../../../components/tour/tourDetail/detailBody/DetailThum';
import DetailBodyInfo from '../../../components/tour/tourDetail/detailBody/DetailBodyInfo';
import { FiMinus, FiPlus } from 'react-icons/fi';

import {
    Wifi,
    Breakfast,
    Luggage,
    Pool,
    Restaurant,
    Pet,
    Parking,
    CheckIn,
    Spa,
    Bbq,
} from '../../../components/hotels/hotelsDetail/hotelsService';
import RoomOption from '../../../components/hotels/hotelsDetail/RoomOption';

const HotelsDetail = () => {
    const { slug } = useParams(); // URL에서 slug 가져오기
    const hotels = useHotelStore((state) => state.hotels);

    const hotel = hotels.find((h) => h.slug === slug);

    if (!hotel) {
        return (
            <div className="hotel-detail-error">
                <h2>호텔을 찾을 수 없습니다.</h2>
                <p>요청하신 호텔 정보가 존재하지 않습니다.</p>
            </div>
        );
    }

    const serviceComponentMap = {
        '무료 와이파이': Wifi,
        '조식 제공': Breakfast,
        '수화물 보관': Luggage,
        수영장: Pool,
        레스토랑: Restaurant,
        '반려동물 동반': Pet,
        주차: Parking,
        '24시간 체크인': CheckIn,
        스파: Spa,
        '개별 바베큐': Bbq,
    };

    return (
        <div className="hotel-detail">
            <div className="inner">
                <section className="hotel-thum">
                    <div
                        className="img-box big-img-1"
                        style={{
                            backgroundImage: `url(/images/hotels/detail/hotelsList/${hotel.image[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <div
                        className="img-box big-img-2"
                        style={{
                            backgroundImage: `url(/images/hotels/detail/hotelsList/${hotel.image[1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="img-wrap"></div>
                    </div>
                </section>
                <section className="detail-body-info">
                    <div className="detail-left">
                        <section className="detail-title">
                            <article className="detail-title-head">
                                <em>
                                    {hotel.type} {hotel.star}
                                </em>
                                <h3>{hotel.name}</h3>
                                <b>{hotel.engName}</b>
                                <p className="rate">
                                    <img src={`/images/hotels/detail/icon/star_rate.svg`} alt={`별점`} />
                                    {hotel.rate} ({hotel.reviewCount})
                                </p>
                            </article>
                            <section className="detail-reviews">
                                <ul className="list">
                                    {/* <DetailReviewsItem />
                                <DetailReviewsItem />
                                <DetailReviewsItem /> */}
                                </ul>
                            </section>
                        </section>
                        <section className="detail-data">
                            <section className="detail-data-tab">
                                <div className="detail-data-tab-btns-wrap">
                                    <button className="building on">시설/서비스</button>
                                    <button className="room-option">객실 선택</button>
                                    <button className="hotel-info">숙소 정보</button>
                                    <button className="location">위치</button>
                                    <button className="reviews">리뷰</button>
                                </div>
                            </section>
                            <div className="con con1 building">
                                <h2>시설/서비스</h2>
                                <ul className="services-list">
                                    {hotel.service.map((serviceName, index) => {
                                        const ServiceComponent = serviceComponentMap[serviceName];
                                        return ServiceComponent ? (
                                            <ServiceComponent key={index} />
                                        ) : (
                                            <li key={index} className="service-icon">
                                                <span>{serviceName}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="con advertise">
                                <img
                                    src="/images/hotels/detail/login_first.png"
                                    alt="login_first.png"
                                />
                            </div>
                            <div className="con con2 room-option-wrap">
                                <h2>객실 선택</h2>
                                <ul className="room-filter">
                                    <li>조식 포함</li>
                                    <li>무료 취소</li>
                                </ul>
                                <div className="room-box-list">
                                <RoomOption/>
                                <RoomOption/>
                                <RoomOption/>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="detail-right">
                        <section className="detail-side">
                            <div className="box-head">
                                <div className="box-thum">{/* <img src="" alt="" /> */}</div>
                                <strong>{hotel.name}</strong>
                            </div>
                            <div className="box-option">
                                
                                
                                <div className="total-wrap">
                                    <strong>총액</strong>
                                    <em>{hotel.price.toLocaleString()}원</em> {/* 곱하기 박 수*/}
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <button className="button large o reserve">예약하기</button>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HotelsDetail;
