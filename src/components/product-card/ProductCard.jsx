import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';

import { ProductCardStyle, ProductInfo } from './ProductCard.style';
import {
  addItemToCart,
  selectCartItems,
  setCartItems,
} from '../../redux/reducer/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const { currentUser } = useSelector((state) => state.user);

  const addProductToCart = () => {
    if (!currentUser) return;
    dispatch(setCartItems(addItemToCart(cartItems, product)));
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
