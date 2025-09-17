import TourDetail from '../../components/tour/tourDetail/TourDetail';
import TourMain from '../../components/tour/tourMain/TourMain';
import './style.scss';

const Tour = () => {
    return (
        <main id="tourPage">
            <TourMain />
            <TourDetail />
        </main>
    );
};

export default Tour;
