// SearchBar.jsx
import './style.scss';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';

// ⬇️ 유틸 추가
const pad = (n) => String(n).padStart(2, '0');
const weekday = (d) => '일월화수목금토'[d.getDay()];
const oneNightFromToday = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // 오늘 00:00
    const end = new Date(start);
    end.setDate(start.getDate() + 1); // 1박 → +1일

    const startTxt = `${pad(start.getMonth() + 1)}.${pad(start.getDate())} ${weekday(start)}`;
    const endTxt = `${pad(end.getMonth() + 1)}.${pad(end.getDate())} ${weekday(end)}`;
    return `${startTxt} - ${endTxt} (1박)`;
};

const SearchBar = ({
    size = 'web',
    defaultQuery = '',
    defaultDateText = '', // 넘겨주면 그 값 사용
    defaultGuestsText = '',
    onSearch,
    className = '',
    inputPlaceholder = '패키지 검색',
    chipDatePlaceholder = '기간 선택',
    chipGuestsPlaceholder = '인원',
    searchLabel = '검색',
}) => {
    const [query, setQuery] = useState(defaultQuery);
    // ⬇️ 비어있으면 오늘 기준 1박2일 자동 세팅
    const [dateText, setDateText] = useState(defaultDateText || oneNightFromToday());
    const [guestsText, setGuestsText] = useState(defaultGuestsText);

    const handleSearch = () => onSearch?.({ query, dateText, guestsText });
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
        if (e.key === 'Escape') setQuery('');
    };

    return (
        <div
            className={`searchbar searchbar--${size} ${className}`}
            role="search"
            aria-label=""
        >
            {/* 검색어 필드 */}
            <div className="searchbar__field">
                <IoSearch className="searchbar__icon" />
                <input
                    className="searchbar__input"
                    type="search"
                    placeholder={inputPlaceholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    aria-label="패키지 검색어"
                />
            </div>

            {/* 날짜 칩 */}
            <button className="searchbar__chip" type="button" aria-label="날짜 선택">
                {/* <CiCalendar className="searchbar__icon" /> */}
                <img
                    src="/images/icon/icon-calendar-g.png"
                    alt="icon-calendar-g.png"
                    className="searchbar__icon"
                />
                <span>{dateText || chipDatePlaceholder}</span>
            </button>

            {/* 인원 칩 */}
            <button className="searchbar__chip" type="button" aria-label="인원 선택">
                <img
                    src="/images/icon/icon-human-g.png"
                    alt="icon-human-g.png"
                    className="searchbar__icon"
                />
                <span>{guestsText || chipGuestsPlaceholder}</span>
            </button>

            {/* 검색 버튼 */}
            <button className="searchbar__submit" type="button" onClick={handleSearch}>
                {searchLabel}
            </button>
        </div>
    );
};

export default SearchBar;
