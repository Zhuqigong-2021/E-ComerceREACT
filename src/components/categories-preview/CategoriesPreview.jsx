import React, { useState } from 'react';

import CategoryPreview from '../category-preview/CategoryPreview';
import ProductCard from '../product-card/ProductCard';
import { useSelector } from 'react-redux';
import { CardContainer, ProductContainer } from './CategoriesPreviewstyle';
import { selectCategoriesMap } from '../../redux/reducer/CategorySlice';
import Filter from '../filter/Filter';
import { getFilter } from '../../redux/reducer/FilterSlice';
const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  // const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState({
  //   category: 'any',
  //   favourite: 'any',
  //   price: 'any',
  // });
  const filter = useSelector(getFilter);
  const orignalproducts =
    filter.category === 'any' ? categories : categories[filter.category];
  const whole = [...Object.values(orignalproducts).flatMap((num) => num)];
  let filteredProdo =
    filter.category === 'any' ? [...whole] : [...orignalproducts];

  let content;
  //category
  if (filter.category !== 'any') {
    if (filter.price !== 'any')
      filteredProdo = filteredProdo.filter(
        (product) => product.price <= Number(filter.price)
      );
    content = (
      <CategoryPreview
        key={filter.category}
        products={filteredProdo}
        title={filter.category}
        // setProducts={setProducts}
      />
    );
  }
  //isFavoured
  if (filter.isFavoured !== 'any') {
    filteredProdo = filteredProdo.filter(
      (product) =>
        product.isFavoured === (filter.isFavoured === 'favoured' ? true : false)
    );
    content = <CategoryPreview products={filteredProdo} />;
  }
  //price
  if (filter.price !== 'any') {
    if (filter.category === 'any')
      filteredProdo = filteredProdo.filter(
        (product) => product.price <= Number(filter.price)
      );

    content = <CategoryPreview products={filteredProdo} />;
  }
  if (
    filter.category === 'any' &&
    filter.isFavoured === 'any' &&
    filter.price === 'any'
  ) {
    content = (
      <CategoryPreview
        key={filter.category}
        products={filteredProdo}
        title={filter.category}
        // setProducts={setProducts}
      />
    );
  }
  return (
    <CardContainer>
      <div className="filter">
        <Filter />
      </div>
      <ProductContainer>
        {/* {filter.category === 'any'
          ? Object.keys(categories).map((title) => {
              const goods = categories[title].slice(0, 4);

              return (
                <CategoryPreview key={title} products={goods} title={title} />
              );
            })
          : content} */}
        {content}
      </ProductContainer>
    </CardContainer>
  );
};

export default CategoriesPreview;
