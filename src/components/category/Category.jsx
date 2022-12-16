import React, { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { CategoryContainer, CategoryTitle } from './Category.style';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle className="title">{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
