// src/components/support/Support.jsx
import { useState } from 'react';
import TabButton from '../../ui/tabButton/TabButton';
import Faq from './Faq';
import Guide from './Guide';
import Notice from './Notice';
import './style.scss';

const Support = () => {
    const [activeTab, setActiveTab] = useState('notice'); // 'notice' | 'faq' | 'guide'

    return (
        <div id="support">
            <h2 className="mypage-title">고객센터</h2>

            <div className="tab-button-wrap" role="tablist" aria-label="고객센터 탭">
                <TabButton
                    label="공지사항"
                    isActive={activeTab === 'notice'}
                    onClick={() => setActiveTab('notice')}
                />
                <TabButton
                    label="자주찾는질문"
                    isActive={activeTab === 'faq'}
                    onClick={() => setActiveTab('faq')}
                />
                <TabButton
                    label="고객센터 안내"
                    isActive={activeTab === 'guide'}
                    onClick={() => setActiveTab('guide')}
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
