import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
const Profile = () => {
    return (
        <section id="profile">
            <h2 className="mypage-title">마이페이지</h2>
            <article className="profile-name-wrap">
                <div className="profile-img-wrap">
                    <img src="images/myPage/profile-img.png" alt="profile-img.png" />
                </div>
                <div className="profile-name-zone">
                    <strong>
                        홍길동
                        <span>님</span>
                    </strong>
                    <div className="grade">
                        <div className="grade-circle">
                            <p>F</p>
                        </div>
                        <p>
                            Family 등급
                            <em>
                                <IoIosArrowForward />
                            </em>
                        </p>
                    </div>
                </div>
                <div className="profile-coupons-wrap">
                    <div className="profile-coupon box">
                        <div className="head">
                            <img src="" alt="" />
                            <p>
                                쿠폰
                                <em>
                                    <IoIosArrowForward />
                                </em>
                            </p>
                        </div>
                        <strong>
                            3<span>개</span>
                        </strong>
                    </div>
                    <div className="profile-points box">
                        <div className="head">
                            <img src="" alt="" />
                            <p>
                                적립금
                                <em>
                                    <IoIosArrowForward />
                                </em>
                            </p>
                        </div>
                        <strong>
                            22,222
                            <span>P</span>
                        </strong>
                    </div>
                </div>
            </article>
            <article className="profile-menu-wrap">
                <div className="profile-menu-reserve">
                    <h3 className="category-title">예약 내역</h3>
                    <div className="category-con">
                        <p>숙소 </p>
                        <p>체험·투어</p>
                        <p className="none-line">항공</p>
                    </div>
                </div>
                <div className="profile-menu-user">
                    <h3 className="category-title">나의 정보 관리</h3>
                    <div className="category-con">
                        <p>내 후기</p>
                        <p>내 문의 내역</p>
                        <p className="none-line">찜 목록</p>
                        <p className="none-line ">회원 정보 변경</p>
                    </div>
                </div>
                <div className="profile-menu-support">
                    <h3 className="category-title">고객센터</h3>
                    <div className="category-con">
                        <p>공지사항</p>
                        <p>투어 이용 안내</p>
                        <p className="none-line">자주찾는질문</p>
                        <p className="none-line ">고객센터 안내</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Profile;
