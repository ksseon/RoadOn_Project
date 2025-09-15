import './style.scss';

const arr = [
    {
        id: 1,
        img: '/images/myPage/recom.png',
        title: '[스마트특급온천] \n 도야/삿포로/북해도 핵심 4일',
        des: '○숲속 온천호텔 1박으로 피로를 말끔히! 자연 속 온천 체험. ○삿포로 시내중심 호텔 2연박으로 최적의 위치 ',
        info: '3박 4일 · 전용 가이드 동행',
        price: '799,000원~ (1인 기준)',
    },
    {
        id: 2,
        img: '/images/myPage/recom.png',
        title: '[스마트특급온천] \n 도야/삿포로/북해도 핵심 4일',
        des: '○숲속 온천호텔 1박으로 피로를 말끔히! 자연 속 온천 체험. ○삿포로 시내중심 호텔 2연박으로 최적의 위치 ',
        info: '3박 4일 · 전용 가이드 동행',
        price: '799,000원~ (1인 기준)',
    },
    {
        id: 3,
        img: '/images/myPage/recom.png',
        title: '[스마트특급온천] \n 도야/삿포로/북해도 핵심 4일',
        des: '○숲속 온천호텔 1박으로 피로를 말끔히! 자연 속 온천 체험. ○삿포로 시내중심 호텔 2연박으로 최적의 위치 ',
        info: '3박 4일 · 전용 가이드 동행',
        price: '799,000원~ (1인 기준)',
    },
    {
        id: 4,
        img: '/images/myPage/recom.png',
        title: '[스마트특급온천] \n 도야/삿포로/북해도 핵심 4일',
        des: '○숲속 온천호텔 1박으로 피로를 말끔히! 자연 속 온천 체험. ○삿포로 시내중심 호텔 2연박으로 최적의 위치 ',
        info: '3박 4일 · 전용 가이드 동행',
        price: '799,000원~ (1인 기준)',
    },
];

const Recom = () => {
    return (
        <div id="recom">
            <h2 className="mypage-title">취향에 맞는 여행 추천</h2>
            <ul className="package-wrap">
                {arr.map((pack) => (
                    <li key={pack.id}>
                        <div className="img-wrap">
                            <img src={pack.img} alt={pack.title} />
                        </div>
                        <div className="txt-wrap">
                            <h2 className="title">{pack.title}</h2>
                            <strong className="des ellipsis-3">{pack.des}</strong>
                            <p className="info">{pack.info}</p>
                            <em className="price">{pack.price}</em>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recom;
