import DetailBodyInfo from './detailBody/DetailBodyInfo';
import DetailThum from './detailBody/DetailThum';

import './style.scss';

const DetailBody = ({ tourData }) => {
    return (
        <section id="DetailBody">
            <DetailThum tourData={tourData} />
            <DetailBodyInfo tourData={tourData} />
        </section>
    );
};

export default DetailBody;
