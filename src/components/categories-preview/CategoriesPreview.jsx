import React from 'react';
import { useContext, Fragment } from 'react';
// import { CategoriesContext } from '../../context/CategoriesContext';
import CategoryPreview from '../category-preview/CategoryPreview';
import { useSelector } from 'react-redux';
import { CardContainer } from './CategoriesPreviewstyle';
import { selectCategoriesMap } from '../../redux/reducer/CategorySlice';
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  //thunk:
  // const categories = useSelector((state) => selectCategoriesMap(state));
  // console.log(categories);
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
