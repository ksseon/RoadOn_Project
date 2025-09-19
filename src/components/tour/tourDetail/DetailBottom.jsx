import useTourStore from '../../../store/tourStore';
import DetailBotReviews from './detailBottom/DetailBotReviews';
import DetailLocation from './detailBottom/DetailLocation';
import DetailPromo from './detailBottom/DetailPromo';
import './style.scss';

const DetailBottom = () => {
    const reviews = useTourStore((state) => state.reviews);
    return (
        <section id="DetailBottom">
            <DetailLocation />
            <DetailBotReviews reviews={reviews} />
            <DetailPromo />
        </section>
    );
};

export default DetailBottom;
