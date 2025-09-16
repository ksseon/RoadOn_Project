import { useNavigate, useParams } from 'react-router-dom';
import '../style.scss';
import useHotelStore from '../../../store/hotelStore';
import options from '../../../api/hotelsRoomTypeData';
import { useState } from 'react';
import DetailLeft from '../../../components/hotels/hotelsDetail/DetailLeft';
import DetailRight from '../../../components/hotels/hotelsDetail/DetailRight';
import DetailBottom from '../../../components/hotels/hotelsDetail/DetailBottom';

const HotelsDetail = () => {
    const { slug } = useParams();
    const hotels = useHotelStore((state) => state.hotels);
    const hotel = hotels.find((h) => h.slug === slug);
    const getHotelReviews = useHotelStore((state) => state.getHotelReviews);

    // hotel이 없을 때 early return
    if (!hotel) {
        return (
            <div className="hotel-detail-error">
                <h2>호텔을 찾을 수 없습니다.</h2>
                <p>요청하신 호텔 정보가 존재하지 않습니다.</p>
            </div>
        );
    }

    const allReviews = useHotelStore((state) => state.reviews);    
    const hotelReviews = getHotelReviews(hotel.id, hotel.reviewCount);


    const [showAllRooms, setShowAllRooms] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(options[0]);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const navigate = useNavigate();

    const getFilteredRooms = () => {
        if (!selectedFilter) {
            return showAllRooms ? options : options.slice(0, 4);
        }
        return options.filter((room) => room.include.includes(selectedFilter));
    };

    const handleFilterClick = (filterName) => {
        if (selectedFilter === filterName) {
            setSelectedFilter(null);
        } else {
            setSelectedFilter(filterName);
        }
        setShowAllRooms(false);
    };

    const handleRoomSelect = (roomData) => {
        setSelectedRoom(roomData);
    };

    const handleShowMore = () => {
        setShowAllRooms(true);
    };

    if (!hotel) {
        return (
            <div className="hotel-detail-error">
                <h2>호텔을 찾을 수 없습니다.</h2>
                <p>요청하신 호텔 정보가 존재하지 않습니다.</p>
            </div>
        );
    }

     const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return "0.00";
        
        const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
        const average = totalRating / reviews.length;
        
        return average.toFixed(2);
    };

    const averageRating = calculateAverageRating(hotelReviews);


    return (
        <main className="hotel-detail">
            <div className="inner">
                <section className="hotel-thum">
                    <div className="img-box big-img-1">
                        <img src={`/images/hotels/detail/hotelsList/${hotel.image[0]}`} alt="" />
                    </div>
                    <div className="img-box big-img-2">
                        <img src={`/images/hotels/detail/hotelsList/${hotel.image[1]}`} alt="" />
                        
                    </div>
                </section>
                <section className="detail-body-info">
                    <DetailLeft
                        hotel={hotel}
                        options={options}
                        displayedRooms={getFilteredRooms()}
                        selectedFilter={selectedFilter}
                        selectedRoom={selectedRoom}
                        showAllRooms={showAllRooms}
                        handleFilterClick={handleFilterClick}
                        handleRoomSelect={handleRoomSelect}
                        handleShowMore={handleShowMore}
                        averageRating={averageRating}
                    />
                    <DetailRight hotel={hotel} selectedRoom={selectedRoom} />
                </section>
                    <DetailBottom hotel={hotel} reviews={hotelReviews} />
            </div>
        </main>
    );
};

export default HotelsDetail;
