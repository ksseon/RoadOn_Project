import Grade from '../../components/myPage/grade';
import Profile from '../../components/myPage/profile';
import Recom from '../../components/myPage/recom';
import Reserve from '../../components/myPage/reserve';
import Reward from '../../components/myPage/reward';
import Support from '../../components/myPage/support';
import WishList from '../../components/myPage/wishList';
import './style.scss';

const MyPage = () => {
    return (
        <section id="myPage">
            <div className="inner">
                <Profile />
                {/* <Reserve /> */}
                {/* <WishList /> */}
                {/* <Reward /> */}
                {/* <Grade /> */}
                {/* <Recom /> */}
                <Support />
            </div>
        </section>
    );
};

export default MyPage;
