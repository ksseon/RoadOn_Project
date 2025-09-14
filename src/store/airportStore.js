import { create } from "zustand";
import airportData from "../api/airportListData";

const useAirportStore = create((set, get) => ({
  airports: airportData,
  selectedairport: null,

  getAirportById: (id) => {
    const { airports } = get();
    return airports.find((airport) => airport.id === id);
  },

  setSelectedAirport: (id) => {
    const airports = get().getAirportById(id);
    set({ selectedAirport: airports });
  },

  getAllAirports: () => get().airports,
}));

export default useAirportStore;
