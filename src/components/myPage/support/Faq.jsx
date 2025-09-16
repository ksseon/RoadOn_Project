// src/components/support/Faq.jsx
import { useMemo, useState } from 'react';
import TabButton2 from '../../ui/tabButton/TabButton2';
import FaqItem from './FaqItem';
import useSupportStore from '../../../store/supportStore';
import { usePagination } from '../../../store/paginationStore';
import Pagination from '../../ui/pagination/Pagination';

const TABS = ['TOP Q&A', '전체', '국내 숙소', '해외 숙소', '체험·투어', '회원 공통'];

const Faq = () => {
    const faqs = useSupportStore((state) => state.faqs);

    const [activeTab, setActiveTab] = useState('TOP Q&A');
    const [openIds, setOpenIds] = useState(new Set());

    // faq 네임스페이스로 페이지 상태 공유 (pageSize 고정 5)
    const { page, pageSize, setPage } = usePagination('faq', 5);

    const onTabClick = (label) => {
        setActiveTab(label);
        setOpenIds(new Set()); // 펼침 초기화
        setPage(1); // 페이지도 1로 리셋
    };

    const toggle = (id) =>
        setOpenIds((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });

    // 탭 필터링
    const filtered = useMemo(() => {
        if (activeTab === 'TOP Q&A') return faqs.filter((f) => !!f.isTop);
        if (activeTab === '전체') return faqs;
        return faqs.filter((f) => f.category === activeTab);
    }, [faqs, activeTab]);

    const total = filtered.length;
    const pageItems = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page, pageSize]);

    return (
        <div className="faq">
            <div className="tab-button-wrap2">
                {TABS.map((label) => (
                    <TabButton2
                        key={label}
                        label={label}
                        isActive={activeTab === label}
                        onClick={() => onTabClick(label)}
                    />
                ))}
            </div>

            <article className="faq-main-wrap">
                {pageItems.map((f) => (
                    <FaqItem
                        key={f.id}
                        id={f.id}
                        question={f.question}
                        answer={f.answer}
                        isOpen={openIds.has(f.id)}
                        onToggle={toggle}
                    />
                ))}
            </article>

            <Pagination page={page} total={total} pageSize={pageSize} onPageChange={setPage} />
        </div>
    );
};

export default Faq;
