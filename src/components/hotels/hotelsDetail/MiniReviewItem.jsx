import Rate from '../hotelsSearch/Rate';

const MiniReviewItem = ({ review }) => {
    const photoCount = review.photoNum || review['photo-num'] || 0;
    const roomOrPackage = review.package || review.room || '';
    return (
        <li>
            <div className="lis-head">
                <div className="lis-head-title">
                    <div className="thumbs-a">
                        <img src="/images/hotels/profile.jpg" alt="프로필" />
                    </div>
                    <div className="txt">
                        <strong>{review.name}</strong>
                        <p>{review.date}</p>
                    </div>
                </div>
                <div className="rate-box">
                    <Rate rate={review.rate} />
                </div>
            </div>
            <div className="lis-body">
                <p>{review.detail}</p>
            </div>
        </li>
    );
};

export default MiniReviewItem;
