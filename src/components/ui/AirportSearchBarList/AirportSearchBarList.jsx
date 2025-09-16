import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import { FiX, FiCalendar, FiPlus, FiSearch } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import useAirportStore from "../../../store/airportStore";

const AirportSearchBarList = () => {
  const [mode, setMode] = useState("roundtrip");
  const [roundDates, setRoundDates] = useState([null, null]);
  const [onewayDate, setOnewayDate] = useState(null);
  const [segments, setSegments] = useState([{ from: "", to: "", date: null }]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const setFilter = useAirportStore((s) => s.setFilter);
  const filters = useAirportStore((s) => s.filters);

  const fromLocations = ["김포", "인천", "제주"];
  const toLocations = [
    "방콕",
    "괌",
    "싱가포르",
    "나트랑",
    "다낭",
    "오사카",
    "후쿠오카",
    "코타키나발루",
  ];

  // 🔥 검색 버튼 클릭 시 store에 저장
  const handleSearch = () => {
    setFilter({
      from: segments[0].from,
      to: segments[0].to,
      dates: mode === "roundtrip" ? roundDates : onewayDate,
      people: filters.people,
      seat: filters.seat,
    });
  };

  // 인원/좌석 store 반영
  const increasePeople = () => setFilter({ people: filters.people + 1 });
  const decreasePeople = () =>
    setFilter({ people: filters.people > 1 ? filters.people - 1 : 1 });
  const selectSeat = (s) => setFilter({ seat: s });

  const handleSelectLocation = (index, field, value) => {
    const next = [...segments];
    next[index][field] = value;
    setSegments(next);
    setSearchTerm("");
    setOpenDropdown(null);
  };

  const renderLocationDropdown = (index, field, dropdownKey) => {
    const locations = field === "from" ? fromLocations : toLocations;
    return (
      openDropdown === dropdownKey && (
        <div
          className="dropdown location-dropdown"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <input
            type="text"
            placeholder="도시 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <ul>
            {locations
              .filter((loc) => loc.includes(searchTerm))
              .map((loc) => (
                <li
                  key={loc}
                  onClick={() => handleSelectLocation(index, field, loc)}
                >
                  {loc}
                </li>
              ))}
          </ul>
        </div>
      )
    );
  };

  const renderPeopleSeatDropdown = () =>
    openDropdown === "peopleSeat" && (
      <div
        className="dropdown people-seat-dropdown"
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className="people-control">
          <span>인원</span>
          <button className="people-btn" onClick={decreasePeople}>
            -
          </button>
          <span>{filters.people}</span>
          <button className="people-btn" onClick={increasePeople}>
            +
          </button>
        </div>
        <div className="seat-control">
          {["일반석", "프리미엄 일반석", "비즈니스석", "일등석"].map((s) => (
            <span key={s} onClick={() => selectSeat(s)}>
              {s}
            </span>
          ))}
        </div>
        <button className="confirm-btn" onClick={() => setOpenDropdown(null)}>
          선택완료
        </button>
      </div>
    );

  return (
    <div className="airport-searchbarlist">
      <div className="search-box">
        <p>검색결과</p>

        {/* 탭 */}
        <div className="search-tabs">
          <button
            className={mode === "roundtrip" ? "active" : ""}
            onClick={() => setMode("roundtrip")}
          >
            왕복
          </button>
          <button
            className={mode === "oneway" ? "active" : ""}
            onClick={() => setMode("oneway")}
          >
            편도
          </button>
          <button
            className={mode === "multicity" ? "active" : ""}
            onClick={() => setMode("multicity")}
          >
            다구간
          </button>
        </div>

        {/* 왕복 */}
        {mode === "roundtrip" && (
          <div className="search-form">
            <div className="form-item date">
              <FiCalendar className="calendar icon" />
              <DatePicker
                selectsRange
                startDate={roundDates[0]}
                endDate={roundDates[1]}
                onChange={(update) => setRoundDates(update)}
                locale={ko}
                dateFormat="MM.dd (eee)"
                placeholderText="출발일 - 도착일"
              />
            </div>
            <div
              className="form-item start"
              onClick={() => setOpenDropdown("from")}
            >
              <FiSearch className="search icon" />
              {segments[0].from || "출발지"}
              {renderLocationDropdown(0, "from", "from")}
            </div>
            <div
              className="form-item end"
              onClick={() => setOpenDropdown("to")}
            >
              <FiSearch className="search icon" />
              {segments[0].to || "도착지"}
              {renderLocationDropdown(0, "to", "to")}
            </div>
            <div
              className="form-item"
              onClick={() => setOpenDropdown("peopleSeat")}
            >
              <MdOutlinePersonOutline className="people icon" />
              인원 {filters.people} · {filters.seat}
              {renderPeopleSeatDropdown()}
            </div>
            <button className="search-btn" onClick={handleSearch}>
              검색
            </button>
          </div>
        )}

        {/* 편도 */}
        {mode === "oneway" && (
          <div className="search-form">
            <div className="form-item date">
              <FiCalendar className="calendar icon" />
              <DatePicker
                selected={onewayDate}
                onChange={(date) => setOnewayDate(date)}
                locale={ko}
                dateFormat="MM.dd (eee)"
                placeholderText="출발일"
              />
            </div>
            <div
              className="form-item start"
              onClick={() => setOpenDropdown("from")}
            >
              <FiSearch className="search icon" />
              {segments[0].from || "출발지"}
              {renderLocationDropdown(0, "from", "from")}
            </div>
            <div
              className="form-item end"
              onClick={() => setOpenDropdown("to")}
            >
              <FiSearch className="search icon" />
              {segments[0].to || "도착지"}
              {renderLocationDropdown(0, "to", "to")}
            </div>
            <div
              className="form-item"
              onClick={() => setOpenDropdown("peopleSeat")}
            >
              <MdOutlinePersonOutline className="people icon" />
              인원 {filters.people} · {filters.seat}
              {renderPeopleSeatDropdown()}
            </div>
            <button className="search-btn" onClick={handleSearch}>
              검색
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirportSearchBarList;
