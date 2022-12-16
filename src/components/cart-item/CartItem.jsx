import React from 'react';
import {
  CartItemstyle,
  ImageContainer,
  DescriptionDetail,
} from './CartItem.style';
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemstyle>
      <ImageContainer>
        <img src={imageUrl} alt={name} width="100%" />
      </ImageContainer>

      <DescriptionDetail>
        <span>{name}</span>
        <span>
          {quantity} * ${price}
        </span>
      </DescriptionDetail>
    </CartItemstyle>
  );
};

export default CartItem;
