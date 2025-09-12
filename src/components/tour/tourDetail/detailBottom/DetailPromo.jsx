import DetailPromoItem from './DetailPromoItem';
import './style.scss';

const DetailPromo = () => {
    return (
        <section id="detail-Promo">
            <h2 className="title">다른 고객들이 함께 본 숙소</h2>
            <ul className="promo-list">
                <DetailPromoItem />
                <DetailPromoItem />
                <DetailPromoItem />
                <DetailPromoItem />
            </ul>
        </section>
    );
};

export default DetailPromo;
