import React, { useState, useContext, useEffect } from 'react';
// import { UserContext } from '../../context/UserContext';
// import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
// import { signoutUser } from '../../utils/firebase';
import CartIcon from '../cart-icon/CartIcon';

import CartDropdown from '../cart-dropdown/CartDropdown';
import { NavbarContainer } from './Navbar.style.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { BsShopWindow } from 'react-icons/bs';
import { setCurrentUser, signOutStart } from '../../redux/reducer/UserSlice';
import { selectIsCartOpen } from '../../redux/reducer/CartSlice';
const Navbar = () => {
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector((state) => selectIsCartOpen(state));
  const navigate = useNavigate();
  const signOutUser = () => {
    dispatch(signOutStart());
  };
  // console.log(currentUser.displayName);
  // let user = currentUser ? currentUser.displayName : null;
  return (
    <>
      <NavbarContainer>
        <Link
          to="/"
          className="logo"
          aria-label="Redirect you to the home page"
        >
          <BsShopWindow className="lg" alt="shopping_logo" />
          {/* <h2> welcome {currentUser.displayName}</h2> */}
        </Link>

        <div className="nav__link">
          <Link to="/shop" className="nav__item">
            Shop
          </Link>

          {/* <Link to="/upload" className="nav__item">
            Upload
          </Link> */}

          {/* <Link to="/profile" className="nav__item">
            Profile
          </Link> */}

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
    </>
  );
};

export default Navbar;
