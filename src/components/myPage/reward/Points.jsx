import PointsItem from './PointsItem';

const Points = ({ userName, balance, items }) => {
    return (
        <section className="points">
            <p className="points-info">
                <strong>{userName}</strong>님이 보유하고 있는 적립금은 <em>{balance}P</em>
                입니다.
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
                            <th scope="col">날짜</th>
                            <th scope="col">구분</th>
                            <th scope="col">금액</th>
                            <th scope="col">상태</th>
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
                            <PointsItem
                                key={i}
                                date={row.date}
                                type={row.type}
                                amount={row.amount}
                                status={row.status}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Points;
