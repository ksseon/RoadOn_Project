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
        // import { MdKeyboardArrowDown } from 'react-icons/md';
        // import MiniReviewItem from '../../../hotels/hotelsDetail/MiniReviewItem';

        // const DetailBotReviewsItem = () => {
        //     // const miniReviews = getHighRatedReviews(hotel.id, 3);
        //     // miniReviews 데이터에서 아무거나 세개 뽑아와서 넣기 - 전달 (HotelsDetail.jsx 참고)
        //     return (
        //         <section className="detail-reviews" style={{ marginBottom: '20px' }}>
        //             <ul className="list" style={{ listStyle: 'none', padding: 0 }}>
        //                 {miniReviews.map((review) => (
        //                     <MiniReviewItem
        //                         key={review.uniqueId}
        //                         review={review}
        //                         style={{
        //                             padding: '15px',
        //                             border: '1px solid #ddd',
        //                             marginBottom: '10px',
        //                             borderRadius: '5px',
        //                         }}
        //                     />
        //                 ))}
        //             </ul>
        //         </section>
        //     );
        // };

        // export default DetailBotReviewsItem;
    );
};

export default DetailBotReviewsItem;
