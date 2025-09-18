import Rate from '../hotelsSearch/Rate';

const MiniReviewItem = ({ review }) => {
    return (
        <li>
            <div className="lis-head">
                <div className="lis-head-title">
                    <div className="thumbs">
                        <img src="/images/hotels/profile.jpg" alt="" />
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