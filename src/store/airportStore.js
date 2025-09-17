import { create } from 'zustand';
import airportData from '../api/airportListData';

// 전체 가격 범위
const allPrices = airportData.map((a) => a.price);
const ABS_MIN_PRICE = Math.min(...allPrices);
const ABS_MAX_PRICE = Math.max(...allPrices);
const STEP = 1000;

const useAirportStore = create((set, get) => ({
    airports: airportData,
    priceMin: ABS_MIN_PRICE,
    priceMax: ABS_MAX_PRICE,
    filters: {
        mode: 'roundtrip', // 왕복/편도/다구간
        direct: null,
        airline: null,
        baggage: null,
        priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
    },

    getAirportById: (id) => get().airports.find((a) => a.id === id),

    setFilter: (patch) =>
        set((s) => ({
            filters: { ...s.filters, ...patch },
        })),

    setPriceRange: (min, max) =>
        set((s) => ({
            filters: { ...s.filters, priceRange: [min, max] },
        })),

    resetFilter: () =>
        set({
            filters: {
                mode: 'roundtrip',
                direct: null,
                airline: null,
                baggage: null,
                priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
            },
        }),

    getFilteredAirports: () => {
        const { airports, filters } = get();
        const [minP, maxP] = filters.priceRange;

        return airports.filter((a) => {
            if (filters.direct !== null && a.direct !== filters.direct) return false;
            if (filters.airline && a.airline !== filters.airline) return false;
            if (filters.baggage && a.baggage !== filters.baggage) return false;
            if (a.price < minP || a.price > maxP) return false;
            return true;
        });
    },

    STEP,
}));

export default useAirportStore;
