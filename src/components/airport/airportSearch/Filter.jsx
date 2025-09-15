import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import useAirportStore from '../../../store/airportStore';

const Filter = () => {
    const setFilter = useAirportStore((state) => state.setFilter);
    const resetFilter = useAirportStore((state) => state.resetFilter);

    return (
        <div className="filter-wrap">
            {/* 이벤트 슬라이드 생략 */}

            <div className="filter">
                {/* 경유 */}
                <div className="filtering type">
                    <div className="type-title">
                        <p>경유</p>
                        <div className="redo" onClick={resetFilter}>
                            <img
                                src="../../../../public/images/hotels/search/uim_redo.svg"
                                alt="초기화"
                            />
                            <span>초기화</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="direct"
                                onChange={(e) =>
                                    setFilter({ direct: e.target.checked ? true : null })
                                }
                            />
                            <label htmlFor="direct">
                                <strong>직항</strong>
                            </label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="transfer"
                                onChange={(e) =>
                                    setFilter({ direct: e.target.checked ? false : null })
                                }
                            />
                            <label htmlFor="transfer">
                                <strong>경유</strong>
                            </label>
                        </li>
                    </ul>
                </div>

                {/* 항공사 */}
                <div className="filtering star">
                    <p>항공사</p>
                    <ul>
                        {['전체', '대한항공', '에어서울', '진에어', '제주항공', '티웨이항공'].map(
                            (airline) => (
                                <li key={airline}>
                                    <button
                                        onClick={() =>
                                            setFilter({
                                                airline: airline === '전체' ? null : airline,
                                            })
                                        }
                                    >
                                        {airline}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* 무료 수화물 */}
                <div className="filtering discount">
                    <p>무료 수화물</p>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="baggage"
                                onChange={(e) =>
                                    setFilter({ baggage: e.target.checked ? '포함' : null })
                                }
                            />
                            <label htmlFor="baggage">
                                <strong>포함</strong>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Filter;
