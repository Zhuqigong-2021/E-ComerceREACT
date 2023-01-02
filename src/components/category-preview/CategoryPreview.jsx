import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { CategoryPreviewStyle } from './CategoryPreview.style';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/reducer/CartSlice';

const CategoryPreview = ({ title, products }) => {
  // const cartItems = useSelector(selectCartItems);

  return (
    <CategoryPreviewStyle>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              // cartItems={cartItems}
            />
          ))}
      </div>
    </CategoryPreviewStyle>
  );
};

export default CategoryPreview;
