import OttGenre from '../../components/ottMain/OttGenre';
import OttHorizonList from '../../components/ottMain/OttHorizonList/OttHorizonList';

import OttMainVisual from '../../components/ottMain/OttMainVisual';
import './style.scss';
const OttMain = () => {
    return (
        <div>
            <OttMainVisual />
            <OttHorizonList />
            <OttGenre />
        </div>
    );
};

export default OttMain;
