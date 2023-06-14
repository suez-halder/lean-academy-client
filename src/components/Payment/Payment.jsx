import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`)


const Payment = () => {
    

    
    
    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutForm
                // singleClass={singleClass}
                />
            </Elements>
        </div>
    );
};

export default Payment;