import { useLocation } from 'react-router-dom';
import PaymentLayout from '../../components/payment/PaymentLayout';

const Payment = () => {
    const location = useLocation();
    const { productType, ...productData } = location.state || {};

    if (!productType || !productData) {
        return <div>결제 정보가 없습니다.</div>;
    }

    return <PaymentLayout productType={productType} productData={productData} />;
};

export default Payment;

// import { useLocation } from 'react-router-dom';
// import PaymentLeft from '../../components/payment/PaymentLeft';
// import PaymentRight from '../../components/payment/PaymentRight';
// import './style.scss';

// const Payment = () => {
//     const location = useLocation();
//     const { hotel, selectedRoom } = location.state || {};

//     if (!hotel || !selectedRoom) {
//         return <div>예약 정보가 없습니다.</div>;
//     }

//     return (
//         <main className="hotel-payment">
//             <div className="inner">
//                 <PaymentLeft hotel={hotel} selectedRoom={selectedRoom} />
//                 <PaymentRight hotel={hotel} selectedRoom={selectedRoom} />
//             </div>
//         </main>
//     );
// };

// export default hotelsPayment;
