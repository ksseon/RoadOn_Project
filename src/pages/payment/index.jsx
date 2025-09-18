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
