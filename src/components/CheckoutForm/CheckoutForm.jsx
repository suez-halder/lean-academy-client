import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CheckoutForm = ({ singleClass }) => {
    const navigate = useNavigate()
    const {user} = useAuth()
    // console.log(singleClass);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        // generate client secret and save in state
        if (singleClass?.price) {
            axiosSecure.post('/create-payment-intent', { price: singleClass?.price })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [singleClass, axiosSecure])
    

    const handleSubmit = async (event) => {
        
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            // console.log('[error]', confirmError);
            setCardError(confirmError.message)
        } else {
            // console.log('[paymentIntent]', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // save payment info in db
                const paymentInfo = {
                    ...singleClass,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                }
                axiosSecure.post('/selected', paymentInfo)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId) {
                                    const text = `Enrolled Successfully!, TransactionId: ${paymentIntent.id}`
                                    toast.success(text)
                                    navigate('/dashboard/enrolled-classes')
                                .catch(err => {
                                    console.log(err);
                                })
                        }
                    })
            }

        }

    };

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600 mt-4 text-center'>{cardError}</p>}
        </>

    );
};

export default CheckoutForm