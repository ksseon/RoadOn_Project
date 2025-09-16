import useSupportStore from '../../../store/supportStore';
import NoticeItem from './NoticeItem';

const Notice = () => {
    const notices = useSupportStore((state) => state.notices);
    return (
        <div className="notice">
            <div className="support-notice-table-wrap">
                <table className="support-notice-table">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                    </colgroup>

                    <thead>
                        <tr>
                            <th scope="col">등록일</th>
                            <th scope="col">제목</th>
                            <th scope="col">조회수</th>
                        </tr>
                    </thead>

                    <tbody>
                        {notices.map((notice, i) => (
                            <NoticeItem key={notice.id} notice={notice} />
                        ))}

                        {/* <NoticeItem />
                        <NoticeItem /> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notice;
