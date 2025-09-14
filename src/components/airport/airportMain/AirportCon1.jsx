import "./style.scss";
import AirportSearchBar from "../../../components/ui/AirportSearchBar";

const AirportCon1 = () => {
  return (
    <section className="airport-main-con airport-main-con1">
      <div className="visual-bg"></div>

      <div className="inner">
        <AirportSearchBar />
      </div>
    </section>
  );
};

export default AirportCon1;
