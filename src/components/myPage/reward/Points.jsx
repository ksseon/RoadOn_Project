// Points.jsx
import useCouponStore from '../../../store/couponStore';
import PointsItem from './PointsItem';

const Points = () => {
    const points = useCouponStore((s) => s.points);
    const { userName, items } = points;

    // balance = items 합계(적립 +, 사용 -)
    const balance = items.reduce((sum, it) => sum + (Number(it.amount) || 0), 0);

    return (
        <section className="points">
            <p className="points-info">
                <strong>{userName}</strong>님이 보유하고 있는 적립금은{' '}
                <em>{balance.toLocaleString()}P</em>입니다.
            </p>

            <div className="points-table-wrap">
                <table className="points-table">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>구분</th>
                            <th>금액</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 && (
                            <tr>
                                <td colSpan={4} className="empty">
                                    적립/사용 내역이 없습니다.
                                </td>
                            </tr>
                        )}
                        {items.map((row, i) => (
                            <PointsItem key={i} {...row} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Points;
