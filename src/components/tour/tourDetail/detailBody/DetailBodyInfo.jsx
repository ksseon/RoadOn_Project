import './style.scss';
import DetailTitle from './DetailTitle';
import DetailSide from './DetailSide';
import DetailData from './DetailData';

const DetailBodyInfo = ({ tourData }) => {
    return (
        <section className="detail-body-info">
            <div className="left">
                <DetailTitle tourData={tourData} />
                <DetailData tourData={tourData} />
            </div>
            <div className="right">
                <DetailSide tourData={tourData} />
            </div>
        </section>
    );
};

export default DetailBodyInfo;
