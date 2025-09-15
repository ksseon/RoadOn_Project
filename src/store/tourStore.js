import { create } from 'zustand';
import tourData from '../api/tourData'; // 경로는 프로젝트 구조에 맞게

export const CATEGORY_LABELS = ['드라마', '영화', '예능', 'K-POP'];

const useTourStore = create((set, get) => ({
    // 원본 데이터
    tours: tourData,

    // 기본 제외: 블랙핑크만
    excludedIds: new Set(['blackpink-concert']),

    // UI 상태
    activeCategory: '예능',
    activeIndex: 0,

    // actions
    setCategory: (cat) => set({ activeCategory: cat, activeIndex: 0 }),
    setIndex: (idx) => set({ activeIndex: idx }),

    // 제외 제어(필요 시 페이지별 override)
    excludeIds: (ids) => set({ excludedIds: new Set(ids) }),
    toggleExclude: (id) => {
        const next = new Set(get().excludedIds);
        next.has(id) ? next.delete(id) : next.add(id);
        set({ excludedIds: next });
    },
}));

export default useTourStore;
