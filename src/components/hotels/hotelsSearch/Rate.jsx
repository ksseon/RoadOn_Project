// Rate.jsx - 재사용 가능하도록 수정
import '../style.scss';

const Rate = ({ rate }) => {
    const getRatingImage = (rate) => {
        if (rate >= 0 && rate < 0.5) return '/images/hotels/detail/icon/star-0.svg';
        if (rate >= 0.5 && rate < 1) return '/images/hotels/detail/icon/star-0-5.svg';
        if (rate >= 1 && rate < 1.5) return '/images/hotels/detail/icon/star-1.svg';
        if (rate >= 1.5 && rate < 2) return '/images/hotels/detail/icon/star-1-5.svg';
        if (rate >= 2 && rate < 2.5) return '/images/hotels/detail/icon/star-2.svg';
        if (rate >= 2.5 && rate < 3) return '/images/hotels/detail/icon/star-2-5.svg';
        if (rate >= 3 && rate < 3.5) return '/images/hotels/detail/icon/star-3.svg';
        if (rate >= 3.5 && rate < 4) return '/images/hotels/detail/icon/star-3-5.svg';
        if (rate >= 4 && rate < 4.5) return '/images/hotels/detail/icon/star-4.svg';
        if (rate >= 4.5 && rate < 5) return '/images/hotels/detail/icon/star-4-5.svg';
        if (rate === 5) return '/images/hotels/detail/icon/star-5.svg';
        return '/images/hotels/detail/icon/star-0.svg';
    };

    return (
        <div className="rate-stars">
            <img src={getRatingImage(rate)} alt={`별점 ${rate}점`} />
        </div>
    );
};

export default Rate;