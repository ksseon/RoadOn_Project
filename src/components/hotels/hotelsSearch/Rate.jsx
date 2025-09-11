import useHotelStore from '../../../store/hotelStore';
import useHotelStor from '../../../../public/images/hotels/detail/star-0.svg';
import '../style
const Rate = () => {
    const getHotelById = useHotelStore((state) => state.getHotelById);
    const hotel = getHotelById(hotelId);

    if (!hotel) {
        return <div>호텔 정보를 찾을 수 없습니다.</div>;
    }

    // rate는 props로 받아온 data의

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
        return `star-${rating.toString().replace('.', '-')}.svg`;
    };

    const getRatingImage = (rate) => {
        if (rate >= 0 && rate < 1) return '../../../../public/images/hotels/detail/star-0.svg';
        if (rate >= 1 && rate < 1.5) return '../../../../public/images/hotels/detail/star-1.svg';
        if (rate >= 1.5 && rate < 2) return 'star-1-5.svg';
        if (rate >= 2 && rate < 2.5) return 'star-2.svg';
        if (rate >= 2 && rate < 2.5) return 'star-2.svg';
        if (rate >= 2 && rate < 2.5) return 'star-2.svg';
        if (rate >= 2 && rate < 2.5) return 'star-2.svg';
        if (rate >= 2 && rate < 2.5) return 'star-2.svg';
        return 'star-5.svg';
    };

    return <div></div>;
};

export default Rate;
