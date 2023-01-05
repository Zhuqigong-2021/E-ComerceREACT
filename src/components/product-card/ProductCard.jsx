import React, { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
// import { CartContext } from '../../context/CartContext';
import { ProductCardStyle, ProductInfo } from './ProductCard.style';
import {
  addItemToCart,
  selectCartItems,
  setCartItems,
} from '../../redux/reducer/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const { currentUser } = useSelector((state) => state.user);
  // const { addItemToCart } = useContext(CartContext);
  // const cartItems = dispatch((state) => setCartItems(state));
  // console.log(cartItems);
  // const addProductToCart = () => addItemToCart(cartItems, product);
  const addProductToCart = () => {
    if (!currentUser) return;
    dispatch(setCartItems(addItemToCart(cartItems, product)));
  };

  return (
    <ProductCardStyle>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <span>{name}</span>
        <span>{price}</span>
        <div className="bgtag">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
            className="cardbtn"
          >
            Add to card
          </Button>
        </div>
      </ProductInfo>
    </ProductCardStyle>
  );
};

export default ProductCard;
