import './style.scss';
import { FiMinus, FiPlus } from 'react-icons/fi';

const DetailSide = () => {
    return (
        <section className="detail-side">
            <div className="box-head">
                <div className="box-thum">
                    <img src="" alt="" />
                </div>
                <strong>스페인 테네리페 패키지</strong>
            </div>
            <div className="box-option">
                <div className="people people1">
                    <div className="peop-wrap">
                        <p className="type">아동</p>
                        <p className="price">231,270원</p>
                    </div>
                    <div className="step">
                        <button className="button minus">
                            <FiMinus />
                        </button>
                        <span>0</span>
                        <button className="button plus">
                            <FiPlus />
                        </button>
                    </div>
                </div>
                <div className="people people2">
                    <div className="peop-wrap">
                        <p className="type">성인</p>
                        <p className="price">231,270원</p>
                    </div>
                    <div className="step">
                        <button className="button minus">
                            <FiMinus />
                        </button>
                        <span>0</span>
                        <button className="button plus">
                            <FiPlus />
                        </button>
                    </div>
                </div>
                <div className="total-wrap">
                    <strong>총액</strong>
                    <em>462,540원</em>
                </div>
            </div>
            <div className="btn-wrap">
                <button className="button large o reserve">예약하기</button>
            </div>
        </section>
    );
};

export default DetailSide;
