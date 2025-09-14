import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import {
  Airplane,
  Home,
  HotelsMain,
  Tour,
  MyPage,
  NotFiles,
  Login,
  HotelsSearch,
  HotelsDetail,
  AirportSearch,
  // AirportSearch,
} from "../pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hotels" element={<HotelsMain />} />
          <Route path="/hotelsSearch" element={<HotelsSearch />} />
          {/* <Route path="/hotelsDetail" element={<HotelsDetail />} /> */}
          <Route path="/hotels/:slug" element={<HotelsDetail />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/airplane" element={<Airplane />} />
          <Route path="/airportSearch" element={<AirportSearch />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFiles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
