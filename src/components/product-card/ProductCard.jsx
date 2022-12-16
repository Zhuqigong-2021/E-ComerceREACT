import React, { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { CartContext } from '../../context/CartContext';
import { ProductCardStyle, ProductInfo } from './ProductCard.style';
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardStyle>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <span>{name}</span>
        <span>{price}</span>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to card
        </Button>
      </ProductInfo>
    </ProductCardStyle>
  );
};

export default ProductCard;
