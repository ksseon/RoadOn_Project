import Profile from '../../components/myPage/profile';
import Reserve from '../../components/myPage/reserve';
import Reward from '../../components/myPage/reward';
import WishList from '../../components/myPage/wishList';
import './style.scss';

const MyPage = () => {
    return (
        <section id="myPage">
            <div className="inner">
                <Profile />
                {/* <Reserve /> */}
                {/* <WishList /> */}
                <Reward />
            </div>
        </section>
    );
};

export default MyPage;
