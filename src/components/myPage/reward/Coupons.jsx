import React, { useMemo, useState } from 'react';
import DropdownPill from '../../ui/dropdownPill/DropdownPill';
import TabButton2 from '../../ui/tabButton/TabButton2';
import CouponTicket from '../../ui/coupon/CouponTicket';
import useCouponStore from '../../../store/couponStore';

const TABS = ['전체', '숙소', '투어'];

const Coupons = () => {
    // store
    const coupons = useCouponStore((state) => state.coupons) || [];

    // 탭/드롭다운 상태
    const [tab, setTab] = useState('전체');
    const [status, setStatus] = useState('사용가능'); // '사용가능' | '사용완료'
    const statusOptions = ['사용가능', '사용완료'];

    // 필터 함수: coupon.className 이 'c-hotel' / 'c-tour' 으로 들어온다고 가정
    const matchesTab = (coupon, currentTab) => {
        if (!coupon) return false;
        if (currentTab === '전체') return true;
        if (currentTab === '숙소') return String(coupon.className || '').includes('c-hotel');
        if (currentTab === '투어') return String(coupon.className || '').includes('c-tour');
        return true;
    };

    const matchesStatus = (coupon, currentStatus) => {
        // dropdown: '사용가능' -> disabled === false, '사용완료' -> disabled === true
        if (currentStatus === '전체') return true;
        if (currentStatus === '사용가능') return coupon.disabled === false;
        if (currentStatus === '사용완료') return coupon.disabled === true;
        return true;
    };

    // 최종 필터링 (useMemo로 성능 보완)
    const filteredCoupons = useMemo(() => {
        return coupons.filter((c) => matchesTab(c, tab) && matchesStatus(c, status));
    }, [coupons, tab, status]);

    return (
        <div className="coupons">
            <section className="coupons-head">
                <div className="tab-button-wrap2" role="tablist" aria-label="쿠폰 탭">
                    {TABS.map((label) => (
                        <TabButton2
                            key={label}
                            label={label}
                            isActive={tab === label}
                            onClick={() => setTab(label)}
                        />
                    ))}
                </div>

                <div className="dropdown-wrap">
                    <DropdownPill value={status} onChange={setStatus} options={statusOptions} />
                </div>
            </section>

            <section className="coupons-body">
                {filteredCoupons.length > 0 ? (
                    filteredCoupons.map((coupon, i) => (
                        <CouponTicket key={coupon.id ?? i} {...coupon} />
                    ))
                ) : (
                    <p className="empty">조건에 맞는 쿠폰이 없습니다.</p>
                )}
            </section>
        </div>
    );
};

export default Coupons;
