import React, { useRef, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useAirportStore from '../../../store/airportStore';
import AirportSearchBarList from '../../ui/AirportSearchBarList/AirportSearchBarList';
import Filter from './Filter';
import AirportBox from './AirportBox';
import Pagination from '../../ui/pagination/Pagination';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './style.scss';

const AirportDetail = () => {
    const { slug } = useParams();
    const filters = useAirportStore((s) => s.filters);
    const airports = useAirportStore((s) => s.airportDetails);
    const getFilteredAirportDetails = useAirportStore((s) => s.getFilteredAirportDetails);

    const [sortType, setSortType] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const dropdownRef = useRef(null);

    // slug 비교 시 normalize (대소문자 무시 + 공백 제거)
    const normalizeSlug = (str) => str?.toString().trim().toLowerCase().replace(/\s+/g, '') || '';

    // 필터 + slug 적용
    const filteredAirports = useMemo(() => {
        return getFilteredAirportDetails().filter(
            (a) => normalizeSlug(a.slug) === normalizeSlug(slug)
        );
    }, [filters, airports, slug, getFilteredAirportDetails]);

    // 정렬
    let sortedAirports = [...filteredAirports];
    if (sortType === 'low') {
        sortedAirports.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high') {
        sortedAirports.sort((a, b) => b.price - a.price);
    }

    const options = [
        { value: 'all', label: '전체' },
        { value: 'low', label: '낮은 가격순' },
        { value: 'high', label: '높은 가격순' },
    ];

    const startIndex = (page - 1) * pageSize;
    const currentAirports = sortedAirports.slice(startIndex, startIndex + pageSize);

    return (
        <main className="airport">
            <AirportSearchBarList />
            <div className="inner">
                <Filter />
                <div className="list-wrap airport-detail-list">
                    <div className="list-header">
                        <h3>총 {sortedAirports.length}개 항공권</h3>

                        {/* 정렬 드롭다운 */}
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
                            <p className="no-result">조건에 맞는 항공권이 없습니다.</p>
                        )}
                    </div>

                    <Pagination
                        page={page}
                        total={sortedAirports.length}
                        pageSize={pageSize}
                        onPageChange={setPage}
                    />
                </div>
            </div>
        </main>
    );
};

export default AirportDetail;
