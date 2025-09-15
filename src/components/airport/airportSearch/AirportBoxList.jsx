import useAirportStore from '../../../store/airportStore';
import AirportBox from './AirportBox';

const AirportBoxList = () => {
    const getFilteredAirports = useAirportStore((state) => state.getFilteredAirports);
    const airports = getFilteredAirports();

    return (
        <div className="airport-box-list">
            <h3>총 {airports.length}개 항공권</h3>
            {airports.length > 0 ? (
                airports.map((airport) => <AirportBox key={airport.id} airportId={airport.id} />)
            ) : (
                <p>조건에 맞는 항공권이 없습니다.</p>
            )}
        </div>
    );
};

export default AirportBoxList;
