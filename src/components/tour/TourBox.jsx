// src/components/tour/TourBox.jsx
import rawPackages from '../../api/packagesData'; // 원래 경로 유지. 필요하면 경로만 바꿔주세요.
import './style.scss';
import { useNavigate } from 'react-router-dom';

const packagesData = Array.isArray(rawPackages)
    ? rawPackages
    : // some bundlers export module as { default: [...] }
    Array.isArray(rawPackages?.default)
    ? rawPackages.default
    : [];

// TourBox: packageId가 slug(문자열) 또는 id(숫자/문자)일 수 있음.
// itemData가 넘어오면 그것을 우선 사용.
const TourBox = ({ packageId, itemData }) => {
    const navigate = useNavigate();

    const tour =
        itemData ??
        (packageId &&
            packagesData.find((p) => {
                if (!p) return false;
                return p.slug === packageId || String(p.id) === String(packageId);
            }));

    if (!tour) {
        return <div className="tour-box-empty">투어 정보를 찾을 수 없습니다.</div>;
    }

    const price = tour.adult_fee ?? tour.adultFee ?? tour.price ?? 0;
    const slug = tour.slug ?? packageId;

    return (
        <div
            className="hotel-box tour-box"
            onClick={() => slug && navigate(`/tours/${slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && slug) navigate(`/tours/${slug}`);
            }}
        >
            <div className="hotel-image">
                <img
                    src={tour.posterImg ?? tour.backgroundImg ?? '/images/tour/default.png'}
                    alt={tour.title ?? '투어'}
                />
                <span className="heart" />
            </div>

            <div className="hotel-info">
                <div className="info-top">
                    <div className="top-title">
                        <span>{tour.contents ?? '투어'}</span>
                        <h4>{tour.title}</h4>
                    </div>
                    <div className="rate">
                        <span>{tour.duration ?? tour.date ?? ''}</span>
                    </div>
                </div>

                <div className="info-bottom">
                    <div className="bottom-location">
                        <img src="/images/hotels/search/map_pin.svg" alt="" />
                        <span>{tour.city ?? tour.country ?? tour.date ?? ''}</span>
                    </div>

                    <div className="bottom-price">
                        <span>성인 1인</span>
                        <strong>{Number(price).toLocaleString()}원</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBox;
