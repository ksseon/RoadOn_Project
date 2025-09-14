import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
const WishList = () => {
    return (
        <section id="wish-list">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">예약내역</h2>
                <p className="more">
                    더보기
                    <em>
                        <IoIosArrowForward />
                    </em>
                </p>
            </div>
            <article className="wish-list-main-wrap">숙소 그 부분</article>
        </section>
    );
};

export default WishList;
