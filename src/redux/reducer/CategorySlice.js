import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return { ...state, categories: action.payload };
    },
  },
});

export const { setCategories } = CategorySlice.actions;

const selectCategoryReducer = (state) => state.category;
const selectCategories = createSelector(
  [selectCategoryReducer],
  (CategorySlice) => CategorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
export default CategorySlice.reducer;
