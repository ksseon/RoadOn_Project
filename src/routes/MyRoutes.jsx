import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import {
  Home,
  MyPage,
  NotFiles,
  Login,
  HotelsPayment,
  HotelsPayCompleted,
  AirportSearch,
  HotelsDetail,
  HotelsSearch,
  Tour,
  Airport,
  Hotels,
  AirportDetail,
  AirportCon3,
} from "../pages";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="hotels">
            <Route index element={<Hotels />} />
            <Route path="search" element={<HotelsSearch />} />
            <Route path=":slug" element={<HotelsDetail />} />
            <Route path="payment" element={<HotelsPayment />} />
            <Route path="payment/completed" element={<HotelsPayCompleted />} />
          </Route>

          <Route path="airport">
            <Route index element={<Airport />} />
            <Route path="search" element={<AirportSearch />} />{" "}
            <Route path="con3" element={<AirportCon3 />} /> {/* 상대경로 */}
            <Route path=":slug" element={<AirportDetail />} />{" "}
            {/* 상세페이지 */}
            {/* ✅ 상세페이지 라우트 */}
          </Route>

          <Route path="tour" element={<Tour />} />

          <Route path="myPage" element={<MyPage />} />
          <Route path="login">
            <Route index element={<Login />} />
          </Route>
          <Route path="*" element={<NotFiles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  main;
};
