import { create } from 'zustand';
import hotelListData from '../api/hotelsListData';
import hotelsReviewData from '../api/hotelsReviewData';

const useHotelStore = create((set, get) => ({
    hotels: hotelListData,
    selectedHotel: null,
    reviews: hotelsReviewData,

    getHotelById: (id) => {
        const { hotels } = get();
        return hotels.find((hotel) => hotel.id === id);
    },

    setSelectedHotel: (id) => {
        const hotel = get().getHotelById(id);
        set({ selectedHotel: hotel });
    },

    getAllHotels: () => get().hotels,

   getHotelReviews: (hotelId, reviewCount) => {
        const { reviews } = get();
        
        // 호텔 ID 기반 시드를 사용한 고정 랜덤
        const seededRandom = (seed) => {
            let x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };
        
        // 호텔 ID를 기반으로 한 고정된 순서로 섞기
        const shuffledReviews = [...reviews].sort((a, b) => {
            const seedA = seededRandom(hotelId * 100 + a.id);
            const seedB = seededRandom(hotelId * 100 + b.id);
            return seedA - seedB;
        });
        
        // 필요한 개수만큼 가져와서 호텔 정보 추가
        return shuffledReviews.slice(0, reviewCount).map((review, index) => ({
            ...review,
            hotelId: hotelId,
            uniqueId: `${hotelId}-${review.id}-${index}`
        }));
    },

}));

export default useHotelStore;
