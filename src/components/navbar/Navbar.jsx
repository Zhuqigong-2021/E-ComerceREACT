import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { signoutUser } from '../../utils/firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { NavbarContainer } from './Navbar.style.jsx';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  // const toggleCart = () => setIsCartOpen(!IsCartOpen);

  return (
    <>
      <NavbarContainer>
        <Link to="/" className="logo">
          LOGO
        </Link>

        <div className="nav__link">
          <Link to="/shop" className="nav__item">
            Shop
          </Link>

          <Link to="/upload" className="nav__item">
            Upload
          </Link>

          <Link to="/profile" className="nav__item">
            Profile
          </Link>

          {currentUser ? (
            <Link to="/" className="nav__item">
              <Button children="sign out" onClick={signoutUser} />
            </Link>
          ) : (
            <Link to="/signup" className="nav__item">
              <Button children="sign up" />
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
