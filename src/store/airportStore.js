import { create } from 'zustand';
import airportData from '../api/airportListData';

const allPrices = airportData.map((a) => a.price);
const ABS_MIN_PRICE = Math.min(...allPrices);
const ABS_MAX_PRICE = Math.max(...allPrices);
const STEP = 1000;

const useAirportStore = create((set, get) => ({
    airports: airportData,
    priceMin: ABS_MIN_PRICE,
    priceMax: ABS_MAX_PRICE,
    STEP,

    filters: {
        mode: 'roundtrip',
        direct: null,
        airline: null,
        baggage: null,
        priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
        segments: [],
        dates: [],
        people: 1,
        seat: '일반석',
    },

    // 다중 필터 설정 (search 시)
    setFilters: (patch) =>
        set((state) => ({
            filters: {
                ...state.filters,
                ...patch,
            },
        })),

    // 단일 필터 필드 설정 (filter UI 조작 시)
    setFilter: (patch) =>
        set((state) => ({
            filters: {
                ...state.filters,
                ...patch,
            },
        })),

    // 가격 필터만 변경
    setPriceRange: (min, max) =>
        set((state) => ({
            filters: {
                ...state.filters,
                priceRange: [min, max],
            },
        })),

    // 필터 전체 초기화
    resetFilter: () =>
        set({
            filters: {
                mode: 'roundtrip',
                direct: null,
                airline: null,
                baggage: null,
                priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
                segments: [],
                dates: [],
                people: 1,
                seat: '일반석',
            },
        }),

    // ID로 항공권 찾기
    getAirportById: (id) => get().airports.find((a) => a.id === id),

    // 필터 적용 항공권 리스트 반환
    getFilteredAirports: () => {
        const { airports, filters } = get();
        const [minP, maxP] = filters.priceRange;

        return airports.filter((a) => {
            // 가격
            if (a.price < minP || a.price > maxP) return false;

            // 직항/경유
            if (filters.direct !== null && a.direct !== filters.direct) return false;

            // 항공사
            if (filters.airline && a.airline !== filters.airline) return false;

            // 수화물
            if (filters.baggage && a.baggage !== filters.baggage) return false;

            // 출도착 구간 (단일 구간 기준)
            if (filters.segments?.length > 0) {
                const seg = filters.segments[0];
                const from = seg.from?.trim().toLowerCase();
                const to = seg.to?.trim().toLowerCase();

                if (from && !a.departureAirport.toLowerCase().includes(from)) return false;
                if (to && !a.arrivalAirport.toLowerCase().includes(to)) return false;
            }

            return true;
        });
    },
}));

export default useAirportStore;
