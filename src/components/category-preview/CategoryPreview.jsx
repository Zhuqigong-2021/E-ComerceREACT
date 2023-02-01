import React from 'react';
import ProductCard from '../product-card/ProductCard';
import { CategoryPreviewStyle } from './CategoryPreview.style';

const CategoryPreview = ({ products }) => {
  // const updateFavourite = (index, isFavoured) => {
  //   const updatedProducts = Array.from(products);
  //   console.log(updatedProducts);
  //   updatedProducts[index].isFavoured = isFavoured;
  //   setProducts(updatedProducts);
  // };
  return (
    <CategoryPreviewStyle>
      {/* <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2> */}
      <div className="preview">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            // index={index}
            // updateFavourite={updateFavourite}
          />
        ))}
        {/* {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
      </div>
    </CategoryPreviewStyle>
  );
};

export default CategoryPreview;
