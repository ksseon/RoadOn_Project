// src/components/myPage/reserve.jsx
import React, { useEffect, useMemo, useState } from 'react';
import TabButton from '../../ui/tabButton/TabButton';
import ReserveItem from './reserveItem';
import './style.scss';
import { IoIosArrowForward } from 'react-icons/io';
import Pagination from '../../ui/pagination/Pagination';

const Reserve = ({ preview = true, previewCount = 2, onMore = () => {}, items = [] }) => {
    const TABS = ['전체', '국내 숙소', '해외 숙소', '체험·투어 입장권'];
    const [activeTab, setActiveTab] = useState(TABS[0]);

    // 로컬 페이징 (혹은 기존 usePagination으로 바꿔도 됨)
    const [page, setPage] = useState(1);
    const pageSize = 5;

    useEffect(() => setPage(1), [activeTab]);

    const data = Array.isArray(items) ? items : [];
    const previewItems = data.length > 0 ? data.slice(0, previewCount) : null;

    const total = data.length;
    const pageItems = useMemo(() => {
        const start = (page - 1) * pageSize;
        return data.slice(start, start + pageSize);
    }, [data, page, pageSize]);

    // (디버그) 확인용 로그 — 배포 땐 지우세요
    // console.log('Reserve preview:', preview, 'previewCount:', previewCount, 'items.length:', data.length);

    return (
        <section id="reserve">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">예약내역</h2>

                {preview ? (
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
                ) : null}
            </div>
            <div className="tab-button-wrap2" aria-hidden={false}>
                {TABS.map((label) => (
                    <TabButton
                        key={label}
                        label={label}
                        isActive={activeTab === label}
                        onClick={() => setActiveTab(label)}
                    />
                ))}
            </div>
            <div className="reserve-table-wrap">
                <table className="reserve-table">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">예약일</th>
                            <th scope="col">예약코드</th>
                            <th scope="col">상품명</th>
                            <th scope="col">결제 금액</th>
                            <th scope="col">인원</th>
                            <th scope="col">출발일/귀국일</th>
                            <th scope="col">여행/예약상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preview ? (
                            previewItems && previewItems.length > 0 ? (
                                previewItems.map((r) => (
                                    <ReserveItem key={r.id ?? r.reservationId} data={r} />
                                ))
                            ) : (
                                <>
                                    <ReserveItem />
                                    <ReserveItem />
                                </>
                            )
                        ) : pageItems.length > 0 ? (
                            pageItems.map((r) => (
                                <ReserveItem key={r.id ?? r.reservationId} data={r} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="empty">
                                    예약 내역이 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {!preview && (
                <Pagination page={page} total={total} pageSize={pageSize} onPageChange={setPage} />
            )}
        </section>
    );
};

export default Reserve;
