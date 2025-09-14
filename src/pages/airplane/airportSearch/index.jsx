// import ModalDemo from '../../components/ui/modal/Modal';
import Filter from "../../../components/hotels/hotelsSearch/Filter";
import HotelBox from "../../../components/hotels/hotelsSearch/hotelBox";
import MapModal from "../../../components/hotels/hotelsSearch/MapModal";
import SearchBar from "../../../components/ui/SearchBar/SearchBar";
import useHotelStore from "../../../store/hotelStore";
import "../style.scss";

function hotelsSearch() {
  const hotels = useHotelStore((state) => state.hotels);
  return (
    <main className="hotel">
      <SearchBar />
      <div className="inner">
        <Filter />
        <div className="list-wrap">
          <div className="list-top">
            <p>총 {hotels.length}개 숙소</p> {/* js로 숙소 개수 추가 */}
            <div className="sort"></div>
          </div>
          <div className="list-box">
            {/* 컴포넌트로 빼기 */}
            {hotels.map((hotel) => (
              <HotelBox
                key={hotel.id}
                hotelId={hotel.id} // HotelBox에 전달
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default hotelsSearch;
