// src/components/ui/wishButton/WishButton.jsx
import { useEffect, useMemo, useState } from 'react';
import useWishStore from '../../../store/wishStore';
import './style.scss'; // 필요하면 스타일 추가 (선택)

const WishButton = ({ type, id, data = null, className = '' }) => {
    // store에서 items와 (가능하면) 액션들을 받아옵니다.
    const items = useWishStore((s) => s.items) || [];
    const addItem = useWishStore((s) => s.addItem); // store에 없다면 undefined
    const removeItem = useWishStore((s) => s.removeItem); // store에 없다면 undefined

    // 현재 찜 여부 계산 (id, type 기준)
    const isWishedFromStore = useMemo(
        () => items.some((it) => String(it.id) === String(id) && it.type === type),
        [items, id, type]
    );

    // 로컬 상태는 store 변화에 따라 동기화
    const [wished, setWished] = useState(isWishedFromStore);
    useEffect(() => setWished(isWishedFromStore), [isWishedFromStore]);

    const handleToggle = (e) => {
        e?.stopPropagation?.(); // 카드 클릭 이벤트 등과 분리
        if (wished) {
            if (typeof removeItem === 'function') {
                // store의 removeItem API가 { id, type } 형태를 기대한다고 가정
                try {
                    removeItem({ id, type });
                } catch (err) {
                    console.warn('removeItem 호출 실패', err);
                }
            } else {
                console.warn('removeItem 함수가 없습니다. wishStore에 구현해 주세요.');
            }
            setWished(false);
        } else {
            if (typeof addItem === 'function') {
                try {
                    // addItem은 item 전체를 저장하도록 설계하는 것이 편합니다.
                    addItem({ id, type, data });
                } catch (err) {
                    console.warn('addItem 호출 실패', err);
                }
            } else {
                console.warn('addItem 함수가 없습니다. wishStore에 구현해 주세요.');
            }
            setWished(true);
        }
    };

    return (
        <button
            type="button"
            className={`wish-button ${wished ? 'is-wished' : ''} ${className}`}
            aria-pressed={wished}
            onClick={handleToggle}
            title={wished ? '찜 해제' : '찜하기'}
        >
            {/* 간단한 하트 아이콘(원하면 svg 교체) */}d{wished ? '♥' : '♡'}
        </button>
    );
};

export default WishButton;
