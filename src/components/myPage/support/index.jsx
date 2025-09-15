import TabButton from '../../ui/tabButton/TabButton';
import ReserveItem from '../reserve/reserveItem';
import Faq from './Faq';
import Guide from './Guide';
import Notice from './Notice';
import NoticeItem from './NoticeItem';
import './style.scss';

const Support = () => {
    return (
        <div id="support">
            <h2 className="mypage-title">고객센터</h2>{' '}
            <div className="tab-button-wrap">
                <TabButton label="공지사항" isActive={true} />
                <TabButton label="자주찾는질문" isActive={false} />
                <TabButton label="고객센터 안내" isActive={false} />
            </div>
            <div className="support-main-wrap">
                {/* <Notice /> */}
                {/* <Faq /> */}
                <Guide />
            </div>
        </div>
    );
};

export default Support;
