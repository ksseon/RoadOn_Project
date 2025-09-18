import { useState } from 'react';
import DetailPromoItem from '../../tour/tourDetail/detailBottom/DetailPromoItem';
import DetailReviewItem from './DetailReviewItem';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import KakaoMap from './KakaoMap';
import DetailReviews from './DetailReviews';

const DetailBottom = ({ hotel, reviews }) => {
    const [copied, setCopied] = useState(false);
    const promoHotelIds = [3, 6, 9, 15];

    const handleCopySuccess = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    };

    return (
        <section className="detail-bottom-info">
            {/* 숙소 위치 섹션 */}
            <section id="detail-location">
                <h2 className="title">숙소 위치</h2>
                <KakaoMap address={hotel.address} hotelName={hotel.name} height="400px" />
                <div className="address">
                    <strong>
                        {hotel.address}
                        <CopyToClipboard
                            text={hotel.address || hotel.location}
                            onCopy={handleCopySuccess}
                        >
                            <span
                                className="copy-icon"
                                style={{ cursor: 'pointer', marginLeft: '8px' }}
                            >
                                <HiOutlineClipboardDocument />
                            </span>
                        </CopyToClipboard>
                        {copied && <span className="copy-feedback">주소가 복사되었습니다.</span>}
                    </strong>
                    <ul className="vector">
                        {hotel.landmark.map((place, idx) => (
                            <li key={idx}>{place}</li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* 리뷰 섹션 */}
            <DetailReviews reviews={reviews} />
            {/* 숙소 추천 섹션*/}
            <section id="detail-Promo">
                <h2 className="title">다른 고객들이 함께 본 숙소</h2>
                <ul className="promo-list">
                    {promoHotelIds.map((hotelId) => (
                        <DetailPromoItem key={hotelId} hotelId={hotelId} />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default DetailBottom;
