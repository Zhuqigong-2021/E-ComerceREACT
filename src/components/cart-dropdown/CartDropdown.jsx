import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import CartItem from '../cart-item/CartItem';
import {
  CartDropdownContainer,
  ItemContainer,
  Reminder,
} from './CartDropdown.style';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const GoToCheckoutHandler = () => {
    navigate('/checkout');
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

      {/* <GoToCheckout> */}
      <Button
        children={'GO TO CHECKOUT'}
        buttonType={BUTTON_TYPE_CLASSES.google}
        onClick={GoToCheckoutHandler}
      />
      {/* </GoToCheckout> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
