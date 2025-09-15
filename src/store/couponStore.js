// store/couponStore.js
import { create } from 'zustand';
import couponData from '../api/couponData';
import pointData from '../api/pointData';
import gradeData from '../api/gradeData';

const useCouponStore = create((set, get) => ({
    coupons: couponData,
    points: pointData, // { userName, balance?, items: [...] }  -> balance는 안 써도 됨
    grades: gradeData,

    // 아이템 추가/삭제만 관리
    addPointItem: (item) =>
        set((state) => ({
            points: { ...state.points, items: [item, ...state.points.items] },
        })),
    removePointItemAt: (idx) =>
        set((state) => {
            const items = state.points.items.slice();
            items.splice(idx, 1);
            return { points: { ...state.points, items } };
        }),
}));

export default useCouponStore;
