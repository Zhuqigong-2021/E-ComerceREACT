import React from 'react';

import CategoryPreview from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { CardContainer } from './CategoriesPreviewstyle';
import { selectCategoriesMap } from '../../redux/reducer/CategorySlice';
const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <CardContainer>
      {Object.keys(categories).map((title) => {
        const products = categories[title];

        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </CardContainer>
  );
};

export default CategoriesPreview;
