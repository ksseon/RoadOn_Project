const iconSrc = {
    calendar: '/images/icon/icon-calender.png',
    airplane: '/images/icon/icon-plane.png',
    plane: '/images/icon/icon-plane.png',
    hotel: '/images/icon/icon-suitcase.png',
    suitcase: '/images/icon/icon-suitcase.png',
    price: '/images/icon/icon-dollar.png',
    dollar: '/images/icon/icon-dollar.png',
    checklist: '/images/icon/icon-checklist.png',
    ticket: '/images/icon/icon-checklist.png',
    gift: '/images/icon/icon-checklist.png',
    food: '/images/icon/icon-checklist.png',
    sun: '/images/icon/icon-checklist.png',
};

export default function TourSlideCard({ item }) {
    return (
        <article className="main-section-wrap">
            {/* 타이틀 영역 */}
            <section className="title-section">
                <div className="txt-box">
                    <strong>{item.title}</strong>
                    <h3>{item.subtitle}</h3>
                    <p>“{item.description}”</p>
                </div>

                {/* 아이콘 요약: benefits 가 있으면 표시, 없으면 schedule로 대체 */}
                <div className="icons-wrap">
                    {(item.benefits?.length ? item.benefits : []).slice(0, 5).map((b, i) => (
                        <div className="icon-box" key={i}>
                            <b className="img-wrap">
                                <img src={iconSrc[b.icon] || iconSrc.checklist} alt={b.icon} />
                            </b>
                            <p>{b.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 이미지 영역 */}
            <section className="img-section">
                <div className="img-wrap">
                    <img src={item.posterImg} alt={item.slug || item.id} />
                </div>
            </section>
        </article>
    );
}
