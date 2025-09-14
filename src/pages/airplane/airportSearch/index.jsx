import AirportSearchBarList from "../../../components/ui/AirportSearchBarList/AirportSearchBarList";
import Filter from "../../../components/airport/airportSearch/Filter";
import AirportBox from "../../../components/airport/airportSearch/AirportBox";
import useAirportStore from "../../../store/airportStore";
import "../style.scss";

const AirportSearch = () => {
  const airports = useAirportStore((state) => state.airports);

  return (
    <main className="airport">
      <AirportSearchBarList />
      <div className="inner">
        <Filter />
        <div className="list-wrap">
          <div className="list-top">
            <p>총 {airports.length}개 항공권</p>
            <div className="sort"></div>
          </div>
          <div className="list-box">
            {airports.map((airport) => (
              <AirportBox key={airport.id} airportId={airport.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AirportSearch;
