import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { setCategories } from '../../redux/reducer/CategorySlice';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
