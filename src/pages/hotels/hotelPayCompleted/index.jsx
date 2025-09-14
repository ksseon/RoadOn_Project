
import PaymentCptLeft from '../../../components/hotels/hotelsPayCompleted/PaymentCptLeft';
import PaymentCptRight from '../../../components/hotels/hotelsPayCompleted/PaymentCptRight';
import '../style.scss';

const hotelsPayCompleted = () => {
    return (
        <main className="hotel-pay-completed">
            <div className="inner">
                <PaymentCptLeft/>    
                <PaymentCptRight/>
            </div>           
        </main>
    );
};

export default hotelsPayCompleted;