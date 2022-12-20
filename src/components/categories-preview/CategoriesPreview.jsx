import React from 'react';
import { useContext, Fragment } from 'react';
// import { CategoriesContext } from '../../context/CategoriesContext';
import CategoryPreview from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { CardContainer } from './CategoriesPreviewstyle';
import { selectCategoriesMap } from '../../redux/reducer/CategorySlice';
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categories = useSelector((state) => selectCategoriesMap(state));
  // console.log(categories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
