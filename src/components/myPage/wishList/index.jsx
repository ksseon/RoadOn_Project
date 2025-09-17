// src/components/myPage/wishList.jsx
import React, { useEffect, useMemo, useState } from 'react';
import useHotelStore from '../../../store/hotelStore';
import { usePagination } from '../../../store/paginationStore';
import HotelBox from '../../hotels/hotelsSearch/HotelBox';
import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
import TabButton from '../../ui/tabButton/TabButton';
import Pagination from '../../ui/pagination/Pagination';
// import Pagination from '../../ui/pagination'; // 경로 프로젝트에 맞춰 유지

const WishList = ({ preview = true, onMore = () => {}, previewCount = 2 }) => {
    // ---------------------------
    // 항상 같은 순서로 훅 선언 (절대 조건문 안에서 훅 호출하지 않음)
    // ---------------------------
    const hotels = useHotelStore((state) => state.hotels) || [];

    const TABS = ['전체', '국내 숙소', '해외 숙소', '체험·투어 입장권'];
    const [activeTab, setActiveTab] = useState(TABS[0]);

    // pagination 훅도 항상 호출 — 키는 컴포넌트별로 겹치지 않게
    const { page, pageSize, setPage } = usePagination('wishlist', 5);

    // 탭 변경 시 페이지 리셋 (항상 같은 useEffect)
    useEffect(() => {
        setPage(1);
    }, [activeTab, setPage]);

    // ---------------------------
    // 데이터 계산 (훅 다음에 안전하게 수행)
    // ---------------------------
    const total = hotels.length;

    // previewList와 pageItems는 모두 계산하지만 렌더에서 적절히 사용
    const previewList = useMemo(() => hotels.slice(0, previewCount), [hotels, previewCount]);

    const pageItems = useMemo(() => {
        const start = (page - 1) * pageSize;
        return hotels.slice(start, start + pageSize);
    }, [hotels, page, pageSize]);

    // ---------------------------
    // 렌더: 훅 호출 순서와 무관하게 렌더 분기만 수행
    // ---------------------------
    if (preview) {
        return (
            <section id="wish-list">
                <div className="mypage-title-wrap">
                    <h2 className="mypage-title">찜 목록</h2>

                    <p
                        className="more"
                        role="button"
                        tabIndex={0}
                        onClick={onMore}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                onMore();
                            }
                        }}
                    >
                        더보기
                        <em>
                            <IoIosArrowForward />
                        </em>
                    </p>
                </div>

                <article className="wish-list-main-wrap">
                    <div className="list-box">
                        {previewList.length > 0 ? (
                            previewList.map((hotel) => (
                                <HotelBox key={hotel.id} hotelId={hotel.id} />
                            ))
                        ) : (
                            <p className="empty">찜한 숙소가 없습니다.</p>
                        )}
                    </div>
                </article>
            </section>
        );
    }

    // 전체 모드: 탭은 UI 전환만 (필터링 원하면 matchesTab을 추가)
    return (
        <section id="wish-list">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">
                    찜 목록
                    <div
                        className="tab-button-wrap2"
                        style={{ display: 'inline-block', marginLeft: 12 }}
                    ></div>
                </h2>
            </div>
            <div className="tab-button-wrap" aria-hidden={false}>
                {TABS.map((label) => (
                    <TabButton
                        key={label}
                        label={label}
                        isActive={activeTab === label}
                        onClick={() => setActiveTab(label)}
                    />
                ))}
            </div>
            <article className="wish-list-main-wrap">
                <div className="list-box">
                    {pageItems.length > 0 ? (
                        pageItems.map((hotel) => <HotelBox key={hotel.id} hotelId={hotel.id} />)
                    ) : (
                        <p className="empty">조건에 맞는 찜 숙소가 없습니다.</p>
                    )}
                </div>
            </article>

            <Pagination page={page} total={total} pageSize={pageSize} onPageChange={setPage} />
        </section>
    );
};

export default WishList;
