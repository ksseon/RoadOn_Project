
import useHotelStore from '../../../store/hotelStore';
// import HotelBox from '../../hotels/hotelsSearch/HotelBox';
// src/components/myPage/wishList.jsx
import { useEffect, useMemo, useState } from 'react';
import { usePagination } from '../../../store/paginationStore';
import HotelBox from '../../hotels/hotelsSearch/HotelBox';
import AirportBox from '../../airport/airportSearch/AirportBox';
import TourBox from '../../tour/TourBox';
import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
import TabButton from '../../ui/tabButton/TabButton';
import Pagination from '../../ui/pagination/Pagination';
import useWishStore from '../../../store/wishStore';

const TABS = ['전체', '국내 숙소', '해외 숙소', '체험·투어 입장권'];

const KOREAN_REGIONS = [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
];

const isDomesticHotel = (item) => {
    const loc = (item?.data?.location || '').toString();
    if (!loc) return false;
    return KOREAN_REGIONS.some((kw) => loc.includes(kw));
};

const WishList = ({ preview = true, onMore = () => {}, previewCount = 2 }) => {
    // separate selectors -> 불필요한 리렌더 방지
    const itemsFromStore = useWishStore((s) => s.items);
    const itemsDetailed = useWishStore((s) => s.itemsDetailed);

    const rawItems = itemsDetailed ?? itemsFromStore ?? [];

    const items = useMemo(
        () =>
            rawItems.map((it) => {
                const uid = it.uid || `${it.type}-${it.id}`;
                const type = (it.type || '').toString().toLowerCase();
                return { uid, type, id: it.id, data: it.data ?? null };
            }),
        [rawItems]
    );

    const [activeTab, setActiveTab] = useState(TABS[0]);
    const { page, pageSize, setPage } = usePagination('wishlist', 5);

    const currentPage = Number(page) || 1;
    const currentPageSize = Number(pageSize) || 5;

    // 탭 변경 시 페이지를 1로 리셋하되, 이미 1이면 호출하지 않음 -> 무한 루프 방지
    useEffect(() => {
        if (Number(page) !== 1) {
            setPage(1);
        }
        // activeTab 변경 시에만 검사하도록 activeTab을 deps에 넣음
    }, [activeTab, page, setPage]);

    // 필터링
    const filtered = useMemo(() => {
        if (activeTab === '전체') return items;
        if (activeTab === '국내 숙소')
            return items.filter((it) => it.type === 'hotel' && isDomesticHotel(it));
        if (activeTab === '해외 숙소')
            return items.filter((it) => it.type === 'hotel' && !isDomesticHotel(it));
        if (activeTab === '체험·투어 입장권')
            return items.filter((it) => it.type === 'package' || it.type === 'tour');
        return items;
    }, [items, activeTab]);

    const total = filtered.length;

    // total 변화로 인해 현재 페이지가 범위를 벗어나면 1로 보정 (이때도 이미 1이면 호출 안 함)
    useEffect(() => {
        const maxPage = Math.max(1, Math.ceil(total / currentPageSize));
        if (Number(page) > maxPage) {
            setPage(1);
        }
    }, [total, currentPageSize, page, setPage]);

    const previewList = useMemo(() => filtered.slice(0, previewCount), [filtered, previewCount]);

    const pageItems = useMemo(() => {
        const start = (currentPage - 1) * currentPageSize;
        return filtered.slice(start, start + currentPageSize);
    }, [filtered, currentPage, currentPageSize]);

    const renderItem = (it) => {
        if (it.type === 'hotel') return <HotelBox key={it.uid} hotelId={it.id} />;
        if (it.type === 'flight' || it.type === 'air' || it.type === 'airport')
            return <AirportBox key={it.uid} airportId={it.id} />;
        if (it.type === 'package' || it.type === 'tour')
            return <TourBox key={it.uid} packageId={it.id} />;
        return (
            <div key={it.uid} className="wish-unknown">
                <strong>알 수 없는 항목</strong> - {it.type} / {String(it.id)}
            </div>
        );
    };

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
                            previewList.map((it) => renderItem(it))
                        ) : (
                            <p className="empty">찜한 항목이 없습니다.</p>
                        )}
                    </div>
                </article>
            </section>
        );
    }

    return (
        <section id="wish-list">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">
                    찜 목록
                    <div
                        className="tab-button-wrap2"
                        style={{ display: 'inline-block', marginLeft: 12 }}
                    />
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
                        pageItems.map((it) => renderItem(it))
                    ) : (
                        <p className="empty">조건에 맞는 찜 항목이 없습니다.</p>
                    )}
                </div>
            </article>

            <Pagination
                page={currentPage}
                total={total}
                pageSize={currentPageSize}
                onPageChange={setPage}
            />
        </section>
    );
};

export default WishList;
