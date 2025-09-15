import './style.scss';

import TabButton from '../../ui/tabButton/TabButton';
import Points from './Points';
import Coupons from './Coupons';

const Reward = ({ userName = '홍길동', balance = 0, items = [] }) => {
    return (
        <div id="reward">
            <h2 className="mypage-title">할인 혜택</h2>

            <div className="tab-button-wrap">
                <TabButton label="쿠폰함" isActive={false} />
                <TabButton label="적립금" isActive={true} />
            </div>
            {/* <Points /> */}
            <Coupons />
        </div>
    );
};

export default Reward;
