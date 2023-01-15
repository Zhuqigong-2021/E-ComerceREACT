import React, { useState, useContext, useEffect } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

import CartIcon from '../cart-icon/CartIcon';

import CartDropdown from '../cart-dropdown/CartDropdown';
import { NavbarContainer } from './Navbar.style.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { BsShopWindow } from 'react-icons/bs';
import { signOutStart } from '../../redux/reducer/UserSlice';
import { selectIsCartOpen } from '../../redux/reducer/CartSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const isCartOpen = useSelector((state) => selectIsCartOpen(state));

  const signOutUser = () => {
    dispatch(signOutStart());
  };

  return (
    <NavbarContainer>
      <Link to="/" className="logo" aria-label="Redirect you to the home page">
        <BsShopWindow className="lg" alt="shopping_logo" />
      </Link>

      <div className="nav__link">
        <Link to="/shop" className="nav__item">
          Shop
        </Link>

        {currentUser ? (
          <>
            <Link to="/" className="nav__item">
              <Button children="sign out" onClick={signOutUser} />
            </Link>
            <CartIcon className="nav__item" />
          </>
        ) : (
          <Link to="/signup" className="nav__item">
            <Button children="sign up" />
          </Link>
        )}
      </div>

      {currentUser && isCartOpen && <CartDropdown />}
    </NavbarContainer>
  );
};

export default Navbar;
