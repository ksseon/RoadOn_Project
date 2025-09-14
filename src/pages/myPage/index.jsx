import Profile from '../../components/myPage/profile';
import Reserve from '../../components/myPage/reserve';
import WishList from '../../components/myPage/wishList';
import './style.scss';

const MyPage = () => {
    return (
        <section id="myPage">
            <div className="inner">
                <Profile />
                <Reserve />
                <WishList />
            </div>
        </section>
    );
};

export default MyPage;
