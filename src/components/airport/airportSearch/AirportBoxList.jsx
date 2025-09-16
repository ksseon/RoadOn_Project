import React, { useEffect, useRef, useState } from "react";
import useAirportStore from "../../../store/airportStore";
import AirportBox from "./AirportBox";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AirportBoxList = () => {
  const filters = useAirportStore((s) => s.filters);
  const getFilteredAirports = useAirportStore((s) => s.getFilteredAirports);

  const [sortType, setSortType] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  let airports = getFilteredAirports();

  if (sortType === "low") {
    airports = [...airports].sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    airports = [...airports].sort((a, b) => b.price - a.price);
  }

  // ⬇️ 커서가 dropdown 전체 박스에서 벗어나면 닫히도록 수정
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const options = [
    { value: "all", label: "전체" },
    { value: "low", label: "낮은 가격순" },
    { value: "high", label: "높은 가격순" },
  ];

  return (
    <section className="airport-box-list">
      <div className="list-header">
        <h3>총 {airports.length.toLocaleString("ko-KR")}개 항공권</h3>
        <div
          className={`custom-dropdown ${isOpen ? "open" : ""}`}
          ref={dropdownRef}
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={handleMouseLeave} // 🔥 마우스가 벗어나면 닫힘
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
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {airports.length > 0 ? (
        airports.map((a) => <AirportBox key={a.id} airportId={a.id} />)
      ) : (
        <p>조건에 맞는 항공권이 없습니다.</p>
      )}
    </section>
  );
};

export default AirportBoxList;
