import React, { useContext } from 'react';

import CheckoutItem from '../checkout-item/CheckoutItem';
import { CartHeader, CheckoutItemStyle, CheckoutStyle } from './Checkout.style';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/reducer/CartSlice';
import PaymentForm from '../payment-form/PaymentForm';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutStyle>
      <CartHeader className="noselect">
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </CartHeader>
      <CheckoutItemStyle>
        {cartItems.map((cartItem) => {
          return (
            <CheckoutItem
              key={cartItem.id}
              cartItems={cartItems}
              cartItem={cartItem}
            />
          );
        })}

        <div className="total">
          <span>Total:$ {cartTotal}</span>
        </div>
      </CheckoutItemStyle>
      <PaymentForm />
    </CheckoutStyle>
  );
};

export default Checkout;
