import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { Airplane, Home, Hotels, Tour, OttIntro } from '../pages';
import OttMain from '../pages/ottMain';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/tour" element={<Tour />} />
                    <Route path="/airplane" element={<Airplane />} />
                    <Route path="/ottIntro" element={<OttIntro />} />
                    <Route path="/ottMain" element={<OttMain />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
