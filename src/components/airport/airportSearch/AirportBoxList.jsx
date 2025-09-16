import React, { useRef, useState } from "react";
import useAirportStore from "../../../store/airportStore";
import AirportBox from "./AirportBox";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Pagination from "../../ui/pagination/Pagination";

const AirportBoxList = () => {
  const filters = useAirportStore((s) => s.filters);
  const getFilteredAirports = useAirportStore((s) => s.getFilteredAirports);

  const [sortType, setSortType] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1); // ✅ Pagination.jsx 구조에 맞춤
  const pageSize = 10; // ✅ Pagination.jsx 구조에 맞춤

  const dropdownRef = useRef(null);

  let airports = getFilteredAirports();

  // 정렬 조건 적용
  if (sortType === "low") {
    airports = [...airports].sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    airports = [...airports].sort((a, b) => b.price - a.price);
  }

  // 드롭다운 외부 닫기
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // 드롭다운 옵션
  const options = [
    { value: "all", label: "전체" },
    { value: "low", label: "낮은 가격순" },
    { value: "high", label: "높은 가격순" },
  ];

  // ✅ 페이지네이션에 맞게 slice
  const startIndex = (page - 1) * pageSize;
  const currentAirports = airports.slice(startIndex, startIndex + pageSize);

  return (
    <section className="airport-box-list">
      <div className="list-header">
        <h3>총 {airports.length.toLocaleString("ko-KR")}개 항공권</h3>
        <div
          className={`custom-dropdown ${isOpen ? "open" : ""}`}
          ref={dropdownRef}
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-selected">
            {options.find((o) => o.value === sortType)?.label}
            {isOpen ? (
              <IoIosArrowUp className="dropdown-icon open" />
            ) : (
              <IoIosArrowDown className="dropdown-icon" />
            )}
          </div>
          {isOpen && (
            <ul className="dropdown-options">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={sortType === option.value ? "selected" : ""}
                  onClick={() => {
                    setSortType(option.value);
                    setIsOpen(false);
                    setPage(1); // ✅ 정렬 변경 시 1페이지로 초기화
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 리스트 */}
      {currentAirports.length > 0 ? (
        currentAirports.map((a) => <AirportBox key={a.id} airportId={a.id} />)
      ) : (
        <p>조건에 맞는 항공권이 없습니다.</p>
      )}

      {/* ✅ Pagination.jsx 구조에 맞춰 props 변경 */}
      <Pagination
        page={page}
        total={airports.length}
        pageSize={pageSize}
        onPageChange={setPage}
      />
    </section>
  );
};

export default AirportBoxList;
