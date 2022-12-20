import React, { useContext, useState, useEffect, Fragment } from 'react';
// import { CategoriesContext } from '../../context/CategoriesContext';
import { CategoryContainer, CategoryTitle } from './Category.style';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../redux/reducer/CategorySlice';
import { selectCartItems } from '../../redux/reducer/CartSlice';
const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  // const { categoriesMap } = useSelector((state) => state.category);
  // console.log(categoriesMap);
  const categoriesMap = useSelector((state) => selectCategoriesMap(state));
  const cartItems = useSelector((state) => selectCartItems(state));

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category]);
  return (
    <Fragment>
      <CategoryTitle className="title">{category.toUpperCase()}</CategoryTitle>
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
    </Fragment>
  );
};

export default Category;
