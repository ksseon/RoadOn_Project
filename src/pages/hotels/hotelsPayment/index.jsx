import { useLocation } from 'react-router-dom';
import PaymentLeft from '../../../components/hotels/hotelsPayment/PaymentLeft';
import PaymentRight from '../../../components/hotels/hotelsPayment/PaymentRight';
import '../style.scss';

const hotelsPayment = () => {
    const location = useLocation();
    const { hotel, selectedRoom } = location.state || {};

    if (!hotel || !selectedRoom) {
        return <div>예약 정보가 없습니다.</div>;
    }

    return (
        <main className="hotel-payment">
            <div className="inner">
                <PaymentLeft hotel={hotel} selectedRoom={selectedRoom} />
                <PaymentRight hotel={hotel} selectedRoom={selectedRoom} />
            </div>
        </main>
    );
};

export default hotelsPayment;
