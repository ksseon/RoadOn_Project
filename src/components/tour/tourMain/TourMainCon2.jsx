import { useEffect, useMemo, useRef } from 'react';
// import useTourStore, { CATEGORY_LABELS } from '../../store/useTourStore';

// 최신 Swiper 방식
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useTourStore, { CATEGORY_LABELS } from '../../../store/tourStore';

const CategoryTabs = ({ active, onChange }) => (
    <div className="btns-wrap">
        {CATEGORY_LABELS.map((c) => (
            <button
                key={c}
                className={`button ${active === c ? 'o' : ''}`}
                onClick={() => onChange(c)}
                type="button"
            >
                {c}
            </button>
        ))}
    </div>
);

// 아이콘 매핑 (필요한 만큼 추가)
const ICONS = {
    calendar: '/images/icon/icon-calender.png',
    airplane: '/images/icon/icon-plane.png',
    plane: '/images/icon/icon-plane.png',
    hotel: '/images/icon/icon-suitcase.png',
    suitcase: '/images/icon/icon-suitcase.png',
    price: '/images/icon/icon-dollar.png',
    dollar: '/images/icon/icon-dollar.png',
    ticket: '/images/icon/icon-checklist.png',
    shopping: '/images/icon/icon-checklist.png',
    food: '/images/icon/icon-checklist.png',
    night: '/images/icon/icon-checklist.png',
    boat: '/images/icon/icon-checklist.png',
    camera: '/images/icon/icon-checklist.png',
    music: '/images/icon/icon-checklist.png',
    walk: '/images/icon/icon-checklist.png',
    cafe: '/images/icon/icon-checklist.png',
    map: '/images/icon/icon-checklist.png',
    bus: '/images/icon/icon-checklist.png',
};

export default function TourMainCon2({
    initialCategory = '예능',
    initialIndex = 0,
    initialTourId, // 있으면 해당 투어로 이동(블랙핑크는 기본 제외라 매칭 안 됨)
}) {
    const swiperRef = useRef(null);

    // Zustand state/selectors
    const activeCategory = useTourStore((s) => s.activeCategory);
    const activeIndex = useTourStore((s) => s.activeIndex);
    const tours = useTourStore((s) => s.tours);
    const excludedIds = useTourStore((s) => s.excludedIds);
    const setCategory = useTourStore((s) => s.setCategory);
    const setIndex = useTourStore((s) => s.setIndex);

    // 카테고리 + 제외 반영된 현재 슬라이드 목록
    const slides = useMemo(() => {
        return tours.filter((t) => !excludedIds.has(t.id) && t.category === activeCategory);
    }, [tours, excludedIds, activeCategory]);

    // 초기 세팅
    useEffect(() => {
        // 1) 초기 카테고리
        setCategory(initialCategory);

        // 2) 특정 tourId로 열기 (제외 대상이면 무시)
        if (initialTourId) {
            const target = tours.find((t) => t.tourId === initialTourId && !excludedIds.has(t.id));
            if (target) {
                // 해당 카테고리로 전환 후 인덱스 계산
                setTimeout(() => {
                    setCategory(target.category);
                    const idx = tours
                        .filter((t) => !excludedIds.has(t.id) && t.category === target.category)
                        .findIndex((t) => t.tourId === target.tourId);
                    if (idx >= 0) {
                        setIndex(idx);
                        swiperRef.current?.swiper?.slideTo(idx, 0);
                    }
                }, 0);
                return;
            }
        }

        // 3) 단순 인덱스로 시작
        setTimeout(() => {
            setIndex(initialIndex);
            swiperRef.current?.swiper?.slideTo(initialIndex, 0);
        }, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSlideChange = (sw) => setIndex(sw.activeIndex);

    const handleCategoryChange = (cat) => {
        setCategory(cat);
        requestAnimationFrame(() => {
            swiperRef.current?.swiper?.slideTo(0, 0);
        });
    };

    const current = slides[activeIndex];
    const bgUrl = current?.backgroundImg || '';

    return (
        <section
            className="tour-main-con tour-main-con2"
            style={{
                backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="inner">
                {/* 카테고리 버튼 */}
                <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />

                {/* 메인 슬라이더 */}
                <Swiper
                    ref={swiperRef}
                    className="main-section-wrap"
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={handleSlideChange}
                    speed={550}
                >
                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <article className="main-section-wrap">
                                {/* 제목/설명 */}
                                <section className="title-section">
                                    <div className="txt-box">
                                        <strong>{item.title}</strong>
                                        <h3>{item.subtitle}</h3>
                                        <p>“{item.description}”</p>
                                    </div>

                                    {/* 아이콘 요약 */}
                                    <div className="icons-wrap">
                                        {(item.benefits || []).slice(0, 5).map((b, i) => (
                                            <div className="icon-box" key={`${item.id}-b-${i}`}>
                                                <b className="img-wrap">
                                                    <img
                                                        src={ICONS[b.icon] || ICONS.ticket}
                                                        alt={b.icon}
                                                    />
                                                </b>
                                                <p>{b.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* 이미지 */}
                                <section className="img-section">
                                    <div className="img-wrap">
                                        <img src={item.posterImg} alt={item.slug || item.id} />
                                    </div>
                                </section>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 자세히 보기 */}
                <div className="more-wrap">
                    <button
                        className="button more o"
                        type="button"
                        onClick={() => {
                            if (!current) return;
                            window.location.href = `/tour/${current.slug || current.id}`;
                        }}
                    >
                        자세히 보기
                    </button>
                </div>
            </div>
        </section>
    );
}
