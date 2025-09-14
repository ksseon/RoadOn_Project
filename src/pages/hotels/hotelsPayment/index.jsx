import PaymentLeft from '../../../components/hotels/hotelsPayment/PaymentLeft';
import PaymentRight from '../../../components/hotels/hotelsPayment/PaymentRight';
import '../style.scss';

const hotelsPayment = () => {
    return (
        <main className="hotel-payment">
            <div className="inner">
                <PaymentLeft/>    
                <PaymentRight/>
            </div>           
        </main>
    );
};

export default hotelsPayment;