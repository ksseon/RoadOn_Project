const ReserveItem = () => {
    return (
        <tr>
            <td data-label="예약일">25-09-03</td>
            <td data-label="예약코드">
                <strong>JKP140251013TWN</strong>
            </td>
            <td data-label="상품명">
                <div className="product-name ellipsis-2">
                    [초특별정] 규슈 4일 #가이드팁포함 #유유자적 온천관광소 #인기
                    NO.1히타/벳푸온천관광[초특별정] 규슈 4일 #가이드팁포함 #유유자적 온천관광소
                    #인기 NO.1히타/벳푸온천관광[초특별정] 규슈 4일 #가이드팁포함 #유유자적
                    온천관광소 #인기 NO.1히타/벳푸온천관광[초특별정] 규슈 4일 #가이드팁포함
                    #유유자적 온천관광소 #인기 NO.1히타/벳푸온천관광
                </div>
            </td>
            <td data-label="결제 금액">
                <b>999,900원</b>
            </td>
            <td data-label="인원">성인 2명, 아동 1명</td>
            <td data-label="출발/귀국">25-09-07 ~ 25-09-10</td>
            <td data-label="상태">
                <span className="status status--ready">출발 전</span>
            </td>
        </tr>
    );
};

export default ReserveItem;
