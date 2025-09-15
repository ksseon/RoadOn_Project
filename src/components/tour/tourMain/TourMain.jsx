import './style.scss';
import TourMainCon1 from './TourMainCon1';
import TourMainCon2 from './TourMainCon2';
import TourMainCon3 from './TourMainCon3';

const TourMain = () => {
    return (
        <main id="TourMain">
            {/* 원하는 페이지에서 */}
            <TourMainCon1
                titleInitPx={250}
                titleInitColor="#ffb703"
                subInitPx={110} // p 초기 크기(px)
                subInitColor="#ffffff" // p 초기 색
                hold={1.4}
                speed={0.5}
            />

            <TourMainCon2 />
            <TourMainCon3 />
        </main>
    );
};

export default TourMain;
