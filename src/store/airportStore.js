import { create } from "zustand";
import airportData from "../api/airportListData";

// 가격 절대 범위(데이터 기준)
const ABS_MIN = Math.min(...airportData.map((a) => a.price));
const ABS_MAX = Math.max(...airportData.map((a) => a.price));

const useAirportStore = create((set, get) => ({
  // 원본 데이터
  airports: airportData,

  // 현재 필터 값
  filters: {
    direct: null, // true: 직항, false: 경유, null: 전체
    airline: null, // '대한항공' | '에어서울' | ... | null
    baggage: null, // '포함' | null
    priceMin: ABS_MIN,
    priceMax: ABS_MAX,
  },

  // 정렬: none | price-asc | price-desc
  sortOrder: "none",

  // === 셀렉터/액션들 ===
  getAbsPriceRange: () => ({ min: ABS_MIN, max: ABS_MAX }),

  // AirportBox에서 사용
  getAirportById: (id) => {
    const { airports } = get();
    return airports.find((a) => a.id === id);
  },

  setFilter: (partial) =>
    set((s) => ({ filters: { ...s.filters, ...partial } })),

  setPriceRange: (min, max) =>
    set((s) => ({ filters: { ...s.filters, priceMin: min, priceMax: max } })),

  resetFilter: () =>
    set({
      filters: {
        direct: null,
        airline: null,
        baggage: null,
        priceMin: ABS_MIN,
        priceMax: ABS_MAX,
      },
    }),

  setSortOrder: (order) => set({ sortOrder: order }),

  // 필터 + 정렬 결과
  getFilteredAirports: () => {
    const { airports, filters, sortOrder } = get();
    const { direct, airline, baggage, priceMin, priceMax } = filters;

    let list = airports.filter((a) => {
      if (direct !== null && a.direct !== direct) return false;
      if (airline && a.airline !== airline) return false;
      if (baggage && a.baggage !== baggage) return false;
      if (a.price < priceMin || a.price > priceMax) return false;
      return true;
    });

    if (sortOrder === "price-asc")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);

    return list;
  },
}));

export default useAirportStore;
