// GradeColumn.jsx (수정)
import CouponTicket from '../../ui/coupon/CouponTicket';

const GradeColumn = ({
    code,
    name,
    condition,
    columnClass,
    accrualText,
    coupons = [],
    badgeImg,
}) => {
    return (
        <div className={`grade-col ${columnClass}`}>
            <header className="grade-col__header">
                <div className="grade-col__badge">
                    {badgeImg ? <img src={badgeImg} alt={name} /> : code}
                </div>
                <div className="grade-col__title">
                    <strong className="grade-col__name">{name}</strong>
                    <span className="grade-col__cond">
                        <em>{condition}</em>
                    </span>
                </div>
            </header>

            <div className="grade-col__coupons">
                {coupons.map((c) => (
                    <CouponTicket key={c.id} {...c} />
                ))}

                <div className="grade-col__accrual">
                    <span>{accrualText}</span>
                </div>
            </div>
        </div>
    );
};

export default GradeColumn;
