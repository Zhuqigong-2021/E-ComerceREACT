import React, { useEffect, useState } from 'react';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CartIconStyle } from './CartIcon.style';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
  setIsCartOpen,
} from '../../redux/reducer/CartSlice';

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    setBounce(!bounce);
  }, [cartCount]);

  return (
    <CartIconStyle className={bounce ? 'bounce' : 'bounce_again'}>
      <HiOutlineShoppingBag
        className="shopping_bag"
        onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
      />
      <span
        className="count"
        onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
      >
        {cartCount}
      </span>
    </CartIconStyle>
  );
};

export default CartIcon;
