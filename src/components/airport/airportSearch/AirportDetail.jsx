import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import airportDetailData from "../../../api/airportDetailData";
import AirportSearchBarList from "../../ui/AirportSearchBarList/AirportSearchBarList";
import Filter from "./Filter";
import AirportBox from "./AirportBox";
import Pagination from "../../ui/pagination/Pagination";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "./style.scss";

const AirportDetail = () => {
  const { slug } = useParams();
  const flight = airportDetailData.find((f) => f.slug === slug);

  const [sortType, setSortType] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const dropdownRef = useRef(null);

  if (!flight) {
    return <p>해당 항공권 정보를 찾을 수 없습니다.</p>;
  }

  let airports = [flight];

  if (sortType === "low") {
    airports = [...airports].sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    airports = [...airports].sort((a, b) => b.price - a.price);
  }

  const options = [
    { value: "all", label: "전체" },
    { value: "low", label: "낮은 가격순" },
    { value: "high", label: "높은 가격순" },
  ];

  const startIndex = (page - 1) * pageSize;
  const currentAirports = airports.slice(startIndex, startIndex + pageSize);

  return (
    <main className="airport">
      {/* 검색창 */}
      <AirportSearchBarList />

      <div className="inner">
        {/* 왼쪽 필터 */}
        <Filter />

        {/* 오른쪽 리스트 */}
        <div className="list-wrap airport-detail-list">
          <div className="list-header">
            <h3>총 {airports.length}개 항공권</h3>

            {/* 드롭다운 */}
            <div
              className={`custom-dropdown ${isOpen ? "open" : ""}`}
              ref={dropdownRef}
              onClick={() => setIsOpen(!isOpen)}
              onMouseLeave={() => setIsOpen(false)}
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
                        setPage(1);
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
          <div className="list-box">
            {currentAirports.length > 0 ? (
              currentAirports.map((a) => (
                <AirportBox key={a.id} airportId={a.id} />
              ))
            ) : (
              <p>조건에 맞는 항공권이 없습니다.</p>
            )}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            page={page}
            total={airports.length}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </div>
      </div>
    </main>
  );
};

export default AirportDetail;
