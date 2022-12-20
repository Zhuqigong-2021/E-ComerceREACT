import React, { useContext } from 'react';
import {
  CartItemImageContainer,
  CheckoutItemstyle,
} from '../checkout-item/CheckoutItem.style';
// import { CartContext } from '../../context/CartContext';
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
  setCartItems,
  selectCartItems,
} from '../../redux/reducer/CartSlice';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItems, cartItem }) => {
  const dispatch = useDispatch();
  const { id, price, quantity, imageUrl, name } = cartItem;
  // const { addItemToCart, removeItemToCart, clearItemFromCart } =
  //   useContext(CartContext);

  const addItemHandler = () => {
    const updatevalue = addItemToCart(cartItems, cartItem);
    dispatch(setCartItems(updatevalue));
  };
  const removeItemHandler = () => {
    const updatevalue = removeItemToCart(cartItems, cartItem);
    dispatch(setCartItems(updatevalue));
  };

  const clearItemHandler = () => {
    const updatevalue = clearItemFromCart(cartItems, cartItem);
    dispatch(setCartItems(updatevalue));
  };

  // const addItemHandler = () => addItemToCart(cartItems, cartItem);
  // const removeItemHandler = () => removeItemToCart(cartItems, cartItem);

  // const clearItemHandler = () => clearItemFromCart(cartItems, cartItem);
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
