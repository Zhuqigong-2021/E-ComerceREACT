import React, { useContext, useState, useEffect, Fragment } from 'react';
// import { CategoriesContext } from '../../context/CategoriesContext';
import { CategoryContainer, CategoryTitle } from './Category.style';
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
  // const { categoriesMap } = useContext(CategoriesContext);
  // const { categoriesMap } = useSelector((state) => state.category);
  // console.log(categoriesMap);
  const categoriesMap = useSelector(selectCategoriesMap);
  // const categoriesMap = useSelector((state) => state.category.categories);
  const cartItems = useSelector((state) => selectCartItems(state));

  const [products, setProducts] = useState(categoriesMap[category]);

  // const status = useSelector(getCategoryStatus);
  // const error = useSelector(getCategoryError);
  // console.log(status);
  // console.log(categoriesMap);

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

  // if (status === 'loading') {
  //
  // } else if (status === 'succeeded') {
  //   content = (
  //     <CategoryContainer>
  //       {products &&
  //         products.map((product) => (
  //           <ProductCard
  //             key={product.id}
  //             product={product}
  //             cartItems={cartItems}
  //           />
  //         ))}
  //     </CategoryContainer>
  //   );
  // }
  // if (status === 'failed') {
  //   content = <p> {error} </p>;
  // }

  return (
    <Fragment>
      <CategoryTitle className="title">{category.toUpperCase()}</CategoryTitle>
      {content}
    </Fragment>
  );
};

export default Category;
