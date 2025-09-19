import { MdKeyboardArrowDown } from 'react-icons/md';
import Rate from '../../../hotels/hotelsSearch/Rate';

const DetailReviewItem = ({ review }) => {
    return (
        <li>
            <div className="name-line">
                <div className="thumbs">
                    <img src="/images/hotels/profile.jpg" alt="" />
                </div>
                <div className="txts">
                    <strong>{review.name}</strong>
                    <em>
                        리뷰 {review.reviews} · 사진 {review['photo-num']} · 장소 {review.places}
                    </em>
                </div>
            </div>
            <div className="img-line">
                <div className="rate-zone">
                    <div className="stars">
                        <Rate rate={review.rate} />
                    </div>
                    <div className="date">
                        <p>{review.date}</p>
                    </div>
                </div>
                {review.images && review.images.length > 0 && (
                    <div className="img-zone">
                        {review.images.map((image, index) => (
                            <div key={index} className="img-wrap">
                                <img
                                    src={`/images/hotels/detail/reviews/${image}`}
                                    alt="리뷰 사진"
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className="type">
                    <strong>{review.room}</strong>
                    <p>{review.detail}</p>
                    <button className="more button">
                        더보기 <MdKeyboardArrowDown />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default DetailReviewItem;
