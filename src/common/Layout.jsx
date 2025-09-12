// Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return (
        <div className="wrap">
            <div className="site-header">
                <Header />
            </div>

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
