import '../style.scss';

const MapModal = () => {
    const { isMapModalOpen, closeMapModal } = useModalStore();
    if (!isMapModalOpen) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-btn" onClick={closeMapModal}>
                    &times; {/* 닫기 버튼 */}
                </button>
                <h2>지도 보기</h2>
                {/* 여기에 지도 컴포넌트 (예: React-Kakao-Maps-SDK, React-Naver-Maps)를 넣으세요 */}
                {/* 지도 컴포넌트를 직접 구현할 수도 있습니다. */}
            </div>
        </div>
    );
};

export default MapModal;
