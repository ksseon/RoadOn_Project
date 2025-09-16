const PointsItem = ({ date, type, amount, status }) => {
    return (
        <tr>
            <td>{date}</td>
            <td>{type}</td>
            <td className={amount >= 0 ? 'plus' : 'minus'}>
                {amount >= 0 ? `+${amount}p` : `${amount}p`}
            </td>
            <td className="on">{status}</td>
        </tr>
    );
};

export default PointsItem;
