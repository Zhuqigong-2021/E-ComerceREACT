import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
// import {
//   fetchCategory,
//   setCategories,
// } from '../../redux/reducer/CategorySlice';
// import { getCategoriesAndDocuments } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../../redux/saga/categorySaga';

import { fetchCategoryStart } from '../../redux/reducer/CategorySlice';

const Shop = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments();

  //     dispatch(setCategories(categoriesArray));
  //   };

  //   getCategoriesMap();
  // }, []);
  // const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(fetchCategoryStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
