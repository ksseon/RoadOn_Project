import React, { useRef, useState } from 'react';
import useAirportStore from '../../../store/airportStore';
import AirportBox from './AirportBox';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Pagination from '../../ui/pagination/Pagination';

const AirportListRenderer = ({ airports = [], useFiltered = false }) => {
    const getFilteredAirports = useAirportStore((s) => s.getFilteredAirports);
    const list = useFiltered ? getFilteredAirports() : airports;

    const [sortType, setSortType] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const dropdownRef = useRef(null);

    let sortedList = [...list];
    if (sortType === 'low') {
        sortedList.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high') {
        sortedList.sort((a, b) => b.price - a.price);
    }

    const options = [
        { value: 'all', label: '전체' },
        { value: 'low', label: '낮은 가격순' },
        { value: 'high', label: '높은 가격순' },
    ];

    const startIndex = (page - 1) * pageSize;
    const currentAirports = sortedList.slice(startIndex, startIndex + pageSize);

    return (
        <div className="airport-box-list">
            <div className="list-header">
                <h3>총 {sortedList.length.toLocaleString('ko-KR')}개 항공권</h3>
                <div
                    className={`custom-dropdown ${isOpen ? 'open' : ''}`}
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
                                    className={sortType === option.value ? 'selected' : ''}
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
            <div className="list-box">
                {currentAirports.length > 0 ? (
                    currentAirports.map((a) => <AirportBox key={a.id} airportId={a.id} />)
                ) : (
                    <p>조건에 맞는 항공권이 없습니다.</p>
                )}{' '}
            </div>

            <Pagination
                page={page}
                total={sortedList.length}
                pageSize={pageSize}
                onPageChange={setPage}
            />
        </div>
    );
};

export default AirportListRenderer;
