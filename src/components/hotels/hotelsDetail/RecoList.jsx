import '../style.scss';

const RecoList = () => {
    return (
        <ul className="reco-list">
            <RecoBox />
            <RecoBox />
            <RecoBox />
            <RecoBox />
        </ul>
    );
};

// hotelListData에서 컴포넌트 네개 랜덤으로 가져오기

export default RecoList;
