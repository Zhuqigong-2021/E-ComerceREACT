import React, { useEffect, useState } from 'react';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CartIconStyle } from './CartIcon.style';
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
  setIsCartOpen,
} from '../../redux/reducer/CartSlice';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  // const isCartOpen = useSelector((state) => selectIsCartOpen(state));
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const [bounce, setBounce] = useState(false);
  // const cartCount = useSelector((state) => selectCartCount(state));
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
