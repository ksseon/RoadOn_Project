import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
const DetailBotReviewsItem = () => {
    return (
        <li>
            <div className="name-line">
                <div className="thumbs">
                    <img src="" alt="" />
                </div>
                <div className="txts">
                    <strong>닉네임</strong>
                    <em>리뷰 27 · 사진 89 · 장소 17</em>
                </div>
            </div>
            <div className="img-line">
                <div className="rate-zone">
                    <div className="stars">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <div className="date">
                        <p>2개월 전</p>
                    </div>
                </div>
                <div className="img-zone">
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="type">
                    <strong>슈페리어 트윈 SPT</strong>
                    <p>
                        리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니다.리뷰내용입니...
                    </p>
                    <button className="more button">
                        더보기 <MdKeyboardArrowDown />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default DetailBotReviewsItem;
