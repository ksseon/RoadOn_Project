import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { FiX, FiCalendar, FiPlus, FiSearch } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';

const AirportSearchBar = () => {
    const [mode, setMode] = useState('roundtrip');
    const [people, setPeople] = useState(2);
    const [seat, setSeat] = useState('일반석');

    const [roundDates, setRoundDates] = useState([null, null]);
    const [onewayDate, setOnewayDate] = useState(null);

    const [segments, setSegments] = useState([{ from: '', to: '', date: null }]);

    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const locations = ['서울', '인천', '제주'];

    const increasePeople = () => setPeople((p) => p + 1);
    const decreasePeople = () => setPeople((p) => (p > 1 ? p - 1 : 1));

    const handleAddSegment = () => {
        if (segments.length < 3) {
            setSegments([...segments, { from: '', to: '', date: null }]);
        }
    };

    const handleRemoveSegment = (index) => {
        if (segments.length > 1) {
            setSegments(segments.filter((_, i) => i !== index));
        }
    };

    const handleSelectLocation = (index, field, value) => {
        const next = [...segments];
        next[index][field] = value;
        setSegments(next);
        setSearchTerm('');
        setOpenDropdown(null);
    };

    // 출발지-도착지 드롭다운
    const renderLocationDropdown = (index, field, dropdownKey) =>
        openDropdown === dropdownKey && (
            <div className="dropdown location-dropdown" onClick={(e) => e.stopPropagation()}>
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
                            <li key={loc} onClick={() => handleSelectLocation(index, field, loc)}>
                                {loc}
                            </li>
                        ))}
                </ul>
            </div>
        );

    return (
        <div className="airport-searchbar">
            <div className="search-box">
                <div className="search-tabs">
                    <button
                        className={mode === 'roundtrip' ? 'active' : ''}
                        onClick={() => setMode('roundtrip')}
                    >
                        왕복
                    </button>
                    <button
                        className={mode === 'oneway' ? 'active' : ''}
                        onClick={() => setMode('oneway')}
                    >
                        편도
                    </button>
                    <button
                        className={mode === 'multicity' ? 'active' : ''}
                        onClick={() => setMode('multicity')}
                    >
                        다구간
                    </button>
                </div>

                {/* 왕복 */}
                {mode === 'roundtrip' && (
                    <div className="search-form">
                        {/* 날짜 */}
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
                                shouldCloseOnSelect={true}
                            />
                        </div>

                        {/* 출발지-도착지 */}
                        <div className="form-item start" onClick={() => setOpenDropdown('from')}>
                            <FiSearch className="search icon" />
                            {segments[0].from || '출발지'}
                            {renderLocationDropdown(0, 'from', 'from')}
                        </div>

                        <div className="form-item end" onClick={() => setOpenDropdown('to')}>
                            <FiSearch className="search icon" />
                            {segments[0].to || '도착지'}
                            {renderLocationDropdown(0, 'to', 'to')}
                        </div>

                        {/* 인원 */}
                        <div className="form-item" onClick={() => setOpenDropdown('peopleSeat')}>
                            <MdOutlinePersonOutline className="people icon" />
                            인원 {people} · {seat}
                            {openDropdown === 'peopleSeat' && (
                                <div
                                    className="dropdown people-seat-dropdown"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="people-control">
                                        <span>인원 (소아/유아 포함)</span>
                                        <button className="people-btn" onClick={decreasePeople}>
                                            -
                                        </button>
                                        <span>{people}</span>
                                        <button className="people-btn" onClick={increasePeople}>
                                            +
                                        </button>
                                    </div>

                                    {/* 좌석선택 */}
                                    <div className="seat-control">
                                        {['일반석', '프리미엄 일반석', '비즈니스석', '일등석'].map(
                                            (s) => (
                                                <span key={s} onClick={() => setSeat(s)}>
                                                    {s}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    {/* 선택버튼 */}
                                    <button
                                        className="confirm-btn"
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        선택완료
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* 검색 버튼 */}
                        <button className="search-btn">검색</button>
                    </div>
                )}

                {/* 편도 */}
                {mode === 'oneway' && (
                    <div className="search-form">
                        {/* 날짜 */}
                        <div className="form-item date">
                            <FiCalendar className="calendar icon" />
                            <DatePicker
                                selected={onewayDate}
                                onChange={(date) => setOnewayDate(date)}
                                locale={ko}
                                dateFormat="MM.dd (eee)"
                                placeholderText="출발일"
                                shouldCloseOnSelect={true}
                            />
                        </div>

                        {/* 출발지-도착지 */}
                        <div className="form-item start" onClick={() => setOpenDropdown('from')}>
                            <FiSearch className="search icon" />
                            {segments[0].from || '출발지'}
                            {renderLocationDropdown(0, 'from', 'from')}
                        </div>

                        <div className="form-item end" onClick={() => setOpenDropdown('to')}>
                            <FiSearch className="search icon" />
                            {segments[0].to || '도착지'}
                            {renderLocationDropdown(0, 'to', 'to')}
                        </div>

                        {/* 인원 */}
                        <div
                            className="form-item people"
                            onClick={() => setOpenDropdown('peopleSeat')}
                        >
                            <MdOutlinePersonOutline className="people icon" />
                            성인 {people}명 · {seat}
                            {openDropdown === 'peopleSeat' && (
                                <div
                                    className="dropdown people-seat-dropdown"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="people-control">
                                        <span>인원</span>
                                        <button className="people-btn" onClick={decreasePeople}>
                                            -
                                        </button>
                                        <span>{people}</span>
                                        <button className="people-btn" onClick={increasePeople}>
                                            +
                                        </button>
                                    </div>

                                    {/* 좌석선택 */}
                                    <div className="seat-control">
                                        {['일반석', '프리미엄 일반석', '비즈니스석', '일등석'].map(
                                            (s) => (
                                                <span key={s} onClick={() => setSeat(s)}>
                                                    {s}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    {/* 선택버튼 */}
                                    <button
                                        className="confirm-btn"
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        선택완료
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* 검색 버튼 */}
                        <button className="search-btn">검색</button>
                    </div>
                )}

                {/* 다구간 */}
                {mode === 'multicity' && (
                    <div className="search-form multicity">
                        {segments.map((seg, i) => (
                            <div className="multi-row" key={i}>
                                {/* 날짜 */}
                                <div className="form-item date">
                                    <FiCalendar className="calendar icon" />
                                    <DatePicker
                                        selected={seg.date}
                                        onChange={(date) => {
                                            const next = [...segments];
                                            next[i].date = date;
                                            setSegments(next);
                                        }}
                                        locale={ko}
                                        dateFormat="MM.dd (eee)"
                                        placeholderText="출발일"
                                        shouldCloseOnSelect={true}
                                    />
                                </div>

                                {/* 출발지-도착지 */}
                                <div
                                    className="form-item start"
                                    onClick={() => setOpenDropdown(`segment-${i}-from`)}
                                >
                                    <FiSearch className="search icon" />
                                    {seg.from || '출발지'}
                                    {renderLocationDropdown(i, 'from', `segment-${i}-from`)}
                                </div>

                                <div
                                    className="form-item end"
                                    onClick={() => setOpenDropdown(`segment-${i}-to`)}
                                >
                                    <FiSearch className="search icon" />
                                    {seg.to || '도착지'}
                                    {renderLocationDropdown(i, 'to', `segment-${i}-to`)}
                                </div>

                                {segments.length > 1 && (
                                    <button
                                        className="remove-btn"
                                        onClick={() => handleRemoveSegment(i)}
                                    >
                                        <FiX className="icon" />
                                    </button>
                                )}

                                {/* 구간추가 */}
                                {i === segments.length - 1 && (
                                    <>
                                        {segments.length < 3 && (
                                            <button className="add-btn" onClick={handleAddSegment}>
                                                <FiPlus className="plus icon" /> 구간추가
                                            </button>
                                        )}

                                        {/* 인원 */}
                                        <div
                                            className="form-item people"
                                            onClick={() => setOpenDropdown('peopleSeat')}
                                        >
                                            <MdOutlinePersonOutline className="people icon" />
                                            성인 {people}명 · {seat}
                                            {openDropdown === 'peopleSeat' && (
                                                <div
                                                    className="dropdown people-seat-dropdown"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div className="people-control">
                                                        <span>인원</span>
                                                        <button
                                                            className="people-btn"
                                                            onClick={decreasePeople}
                                                        >
                                                            -
                                                        </button>
                                                        <span>{people}</span>
                                                        <button
                                                            className="people-btn"
                                                            onClick={increasePeople}
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    {/* 좌석선택 */}
                                                    <div className="seat-control">
                                                        {[
                                                            '일반석',
                                                            '프리미엄 일반석',
                                                            '비즈니스석',
                                                            '일등석',
                                                        ].map((s) => (
                                                            <span
                                                                key={s}
                                                                onClick={() => setSeat(s)}
                                                            >
                                                                {s}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* 선택버튼 */}
                                                    <button
                                                        className="confirm-btn"
                                                        onClick={() => setOpenDropdown(null)}
                                                    >
                                                        선택완료
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* 검색 버튼 */}
                                        <button className="search-btn">검색</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AirportSearchBar;
