import './style.scss';

const DetailThum = ({ tourData }) => {
    if (!tourData) return null;

    const { posterImg, images = [] } = tourData;

    return (
        <section className="detail-thum">
            <div className="big-img img-box">
                <img src={posterImg || '/images/default-tour.jpg'} alt={tourData.title} />
            </div>
            <div className="imgs-all-wrap img-box">
                {images.length > 0 ? (
                    images.slice(0, 4).map((img, index) => (
                        <div key={index} className="img-wrap">
                            <img src={img} alt={`${tourData.title} ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <div className="img-wrap">
                        <img src={posterImg || '/images/default-tour.jpg'} alt={tourData.title} />
                    </div>
                )}
            </div>
        </section>
    );
};
export default DetailThum;
