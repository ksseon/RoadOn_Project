import { create } from 'zustand';
import airportData from '../api/airportListData'; // 항공권 데이터 import

const useAirportStore = create((set, get) => ({
    // 모든 항공권 데이터
    airports: airportData,

    // 현재 선택된 필터 값
    filters: {
        direct: null, // true = 직항, false = 경유, null = 전체
        airline: null, // 특정 항공사 이름 or null
        baggage: null, // '포함' or null
    },

    // 특정 항공권 ID로 찾기
    getAirportById: (id) => {
        const { airports } = get();
        return airports.find((airport) => airport.id === id);
    },

    // 필터 업데이트
    setFilter: (newFilter) =>
        set((state) => ({
            filters: { ...state.filters, ...newFilter },
        })),

    // 필터 초기화
    resetFilter: () =>
        set({
            filters: { direct: null, airline: null, baggage: null },
        }),

    // 필터링된 항공권 리스트 가져오기
    getFilteredAirports: () => {
        const { airports, filters } = get();

        return airports.filter((a) => {
            if (filters.direct !== null && a.direct !== filters.direct) return false;
            if (filters.airline && a.airline !== filters.airline) return false;
            if (filters.baggage && a.baggage !== filters.baggage) return false;
            return true;
        });
    },
}));

export default useAirportStore;
