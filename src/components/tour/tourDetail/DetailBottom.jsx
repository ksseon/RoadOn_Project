import DetailBotReviews from './detailBottom/DetailBotReviews';
import DetailLocation from './detailBottom/DetailLocation';
import DetailPromo from './detailBottom/DetailPromo';
import './style.scss';

const DetailBottom = () => {
    return (
        <section id="DetailBottom">
            바닥
            <DetailLocation />
            <DetailBotReviews />
            <DetailPromo />
        </section>
    );
};

export default DetailBottom;
