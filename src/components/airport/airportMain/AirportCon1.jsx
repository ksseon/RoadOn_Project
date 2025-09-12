import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import { FiX } from 'react-icons/fi';

const AirportCon1 = () => {
    const [mode, setMode] = useState('roundtrip');
    const [people, setPeople] = useState(2);
    const [seat, setSeat] = useState('일반석');

    const [roundDates, setRoundDates] = useState([null, null]);
    const [onewayDate, setOnewayDate] = useState(null);

    const [segments, setSegments] = useState([{ from: '', to: '', date: null }]);

    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const locations = ['서울', '부산', '제주', '여수', '속초', '광주', '대구'];

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

    // 출발지/도착지 드롭다운
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
        <section className="airport-main-con airport-main-con1">
            <div className="visual-bg">
                <div className="inner">
                    <h2 className="search-title">날짜를 선택해 예약하세요</h2>

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
                                <div className="form-item">
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

                                <div className="form-item" onClick={() => setOpenDropdown('from')}>
                                    {segments[0].from || '출발지'}
                                    {renderLocationDropdown(0, 'from', 'from')}
                                </div>

                                <div className="form-item" onClick={() => setOpenDropdown('to')}>
                                    {segments[0].to || '도착지'}
                                    {renderLocationDropdown(0, 'to', 'to')}
                                </div>

                                <div
                                    className="form-item"
                                    onClick={() => setOpenDropdown('peopleSeat')}
                                >
                                    인원 {people} · {seat}
                                    {openDropdown === 'peopleSeat' && (
                                        <div
                                            className="dropdown people-seat-dropdown"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="people-control">
                                                <span>인원 (소아/유아 포함)</span>
                                                <button
                                                    className="people-btn"
                                                    onClick={() => decreasePeople()}
                                                >
                                                    -
                                                </button>
                                                <span>{people}</span>
                                                <button
                                                    className="people-btn"
                                                    onClick={() => increasePeople()}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="seat-control">
                                                {[
                                                    '일반석',
                                                    '프리미엄 일반석',
                                                    '비즈니스석',
                                                    '일등석',
                                                ].map((s) => (
                                                    <span key={s} onClick={() => setSeat(s)}>
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                            <button
                                                className="confirm-btn"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                선택완료
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <button className="search-btn">검색</button>
                            </div>
                        )}

                        {/* 편도 */}
                        {mode === 'oneway' && (
                            <div className="search-form">
                                <div className="form-item">
                                    <DatePicker
                                        selected={onewayDate}
                                        onChange={(date) => setOnewayDate(date)}
                                        locale={ko}
                                        dateFormat="MM.dd (eee)"
                                        placeholderText="출발일"
                                        shouldCloseOnSelect={true}
                                    />
                                </div>

                                <div className="form-item" onClick={() => setOpenDropdown('from')}>
                                    {segments[0].from || '출발지'}
                                    {renderLocationDropdown(0, 'from', 'from')}
                                </div>

                                <div className="form-item" onClick={() => setOpenDropdown('to')}>
                                    {segments[0].to || '도착지'}
                                    {renderLocationDropdown(0, 'to', 'to')}
                                </div>

                                <div
                                    className="form-item"
                                    onClick={() => setOpenDropdown('peopleSeat')}
                                >
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
                                                    onClick={() => decreasePeople()}
                                                >
                                                    -
                                                </button>
                                                <span>{people}</span>
                                                <button
                                                    className="people-btn"
                                                    onClick={() => increasePeople()}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="seat-control">
                                                {[
                                                    '일반석',
                                                    '프리미엄 일반석',
                                                    '비즈니스석',
                                                    '일등석',
                                                ].map((s) => (
                                                    <span key={s} onClick={() => setSeat(s)}>
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                            <button
                                                className="confirm-btn"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                선택완료
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <button className="search-btn">검색</button>
                            </div>
                        )}

                        {/* 다구간 */}
                        {mode === 'multicity' && (
                            <div className="search-form multicity">
                                {segments.map((seg, i) => (
                                    <div className="multi-row" key={i}>
                                        <div className="form-item small">
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

                                        <div
                                            className="form-item small"
                                            onClick={() => setOpenDropdown(`segment-${i}-from`)}
                                        >
                                            {seg.from || '출발지'}
                                            {renderLocationDropdown(i, 'from', `segment-${i}-from`)}
                                        </div>

                                        <div
                                            className="form-item small"
                                            onClick={() => setOpenDropdown(`segment-${i}-to`)}
                                        >
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

                                        {i === segments.length - 1 && (
                                            <>
                                                {segments.length < 3 && (
                                                    <button
                                                        className="add-btn"
                                                        onClick={handleAddSegment}
                                                    >
                                                        + 구간추가
                                                    </button>
                                                )}

                                                <div
                                                    className="form-item"
                                                    onClick={() => setOpenDropdown('peopleSeat')}
                                                >
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
                                                                    onClick={() => decreasePeople()}
                                                                >
                                                                    -
                                                                </button>
                                                                <span>{people}</span>
                                                                <button
                                                                    className="people-btn"
                                                                    onClick={() => increasePeople()}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>

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
                                                            <button
                                                                className="confirm-btn"
                                                                onClick={() =>
                                                                    setOpenDropdown(null)
                                                                }
                                                            >
                                                                선택완료
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>

                                                <button className="search-btn">검색</button>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirportCon1;
