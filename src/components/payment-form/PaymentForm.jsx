import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentFormStyle, FormContainer, Success } from './PaymentForm.style';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/reducer/CartSlice';
import { selectCurrentUser } from '../../redux/reducer/UserSlice';
import { motion } from 'framer-motion';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const displayName = currentUser ? currentUser.displayName : 'Guest';
  const [isProcessingPayment, setProcessingPayment] = useState(false);
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName,
        },
      },
    });
    setProcessingPayment(false);
    if (paymentResult.error) {
      alert(JSON.stringify(paymentResult.error.message));
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
      }
    }
  };

  return (
    <PaymentFormStyle>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment </h2>
        <CardElement />

        <Button
          children={
            isPaymentSuccess ? (
              <Success>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 20 20"
                >
                  <motion.path
                    stroke="white"
                    strokeWidth="1"
                    initial={{
                      opacity: 0,

                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,

                      pathLength: 1,
                    }}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                  />
                  <motion.path
                    stroke="white"
                    strokeWidth="1"
                    initial={{
                      opacity: 0,

                      pathLength: 0,
                    }}
                    animate={{
                      opacity: 1,

                      pathLength: 1,
                    }}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                  />
                </svg>
                &nbsp; Payment success
              </Success>
            ) : (
              'Pay now'
            )
          }
          style={{
            backgroundColor: isPaymentSuccess ? '#059669' : 'black',
            transition: 'all 1s linear',
          }}
          className="btnpayment"
          isLoading={isProcessingPayment}
          disabled={isPaymentSuccess}
          buttonType={BUTTON_TYPE_CLASSES.google}
          type="submit"
        />
      </FormContainer>
    </PaymentFormStyle>
  );
};

export default PaymentForm;
