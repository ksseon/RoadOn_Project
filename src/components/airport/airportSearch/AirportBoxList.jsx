import React, { useEffect, useRef, useState } from 'react';
import useAirportStore from '../../../store/airportStore';
import AirportBox from './AirportBox';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const AirportBoxList = () => {
    // 🔥 filters도 함께 구독 → 필터 변경 시 컴포넌트 리렌더링
    const filters = useAirportStore((s) => s.filters);
    const getFilteredAirports = useAirportStore((s) => s.getFilteredAirports);

    const [sortType, setSortType] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    let airports = getFilteredAirports();

    if (sortType === 'low') {
        airports = [...airports].sort((a, b) => a.price - b.price);
    } else if (sortType === 'high') {
        airports = [...airports].sort((a, b) => b.price - a.price);
    }

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const options = [
        { value: 'all', label: '전체' },
        { value: 'low', label: '낮은 가격순' },
        { value: 'high', label: '높은 가격순' },
    ];

    return (
        <section className="airport-box-list">
            <div className="list-header">
                <h3>총 {airports.length.toLocaleString('ko-KR')}개 항공권</h3>

                <div
                    className="custom-dropdown"
                    ref={dropdownRef}
                    onClick={() => setIsOpen(!isOpen)}
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
                                    className={sortType === option.value ? 'selected' : ''}
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

            <div className="fillter-boxs"></div>
            {airports.length > 0 ? (
                airports.map((a) => <AirportBox key={a.id} airportId={a.id} />)
            ) : (
                <p>조건에 맞는 항공권이 없습니다.</p>
            )}
        </section>
    );
};

export default AirportBoxList;
