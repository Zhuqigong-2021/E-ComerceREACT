import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../checkout-item/CheckoutItem';
import { CartHeader, CheckoutItemStyle, CheckoutStyle } from './Checkout.style';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutStyle>
      <CartHeader>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </CartHeader>
      <CheckoutItemStyle>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </CheckoutItemStyle>

      <span>Total:$ {cartTotal}</span>
    </CheckoutStyle>
  );
};

export default Checkout;
