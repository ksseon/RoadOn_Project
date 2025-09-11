const TourMainCon2 = () => {
    return (
        <section className="tour-main-con tour-main-con2">
            <div className="inner">
                <div className="btns-wrap">
                    <button className="button o">드라마</button>
                    <button className="button">영화</button>
                    <button className="button">예능</button>
                    <button className="button">K-POP</button>
                </div>
                <article className="main-section-wrap">
                    <section className="title-section">
                        <div className="txt-box">
                            <strong>《윤식당 2》</strong>
                            <h3>스페인 테네리페 패키지</h3>
                            <p>“《윤식당 2》 속 스페인, 낭만의 섬 테네리페로”</p>
                        </div>
                        <div className="icons-wrap">
                            <div className="icon-box">
                                <b className="img-wrap">
                                    <img src="/images/icon/icon-calender.png" alt="calender" />
                                </b>
                                <p>3박5일</p>
                            </div>
                            <div className="icon-box">
                                <b className="img-wrap">
                                    <img src="/images/icon/icon-plane.png" alt="plane" />
                                </b>
                                <p> 대한한공</p>
                            </div>
                            <div className="icon-box">
                                <b className="img-wrap">
                                    <img src="/images/icon/icon-suitcase.png" alt="suitcase" />
                                </b>
                                <p>쇼핑 3회</p>
                            </div>
                            <div className="icon-box">
                                <b className="img-wrap">
                                    <img src="/images/icon/icon-dollar.png" alt="dollar" />
                                </b>
                                <p>
                                    가이드 경비 <br /> $60
                                </p>
                            </div>
                            <div className="icon-box">
                                <b className="img-wrap">
                                    <img src="/images/icon/icon-checklist.png" alt="checklist" />
                                </b>
                                <p>
                                    선택관광 <br /> 있음
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="img-section">
                        <div className="img-wrap">
                            <img src="/images/tour/main/con2_02.png" alt="con2_02" />
                        </div>
                    </section>
                </article>
                <div className="more-wrap">
                    <button className="button more o">자세히 보기</button>
                </div>
            </div>
        </section>
    );
};

export default TourMainCon2;
