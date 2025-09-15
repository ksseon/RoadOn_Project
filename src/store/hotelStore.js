import { create } from 'zustand';
import hotelListData from '../api/hotelsListData';

const useHotelStore = create((set, get) => ({
    hotels: hotelListData,
    selectedHotel: null,

    getHotelById: (id) => {
        const { hotels } = get();
        return hotels.find((hotel) => hotel.id === id);
    },

    setSelectedHotel: (id) => {
        const hotel = get().getHotelById(id);
        set({ selectedHotel: hotel });
    },

    getAllHotels: () => get().hotels,
}));

export default useHotelStore;
