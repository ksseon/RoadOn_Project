import { FaStar } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
const DetailPromoItem = () => {
    return (
        <li className="promo-list-item">
            <div className="img-wrap">
                <img src="" alt="" />
            </div>
            <div className="txt-wrap">
                <strong>
                    <em>호텔 비즈니스</em>호텔 골든데이지 서귀포오션
                </strong>
                <p className="rate">
                    <span>
                        <FaStar />
                    </span>
                    4.8 (336)
                </p>

                <div className="info">
                    <p className="loc">
                        <span>
                            <IoLocationOutline />
                        </span>
                        서귀포시, 제주
                    </p>
                    <p className="pri">
                        350,000원 / <span> 박</span>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default DetailPromoItem;
