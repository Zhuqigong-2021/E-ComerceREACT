import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import CartItem from '../cart-item/CartItem';
import {
  CartDropdownContainer,
  ItemContainer,
  Reminder,
} from './CartDropdown.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, setIsCartOpen } from '../../redux/reducer/CartSlice';
const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItems(state));

  const navigate = useNavigate();
  const GoToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
  };
  return (
    <CartDropdownContainer>
      <ItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <Reminder>Add something to your Cart</Reminder>
        )}
      </ItemContainer>

      <Button
        children={'GO TO CHECKOUT'}
        buttonType={BUTTON_TYPE_CLASSES.google}
        onClick={GoToCheckoutHandler}
      />
    </CartDropdownContainer>
  );
};

export default CartDropdown;
