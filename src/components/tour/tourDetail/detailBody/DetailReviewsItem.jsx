import { FaStar } from 'react-icons/fa';
const DetailReviewsItem = () => {
    return (
        <li>
            <div className="lis-head">
                <div className="lis-head-title">
                    <div className="thumbs">{/* <img src="" alt="" /> */}</div>
                    <div className="txt">
                        <strong>닉네임</strong>
                        <p>2025.09.03</p>
                    </div>
                </div>
                <div className="rate-box">
                    <span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                </div>
            </div>
            <div className="lis-body">
                <p>
                    리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰
                    내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다.
                    리뷰 내용입니다. 리뷰 내용입니다. 리뷰... 리뷰 내용입니다. 리뷰 내용입니다. 리뷰
                    내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다.
                    리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰...
                </p>
            </div>
        </li>
    );
};

export default DetailReviewsItem;
