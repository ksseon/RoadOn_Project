import '../style.scss';
import hotelData from '../../../api/hotelsListData';
import useHotelStore from '../../../store/hotelStore';
import { useNavigate } from 'react-router-dom';
import WishButton from '../../ui/wishbutton/WishButton';

const HotelBox = ({ hotelId }) => {
    const getHotelById = useHotelStore((state) => state.getHotelById);
    const hotel = getHotelById(hotelId);
    const navigate = useNavigate();

    if (!hotel) {
        return <div>호텔 정보를 찾을 수 없습니다.</div>;
    }

    const handleHotelClick = () => {
        navigate(`/hotels/${hotel.slug}`);
    };

    const calculateStarRating = (rate) => {
        const roundedRate = Math.floor(rate * 2) / 2;

        if (roundedRate < 1) return 0;
        if (roundedRate < 1.5) return 1;
        if (roundedRate < 2) return 1.5;
        if (roundedRate < 2.5) return 2;
        if (roundedRate < 3) return 2.5;
        if (roundedRate < 3.5) return 3;
        if (roundedRate < 4) return 3.5;
        if (roundedRate < 4.5) return 4;
        if (roundedRate < 5) return 4.5;
        return 5;
    };

    const getStarImageName = (rating) => {
        if (rating === 0) return 'star-0-5.svg';
        return `star-${rating.toString().replace('.', '-')}.svg`;
    };

    const starRating = calculateStarRating(hotel.rate);
    const starImageName = getStarImageName(starRating);

    return (
        <div className="hotel-box" onClick={handleHotelClick} style={{ cursor: 'pointer' }}>
            <div className="hotel-image">
                <img src={`/images/hotels/detail/hotelsList/${hotel.image[0]}`} alt="" />
                {/* 기존 <span className="heart"></span> 를 대체하거나 병행 */}
                <div className="wish-overlay" onClick={(e) => e.stopPropagation()}>
                    <WishButton type="hotel" id={hotel.id} data={hotel} />
                </div>
            </div>
            <div className="hotel-info">
                <div className="info-top">
                    <div className="top-title">
                        <span>
                            {hotel.type} {hotel.star}
                        </span>
                        <h4>{hotel.name}</h4>
                    </div>
                    <div className="rate">
                        <img
                            // src={`/images/hotels/detail/${starImageName}`}
                            src={`/images/hotels/detail/icon/star_rate.svg`}
                            alt="별점"
                        />
                        <span>
                            {hotel.rate} ({hotel.reviewCount})
                        </span>
                    </div>
                </div>
                <div className="info-bottom">
                    <div className="bottom-location">
                        <img src="/images/hotels/search/map_pin.svg" alt="" />
                        <span>{hotel.location}</span>
                    </div>
                    <div className="bottom-price">
                        <span>1박, 성인 2명</span> {/* 검색창이랑 연결 */}
                        <strong>{hotel.price.toLocaleString()}원</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelBox;
