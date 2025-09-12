const AirportCon5 = () => {
  const events = [
    {
      id: 1,
      title: "해외에서 데이터 절약! 와이파이 & eSIM",
      img: "/images/airport/event_img1.png",
    },
    {
      id: 2,
      title: "로오돈 고객 여행자 보험 10% 즉시할인",
      img: "/images/airport/event_img2.png",
    },
    {
      id: 3,
      title: "카드사 혜택 해외 항공권 할인",
      img: "/images/airport/event_img3.png",
    },
  ];

  return (
    <section className="airport-main-con airport-main-con5">
      <div className="inner">
        <h3>다양한 이벤트</h3>

        <div className="promo-list">
          {events.map((e) => (
            <div className="event-card" key={e.id}>
              <img src={e.img} alt={e.title} />
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportCon5;
