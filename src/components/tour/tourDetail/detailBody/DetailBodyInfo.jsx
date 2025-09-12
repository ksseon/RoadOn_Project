import './style.scss';

import DetailTitle from './DetailTitle';
import DetailSide from './DetailSide';
import DetailData from './DetailData';

const DetailBodyInfo = () => {
    return (
        <section className="detail-body-info">
            <div className="left">
                <DetailTitle />
                <DetailData />
            </div>
            <div className="right">
                <DetailSide />
            </div>
        </section>
    );
};

export default DetailBodyInfo;
