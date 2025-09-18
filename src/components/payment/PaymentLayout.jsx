import FlightPaymentLeft from './FlightPaymentLeft';
import FlightPaymentRight from './FlightPaymentRight';
import HotelPaymentLeft from './HotelPaymentLeft';
import HotelPaymentRight from './HotelPaymentRight';

const PaymentLayout = ({ productType, productData }) => {
    const renderPaymentContent = () => {
        switch (productType) {
            case 'hotel':
                return {
                    left: <HotelPaymentLeft {...productData} />,
                    right: <HotelPaymentRight {...productData} />,
                };
            case 'flight':
                return {
                    left: <FlightPaymentLeft {...productData} />,
                    right: <FlightPaymentRight {...productData} />,
                };
            case 'tour':
                return {
                    left: <TourPaymentLeft {...productData} />,
                    right: <TourPaymentRight {...productData} />,
                };
            default:
                return null;
        }
    };

    const content = renderPaymentContent();

    return (
        <main className="payment">
            <div className="inner">
                {content.left}
                {content.right}
            </div>
        </main>
    );
};

export default PaymentLayout;
