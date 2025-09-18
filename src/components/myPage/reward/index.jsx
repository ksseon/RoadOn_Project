import React, { useEffect, useState } from 'react';
import './style.scss';

import TabButton from '../../ui/tabButton/TabButton';
import Points from './Points';
import Coupons from './Coupons';

const Reward = ({ userName = '홍길동', balance = 0, items = [], defaultTab = 'coupons' }) => {
    const [activeTab, setActiveTab] = useState(defaultTab); // 'coupons' | 'points'

    // defaultTab prop이 바뀌면 반영
    useEffect(() => {
        setActiveTab(defaultTab);
    }, [defaultTab]);

    return (
        <div id="reward">
            <h2 className="mypage-title">할인 혜택</h2>

            <div className="tab-button-wrap" role="tablist" aria-label="할인 혜택 탭">
                <TabButton
                    label="쿠폰함"
                    isActive={activeTab === 'coupons'}
                    onClick={() => setActiveTab('coupons')}
                />
                <TabButton
                    label="적립금"
                    isActive={activeTab === 'points'}
                    onClick={() => setActiveTab('points')}
                />
            </div>

            <div className="reward-main">
                {activeTab === 'coupons' && <Coupons items={items} />}
                {activeTab === 'points' && <Points userName={userName} balance={balance} />}
            </div>
        </div>
    );
};

export default Reward;
