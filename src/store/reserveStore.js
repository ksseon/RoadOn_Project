// src/store/reserveStore.js
import { create } from 'zustand';

const RES_KEY = 'app:reservations_v1';

const loadRes = () => {
    try {
        const raw = localStorage.getItem(RES_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};
const saveRes = (items) => {
    try {
        localStorage.setItem(RES_KEY, JSON.stringify(items));
    } catch {}
};

const useReserveStore = create((set, get) => ({
    reservations: loadRes(),

    addReservation: (reservation) => {
        // reservation shape 예시:
        // { id: 'res-20250901-1', type: 'hotel'|'flight'|'package', itemId: 3, userId: 'u-1', status: 'confirmed', meta: {...} }
        const next = [...get().reservations, reservation];
        set({ reservations: next });
        saveRes(next);
    },

    removeReservation: (resId) => {
        const next = get().reservations.filter((r) => r.id !== resId);
        set({ reservations: next });
        saveRes(next);
    },

    updateReservation: (resId, patch) => {
        const next = get().reservations.map((r) => (r.id === resId ? { ...r, ...patch } : r));
        set({ reservations: next });
        saveRes(next);
    },

    clearReservations: () => {
        set({ reservations: [] });
        saveRes([]);
    },
}));

export default useReserveStore;
