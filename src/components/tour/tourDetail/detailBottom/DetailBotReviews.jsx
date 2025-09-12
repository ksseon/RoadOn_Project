import DetailBotReviewsItem from './DetailBotReviewsItem';
import { FaStar } from 'react-icons/fa';
import './style.scss';

const DetailBotReviews = () => {
    return (
        <section id="detail-Bot-Reviews">
            <h2 className="title">
                방문자 리뷰
                <span>(12)</span>
            </h2>
            <div className="reviews-wrap-head">
                <div className="rate">
                    <span>
                        <FaStar />
                    </span>
                    4.84
                </div>
                <div className="reviews-wrap-head-imgs">
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
                    <div className="img-wrap">
                        <img src="" alt="" />
                    </div>
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
            </div>
            <div className="reviews-wrap-body">
                <ul className="reviews-wrap-body-list">
                    <DetailBotReviewsItem />
                    <DetailBotReviewsItem />
                </ul>
            </div>
            <div className="button">
                <p>방문자 리뷰 전체보기</p>
            </div>
        </section>
    );
};

export default DetailBotReviews;
