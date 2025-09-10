import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { Airplane, Home, Hotels, Tour, MyPage, NotFiles, Login } from '../pages';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/airplane" element={<Airplane />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<NotFiles />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
