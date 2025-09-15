import useCouponStore from '../../../store/couponStore';
import GradeColumn from './GradeColumn';
import './style.scss';
const Grade = () => {
    const grades = useCouponStore((state) => state.grades);
    return (
        <div className="mypage-grade">
            <div className="mypage-title-wrap">
                <h2 className="mypage-title">등급별 혜택</h2>
            </div>

            <section className="mypage-grade-main-wrap">
                {grades.map((g) => (
                    <GradeColumn key={g.code} {...g} />
                ))}
            </section>
        </div>
    );
};

export default Grade;
