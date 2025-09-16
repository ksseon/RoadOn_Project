import React from 'react';
import useAirportStore from '../../../store/airportStore';
import AirportBox from './AirportBox';

const AirportBoxList = () => {
    // 필터가 바뀌면 리렌더되도록 구독
    // eslint-disable-next-line no-unused-vars
    const filters = useAirportStore((s) => s.filters);

    const getFilteredAirports = useAirportStore((s) => s.getFilteredAirports);
    const airports = getFilteredAirports();

    return (
        <section className="airport-box-list">
            <h3>총 {airports.length.toLocaleString('ko-KR')}개 항공권</h3>
            <div className="fillter-box"></div>
            {airports.length > 0 ? (
                airports.map((a) => <AirportBox key={a.id} airportId={a.id} />)
            ) : (
                <p>조건에 맞는 항공권이 없습니다.</p>
            )}
        </section>
    );
};

export default AirportBoxList;
