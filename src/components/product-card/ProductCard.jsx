import React, { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';

import { ProductCardStyle, ProductInfo } from './ProductCard.style';
import {
  addItemToCart,
  selectCartItems,
  setCartItems,
} from '../../redux/reducer/CartSlice';
import { formatCurrency } from '../../utils/formatCurrentcy';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useEffect } from 'react';
// import { getIsFavoured, toggleFavoured } from '../../redux/reducer/FilterSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const { currentUser } = useSelector((state) => state.user);

  const [isLiked, setLiked] = useState(false);

  const addProductToCart = () => {
    if (!currentUser) return;
    dispatch(setCartItems(addItemToCart(cartItems, product)));
  };
  const toggleLike = () => {
    if (!currentUser) return;
    // updateFavourite(index, !isLiked);
    setLiked(!isLiked);
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
        style={{ objectFit: 'cover' }}
      />

      <ProductInfo>
        <span className="item">{name}</span>
        <span className="item price">{formatCurrency(price)}</span>
        <button className="favourite" onClick={toggleLike}>
          {isLiked ? (
            <BsHeartFill className="liked" />
          ) : (
            <BsHeart className="heart" />
          )}
        </button>
        <div className="bgtag">
          {/* <span className="priceBottom">{formatCurrency(price)}</span> */}
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
            className="cardbtn"
          >
            Add
          </Button>
        </div>
      </ProductInfo>
    </ProductCardStyle>
  );
};

export default ProductCard;
