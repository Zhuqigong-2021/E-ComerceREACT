import React, { useState, useEffect, Fragment } from 'react';

import {
  CategoryContainer,
  CategoryTitle,
  CategoryPageStyle,
} from './Category.style';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import {
  isLoading,
  selectCategoriesMap,
} from '../../redux/reducer/CategorySlice';
import { selectCartItems } from '../../redux/reducer/CartSlice';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);

  const cartItems = useSelector((state) => selectCartItems(state));

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  let content;
  if (!isLoading) {
    content = <p>"Loading..."</p>;
  } else {
    content = (
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
            />
          ))}
      </CategoryContainer>
    );
  }

  return (
    <CategoryPageStyle>
      <CategoryTitle className="title">{category.toUpperCase()}</CategoryTitle>
      {content}
    </CategoryPageStyle>
  );
};

export default Category;
