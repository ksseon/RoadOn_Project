import useAirportStore from "../../../store/airportStore";
import { useMemo } from "react";
import { shallow } from "zustand/shallow";
import AirportBox from "./AirportBox";

const AirportBoxList = () => {
  // ⚠️ 필터/데이터/정렬 '값'을 구독해야 렌더가 다시 돕니다.
  const { airports, filters, sortOrder } = useAirportStore(
    (s) => ({
      airports: s.airports,
      filters: s.filters,
      sortOrder: s.sortOrder,
    }),
    shallow
  );
  const setSortOrder = useAirportStore((s) => s.setSortOrder);

  const list = useMemo(() => {
    let arr = airports.filter((a) => {
      if (filters.direct !== null && a.direct !== filters.direct) return false;
      if (filters.airline && a.airline !== filters.airline) return false;
      if (filters.baggage && a.baggage !== filters.baggage) return false;
      if (typeof filters.priceMin === "number" && a.price < filters.priceMin)
        return false;
      if (typeof filters.priceMax === "number" && a.price > filters.priceMax)
        return false;
      return true;
    });

    if (sortOrder === "priceAsc")
      arr = [...arr].sort((x, y) => x.price - y.price);
    if (sortOrder === "priceDesc")
      arr = [...arr].sort((x, y) => y.price - x.price);

    return arr;
  }, [airports, filters, sortOrder]);

  return (
    <div className="list-wrap">
      <div className="list-top">
        <h3>총 {list.length}개 항공권</h3>
        <div className="sort">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">전체</option>
            <option value="priceAsc">낮은가격순</option>
            <option value="priceDesc">높은가격순</option>
          </select>
        </div>
      </div>

      <div className="list-box">
        {list.length ? (
          list.map((a) => <AirportBox key={a.id} airportId={a.id} />)
        ) : (
          <p>조건에 맞는 항공권이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default AirportBoxList;
