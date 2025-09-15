import { FiMapPin } from "react-icons/fi";

const AirportCon2 = () => {
  const promos = [
    {
      id: 1,
      type: "호텔 비즈니스",
      title: "호텔 골든데이지 서귀포 오션",
      location: "서귀포시, 제주",
      locationIcon: <FiMapPin />,
      originalPrice: "350,000원",
      price: "280,000원",
      discount: "20%",
      img: "/images/airport/promo_img1.png",
    },
    {
      id: 2,
      type: "호텔 프리미엄",
      title: "호텔 콘티넨탈 서귀포 오션",
      location: "서귀포시, 제주",
      locationIcon: <FiMapPin />,
      originalPrice: "330,000원",
      price: "260,000원",
      discount: "21%",
      img: "/images/airport/promo_img1.png",
    },
    {
      id: 3,
      type: "호텔 리조트",
      title: "호텔 오션뷰 스위트",
      location: "제주시, 제주",
      locationIcon: <FiMapPin />,
      originalPrice: "400,000원",
      price: "320,000원",
      discount: "20%",
      img: "/images/airport/promo_img1.png",
    },
    {
      id: 4,
      type: "호텔 럭셔리",
      title: "호텔 라마다 제주 오션",
      location: "제주시, 제주",
      locationIcon: <FiMapPin />,
      originalPrice: "500,000원",
      price: "390,000원",
      discount: "22%",
      img: "/images/airport/promo_img1.png",
    },
  ];

  return (
    <section className="airport-main-con airport-main-con2">
      <div className="inner">
        <h3>가을 최대 20% 혜택으로 특별한 여행</h3>
        <h4>
          가을 정취 물씬 풍기는 감성 숙소부터 아늑한 온천 펜션을 만나보세요
        </h4>

        <div className="promo-list">
          {promos.map((p) => (
            <div className="promo-card-con" key={p.id}>
              <img src={p.img} alt={p.title} />
              <div className="info">
                <small className="type">{p.type}</small>
                <h5 className="title">{p.title}</h5>
                <p className="location">
                  <FiMapPin  className="icon" /> {p.location}
                </p>
                <div className="price-box">
                  <del className="original">{p.originalPrice}</del>
                  <span className="discount">{p.discount}</span>
                  <strong className="price">{p.price}</strong>
                  <span> / 박</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportCon2;
