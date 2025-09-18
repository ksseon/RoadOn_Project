import React, { useEffect, useState } from 'react';
import TabButton from '../../ui/tabButton/TabButton';
import Faq from './Faq';
import Guide from './Guide';
import Notice from './Notice';
import './style.scss';

const Support = ({ activeTab: controlledTab, defaultTab = 'notice', onTabChange = () => {} }) => {
    // controlledTab 존재하면 부모가 제어 -> 내부 상태는 controlledTab을 따름
    const [activeTab, setActiveTab] = useState(controlledTab ?? defaultTab);

    useEffect(() => {
        if (controlledTab !== undefined) {
            setActiveTab(controlledTab);
        }
    }, [controlledTab]);

    const handleTab = (tab) => {
        // 내부 상태 업데이트 + 부모 콜백(있는 경우)
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div id="support">
            <h2 className="mypage-title">고객센터</h2>

            <div className="tab-button-wrap" role="tablist" aria-label="고객센터 탭">
                <TabButton
                    label="공지사항"
                    isActive={activeTab === 'notice'}
                    onClick={() => handleTab('notice')}
                />
                <TabButton
                    label="자주하는질문"
                    isActive={activeTab === 'faq'}
                    onClick={() => handleTab('faq')}
                />
                <TabButton
                    label="고객센터 안내"
                    isActive={activeTab === 'guide'}
                    onClick={() => handleTab('guide')}
                />
            </div>

            <div className="support-main-wrap">
                {activeTab === 'notice' && <Notice />}
                {activeTab === 'faq' && <Faq />}
                {activeTab === 'guide' && <Guide />}
            </div>
        </div>
    );
};

export default Support;
