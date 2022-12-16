import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../checkout-item/CheckoutItem';
import { CartHeader, CheckoutItemStyle, CheckoutStyle } from './Checkout.style';

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

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

      <span>Total:$ {totalPrice}</span>
    </CheckoutStyle>
  );
};

export default Checkout;
