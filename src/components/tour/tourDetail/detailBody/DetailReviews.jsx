import DetailReviewsItem from './DetailReviewsItem';
import './style.scss';

const DetailReviews = () => {
    return (
        <section className="detail-reviews">
            <ul className="list">
                <DetailReviewsItem />
                <DetailReviewsItem />
                <DetailReviewsItem />
            </ul>
        </section>
    );
};

export default DetailReviews;
