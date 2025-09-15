import './style.scss';

import TabButton from '../../ui/tabButton/TabButton';
import Points from './Points';
import Coupons from './Coupons';

const sample = [
    { date: '2025-09-04', type: '신규 가입자 혜택', amount: 3000, status: '적립' },
    { date: '2025-09-04', type: '결제', amount: -3000, status: '사용' },
];

const Reward = ({ userName = '홍길동', balance = 0, items = [] }) => {
    return (
        <div id="reward">
            <h2 className="mypage-title">할인 혜택</h2>

            <div className="tab-button-wrap">
                <TabButton label="쿠폰함" isActive={false} />
                <TabButton label="적립금" isActive={true} />
            </div>
            {/* <Points userName={userName} balance={balance} items={sample} /> */}
            <Coupons />
        </div>
    );
};

export default Reward;
