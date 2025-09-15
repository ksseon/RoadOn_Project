import { useState } from 'react';
import DropdownPill from '../../ui/dropdownPill/DropdownPill';
import TabButton2 from '../../ui/tabButton/TabButton2';
import CouponTicket from '../../ui/coupon/CouponTicket';
import useCouponStore from '../../../store/couponStore';

const Coupons = () => {
    // 탭 상태(전체/숙소/투어)

    const coupons = useCouponStore((state) => state.coupons);

    const [tab, setTab] = useState('전체');

    // 드롭다운 상태(사용가능/사용완료)
    const [status, setStatus] = useState('사용가능');
    const statusOptions = ['사용가능', '사용완료'];
    return (
        <div className="coupons">
            <section className="coupons-head">
                <div className="tab-button-wrap2">
                    <TabButton2 label="전체" isActive={true} />
                    <TabButton2 label="숙소" isActive={false} />
                    <TabButton2 label="투어" isActive={false} />
                </div>
                <div className="dropdown-wrap">
                    <DropdownPill
                        value={status} // ✅ 현재 선택값
                        onChange={setStatus} // ✅ 변경 핸들러
                        options={statusOptions} // ✅ 외부에서 옵션 주입
                    />
                </div>
            </section>
            <section className="coupons-body">
                {coupons.map((coupon, i) => (
                    <CouponTicket key={i} {...coupon} />
                ))}
            </section>
        </div>
    );
};

export default Coupons;
