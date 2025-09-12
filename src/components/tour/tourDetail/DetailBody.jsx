import DetailBodyInfo from './detailBody/DetailBodyInfo';
import DetailThum from './detailBody/DetailThum';

import './style.scss';

const DetailBody = () => {
    return (
        <section id="DetailBody">
            <DetailThum />
            <DetailBodyInfo />
        </section>
    );
};

export default DetailBody;
