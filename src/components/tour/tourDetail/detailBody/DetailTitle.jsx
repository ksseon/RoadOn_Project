import './style.scss';
import DetailBotReviewsItem from '../detailBottom/DetailBotReviewsItem';

const DetailTitle = ({ tourData }) => {
    if (!tourData) return null;

    const { title, subtitle, desc } = tourData;

    return (
        <section className="detail-title">
            <article className="detail-title-head">
                <em>{title}</em>
                <h3>{subtitle}</h3>
                <b>{desc}</b>
                <p className="rate">
                    <span></span>
                    4.5 (32)
                </p>
            </article>
            <DetailBotReviewsItem tourData={tourData} />
        </section>
    );
};
export default DetailTitle;
