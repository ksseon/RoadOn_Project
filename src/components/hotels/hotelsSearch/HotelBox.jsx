import '../style.scss';
import hotelData from '../../../api/hotelsListData';
import useHotelStore from '../../../store/hotelStore';
import { useNavigate } from 'react-router-dom';

const HotelBox = ({ hotelId }) => {
    const getHotelById = useHotelStore((state) => state.getHotelById);
    const getHotelReviews = useHotelStore((state) => state.getHotelReviews);
    const hotel = getHotelById(hotelId);
    const navigate = useNavigate();

    if (!hotel) {
        return <div>호텔 정보를 찾을 수 없습니다.</div>;
    }

    const calculateAverageRating = (hotelId, reviewCount) => {
        const reviews = getHotelReviews(hotelId, reviewCount);
        
        if (!reviews || reviews.length === 0) return "0.00";
        
        const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
        const average = totalRating / reviews.length;
        
        return average.toFixed(1);
    };

    const averageRating = calculateAverageRating(hotel.id, hotel.reviewCount);
    
    const handleHotelClick = () => {
        navigate(`/hotels/${hotel.slug}`);
    };

    return (
        <div className="hotel-box" onClick={handleHotelClick} style={{ cursor: 'pointer' }}>
            <div className="hotel-image">
                <img src={`/images/hotels/detail/hotelsList/${hotel.image[0]}`} alt="" /><span className="heart"></span>
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
                            alt='별점'
                        />
                        <span>
                            {averageRating} ({hotel.reviewCount})
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
