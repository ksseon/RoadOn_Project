import { create } from "zustand";
import airportData from "../api/airportListData";

const allPrices = airportData.map((a) => a.price);
const ABS_MIN_PRICE = Math.min(...allPrices);
const ABS_MAX_PRICE = Math.max(...allPrices);
const STEP = 1000;

const useAirportStore = create((set, get) => ({
  airports: airportData,
  priceMin: ABS_MIN_PRICE,
  priceMax: ABS_MAX_PRICE,
  filters: {
    direct: null, // 직항 여부
    airline: null, // 항공사
    baggage: null, // 수하물 여부
    priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
    from: null, // 출발지
    to: null, // 도착지
    dates: null, // 날짜 (왕복/편도/다구간 포함)
    people: 1,
    seat: "일반석",
  },

  getAirportById: (id) => get().airports.find((a) => a.id === id),

  setFilter: (patch) =>
    set((s) => ({
      filters: { ...s.filters, ...patch },
    })),

  resetFilter: () =>
    set({
      filters: {
        direct: null,
        airline: null,
        baggage: null,
        priceRange: [ABS_MIN_PRICE, ABS_MAX_PRICE],
        from: null,
        to: null,
        dates: null,
        people: 1,
        seat: "일반석",
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
      if (filters.from && a.departureAirport !== filters.from) return false;
      if (filters.to && a.arrivalAirport !== filters.to) return false;
      return true;
    });
  },

  STEP,
}));

export default useAirportStore;
