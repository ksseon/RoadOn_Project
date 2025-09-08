import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/hotels">숙소</Link>
                        <Link to="/tour">투어</Link>
                        <Link to="/airplane">항공</Link>
                        <Link to="/ottIntro">OTT</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
