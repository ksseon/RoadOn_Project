import { useLocation } from 'react-router-dom';
import PaymentCptLeft from '../../../components/hotels/hotelsPayCompleted/PaymentCptLeft';
import PaymentCptRight from '../../../components/hotels/hotelsPayCompleted/PaymentCptRight';
import '../style.scss';

const hotelsPayCompleted = () => {
    const location = useLocation();
    const { hotel, selectedRoom } = location.state || {};

    if (!hotel || !selectedRoom) {
        return <div>예약 정보가 없습니다.</div>;
    }
    return (
        <main className="hotel-pay-completed">
            <div className="inner">
                <PaymentCptLeft hotel={hotel} selectedRoom={selectedRoom} />
                <PaymentCptRight hotel={hotel} selectedRoom={selectedRoom} />
            </div>
        </main>
    );
};

export default hotelsPayCompleted;
