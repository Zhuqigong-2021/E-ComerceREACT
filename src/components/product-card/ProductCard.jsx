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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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

    const shoppingbag = document.querySelector('.shopping_bag');
    // const addToCart = document.querySelectorAll('.cardbtn');
    // shoppingbag.style.transform = 'translate(0px 5px)';
  };

  return (
    <ProductCardStyle>
      <LazyLoadImage
        effect="blur"
        src={imageUrl}
        alt={name}
        width="100%"
        height="100%"
        threshold={0.1}
        useIntersectionObserver={true}
        visibleByDefault={false}
      />
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
