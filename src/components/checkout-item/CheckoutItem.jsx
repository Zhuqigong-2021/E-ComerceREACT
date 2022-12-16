import React, { useContext } from 'react';
import {
  CartItemImageContainer,
  CheckoutItemstyle,
  DescriptionContainer,
} from '../checkout-item/CheckoutItem.style';
import { CartContext } from '../../context/CartContext';
const CheckoutItem = ({ cartItem }) => {
  const { id, price, quantity, imageUrl, name } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <CheckoutItemstyle>
      <CartItemImageContainer>
        <img src={imageUrl} alt={name} height="100%" width="100%" />
      </CartItemImageContainer>
      {/* <DescriptionContainer> */}
      <span> {name} </span>
      <div>
        <span onClick={removeItemHandler} className="arrow">
          &#10094;
        </span>
        <span className="value">&nbsp;&nbsp;{quantity}&nbsp;&nbsp;</span>
        <span onClick={addItemHandler} className="arrow">
          &#10095;
        </span>
      </div>

      <span>{price * quantity}</span>
      <span onClick={clearItemHandler}> &#10005;</span>
      {/* </DescriptionContainer> */}
    </CheckoutItemstyle>
  );
};

export default CheckoutItem;
