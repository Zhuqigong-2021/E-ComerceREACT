import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconStyle } from './CartIcon.style';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconStyle>
      <ShoppingIcon onClick={() => setIsCartOpen(!isCartOpen)} />
      <span>{cartCount}</span>
    </CartIconStyle>
  );
};

export default CartIcon;
