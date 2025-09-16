import { MdKeyboardArrowDown } from 'react-icons/md';
import Rate from '../hotelsSearch/Rate';

const DetailReviewItem = ({ review }) => {
    //  const renderStars = (rating) => {
    //     return Array.from({ length: 5 }, (_, i) => (
    //         <img 
    //             key={i}
    //             src={i < rating ? "/images/icon/star_filled.svg" : "/images/icon/star_empty.svg"} 
    //             alt="별점" 
    //         />
    //     ));
    // };
    return (
        <li>
                    <div className="name-line">
                        <div className="thumbs">
                            <img src="/images/hotels/profile.jpg" alt="" />
                        </div>
                        <div className="txts">
                            <strong>{review.name}</strong>
                    <em>리뷰 {review.reviews} · 사진 {review['photo-num']} · 장소 {review.places}</em>
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
                        <div className="img-zone">
                            <div className="img-wrap">
                                <img src="" alt="" />
                            </div>
                            <div className="img-wrap">
                                <img src="" alt="" />
                            </div>
                            <div className="img-wrap">
                                <img src="" alt="" />
                            </div>
                        </div>
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