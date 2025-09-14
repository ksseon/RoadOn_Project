import '../style.scss';
import { IoCardOutline } from "react-icons/io5";

const PaymentLeft = () => {
    return (
        <div className="pay payment-left">
            <div className="pay-detail">
                <h3><img src="/images/icon/before.svg" alt="이전" />예약 확인 및 결제</h3>
                <div className="pay-box-wrap">
                    <div className="pay-schedule">
                        <h4>예약 일정</h4>
                        <div className="check-in-out">
                            <div className="check-in">
                                <p>체크인</p>
                                <strong>{/*검색창 날짜*/}11.05(수) 15:00</strong>
                            </div>
                            <div className="nights">
                                <p>{/*검색창 날짜 - 박 수 계산 필요*/} 4박</p>
                            </div>
                            <div className="check-out">
                                <p>체크아웃</p>
                                <strong>{/*검색창 날짜*/}11.09(일) 12:00</strong>
                            </div>
                        </div>
                    </div>
                    <div className="pay-party">
                        <h4>예약 인원</h4>
                        <p>{/*props*/}성인 2명</p>
                    </div>
                    <div className="pay-resname">
                        <h4>예약자 정보</h4>
                        <p><span>{/*props*/}홍길동, </span><span>{/*props*/}abcd@gmail.com</span></p>
                        <p><span>{/*props*/}+82 01023457890</span></p>
                    </div>
                    <div className="pay-passport">
                        <h4>여권 영문 이름</h4>
                        <div className="eng-name">
                            <input type="text" placeholder='영문 이름' />
                            <input type="text" placeholder='영문 성'/>
                        </div>
                    </div>
                    <div className="pay-request">
                        <h4>요청사항</h4>
                        <textarea name="request" id="request" placeholder='요청사항을 입력해주세요 (최대 100자)' maxlength="100"></textarea>
                    </div>
                    <div className="pay-coupon">
                        <h4>쿠폰</h4>
                        <select id="coupon" name="select-coupon">
                            <option value="" disabled selected hidden>사용 가능한 쿠폰 <span>{/*props*/}1개</span></option>
                            <option value="apple">가능한 옵션</option>
                            <option value="banana">마이페이지의</option>
                            <option value="grape">쿠폰이랑 연결</option>
                        </select>

                    </div>
                    <div className="pay-point">
                        <h4>포인트</h4>
                        <p>RT 포인트 {/*props*/}<span>12,000</span>P</p>
                        <input type="number" />
                        <button>전액 사용</button>
                    </div>
                    <div className="pay-method">
                        <h4>결제수단</h4>
                        <ul className="payments">
                            <li><IoCardOutline /><span>신용/체크 카드</span></li>
                            <li><img src="/images/icon/tosspay.png" alt="토스페이" /></li>
                            <li><img src="/images/icon/naverpay.png" alt="네이버페이" /></li>
                            <li><img src="/images/icon/kakaopay.png" alt="카카오페이" /></li>
                        </ul>
                        <div className="card-types">
                            <h5>카드 종류</h5>
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="installment">
                            <h5>할부 선택</h5>
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="pay-default">
                            {/* 구현 어려우면 빼기... */}
                            <span></span> <p>이 결제수단을 다음에도 사용</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentLeft;