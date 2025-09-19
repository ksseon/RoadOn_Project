// src/components/myPage/reserveItem.jsx
import React from 'react';
import './style.scss';

// format helpers
const formatDateShort = (input) => {
    if (!input) return '';
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(input);
    if (m) {
        const yy = String(m[1]).slice(2);
        return `${yy}-${m[2]}-${m[3]}`;
    }
    const d = new Date(input);
    if (isNaN(d.getTime())) return String(input);
    const yy = String(d.getFullYear()).slice(2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yy}-${mm}-${dd}`;
};

const formatPrice = (v) => (v == null ? '-' : `${Number(v).toLocaleString()}원`);

// 상품명 아래에 출력하는 보조 정보(호텔/항공/패키지/투어 전용)
const renderProductSubInfo = (type, productData) => {
    if (!productData) return null;
    if (type === 'hotel') {
        const location = productData.location || productData.address || '';
        const roomInfo = productData.rooms
            ? productData.rooms
            : productData.roomType
            ? productData.roomType
            : '';
        return (
            <div className="product-subinfo">
                {location && <span className="sub-location">{location}</span>}
                {roomInfo && <span className="sub-room">{roomInfo}</span>}
            </div>
        );
    }
    if (type === 'flight') {
        const airline = productData.airline || productData.name || '';
        const flightNo = productData.flightNo ? ` ${productData.flightNo}` : '';
        const route =
            productData.departure && productData.arrival
                ? `${productData.departure} → ${productData.arrival}`
                : '';
        return (
            <div className="product-subinfo">
                <span className="sub-airline">{`${airline}${flightNo}`}</span>
                {route && <span className="sub-route">{route}</span>}
            </div>
        );
    }
    // package / tour
    const duration = productData.duration || productData.days || '';
    const subtitle = productData.subtitle || productData.desc || '';
    return (
        <div className="product-subinfo">
            {duration && <span className="sub-duration">{duration}</span>}
            {subtitle && <span className="sub-sub">{subtitle}</span>}
        </div>
    );
};

const ReserveItem = ({ data = null }) => {
    if (!data) {
        return (
            <tr>
                <td data-label="예약일">25-09-03</td>
                <td data-label="예약코드">
                    <strong>JKP140251013TWN</strong>
                </td>
                <td data-label="상품명">
                    <div className="product-name ellipsis-2">샘플 상품명</div>
                    <div className="product-subinfo">
                        <span className="sub-location">서울특별시</span>
                        <span className="sub-duration">2박 3일</span>
                    </div>
                </td>
                <td data-label="결제 금액">
                    <b>999,900원</b>
                </td>
                <td data-label="인원">성인 2명, 아동 1명</td>
                <td data-label="여행기간">25-09-07 ~ 25-09-10</td>
                <td data-label="상태">
                    <span className="status status--ready">출발 전</span>
                </td>
            </tr>
        );
    }

    const {
        reservationId,
        createdAt,
        totalAmount,
        guests = {},
        startDate,
        endDate,
        status,
        data: productData,
        type,
        isUsed,
    } = data;

    const typeKey = (type || '').toString().toLowerCase();

    // product name selection by type
    let productName = '';
    if (productData) {
        if (typeKey === 'hotel')
            productName = productData.name || productData.title || productData.hotelName || '';
        else if (typeKey === 'flight') {
            const airline = productData.airline || productData.name || '';
            const flightNo = productData.flightNo ? ` ${productData.flightNo}` : '';
            productName = `${airline}${flightNo}`.trim();
        } else if (typeKey === 'package' || typeKey === 'tour') {
            productName = productData.title || productData.name || productData.subtitle || '';
        }
    }
    if (!productName) productName = productData?.name || data?.id || '상품 정보 없음';

    // guest label
    const adult = guests.adult ?? 0;
    const child = guests.child ?? 0;
    const guestLabel = `성인 ${adult}명${typeof child === 'number' ? `, 아동 ${child}명` : ''}`;

    // status text/class
    const statusClass = isUsed
        ? 'status--used'
        : status === 'ready'
        ? 'status--ready'
        : status === 'completed'
        ? 'status--done'
        : status === 'cancelled'
        ? 'status--cancelled'
        : 'status--unknown';
    const statusText = isUsed
        ? '사용 완료'
        : status === 'ready'
        ? '출발 전'
        : status === 'completed'
        ? '완료'
        : status === 'cancelled'
        ? '취소'
        : '상태 없음';

    return (
        <tr>
            <td data-label="예약일">{formatDateShort(createdAt)}</td>
            <td data-label="예약코드">
                <strong>{reservationId ?? data.uid ?? '-'}</strong>
            </td>
            <td data-label="상품명">
                <div className="product-name ellipsis-2">
                    <strong className="product-title">{productName}</strong>
                    <span className="product-type-badge">{typeKey}</span>
                </div>
                {renderProductSubInfo(typeKey, productData)}
            </td>
            <td data-label="결제 금액">
                <b>{formatPrice(totalAmount)}</b>
            </td>
            <td data-label="인원">{guestLabel}</td>
            <td data-label="여행기간">
                {formatDateShort(startDate)}
                {startDate && endDate ? ` ~ ${formatDateShort(endDate)}` : ''}
            </td>
            <td data-label="상태">
                <span className={`status ${statusClass}`}>{statusText}</span>
            </td>
        </tr>
    );
};

export default ReserveItem;
