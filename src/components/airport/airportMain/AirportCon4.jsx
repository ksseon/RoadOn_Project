import { FiMapPin } from "react-icons/fi";

const AirportCon4 = () => {
  const hotel = [
    {
      id: 1,
      type: "특급",
      title: "한국판 라스베이거스 인스파이어 리조트",
      desc: "엔터테인먼트 리조트의 새로운 기준",
      img: "/images/airport/roadon_img1.png",
    },
    {
      id: 2,
      type: "특급",
      title: "한 송이의 포도 제주 핑크스 포도호텔",
      desc: "예술철학이 녹아든 공간에서의 경험",
      img: "/images/airport/roadon_img2.png",
    },
    {
      id: 3,
      type: "풀빌라",
      title: "편백나무 향이 가득한 양평 다가섬 풀빌라&펜션",
      desc: "일상의 균형과 치유의 공간",
      img: "/images/airport/roadon_img3.png",
    },
    {
      id: 4,
      type: "풀빌라",
      title: "힐링이 있는 양평 다가섬 풀빌라&펜션",
      desc: "일상의 균형과 치유의 공간",
      img: "/images/airport/roadon_img4.png",
    },
  ];

  return (
    <section className="airport-main-con airport-main-con4">
      <div className="inner">
        <h3>
          <img src="/images/airport/roadon.png" alt="로드온" />이 꼽은 요즘 뜨는
          여행지
        </h3>

        <div className="promo-list">
          {hotel.map((h) => (
            <div className="promo-card-con4" key={h.id}>
              <img src={h.img} alt={h.title} />
              <div className="info">
                <small className="type">{h.type}</small>
                <h5 className="title">{h.title}</h5>
                <p className="desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportCon4;
