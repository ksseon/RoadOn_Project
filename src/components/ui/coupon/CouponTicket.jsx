import './style.scss';

const CouponTicket = ({
    label = '할인쿠폰',
    amount,
    condition,
    period,
    className = '',
    disabled = false,
    type,
}) => {
    return (
        <article className={`coupon-ticket ${className} ${disabled ? 'is-disabled' : ''}`}>
            <div className="coupon-ticket__left">
                <span className="coupon-ticket__label">{label}</span>
            </div>
            <div className="coupon-ticket__right">
                <p className="coupon-ticket__price">
                    <p className="coupon-ticket__price">
                        <strong>
                            {type === 'percent' ? `${amount}%` : `${amount.toLocaleString()}원`}
                        </strong>
                    </p>
                </p>
                <p className="coupon-ticket__cond">{condition}</p>
                <p className="coupon-ticket__date">{period}</p>
            </div>
        </article>
    );
};

export default CouponTicket;
