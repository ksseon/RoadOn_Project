import '../style.scss';

const RecoBox = () => {
    return (
        <li className="reco-box">
            <div className="reco-img"></div>
            <div className="reco-info">
                <div className="reco-top">
                    <div className="top-title">
                        <span>{/*예시*/}호텔 3성급</span>
                        <h4>그랜드 하얏트 제주</h4>
                    </div>
                    <div className="rate"></div>
                </div>
                <div className="reco-bottom">
                    <div className="bottom-location">
                        <img src="../../../public/images/hotels/search/map_pin.svg" alt="" />
                        <span>서귀포시, 제주</span>
                    </div>
                    <div className="bottom-price">
                        <strong>
                            <span>326,480원</span> / 박
                        </strong>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default RecoBox;
