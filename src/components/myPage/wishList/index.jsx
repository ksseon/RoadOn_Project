import useHotelStore from '../../../store/hotelStore';
import HotelBox from '../../hotels/hotelsSearch/HotelBox';
import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
const WishList = () => {
    const hotels = useHotelStore((state) => state.hotels);
    return (
        <section id="wish-list">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">찜 목록</h2>
                <p className="more">
                    더보기
                    <em>
                        <IoIosArrowForward />
                    </em>
                </p>
            </div>
            <article className="wish-list-main-wrap">
                {hotels.slice(0, 2).map((hotel) => (
                    <HotelBox
                        key={hotel.id}
                        hotelId={hotel.id} // HotelBox에 전달
                    />
                ))}
            </article>
        </section>
    );
};

export default WishList;
