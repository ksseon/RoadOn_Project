const Guide = () => {
    return (
        <div className="guide">
            <section className="guide-main-wrap">
                <div className="guide-main-box guide-main-box1">
                    <div className="img-box">
                        <img src="/images/icon/phone.png" alt="phone.png" />
                    </div>
                    <div className="txt-box">
                        <h2>투어 전화 상담</h2>
                        <p>운영 시간 확인 및 전화 상담이 가능해요</p>
                    </div>
                </div>
                <div className="guide-main-box guide-main-box2">
                    <div className="img-box">
                        <img src="/images/icon/support.png" alt="support.png" />
                    </div>
                    <div className="txt-box">
                        <h2>1:1 문의하기</h2>
                        <p>자세한 상담이 가능해요</p>
                    </div>
                </div>
                <div className="guide-main-box guide-main-box3">
                    <div className="img-box">
                        <img src="/images/icon/notice.png" alt="notice.png" />
                    </div>
                    <div className="txt-box">
                        <h2>내 문의 내역보기</h2>
                        <p>문의한 내용을 확인해보세요</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guide;
