// src/components/NavBar.jsx  (파일 위치에 따라 import 경로 조정)

import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore'; // 경로가 다르면 조정

const NavBar = () => {
    const currentUser = useAuthStore((s) => s.currentUser);
    const setCurrent = useAuthStore((s) => s.setCurrent);
    const navigate = useNavigate();

    const handleLogout = () => {
        // 테스트용 로그아웃: 현재 사용자 해제
        setCurrent(null);
        // 필요하면 토큰도 없애려면 store에 setToken 액션 사용
        // useAuthStore.getState().setToken(null);
        navigate('/'); // 로그아웃 후 홈으로 이동 (원하면 /login 등으로 변경)
    };

    const avatarSrc = currentUser?.avatar || '/images/icon/human.png';
    const displayName = currentUser?.nameKo || currentUser?.username || '';

    return (
        <>
            <nav className="nav">
                <ul className="nav-menu">
                    <li>
                        <Link to="/hotels">
                            <img src="/images/icon/hotel.png" alt="hotel" />
                            숙소
                        </Link>
                    </li>
                    <li>
                        <Link to="/tour" className="tour">
                            <img src="/images/icon/tour.png" alt="tour" />
                            씬투어
                        </Link>
                    </li>
                    <li>
                        <Link to="/airport">
                            <img src="/images/icon/airport.png" alt="air" />
                            항공
                        </Link>
                    </li>
                </ul>

                <ul className="my-menu">
                    <li>
                        {currentUser ? (
                            <Link to="/myPage" className="profile-link">
                                {/* <img src={avatarSrc} alt="profile" /> */}
                                <span>{displayName}</span>님 환영합니다
                            </Link>
                        ) : (
                            <Link to="/login">
                                <img src="/images/icon/human.png" alt="human" />
                                로그인
                            </Link>
                        )}
                    </li>

                    {/* 회원가입은 비로그인 상태에서만 보여줌 */}
                    {!currentUser && (
                        <li>
                            <Link to="/join">회원가입</Link>
                        </li>
                    )}

                    <li>
                        {currentUser && (
                            // 로그아웃은 버튼으로 처리 (스타일링은 CSS로)
                            <Link to="/" className="logout-button button" onClick={handleLogout}>
                                로그아웃
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
