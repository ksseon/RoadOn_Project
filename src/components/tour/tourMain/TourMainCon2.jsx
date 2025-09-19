// src/components/tour/TourMainCon2/index.jsx
import { useEffect, useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useTourStore, { CATEGORY_LABELS } from '../../../store/tourStore';
import { useNavigate } from 'react-router-dom';

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

// 아이콘 매핑 (키가 없을 경우 ticket로 폴백)
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

/** 카테고리 자동 순환 훅 */
function useAutoRotateCategories(enabled = true, intervalMs = 8000) {
    const activeCategory = useTourStore((s) => s.activeCategory);
    const setCategory = useTourStore((s) => s.setCategory);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!enabled) return;
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            const idx = CATEGORY_LABELS.indexOf(activeCategory);
            const next = CATEGORY_LABELS[(idx + 1) % CATEGORY_LABELS.length];
            setCategory(next);
        }, intervalMs);
        return () => clearInterval(timerRef.current);
    }, [enabled, intervalMs, activeCategory, setCategory]);
}

export default function TourMainCon2({
    initialCategory = '예능',
    initialIndex = 0,
    initialTourId, // (숫자) 스토어에서 매핑된 tourId 사용 가능
    autoRotateCategories = true,
    categoryIntervalMs = 8000,
    slideDelayMs = 3500,
}) {
    const swiperRef = useRef(null);

    const navigate = useNavigate();

    // Zustand
    const activeCategory = useTourStore((s) => s.activeCategory);
    const activeIndex = useTourStore((s) => s.activeIndex);
    const tours = useTourStore((s) => s.tours);
    const excludedIds = useTourStore((s) => s.excludedIds);
    const setCategory = useTourStore((s) => s.setCategory);
    const setIndex = useTourStore((s) => s.setIndex);

    // 카테고리 자동 순환
    useAutoRotateCategories(autoRotateCategories, categoryIntervalMs);

    // 현재 카테고리의 유효 슬라이드
    const slides = useMemo(() => {
        const arr = tours.filter((t) => !excludedIds.has(t.id) && t.category === activeCategory);
        return arr;
    }, [tours, excludedIds, activeCategory]);

    // activeIndex가 슬라이드 길이를 벗어나면 클램프
    useEffect(() => {
        if (!slides.length) {
            if (activeIndex !== 0) setIndex(0);
            return;
        }
        if (activeIndex >= slides.length) {
            setIndex(slides.length - 1);
            swiperRef.current?.swiper?.slideTo(slides.length - 1, 0);
        }
    }, [slides.length, activeIndex, setIndex]);

    // 초기 설정 (카테고리/슬라이드 동기화)
    useEffect(() => {
        setCategory(initialCategory);

        // 숫자형 tourId로 직접 이동
        if (initialTourId != null) {
            const target = tours.find((t) => t.tourId === initialTourId && !excludedIds.has(t.id));
            if (target) {
                setTimeout(() => {
                    setCategory(target.category);
                    const arr = tours.filter(
                        (t) => !excludedIds.has(t.id) && t.category === target.category
                    );
                    const idx = arr.findIndex((t) => t.tourId === target.tourId);
                    const to = Math.max(0, idx);
                    setIndex(to);
                    swiperRef.current?.swiper?.slideTo(to, 0);
                }, 0);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                return;
            }
        }

        // fallback: index로 이동
        setTimeout(() => {
            const to = Math.max(0, Math.min(initialIndex, Math.max(0, slides.length - 1)));
            setIndex(to);
            swiperRef.current?.swiper?.slideTo(to, 0);
        }, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSlideChange = (sw) => setIndex(sw.activeIndex);

    const handleCategoryChange = (cat) => {
        setCategory(cat);
        // 카테고리 바뀌면 첫 슬라이드로
        requestAnimationFrame(() => {
            swiperRef.current?.swiper?.slideTo(0, 0);
            setIndex(0);
        });
    };

    const current = slides[activeIndex];
    const bgUrl = current?.backgroundImg || '';
    const enableLoop = slides.length > 1;

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
                <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />

                {/* 빈 상태 가드 */}
                {!slides.length ? (
                    <div className="main-section-wrap empty">
                        <p>해당 카테고리에 표시할 투어가 없습니다.</p>
                    </div>
                ) : (
                    <Swiper
                        key={activeCategory} // 카테고리 바뀔 때 Swiper 재초기화
                        ref={swiperRef}
                        className="main-section-wrap"
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={
                            enableLoop
                                ? {
                                      delay: slideDelayMs,
                                      disableOnInteraction: false,
                                      pauseOnMouseEnter: true,
                                  }
                                : false
                        }
                        loop={enableLoop}
                        onSlideChange={handleSlideChange}
                        speed={550}
                    >
                        {slides.map((item) => (
                            <SwiperSlide key={item.id}>
                                <article className="main-section-wrap">
                                    <section className="title-section">
                                        <div className="txt-box">
                                            <strong>{item.title}</strong>
                                            <h3>{item.subtitle}</h3>
                                            <p>“{item.description}”</p>
                                        </div>

                                        <div className="icons-wrap">
                                            {(item.benefits || []).slice(0, 5).map((b, i) => (
                                                <div className="icon-box" key={`${item.id}-b-${i}`}>
                                                    <b className="img-wrap">
                                                        <img
                                                            src={ICONS[b?.icon] || ICONS.ticket}
                                                            alt={b?.icon || 'benefit'}
                                                        />
                                                    </b>
                                                    <p>{b?.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="img-section">
                                        <div className="img-wrap">
                                            <img src={item.posterImg} alt={item.slug || item.id} />
                                        </div>
                                    </section>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                <div className="more-wrap">
                    <button
                        className="button more o"
                        type="button"
                        onClick={() => {
                            if (!current) return;
                            navigate(`/tour/${current.slug || current.id}`);
                        }}
                    >
                        자세히 보기
                    </button>
                </div>
            </div>
        </section>
    );
}
