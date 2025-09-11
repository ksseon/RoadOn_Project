import Detailside from './detailBody/Detailside';
import DetailThum from './detailBody/DetailThum';
import DetailTitle from './detailBody/DetailTitle';
import './style.scss';

const DetailBody = () => {
    return (
        <section id="DetailBody">
            <DetailThum />
            <DetailTitle />
            <Detailside />
        </section>
    );
};

export default DetailBody;
