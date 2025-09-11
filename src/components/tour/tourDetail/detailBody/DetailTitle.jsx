import DetailReviews from './DetailReviews';
import './style.scss';
const DetailTitle = () => {
    return (
        <section className="detail-title">
            <article className="detail-title-head">
                <em>《윤식당 2》</em>
                <h3>스페인 테네리페 패키지</h3>
                <b>Grand Hyatt jeju</b>
                <p className="rate">★4.8 (536)</p>
            </article>
            <DetailReviews />
        </section>
    );
};

export default DetailTitle;
