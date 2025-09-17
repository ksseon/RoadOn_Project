// src/store/wishStore.js
import { create } from 'zustand';
import hotelsListData from '../api/hotelsListData';
import airportListData from '../api/airportListData';
import packagesData from '../api/packagesData';

const STORAGE_KEY = 'app:wishlist_v1';

// --- 개발용 샘플(시드) 데이터: 국내숙소, 해외숙소, 항공, 패키지, 투어 ---
const SAMPLE_ITEMS = [
    {
        uid: 'hotel-2',
        type: 'hotel',
        id: 2,
        data: {
            name: '세인트존스 호텔',
            location: '서울 중구',
            price: 310000,
            slug: 'saint-johns-hotel',
        },
    },
    {
        uid: 'hotel-16',
        type: 'hotel',
        id: 16,
        data: {
            name: '만다린 오리엔탈 방콕',
            location: '태국 방콕',
            price: 480000,
            slug: 'mandarin-oriental-bangkok',
        },
    },
    {
        uid: 'flight-3',
        type: 'flight',
        id: 3,
        data: {
            airline: '대한항공',
            flightNo: 'KE5182',
            departure: '김포',
            arrival: '창이(싱가포르)',
            price: 151468,
        },
    },
    {
        uid: 'package-hometown-chachacha-tour',
        type: 'package',
        id: 'hometown-chachacha-tour',
        data: {
            title: '갯마을 차차차 촬영지 성지순례 패키지',
            duration: '2박 3일',
            adult_fee: 390000,
        },
    },
    // 추가: tour 타입 예시
    {
        uid: 'tour-younskitchen2-tenerife',
        type: 'tour',
        id: 'younskitchen2-tenerife',
        data: {
            title: '윤식당 스페인 투어',
            subtitle: '스페인 가라치코 3박 4일',
            duration: '3박 4일',
            adult_fee: 490000,
            desc: "tvN 예능 '윤식당' 촬영지 투어 - 맛과 풍경을 함께 즐기는 여행",
            slug: 'younskitchen2-tenerife',
        },
    },
];

const loadFromStorage = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            // **개발용 시드 반환** — 운영 시에는 빈 배열([])로 바꾸세요.
            return SAMPLE_ITEMS.map((it) => {
                const uid = it.uid || `${it.type}-${it.id}`;
                return { ...it, uid };
            });
        }
        return JSON.parse(raw);
    } catch (e) {
        console.warn('wishStore load error', e);
        return SAMPLE_ITEMS;
    }
};

const saveToStorage = (items) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
        console.warn('wishStore save error', e);
    }
};

// helper: find functions (support id number or slug string)
const findHotel = (idOrSlug) => {
    if (idOrSlug == null) return null;
    const asNum = Number(idOrSlug);
    if (!Number.isNaN(asNum)) {
        const byId = hotelsListData.find((h) => Number(h.id) === asNum);
        if (byId) return byId;
    }
    return hotelsListData.find((h) => h.slug === idOrSlug || String(h.id) === String(idOrSlug));
};

const findFlight = (id) => {
    if (id == null) return null;
    const asNum = Number(id);
    if (!Number.isNaN(asNum)) {
        return airportListData.find((f) => Number(f.id) === asNum);
    }
    return airportListData.find((f) => f.slug === id || String(f.id) === String(id));
};

const findPackage = (idOrSlug) => {
    if (idOrSlug == null) return null;
    const asNum = Number(idOrSlug);
    if (!Number.isNaN(asNum)) {
        const byId = packagesData.find((p) => Number(p.id) === asNum);
        if (byId) return byId;
    }
    return packagesData.find((p) => p.slug === idOrSlug || String(p.id) === String(idOrSlug));
};

// hydrate: items -> itemsDetailed (data merged)
const hydrateItemsDetailed = (items) => {
    return items.map((it) => {
        const type = (it.type || '').toString().toLowerCase();
        let data = it.data ?? null;

        try {
            if (!data) {
                if (type === 'hotel') {
                    data = findHotel(it.id) || null;
                } else if (type === 'flight' || type === 'air' || type === 'airport') {
                    data = findFlight(it.id) || null;
                } else if (type === 'package' || type === 'tour') {
                    data = findPackage(it.id) || null;
                }
            }
        } catch (e) {
            console.warn('hydrateItemsDetailed error for item', it, e);
        }

        const uid = it.uid || `${type}-${it.id}`;
        return { ...it, uid, type, data };
    });
};

const useWishStore = create((set, get) => {
    // 초기 items 로드 (raw)
    const initialItems = loadFromStorage();
    // 초기 detailed 계산
    const initialItemsDetailed = hydrateItemsDetailed(initialItems);

    return {
        // persisted items
        items: initialItems,
        // hydrated convenience list
        itemsDetailed: initialItemsDetailed,

        // --- 추가: 원본 데이터 레퍼런스 (UI에서 바로 참조 가능하도록) ---
        hotels: hotelsListData,
        airports: airportListData,
        packages: packagesData,

        // --- 편의 조회 함수 (읽기 전용, 상태 변경 없음) ---
        getHotelById: (idOrSlug) => findHotel(idOrSlug),
        getAirportById: (id) => findFlight(id),
        getPackageById: (idOrSlug) => findPackage(idOrSlug),

        // actions
        add: (item) => {
            const type = (item.type || '').toString().toLowerCase();
            const id = item.id;
            const uid = item.uid || `${type}-${id}`;
            const exists = get().items.some(
                (it) => it.uid === uid || (it.type === type && String(it.id) === String(id))
            );
            if (exists) return;
            const next = [...get().items, { uid, type, id, data: item.data ?? null }];
            set({ items: next, itemsDetailed: hydrateItemsDetailed(next) });
            saveToStorage(next);
        },

        remove: (type, id) => {
            const t = (type || '').toString().toLowerCase();
            const uid = `${t}-${id}`;
            const next = get().items.filter(
                (it) => it.uid !== uid && !(it.type === t && String(it.id) === String(id))
            );
            set({ items: next, itemsDetailed: hydrateItemsDetailed(next) });
            saveToStorage(next);
        },

        toggle: (item) => {
            const type = (item.type || '').toString().toLowerCase();
            const id = item.id;
            const uid = item.uid || `${type}-${id}`;
            const exists = get().items.some(
                (it) => it.uid === uid || (it.type === type && String(it.id) === String(id))
            );
            if (exists) {
                const next = get().items.filter(
                    (it) => !(it.uid === uid || (it.type === type && String(it.id) === String(id)))
                );
                set({ items: next, itemsDetailed: hydrateItemsDetailed(next) });
                saveToStorage(next);
            } else {
                const next = [...get().items, { uid, type, id, data: item.data ?? null }];
                set({ items: next, itemsDetailed: hydrateItemsDetailed(next) });
                saveToStorage(next);
            }
        },

        isSaved: (type, id) => {
            const t = (type || '').toString().toLowerCase();
            return get().items.some(
                (it) => (it.type === t && String(it.id) === String(id)) || it.uid === `${t}-${id}`
            );
        },

        clearAll: () => {
            set({ items: [], itemsDetailed: [] });
            saveToStorage([]);
        },

        resetToSeed: () => {
            const seed = SAMPLE_ITEMS.map((it) => {
                const uid = it.uid || `${it.type}-${it.id}`;
                const type = (it.type || '').toString().toLowerCase();
                return { ...it, uid, type };
            });
            set({ items: seed, itemsDetailed: hydrateItemsDetailed(seed) });
            saveToStorage(seed);
        },

        // 수동으로 외부에서 hydrate/refresh 하고 싶을 때 호출 가능
        refreshDetailed: () => {
            const cur = get().items || [];
            set({ itemsDetailed: hydrateItemsDetailed(cur) });
        },
    };
});

export default useWishStore;
