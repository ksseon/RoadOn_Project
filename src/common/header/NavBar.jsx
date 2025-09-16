import { Link } from 'react-router-dom';

const NavBar = () => {
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
                        <Link to="/login">
                            <img src="/images/icon/human.png" alt="human" />
                            로그인
                        </Link>
                    </li>
                    <li>
                        <Link to="/join">회원가입</Link>
                    </li>
                    <li>
                        <Link to="/myPage">마이페이지</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
